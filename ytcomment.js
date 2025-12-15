module.exports = {
  name: 'ytcomment',
  aliases: [],
  description: "Executes ytcomment",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from, { text: '✅ تم تنفيذ الأمر ytcomment (واضح)'});
  }
};
