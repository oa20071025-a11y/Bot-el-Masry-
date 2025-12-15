module.exports = {
  name: 'circle',
  aliases: [],
  description: "Executes circle",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from, { text: '✅ تم تنفيذ الأمر circle (واضح)'});
  }
};
