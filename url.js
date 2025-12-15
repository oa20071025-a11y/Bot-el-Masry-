module.exports = {
  name: 'url',
  aliases: [],
  description: "Upload image to link",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:'🔗 Uploaded (placeholder)'});
  }
};
