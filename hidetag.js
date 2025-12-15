module.exports = {
  name: 'hidetag',
  aliases: [],
  description: "Hidden mention",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:'🔕 hidetag (feature placeholder)'});
  }
};
