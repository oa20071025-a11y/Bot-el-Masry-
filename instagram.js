module.exports = {
  name: 'instagram',
  aliases: [],
  description: "Download Instagram",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:'📸 instagram downloader placeholder'});
  }
};
