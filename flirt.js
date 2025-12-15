module.exports = {
  name: 'flirt',
  aliases: [],
  description: "Flirt",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:'😘 كلام غزل'});
  }
};
