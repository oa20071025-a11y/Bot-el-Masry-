module.exports = {
  name: 'warn',
  aliases: [],
  description: "Warn user",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:'⚠️ warn issued'});
  }
};
