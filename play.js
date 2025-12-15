module.exports = {
  name: 'play',
  aliases: [],
  description: "Play song",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:'🎧 Play (streaming not implemented)'});
  }
};
