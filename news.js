module.exports = {
  name: 'news',
  aliases: [],
  description: "Executes news",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from, { text: '✅ تم تنفيذ الأمر news (واضح)'});
  }
};
