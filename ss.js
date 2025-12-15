module.exports = {
  name: 'ss',
  aliases: [],
  description: "Screenshot from link",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:'📸 Screenshot placeholder'});
  }
};
