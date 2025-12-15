module.exports = {
  name: 'setgdesc',
  aliases: [],
  description: "Set group description",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:'📝 setgdesc (reply with new desc)'});
  }
};
