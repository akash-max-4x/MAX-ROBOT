module.exports = {
  config: {
    name: "p",
    version: "1.0",
    author: "BaYjid 👽",
    countDown: 5,
    role: 2,
    shortDescription: {
      vi: "",
      en: ""
    },
    longDescription: {
      vi: "",
      en: ""
    },
    category: "BaYjid"
  },

langs: {
    en: {
        invaildNumber: "%1 is not an invalid number",
        cancelSuccess: "Refused %1 thread!",
        approveSuccess: "𝐀𝐩𝐩𝐫𝐨𝐯𝐞𝐝 𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 %1 𝐭𝐡𝐫𝐞𝐚𝐝𝐬",

        cantGetPendingList: "Can't get the pending list!",
        returnListPending: "»「𝐏𝐄𝐍𝐃𝐈𝐍𝐆」«❮ 𝐓𝐡𝐞 𝐰𝐡𝐨𝐥𝐞 𝐧𝐮𝐦𝐛𝐞𝐫 𝐨𝐟 𝐭𝐡𝐫𝐞𝐚𝐝𝐬 𝐭𝐨 𝐚𝐩𝐩𝐫𝐨𝐯𝐞 𝐢𝐬: %1 𝐭𝐡𝐫𝐞𝐚𝐝 ❯-\n\n%2",
        returnListClean: "「𝐏𝐄𝐍𝐃𝐈𝐍𝐆」𝐓𝐡𝐞𝐫𝐞 𝐢𝐬 𝐧𝐨 𝐭𝐡𝐫𝐞𝐚𝐝 𝐢𝐧 𝐭𝐡𝐞 𝐩𝐞𝐧𝐝𝐢𝐧𝐠 𝐥𝐢𝐬𝐭"
    }
  },

onReply: async function({ api, event, Reply, getLang, commandName, prefix }) {
    if (String(event.senderID) !== String(Reply.author)) return;
    const { body, threadID, messageID } = event;
    var count = 0;

    if (isNaN(body) && body.indexOf("c") == 0 || body.indexOf("cancel") == 0) {
        const index = (body.slice(1, body.length)).split(/\s+/);
        for (const ArYanIndex of index) {
            console.log(ArYanIndex);
            if (isNaN(ArYanIndex) || ArYanIndex <= 0 || ArYanIndex > Reply.pending.length) return api.sendMessage(getLang("invaildNumber", ArYanIndex), threadID, messageID);
            api.removeUserFromGroup(api.getCurrentUserID(), Reply.pending[ArYanIndex - 1].threadID);
            count+=1;
        }
        return api.sendMessage(getLang("cancelSuccess", count), threadID, messageID);
    }
    else {
        const index = body.split(/\s+/);
        for (const ArYanIndex of index) {
            if (isNaN(ArYanIndex) || ArYanIndex <= 0 || ArYanIndex > Reply.pending.length) return api.sendMessage(getLang("invaildNumber", ArYanIndex), threadID, messageID);
            api.sendMessage(`successful add 

🪷𝐁𝐎𝐓 𝐎𝐰𝐧𝐞𝐫:  AKASH HASAN`, Reply.pending[ArYanIndex - 1].threadID);
            count+=1;
        }
        return api.sendMessage(getLang("approveSuccess", count), threadID, messageID);
    }
},

onStart: async function({ api, event, getLang, commandName }) {
  const { threadID, messageID } = event;

    var msg = "", index = 1;

    try {
    var spam = await api.getThreadList(100, null, ["OTHER"]) || [];
    var pending = await api.getThreadList(100, null, ["PENDING"]) || [];
  } catch (e) { return api.sendMessage(getLang("cantGetPendingList"), threadID, messageID) }

  const list = [...spam, ...pending].filter(group => group.isSubscribed && group.isGroup);

    for (const ArYan of list) msg += `${index++}/ ${ArYan.name}(${ArYan.threadID})\n`;

    if (list.length != 0) return api.sendMessage(getLang("returnListPending", list.length, msg), threadID, (err, info) => {
    global.GoatBot.onReply.set(info.messageID, {
            commandName,
            messageID: info.messageID,
            author: event.senderID,
            pending: list
        })
  }, messageID);
    else return api.sendMessage(getLang("returnListClean"), threadID, messageID);
}
};
