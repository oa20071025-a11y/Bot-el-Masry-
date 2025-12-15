module.exports = {
  name: 'goodnight',
  aliases: [],
  description: "Goodnight",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:'تصبح على خير 🌙'});
  }
};
