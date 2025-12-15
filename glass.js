module.exports = {
  name: 'glass',
  aliases: [],
  description: "Executes glass",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from, { text: '✅ تم تنفيذ الأمر glass (واضح)'});
  }
};
