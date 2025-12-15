module.exports = {
  name: 'tictactoe',
  aliases: [],
  description: "Play tic-tac-toe",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:'🎮 افتح الواجهة على الخادم للعبة TicTacToe'});
  }
};
