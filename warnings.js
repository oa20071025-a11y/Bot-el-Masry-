module.exports = {
  name: 'warnings',
  aliases: [],
  description: "Show warnings",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:'📋 No warnings system yet'});
  }
};
