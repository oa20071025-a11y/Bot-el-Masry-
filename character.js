module.exports = {
  name: 'character',
  aliases: [],
  description: "Executes character",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from, { text: '✅ تم تنفيذ الأمر character (واضح)'});
  }
};
