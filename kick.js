module.exports = {
  name: 'kick',
  aliases: [],
  description: "Kick user",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:'👢 kick (اختر reply)'});
  }
};
