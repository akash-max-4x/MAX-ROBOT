const axios = require("axios");
const path = require("path");
const fs = require("fs");
const baseApiUrl = async () => {
  const base = await axios.get(
    `https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`,
  );
  return base.data.api;
};

module.exports = {
  config: {
    name: "album",
    version: "1.0.0",
    role: 0,
    author: "Dipto", //Don't Change Author name.
    description: "Displays album options for selection.",
    category: "Media",
    countDown: 5,
    guide: {
      en: "{p}{n} or add [cartoon/photo/lofi/sad/islamic/funny/horny/anime]",
    },
  },

  onStart: async function ({ api, event, args }) {
    if (!args[0]) {
      {
        api.setMessageReaction("😘", event.messageID, (err) => {}, true);
      }
      const albumOptions = [
        "𝐅𝐔𝐍𝐍𝐘 𝐕𝐈𝐃𝐄𝐎",
        "𝐈𝐒𝐋𝐀𝐌𝐈𝐂 𝐕𝐈𝐃𝐄𝐎",
        "𝐒𝐀𝐃 𝐕𝐈𝐃𝐄𝐎",
        "𝐀𝐍𝐈𝐌𝐄 𝐕𝐈𝐃𝐄𝐎",
        "𝐂𝐀𝐑𝐓𝐎𝐎𝐍 𝐕𝐈𝐃𝐄𝐎",
        "𝐋𝐎𝐅𝐈 𝐕𝐈𝐃𝐄𝐎",
        "𝐇𝐎𝐑𝐍𝐘 𝐕𝐈𝐃𝐄𝐎",
        "𝐂𝐎𝐔𝐏𝐋𝐄 𝐕𝐈𝐃𝐄𝐎",
        "𝐅𝐋𝐎𝐖𝐄𝐑 𝐕𝐈𝐃𝐄𝐎",
        "𝐑𝐀𝐍𝐃𝐎𝐌 𝐏𝐇𝐎𝐓𝐎",
      ];
      const message =
        "𝐂𝐇𝐎𝐎𝐒𝐄 𝐀𝐍 𝐎𝐏𝐓𝐈𝐎𝐍\n" +
        "" +
        albumOptions
          .map((option, index) => `${index + 1}. ${option} 🐤`)
          .join("\n") +
        "";

      await api.sendMessage(
        message,
        event.threadID,
        (error, info) => {
          global.GoatBot.onReply.set(info.messageID, {
            commandName: this.config.name,
            type: "reply",
            messageID: info.messageID,
            author: event.senderID,
            link: albumOptions,
          });
        },
        event.messageID,
      );
    } else if (args[0] === "2") {
      {
        api.setMessageReaction("😘", event.messageID, (err) => {}, true);
      }
      const albumOptions = [
        "𝐀𝐄𝐒𝐓𝐇𝐄𝐓𝐈𝐂 𝐕𝐈𝐃𝐄𝐎",
        "𝐒𝐈𝐆𝐌𝐀 𝐑𝐔𝐋𝐄",
        "𝐋𝐘𝐑𝐈𝐂𝐒 𝐕𝐈𝐃𝐄𝐎",
        "𝐂𝐀𝐓 𝐕𝐈𝐃𝐄𝐎",
        "18+ 𝐕𝐈𝐃𝐄𝐎",
        "𝐅𝐑𝐄𝐄 𝐅𝐈𝐑 𝐕𝐈𝐃𝐄𝐎",
        "𝐅𝐎𝐎𝐓𝐁𝐀𝐋𝐋 𝐕𝐈𝐃𝐄𝐎",
        "𝐆𝐈𝐑𝐋 𝐕𝐈𝐃𝐄𝐎",
        "𝐅𝐑𝐈𝐄𝐍𝐃 𝐕𝐈𝐃𝐄𝐎",
      ];
      const message =
        "𝐂𝐇𝐎𝐎𝐒𝐄 𝐀𝐍 𝐎𝐏𝐓𝐈𝐎𝐍" +
        "" +
        albumOptions
          .map((option, index) => `${index + 11}. ${option} 🐤`)
          .join("\n") +
        "";

      await api.sendMessage(
        message,
        event.threadID,
        (error, info) => {
          global.GoatBot.onReply.set(info.messageID, {
            commandName: this.config.name,
            type: "reply",
            messageID: info.messageID,
            author: event.senderID,
            link: albumOptions,
          });
        },
        event.messageID,
      );
    }
    //------------Video Add--------------//
    const validCommands = [
      "cartoon",
      "photo",
      "lofi",
      "sad",
      "islamic",
      "funny",
      "horny",
      "anime",
      "love",
      "baby",
      "lyrics",
      "sigma",
      "photo",
      "aesthetic",
      "cat",
      "flower",
      "ff",
      "sex",
      "girl",
      "football",
      "friend",
    ];
    {
      api.setMessageReaction("👀", event.messageID, (err) => {}, true);
    }
    if (args[0] === "list") {
      try {
        const res = await axios.get(`${await baseApiUrl()}/album?list=dipto`);
        const data = res.data.data;
        const videoCount = data.match(/\d+/g).reduce((acc, num) => acc + parseInt(num), 0);
        api.sendMessage(
          `𝘁𝗼𝘁𝗮𝗹 𝘃𝗶𝗱𝗲𝗼 𝗰𝗼𝘂𝗻𝘁: ${videoCount}`,
          event.threadID,
          event.messageID,
        );
      } catch (error) {
        api.sendMessage(`${error}`, event.threadID, event.messageID);
      }
    }
    if (args[0] === "listAll" || args[0] === "listall") {
      try {
        const lRes = await axios.get(`${await baseApiUrl()}/album?list=dipto`);
        const data = lRes.data.data;
        const videoCount = data.match(/\d+/g).reduce((acc, num) => acc + parseInt(num), 0);
        api.sendMessage(
          `🖤𝐓𝐎𝐓𝐀𝐋 𝐕𝐈𝐃𝐄𝐎 𝐀𝐕𝐀𝐈𝐋𝐀𝐁𝐋𝐄 𝐈𝐍 𝐀𝐋𝐁𝐔𝐌🩵\n\n${data}\n\n𝐓𝐎𝐓𝐀𝐋 𝐕𝐈𝐃𝐄𝐎 𝐂𝐎𝐔𝐍𝐓: ${videoCount}`,
          event.threadID,
          event.messageID,
        );
      } catch (error) {
        api.sendMessage(`${error}`, event.threadID, event.messageID);
      }
    }
    const d1 = args[1] ? args[1].toLowerCase() : "";
    if (!d1 || !validCommands.includes(d1)) return;
    if (!event.messageReply || !event.messageReply.attachments) return;
    const attachment = event.messageReply.attachments[0].url;
    const URL = attachment;
    let query;
    switch (d1) {
      case "cartoon":
        query = "addVideo";
        break;
      case "photo":
        query = "addPhoto";
        break;
      case "lofi":
        query = "addLofi";
        break;
      case "sad":
        query = "addSad";
        break;
      case "funny":
        query = "addFunny";
        break;
      case "islamic":
        query = "addIslamic";
        break;
      case "horny":
        query = "addHorny";
        break;
      case "anime":
        query = "addAnime";
        break;
      case "love":
        query = "addLove";
        break;
      case "lyrics":
        query = "addLyrics";
        break;
      case "flower":
        query = "addBaby";
        break;
      case "photo":
        query = "addPhoto";
        break;
      case "sigma":
        query = "addSigma";
        break;
      case "aesthetic":
        query = "addAesthetic";
        break;
      case "cat":
        query = "addCat";
        break;
      case "ff":
        query = "addFf";
        break;
      case "sex":
        query = "addSex";
        break;
      case "football":
        query = "addFootball";
        break;
      case "girl":
        query = "addGirl";
        break;
      case "friend":
        query = "addFriend";
        break;
      default:
        break;
    }
    try {
      const response = await axios.get(
        `${await baseApiUrl()}/imgur?url=${encodeURIComponent(URL)}`,
      );
      let imgurLink = response.data.data;
      imgurLink = args.join(" ");
      const fileExtension = path.extname(imgurLink);
      let query2;
      if (
        fileExtension === ".jpg" ||
        fileExtension === ".jpeg" ||
        fileExtension === ".png"
      ) {
        query2 = "addPhoto";
      } else if (fileExtension === ".mp4") {
        query2 = query;
      } else {
        api.sendMessage(
          "Invalid file format.",
          event.threadID,
          event.messageID,
        );
        return;
      }
      const svRes = await axios.get(
        `${await baseApiUrl()}/album?add=${query2}&url=${imgurLink}`,
      );
      const data = svRes.data;
      //   console.log(data);
      api.sendMessage(
        `✅ | ${data.data}\n\n🔰 | ${data.data2}\n🔥 | URL: ${imgurLink}`,
        event.threadID,
        event.messageID,
      );
    } catch (error) {
      console.error("Error:", error);
      api.sendMessage(
        `Failed to convert image.\n${error}`,
        event.threadID,
        event.messageID,
      );
    }
  },
  onReply: async function ({ api, event, Reply }) {
    const admin = "100071539569680";
    api.unsendMessage(Reply.messageID);
    if (event.type == "message_reply") {
      const reply = parseInt(event.body);
      if (isNaN(reply)) {
        return api.sendMessage(
          "🔰 | 𝐏𝐥𝐞𝐚𝐬𝐞 𝐫𝐞𝐩𝐥𝐲 𝐰𝐢𝐭𝐡 𝐞𝐢𝐭𝐡𝐞𝐫 1 - 14",
          event.threadID,
          event.messageID,
        );
      }
      let query;
      let cp;
      if (reply === 1) {
        query = "funny";
        cp = "𝐍𝐀𝐖 𝐁𝐀𝐁𝐘 𝐅𝐔𝐍𝐍𝐘 𝐕𝐈𝐃𝐄𝐎<🤣";
      } else if (reply === 2) {
        query = "islamic";
        cp = "𝐍𝐀𝐖 𝐁𝐀𝐁𝐘 𝐈𝐒𝐋𝐀𝐌𝐈𝐂 𝐕𝐈𝐃𝐄𝐎<😇";
      } else if (reply === 3) {
        query = "sad";
        cp = "𝐍𝐀𝐖 𝐁𝐀𝐁𝐘 𝐒𝐀𝐃 𝐕𝐈𝐃𝐄𝐎<🥺";
      } else if (reply === 4) {
        query = "anime";
        cp = "𝐍𝐀𝐖 𝐁𝐀𝐁𝐘 𝐀𝐍𝐈𝐌𝐄 𝐕𝐈𝐃𝐄𝐎<😘";
      } else if (reply === 5) {
        query = "video";
        cp = "𝐍𝐀𝐖 𝐁𝐀𝐁𝐘 𝐂𝐀𝐑𝐓𝐎𝐎𝐍 𝐕𝐈𝐃𝐄𝐎<😇";
      } else if (reply === 6) {
        query = "lofi";
        cp = "𝐍𝐀𝐖 𝐁𝐀𝐁𝐘 𝐋𝐎𝐅𝐈 𝐕𝐈𝐃𝐄𝐎<😇";
      } else if (reply === 7 && event.senderID === admin) {
        query = "horny";
        cp = "𝐍𝐀𝐖 𝐁𝐀𝐁𝐘 𝐇𝐎𝐑𝐍𝐘 𝐕𝐈𝐃𝐄𝐎<🥵";
      } else if (reply === 8) {
        query = "love";
        cp = "𝐍𝐀𝐖 𝐁𝐀𝐁𝐘 𝐋𝐎𝐕𝐄 𝐕𝐈𝐃𝐄𝐎<😍";
      } else if (reply === 9) {
        query = "baby";
        cp = "𝐍𝐀𝐖 𝐁𝐀𝐁𝐘 𝐂𝐔𝐓𝐄 𝐁𝐀𝐁𝐘 𝐕𝐈𝐃𝐄𝐎<🧑‍🍼";
      } else if (reply === 10) {
        query = "photo";
        cp = "𝐍𝐀𝐖 𝐁𝐀𝐁𝐘 𝐑𝐀𝐍𝐃𝐎𝐌 𝐏𝐇𝐎𝐓𝐎<😙";
      } else if (reply === 11) {
        query = "aesthetic";
        cp = "𝐍𝐀𝐖 𝐁𝐀𝐁𝐘 𝐀𝐄𝐒𝐓𝐇𝐄𝐓𝐈𝐂 𝐕𝐈𝐃𝐄𝐎<😙";
      } else if (reply === 12) {
        query = "sigma";
        cp = "𝐍𝐀𝐖 𝐁𝐀𝐁𝐘 𝐒𝐈𝐆𝐌𝐀 𝐕𝐈𝐃𝐄𝐎<🐤";
      } else if (reply === 13) {
        query = "lyrics";
        cp = "𝐍𝐀𝐖 𝐁𝐀𝐁𝐘 𝐋𝐘𝐑𝐈𝐂𝐒 𝐕𝐈𝐃𝐄𝐎<🥰";
      } else if (reply === 14) {
        query = "cat";
        cp = "𝐍𝐀𝐖 𝐁𝐀𝐁𝐘 𝐂𝐀𝐓 𝐕𝐈𝐃𝐄𝐎<😙";
      } else if (reply === 15 && event.senderID === admin) {
        query = "sex";
        cp = "𝐍𝐀𝐖 𝐁𝐀𝐁𝐘 𝐒𝐄𝐗 𝐕𝐈𝐃𝐄𝐎<😙";
      } else if (reply === 16) {
        query = "ff";
        cp = "𝐍𝐀𝐖 𝐁𝐀𝐁𝐘 𝐅𝐅 𝐕𝐈𝐃𝐄𝐎<😙";
      } else if (reply === 17) {
        query = "football";
        cp = "𝐍𝐀𝐖 𝐁𝐀𝐁𝐘 𝐅𝐎𝐎𝐓𝐁𝐀𝐋𝐋 𝐕𝐈𝐃𝐄𝐎<😙";
      } else if (reply === 18) {
        query = "girl";
        cp = "𝐍𝐀𝐖 𝐁𝐀𝐁𝐘 𝐆𝐈𝐑𝐋 𝐕𝐈𝐃𝐄𝐎<😙";
      } else if (reply === 19) {
        query = "friend";
        cp = "𝐍𝐀𝐖 𝐁𝐀𝐁𝐘 𝐅𝐑𝐈𝐄𝐍𝐃 𝐕𝐈𝐃𝐄𝐎<😙";
      }
      try {
        const res = await axios.get(
          `${await baseApiUrl()}/album?type=${query}`,
        );
        const imgUrl = res.data.data;
        const ex = path.extname(imgUrl);
        const imgRes = await axios.get(imgUrl, { responseType: "arraybuffer" });
        const filename = __dirname + `/assets/dipto${ex}`;
        fs.writeFileSync(filename, Buffer.from(imgRes.data, "binary"));
        api.sendMessage(
          {
            body: `${cp}\n\n𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗨𝗿𝗹: ${imgUrl}`,
            attachment: fs.createReadStream(filename),
          },
          event.threadID,
          () => fs.unlinkSync(filename),
          event.messageID,
        );
      } catch (error) {
        api.sendMessage(
          "An error occurred while fetching the media.",
          event.threadID,
          event.messageID,
        );
      }
    }
  },
};
