module.exports = {
  name: 'insult',
  aliases: [],
  description: "Insult user",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:'🤬 سب خفيف (تم)'});
  }
};
