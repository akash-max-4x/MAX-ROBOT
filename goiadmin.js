module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100000959749712") {
    var aid = ["100071539569680"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Mantion_দিস না আকাশ বস এর মন মন ভালো নেই আস্কে-!💔🥀", "আমার একটা প্রিয়র খুব দরকার কারন আমার চোখে পানি আসার আগে নাকে সর্দি চলে আসে🤣🤣"," বস কে মেনশন_দিলে চুম্মাইয়া ঠুটের কালার change কইরা,লামু 💋😾😾🔨","আকাশ বস এখন  বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰","আকাশ কে এতো মিনশন নাহ দিয়া সিংগেল আকাশ রে একটা গফ দে 😒 😏","বস আকাশকে Mantion_না দিয়ে সিরিয়াস প্রেম করতে চাইলে ইনবক্স","বস কে মেনশন দিসনা পারলে একটা গফ দে","Mantion_দিস না বস আকাশ প্রচুর বিজি 🥵🥀🤐","বস কে মেনশন দিও না বসের মন ভালো নেই 🤗"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
