module.exports = {
  name: 'simage',
  aliases: [],
  description: "Executes simage",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from, { text: '✅ تم تنفيذ الأمر simage (واضح)'});
  }
};
