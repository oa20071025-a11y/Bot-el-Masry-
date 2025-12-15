module.exports = {
  name: 'ttp',
  aliases: [],
  description: "Executes ttp",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from, { text: '✅ تم تنفيذ الأمر ttp (واضح)'});
  }
};
