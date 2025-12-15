module.exports = {
  name: 'antidelete',
  aliases: [],
  description: "Toggle antidelete",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from,{text:'🛡️ AntiDelete toggle (اِستخدم .antidelete on أو off)'});
  }
};
