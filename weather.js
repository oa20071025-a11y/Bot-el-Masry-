module.exports = {
  name: 'weather',
  aliases: [],
  description: "Executes weather",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from, { text: '✅ تم تنفيذ الأمر weather (واضح)'});
  }
};
