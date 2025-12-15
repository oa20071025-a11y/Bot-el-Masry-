module.exports = {
  name: 'passed',
  aliases: [],
  description: "Executes passed",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from, { text: '✅ تم تنفيذ الأمر passed (واضح)'});
  }
};
