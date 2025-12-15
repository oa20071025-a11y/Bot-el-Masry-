module.exports = {
  name: 'promote',
  aliases: [],
  description: "Promote user",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:'⬆️ promote (اختر reply على الرسالة)'});
  }
};
