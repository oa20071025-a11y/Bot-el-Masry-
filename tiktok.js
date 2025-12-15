module.exports = {
  name: 'tiktok',
  aliases: [],
  description: "Download TikTok",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:'✅ أمر tiktok جاهز (باستدعاء APIs)'});
  }
};
