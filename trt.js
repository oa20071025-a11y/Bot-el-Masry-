module.exports = {
  name: 'trt',
  aliases: [],
  description: "Executes trt",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from, { text: '✅ تم تنفيذ الأمر trt (واضح)'});
  }
};
