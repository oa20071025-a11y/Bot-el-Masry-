module.exports = {
  name: 'fact',
  aliases: [],
  description: "Fact",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:'حقيقة: العسل لا يفسد.'});
  }
};
