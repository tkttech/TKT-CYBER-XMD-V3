const os = require('os');
const settings = require('../settings.js');

// Array of different fancy text styles for TKT-CYBER-XMD
const botNameStyles = [
    "𝚃𝙺𝚃-𝙲𝚈𝙱𝙴𝚁-𝚇𝙼𝙳",
    "Ⓣ🅚Ⓣ-🅒Ⓨ🅑Ⓔ🅡-Ⓧ🅜Ⓓ",
    "T҉K҉T҉-C҉Y҉B҉E҉R҉-X҉M҉D҉",
    "𝓉𝓀𝓉-𝒸𝓎𝒷𝑒𝓇-𝒳𝑀𝒟",
    "𝕋𝕂𝕋-ℂ𝕐𝔹𝔼ℝ-𝕏𝕄𝔻",
    "ᴛᴋᴛ-ᴄʏʙᴇʀ-xᴍᴅ",
    "TKT-CYBER-XMD",
    "T̥ͦK̥ͦT̥ͦ-C̥ͦY̥ͦB̥ͦE̥ͦR̥ͦ-X̥ͦM̥ͦD̥ͦ",
    "🆃🅺🆃-🅲🆈🅱🅴🆁-🆇🅼🅳",
    "𝙏𝙆𝙏-𝘾𝙔𝘽𝙀𝙍-𝙓𝙈𝘿"
];

// Track current style index
let currentStyleIndex = 0;

cmd({
    pattern: "ping",
    alias: ["speed","pong"],
    use: '.ping',
    desc: "Check bot's response time.",
    category: "main",
    react: "🌡️",
    filename: __filename
},
async (conn, mek, m, { from, quoted, sender, reply }) => {
    try {
        const start = new Date().getTime();

        const reactionEmojis = ['🔥', '⚡', '🚀', '💨', '🎯', '🎉', '🌟', '💥', '🕐', '🔹'];
        const textEmojis = ['💎', '🏆', '⚡️', '🚀', '🎶', '🌠', '🌀', '🔱', '🛡️', '✨'];

        const reactionEmoji = reactionEmojis[Math.floor(Math.random() * reactionEmojis.length)];
        let textEmoji = textEmojis[Math.floor(Math.random() * textEmojis.length)];

        // Ensure reaction and text emojis are different
        while (textEmoji === reactionEmoji) {
            textEmoji = textEmojis[Math.floor(Math.random() * textEmojis.length)];
        }

        // Send reaction using conn.sendMessage()
        await conn.sendMessage(from, {
            react: { text: textEmoji, key: mek.key }
        });

        const end = new Date().getTime();
        const responseTime = (end - start) / 1000;

        // Get current fancy bot name and rotate for next time
        const fancyBotName = botNameStyles[currentStyleIndex];
        currentStyleIndex = (currentStyleIndex + 1) % botNameStyles.length;

        const text = `> *${fancyBotName} SPEED: ${responseTime.toFixed(2)}ms ${reactionEmoji}*`;

        await conn.sendMessage(from, {
            text,
            contextInfo: {
                mentionedJid: [sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363418027651738@newsletter',
                    newsletterName: "𝙏𝙆𝙏-𝘾𝙔𝘽𝙀𝙍-𝙓𝙈𝘿",
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in ping command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});

// ping2 remains unchanged
cmd({
    pattern: "ping2",
    desc: "Check bot's response time.",
    category: "main",
    react: "🍂",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const startTime = Date.now()
        const message = await conn.sendMessage(from, { text: '*PINGING...*' })
        const endTime = Date.now()
        const ping = endTime - startTime
        await conn.sendMessage(from, { text: `*🔥 TKT-ᑕYᗷEᖇ-᙭ᗰᗪ SPEED : ${ping}ms*` }, { quoted: message })
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})

    seconds = seconds % (24 * 60 * 60);
    const hours = Math.floor(seconds / (60 * 
    
async function pingCommand(
module.exports = pingCommand;
