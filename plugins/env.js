const config = require('../config');
const { cmd } = require('../command');
const { runtime } = require('../lib/functions');
const os = require("os");
const path = require('path');
const axios = require('axios');
const fs = require('fs');

cmd({
    pattern: "env",
    desc: "menu the bot",
    category: "menu3",
    react: "⚡",
    filename: __filename
},
async (conn, mek, m, { from, sender, pushname, reply }) => {
    try {
        const dec = `╭━━━〔 *${config.BOT_NAME} Main Menu* 〕━━━╮
┃ ✨ *𝙾𝚆𝙽𝙴𝚁:* ${config.OWNER_NAME}
┃ ⚙️ *𝙼𝙾𝙳𝙴:* ${config.MODE}
┃ 📡 *𝙿𝙻𝙰𝚃𝙵𝙾𝚁𝙼:* 𝙷𝙴𝚁𝙾𝙺𝚄
┃ 🧠 *𝚃𝚈𝙿𝙴:* NodeJs (Multi Device)
┃ ⌨️ *𝙿𝚁𝙴𝙵𝙸𝚇:* ${config.PREFIX}
┃ 🧾 *𝚅𝙴𝚁𝚂𝙸𝙾𝙽:* 3.0.0 Beta
╰━━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━〔 *Menu* 〕━━┈⊷
‎┃☯︎╭─────────────·๏
‎┃☯︎┃• *admin-events*
‎┃☯︎┃• *welcome*
‎┃☯︎┃• *setprefix*
‎┃☯︎┃• *mode*
‎┃☯︎┃• *auto_typing*
‎┃☯︎┃• *always_online*
‎┃☯︎┃• *auto_reacording*
‎┃☯︎┃• *status_view* 
‎┃☯︎┃• *status_react*
‎┃☯︎┃• *read_message*
‎┃☯︎┃• *auto_sticker*
‎┃☯︎┃• *anti_bad*
‎┃☯︎┃• *auto_reply*
‎┃☯︎┃• *auto_voice*
‎┃☯︎┃• *custom_reacts*
‎┃☯︎┃• *auto_react*
‎┃☯︎┃• *anti_link* 
‎┃☯︎┃• *status_reply*
‎┃☯︎└───────────┈⊷
‎╰──────────────┈⊷
> ${config.DESCRIPTION}
`;

        await conn.sendMessage(
            from,
            {
                image: { url: config.MENU_IMAGE_URL },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363418027651738@newsletter',
                        newsletterName: '𝚃𝙺𝚃-𝚃𝙴𝙲𝙷',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send local audio from assets/menu.m4a

const audioPath = path.join(__dirname, '../assets/menu.m4a');
await conn.sendMessage(from, {
    audio: fs.readFileSync(audioPath),
    mimetype: 'audio/mp4',
    ptt: true,
}, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`❌ Error:\n${e}`);
    }
});
