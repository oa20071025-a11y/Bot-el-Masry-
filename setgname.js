module.exports = {
  name: 'setgname',
  aliases: [],
  description: "Set group name",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:'✏️ setgname (reply with new name)'});
  }
};
