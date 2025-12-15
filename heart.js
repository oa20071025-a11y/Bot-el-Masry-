module.exports = {
  name: 'heart',
  aliases: [],
  description: "Executes heart",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from, { text: '✅ تم تنفيذ الأمر heart (واضح)'});
  }
};
