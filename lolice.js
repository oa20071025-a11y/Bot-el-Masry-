module.exports = {
  name: 'lolice',
  aliases: [],
  description: "Executes lolice",
  exec: async ({ sock, from, args, msg }) => {
    await sock.sendMessage(from, { text: '✅ تم تنفيذ الأمر lolice (واضح)'});
  }
};
