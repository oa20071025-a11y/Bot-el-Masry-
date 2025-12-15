module.exports = {
  name: 'lgbt',
  aliases: [],
  description: "Executes lgbt",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from, { text: '✅ تم تنفيذ الأمر lgbt (واضح)'});
  }
};
