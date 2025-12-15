module.exports = {
  name: 'menu',
  aliases: [],
  description: "Show menu",
  exec: async ({ sock, from, args, msg }) => {
    const text = `المنيو: اكتب .help للمزيد`;
    await sock.sendMessage(from, { text });
  }
};
