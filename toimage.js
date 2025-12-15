module.exports = {
  name: 'toimage',
  aliases: [],
  description: "Executes toimage",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from, { text: '✅ تم تنفيذ الأمر toimage (واضح)'});
  }
};
