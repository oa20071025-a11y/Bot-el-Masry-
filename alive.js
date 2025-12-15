module.exports = {
  name: 'alive',
  aliases: [],
  description: "Alive",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from, { text: '⚡ EL MASRY BOT — Online' });
  }
};
