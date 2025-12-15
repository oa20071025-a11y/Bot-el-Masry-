module.exports = {
  name: 'gpt',
  aliases: [],
  description: "Ask GPT",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:'🤖 أمر GPT غير مفعّل هنا. ضع OPENAI_API_KEY لتشغيله.'});
  }
};
