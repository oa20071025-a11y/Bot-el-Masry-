module.exports = {
  name: 'joke',
  aliases: [],
  description: "Joke (duplicate safe)",
  exec: async ({ sock, from, args, msg }) => {
    const arr = ['مرة واحد...', 'مرة اثنين...']; await sock.sendMessage(from,{text:arr[Math.floor(Math.random()*arr.length)]});
  }
};
