module.exports = {
  name: 'gay',
  aliases: [],
  description: "Executes gay",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from, { text: '✅ تم تنفيذ الأمر gay (واضح)'});
  }
};
