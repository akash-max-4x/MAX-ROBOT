module.exports = {
	config: {
		name: "uptime",
		aliases: ["up,upt"],
		role: 0,
		shortDescription: {
			en: "Show server uptime",
			tl: "Ipakita ang uptime ng server",
		},
		longDescription: {
			en: "Shows the duration for which the server has been running",
			tl: "Ipapakita ang tagal na gumagana ang server",
		},
		category: "goatBot",
		guide: {
			en: "{p}uptime",
			tl: "{p}uptime",
		},
	},

	onStart: async function ({ api, message, threadsData }) {
		const os = require("os");
		const uptime = os.uptime();

		const days = Math.floor(uptime / (3600 * 24));
		const hours = Math.floor((uptime % (3600 * 24)) / 3600);
		const mins = Math.floor((uptime % 3600) / 60);
		const seconds = Math.floor(uptime % 60);

		const system = `OS: ${os.platform()} ${os.release()}`;
		const cores = `Cores: ${os.cpus().length}`;
		const arch = `Architecture: ${os.arch()}`;
		const totalMemory = `𝐓𝐨𝐭𝐚𝐥  𝐌𝐞𝐦𝐨𝐫𝐲: ${Math.round(os.totalmem() / (1024 * 1024 * 1024))} GB`;
		const freeMemory = `𝐅𝐫𝐞𝐞 𝐌𝐞𝐦𝐨𝐫𝐲: ${Math.round(os.freemem() / (1024 * 1024 * 1024))} GB`;
		const uptimeString = `𝐔𝐩𝐭𝐢𝐦𝐞: ${days} 𝐝𝐚𝐲𝐬, ${hours} 𝐡𝐨𝐮𝐫𝐬, ${mins} 𝐦𝐢𝐧𝐮𝐭𝐞𝐬, 𝐚𝐧𝐝 ${seconds} 𝐬𝐞𝐜𝐨𝐧𝐝𝐬 `;

		const response = `𒆕│🕒 ${uptimeString}\n📡 ${system}\n🛡 ${cores}\n⚔ 𝐍𝐨 𝐀𝐈 Status\n📈 𝐓𝐨𝐭𝐚𝐥 𝐔𝐬𝐞𝐫𝐬: ${threadsData.size}\n📉 𝐓𝐨𝐭𝐚𝐥 𝐓𝐡𝐫𝐞𝐚𝐝𝐬: ${threadsData.size}\n⚖ 𝐀𝐈 𝐔𝐬𝐚𝐠𝐞: 0.0\n📊 𝐑𝐀𝐌 𝐔𝐬𝐚𝐠𝐞: ${Math.round(process.memoryUsage().rss / (1024 * 1024))} 𝐌𝐁:-\n💰 𝐓𝐨𝐭𝐚𝐥(𝐑𝐀𝐌): ${Math.round(os.totalmem() / (1024 * 1024 * 1024))} 𝐆𝐁:-\n💸 𝐂𝐮𝐫𝐫𝐞𝐧𝐭(𝐑𝐀𝐌): ${Math.round(os.freemem() / (1024 * 1024 * 1024))} 𝐆𝐁:-\n🛫 𝐏𝐢𝐧𝐠: 15 ms\n🕰 Uptime(Seconds): ${Math.floor(process.uptime())}\nOWNER AKASH HASAN`;

		message.reply(response);
	},
};
