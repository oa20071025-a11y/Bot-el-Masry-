module.exports = {
  name: 'togif',
  aliases: [],
  description: "Executes togif",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from, { text: '✅ تم تنفيذ الأمر togif (واضح)'});
  }
};
