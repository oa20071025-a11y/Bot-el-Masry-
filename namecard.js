module.exports = {
  name: 'namecard',
  aliases: [],
  description: "Namecard",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:'📇 Namecard placeholder'});
  }
};
