module.exports = {
  name: 'mute',
  aliases: [],
  description: "Mute user",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:'🔇 mute for minutes'});
  }
};
