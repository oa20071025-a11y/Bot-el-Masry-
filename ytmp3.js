module.exports = {
  name: 'ytmp3',
  aliases: [],
  description: "Download YT MP3",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:'✅ أمر ytmp3 يعمل لكن يحتاج تكامل لواجهة تنزيل'});
  }
};
