module.exports = {
  name: 'attp',
  aliases: [],
  description: "Executes attp",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from, { text: '✅ تم تنفيذ الأمر attp (واضح)'});
  }
};
