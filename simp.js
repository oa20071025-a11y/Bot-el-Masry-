module.exports = {
  name: 'simp',
  aliases: [],
  description: "Executes simp",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from, { text: '✅ تم تنفيذ الأمر simp (واضح)'});
  }
};
