module.exports = {
  name: 'crop',
  aliases: [],
  description: "Executes crop",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from, { text: '✅ تم تنفيذ الأمر crop (واضح)'});
  }
};
