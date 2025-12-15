module.exports = {
  name: 'facebook',
  aliases: [],
  description: "Download Facebook",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:'📘 facebook downloader placeholder'});
  }
};
