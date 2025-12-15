module.exports = {
  name: 'triggered',
  aliases: [],
  description: "Executes triggered",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from, { text: '✅ تم تنفيذ الأمر triggered (واضح)'});
  }
};
