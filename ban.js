module.exports = {
  name: 'ban',
  aliases: [],
  description: "Ban user",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:'🚫 تم تفعيل أمر ban (يتطلب تنفيذ مباشر في الجروب)'});
  }
};
