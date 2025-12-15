module.exports = {
  name: 'oogway',
  aliases: [],
  description: "Executes oogway",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from, { text: '✅ تم تنفيذ الأمر oogway (واضح)'});
  }
};
