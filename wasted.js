module.exports = {
  name: 'wasted',
  aliases: [],
  description: "Executes wasted",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from, { text: '✅ تم تنفيذ الأمر wasted (واضح)'});
  }
};
