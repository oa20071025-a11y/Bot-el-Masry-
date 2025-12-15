module.exports = {
  name: 'setgpp',
  aliases: [],
  description: "Set group profile pic",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:'🖼️ setgpp (reply to image)'});
  }
};
