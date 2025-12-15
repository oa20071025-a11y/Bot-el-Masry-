module.exports = {
  name: 'sticker',
  aliases: [],
  description: "Executes sticker",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from, { text: '✅ تم تنفيذ الأمر sticker (واضح)'});
  }
};
