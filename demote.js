module.exports = {
  name: 'demote',
  aliases: [],
  description: "Demote user",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:'⬇️ demote (اختر reply على الرسالة)'});
  }
};
