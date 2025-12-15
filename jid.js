module.exports = {
  name: 'jid',
  aliases: [],
  description: "Get jid",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:`Your jid: ${from}`});
  }
};
