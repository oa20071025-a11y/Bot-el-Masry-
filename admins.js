module.exports = {
  name: 'admins',
  aliases: [],
  description: "Show admins",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:'Admin list placeholder'});
  }
};
