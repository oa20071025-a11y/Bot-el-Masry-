module.exports = {
  name: 'stupid',
  aliases: [],
  description: "Executes stupid",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from, { text: '✅ تم تنفيذ الأمر stupid (واضح)'});
  }
};
