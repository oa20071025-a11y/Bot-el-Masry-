module.exports = {
  name: 'groupinfo',
  aliases: [],
  description: "Group info",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:'Group info placeholder'});
  }
};
