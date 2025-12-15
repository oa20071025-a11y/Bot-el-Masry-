module.exports = {
  name: 'ping',
  aliases: [],
  description: "Ping",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from, { text: 'Pong 🏓' });
  }
};
