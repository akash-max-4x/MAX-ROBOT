module.exports = {
 config: {
	 name: "joy",
	 version: "1.0",
	 author: "AceGun",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "akash") {
 return message.reply({
 body: "আকাশ বস তোমাকে ডাকে....! \n @AKASH HASAN 🩷🪽",
 attachment: await global.utils.getStreamFromURL("")
 });
 }
 }
}
