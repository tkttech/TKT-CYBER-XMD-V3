const { sleep } = require('../lib/functions');
const config = require('../config')
const { cmd, commands } = require('../command')




cmd({
    pattern: "leave",
    alias: ["left", "leftgc", "leavegc"],
    desc: "Leave the group",
    react: "🎉",
    category: "owner",
    filename: __filename
},
async (conn, mek, m, {
    from, quoted, body, isCmd, command, args, q, isGroup, senderNumber, reply
}) => {
    try {

        if (!isGroup) {
            return reply("This command can only be used in groups.");
        }
        

        const botOwner = conn.user.id.split(":")[0]; 
        if (senderNumber !== botOwner) {
            return reply("Only the bot owner can use this command.");
        }

        reply("Leaving group...");
        await sleep(1500);
        await conn.groupLeave(from);
        reply("Goodbye! 👋 𝚊𝚗𝚊 𝚑𝚘𝚛𝚘 𝚗𝚍𝚊𝚎𝚗𝚍𝚊 𝚜𝚊𝚛𝚊𝚒 𝚗𝚎𝚌𝚑𝚒 𝚐𝚛𝚘𝚞𝚙 𝚌𝚑𝚎𝚗𝚢𝚞 𝚌𝚑𝚊𝚔𝚊𝚖𝚊𝚖𝚊");
    } catch (e) {
        console.error(e);
        reply(`❌ Error: ${e}`);
    }
});

