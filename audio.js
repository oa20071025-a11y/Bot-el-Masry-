module.exports = {
  name: 'audio',
  aliases: [],
  description: "Executes audio",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from, { text: '✅ تم تنفيذ الأمر audio (واضح)'});
  }
};
