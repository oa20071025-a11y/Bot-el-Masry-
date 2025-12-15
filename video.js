module.exports = {
  name: 'video',
  aliases: [],
  description: "Executes video",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from, { text: '✅ تم تنفيذ الأمر video (واضح)'});
  }
};
