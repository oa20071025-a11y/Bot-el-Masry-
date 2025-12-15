module.exports = {
  name: 'trivia',
  aliases: [],
  description: "Trivia question",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:'❓ Trivia placeholder'});
  }
};
