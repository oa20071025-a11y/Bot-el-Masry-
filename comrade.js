module.exports = {
  name: 'comrade',
  aliases: [],
  description: "Executes comrade",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from, { text: '✅ تم تنفيذ الأمر comrade (واضح)'});
  }
};
