module.exports = {
  name: 'roseday',
  aliases: [],
  description: "Executes roseday",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from, { text: '✅ تم تنفيذ الأمر roseday (واضح)'});
  }
};
