module.exports = {
  name: 'link',
  aliases: [],
  description: "Send WhatsApp link",
  exec: async ({ sock, from, args, msg }) => {
    let num = args && args.trim() ? args.trim() : process.env.EL_OWNER_PHONE || '201013815156';
    num = num.replace(/\D/g,'');
    if(!num) return await sock.sendMessage(from,{text:'❌ الرقم غير صالح'});
    await sock.sendMessage(from,{text:`🔗 رابط واتساب:\nhttps://wa.me/${num}`});
  }
};
