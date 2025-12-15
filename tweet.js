module.exports = {
  name: 'tweet',
  aliases: [],
  description: "Executes tweet",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from, { text: '✅ تم تنفيذ الأمر tweet (واضح)'});
  }
};
