module.exports = {
  name: 'horny',
  aliases: [],
  description: "Executes horny",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from, { text: '✅ تم تنفيذ الأمر horny (واضح)'});
  }
};
