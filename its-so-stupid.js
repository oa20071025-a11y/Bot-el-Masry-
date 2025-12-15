module.exports = {
  name: 'its-so-stupid',
  aliases: [],
  description: "Executes its-so-stupid",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from, { text: '✅ تم تنفيذ الأمر its-so-stupid (واضح)'});
  }
};
