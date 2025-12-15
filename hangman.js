module.exports = {
  name: 'hangman',
  aliases: [],
  description: "Hangman",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:'🪢 Hangman placeholder'});
  }
};
