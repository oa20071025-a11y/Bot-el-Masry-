module.exports = {
  name: 'guess',
  aliases: [],
  description: "Guess letter",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:'🔤 Guess placeholder'});
  }
};
