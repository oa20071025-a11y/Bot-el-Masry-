module.exports = {
  name: '8ball',
  aliases: [],
  description: "Magic 8 ball",
  exec: async ({ sock, from, args, msg }) => {
    const ans=['أيوه','لا','ممكن','مستبعد']; await sock.sendMessage(from,{text:ans[Math.floor(Math.random()*ans.length)]});
  }
};
