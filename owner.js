module.exports = {
  name: 'owner',
  aliases: [],
  description: "Owner info",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:'Owner: EL MASRY\nYT: The developer EL MASRY'});
  }
};
