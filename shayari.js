module.exports = {
  name: 'shayari',
  aliases: [],
  description: "Executes shayari",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from, { text: '✅ تم تنفيذ الأمر shayari (واضح)'});
  }
};
