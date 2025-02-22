const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
	config: {
		name: "info",
		version: "1.0",
		author: "NTKhang",
		countDown: 20,
		role: 0,
		shortDescription: { vi: "", en: "" },
		longDescription: { vi: "", en: "" },
		category: "owner",
		guide: { en: "" },
		envConfig: {}
	},
	onStart: async function ({ message }) {
		const authorName = "AKASH HASAN";
		const ownAge = "20+";
		const authorFB = "https://www.facebook.com/akash.black.hacker.bd";
		const authorNumber = "NOT FOUND";
		const urls = [
"https://i.postimg.cc/gc86JvyL/1727951160044.jpg",
];
		const link = urls[Math.floor(Math.random() * urls.length)];
		const now = moment().tz('Asia/Jakarta');
		const date = now.format('MMMM Do YYYY');
		const time = now.format('h:mm:ss A');
		const uptime = process.uptime();
		const seconds = Math.floor(uptime % 60);
		const minutes = Math.floor((uptime / 60) % 60);
		const hours = Math.floor((uptime / (60 * 60)) % 24);
		const days = Math.floor(uptime / (60 * 60 * 24));
		const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

		message.reply({
			body: `
\🤖𝐁𝐎𝐓 𝐍𝐀𝐌𝐄: ${global.GoatBot.config.nickNameBot}__⩸
\👾𝐁𝐎𝐓 𝐒𝐘𝐒𝐓𝐄𝐌 𝐏𝐑𝐄𝐅𝐈𝐗 : ${global.GoatBot.config.prefix}
\💙 𝐎𝐖𝐍𝐄𝐑 𝐍𝐀𝐌𝐄: ${authorName}
\📝𝐀𝐆𝐄  : ${ownAge}
\💕𝐑𝐄𝐋𝐀𝐓𝐈𝐎𝐍𝐒𝐇𝐈𝐏: ${Status}
\🌐𝐖𝐏 : ${authorNumber}
\🌍𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐋𝐈𝐍𝐊 : ${authorFB}
\🗓𝐃𝐀𝐓𝐄 : ${date}
\⏰𝐍𝐎𝐖 𝐓𝐈𝐌𝐄 : ${time}
\🔰𝐀𝐍𝐘 𝐇𝐄𝐋𝐏 𝐂𝐎𝐍𝐓𝐀𝐂𝐓 :⩸__${messenger}__⩸
\📛𝐁𝐎𝐓 𝐈'𝐒 𝐑𝐔𝐍𝐍𝐈𝐍𝐆 𝐅𝐎𝐑 : ${uptimeString}
\=`,
			attachment: await global.utils.getStreamFromURL(link)
		});
	},
	onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() === "info") {
			this.onStart({ message });
		}
	}
};
