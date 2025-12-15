module.exports = {
  name: 'unmute',
  aliases: [],
  description: "Unmute user",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:'🔊 unmute'});
  }
};
