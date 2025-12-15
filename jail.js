module.exports = {
  name: 'jail',
  aliases: [],
  description: "Executes jail",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from, { text: '✅ تم تنفيذ الأمر jail (واضح)'});
  }
};
