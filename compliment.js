module.exports = {
  name: 'compliment',
  aliases: [],
  description: "Compliment user",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:'👏 أنت جميل'});
  }
};
