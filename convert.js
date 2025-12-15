module.exports = {
  name: 'convert',
  aliases: [],
  description: "Executes convert",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from, { text: '✅ تم تنفيذ الأمر convert (واضح)'});
  }
};
