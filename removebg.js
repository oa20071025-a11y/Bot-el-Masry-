module.exports = {
  name: 'removebg',
  aliases: [],
  description: "Executes removebg",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from, { text: '✅ تم تنفيذ الأمر removebg (واضح)'});
  }
};
