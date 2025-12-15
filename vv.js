module.exports = {
  name: 'vv',
  aliases: [],
  description: "Executes vv",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from, { text: '✅ تم تنفيذ الأمر vv (واضح)'});
  }
};
