module.exports = {
  name: 'fb',
  aliases: [],
  description: "Executes fb",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from, { text: '✅ تم تنفيذ الأمر fb (واضح)'});
  }
};
