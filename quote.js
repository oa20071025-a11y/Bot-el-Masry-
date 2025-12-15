module.exports = {
  name: 'quote',
  aliases: [],
  description: "Quote",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:'حكمة: لا تؤجل عمل اليوم إلى الغد.'});
  }
};
