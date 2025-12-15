module.exports = {
  name: 'tts',
  aliases: [],
  description: "Text to speech",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:'🔊 TTS غير مفعّل هنا'});
  }
};
