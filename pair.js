module.exports = {
  name: 'pair',
  aliases: [],
  description: "Show/generate pairing code",
  exec: async ({ sock, from, args, msg }) => {
    const fs = require('fs'); const path = require('path');
    const file = path.join(__dirname,'..','auth_info','creds.json');
    let creds = {};
    if(fs.existsSync(file)) try{creds=JSON.parse(fs.readFileSync(file))}catch(e){}
    let code = creds.pairingCode || null;
    if(!code){ code = Math.random().toString(36).slice(2,8).toUpperCase(); creds.pairingCode=code; fs.writeFileSync(file,JSON.stringify(creds,null,2)); }
    await sock.sendMessage(from,{text:`🔐 Pairing Code:\n${code}\nافتح WhatsApp -> Linked Devices -> Link with phone number ثم اكتب الكود`});
  }
};
