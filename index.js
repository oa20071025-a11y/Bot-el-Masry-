const fs = require('fs');
const path = require('path');
const qrcode = require('qrcode-terminal');
const { default: makeWASocket, useMultiFileAuthState, fetchLatestBaileysVersion, DisconnectReason } = require('@whiskeysockets/baileys');

const COMMAND = '.';

async function start() {
  const { state, saveCreds } = await useMultiFileAuthState('./auth_info_baileys');
  const { version } = await fetchLatestBaileysVersion();
  const sock = makeWASocket({
  version,
  printQRInTerminal: true,
  auth: state,
  browser: ['ElMasry-Full','Chrome','1.0']
});
  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('connection.update', ({ connection, qr, lastDisconnect }) => {
    if (qr) {
      console.log('\n=== Scan QR (WhatsApp -> Linked Devices -> Scan QR) ===\n');
      qrcode.generate(qr, { small: true });
    }
    if (connection === 'open') console.log('✅ Bot connected');
    if (connection === 'close') {
      console.log('❌ Connection closed, reason:', lastDisconnect?.error?.output?.statusCode);
      if (lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut) start();
    }
  });

  // load commands
  const commands = {};
  const commandsPath = path.join(__dirname, 'commands');
  fs.readdirSync(commandsPath).filter(f=>f.endsWith('.js')).forEach(file=>{
    try {
      const mod = require(path.join(commandsPath,file));
      if (mod && mod.name) commands[mod.name] = mod;
      // register aliases
      if (mod.aliases && Array.isArray(mod.aliases)) {
        mod.aliases.forEach(a => commands[a] = mod);
      }
    } catch (e) {
      console.error('failed load', file, e);
    }
  });
  console.log('Loaded commands:', Object.keys(commands).length);

  sock.ev.on('messages.upsert', async ({ messages }) => {
    try {
      const m = messages[0];
      if (!m.message || m.key.remoteJid === 'status@broadcast') return;
      const from = m.key.remoteJid;
      const body = m.message.conversation || m.message.extendedTextMessage?.text || '';
      if (!body.startsWith(COMMAND)) return;
      const parts = body.slice(COMMAND.length).trim().split(/\s+/);
      const name = parts.shift().toLowerCase();
      const args = parts.join(' ');
      const cmd = commands[name];
      if (!cmd) return await sock.sendMessage(from, { text: '❗ أمر غير معروف. اكتب .help' });
      try {
        await cmd.exec({ sock, from, args, msg: m });
      } catch (e) {
        console.error('command exec error', e);
        await sock.sendMessage(from, { text: '❌ حدث خطأ أثناء تنفيذ الأمر.' });
      }
    } catch (e) {
      console.error('messages.upsert error', e);
    }
  });
}

start().catch(e=>console.error(e));
