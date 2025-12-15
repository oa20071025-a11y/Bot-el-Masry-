module.exports = {
  name: 'tag',
  aliases: [],
  description: "Tag users",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:'@tag feature placeholder'});
  }
};
