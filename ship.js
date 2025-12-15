module.exports = {
  name: 'ship',
  aliases: [],
  description: "Ship users",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:'❤️ 50%'});
  }
};
