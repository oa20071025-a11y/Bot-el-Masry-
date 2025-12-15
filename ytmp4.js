module.exports = {
  name: 'ytmp4',
  aliases: [],
  description: "Download YT MP4",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:'✅ أمر ytmp4 يعمل لكن يحتاج تكامل لواجهة تنزيل'});
  }
};
