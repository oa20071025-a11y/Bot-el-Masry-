module.exports = {
  name: 'tagall',
  aliases: [],
  description: "Mention everyone",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:'@everyone (feature placeholder)'});
  }
};
