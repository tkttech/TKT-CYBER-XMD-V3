const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "TKT-CYBER~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0V3YkMwMWNaZ2NkeklOVUR6KytuMlNlUVd5NnEzV0hBU2F5aTd0dy8zbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYkFWN0trREl4czltUnpnNHJlZFplVUtGUUR4ZjI0NDFKS2xIUWRuSThGZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIySEcwenVQdUxXbTRKMVNhQ2tFN2QzbVRFRC9rRjN3UnZtR2lRTnF4Skc4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVOTA2aFE5MzVsOHoxNXBva0F2bHZOVTBBSUN0bU53OWZRWUlwQWhzbURVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlDUXJScjRXeXpOSW1CUVFtV3NjMzZ6UG1TMmtuaU8xODhWaisySzFqMFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZjOTRXQWV2UGNwajFyRnEwNytwWnpLSlRCMW1NdlFTcEU5Zm91Z3F3eWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUtjWFNHeENxMHpLVjN4VGEyQ2srZFJMbWRRQ1BsRWhLSFZRaGNxYXFFQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1JtUC8zK3lSd2ZpQVlUWGoweEJtbFRkbjdQcW1MRFEyR1hFNHJteVFFaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlM1aWFTZUtWa0ptSE44MzdJTFV4NUNRVkRLK2xYK1lzeDhkSkgrbWZ1VmZtVWFmNUR3Y3Q4eWRsZXVNZ0o5U2ZVZzE2cHJuTlFROW9DNEE5UWMrVWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUxLCJhZHZTZWNyZXRLZXkiOiJQdW8ya3YwSWROa1gwamZYa083TE5LRitWNG1QeVIvUitxSnNGSUlnUFBZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJGQjNSRVY0MSIsIm1lIjp7ImlkIjoiMjYzNzE4MDk1NTU1OjYyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkJPwnZCA8J2QhfCdkIDwnZCD8J2QmfCdkJbwnZCALfCdkJPwnZCK8J2QkyIsImxpZCI6Ijc0MzU1MDk0NTk3ODY4OjYyQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUDZxckkwQ0VNaVU4c2NHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicUl3YkJGZWkzaFVxZXhGeTlIS2s4dCtESkdVa2VRTXUvbWNpaXozcjFpcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoid3o5b1pCclI0djVBaUF5S0haZEZrNDM5ZFBCdFJwR2VBZXpGenJXelIwRHEzb05xSE9ieDVQN0I0L2U0L1ZGT0lJYnQyYmNNczZMWE9lU2ZJdTlFQVE9PSIsImRldmljZVNpZ25hdHVyZSI6IlBRQkZwOE9Dd281Z1ptQkRMK3M2SXJDNzc2M0FXUnJmajZ6WkxDbHZick9vQzk3MjhIbUF2aXpGR1Q2ejJ6MWRHakEvN1lRQkVFNDIrdVJ3Ym4zUGp3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzE4MDk1NTU1OjYyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFpTUd3UlhvdDRWS25zUmN2UnlwUExmZ3lSbEpIa0RMdjVuSW9zOTY5WXIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2MTM4MDk1MSwibGFzdFByb3BIYXNoIjoiM2dQVUprIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY TKT-CYBER-XMD-V3🇿🇼*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/d622xc.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "TKT-CYBER-XMD-V3",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "TKT-CYBER-TECH",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "263718095555",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𝐓𝐀𝐅𝐀𝐃𝐙𝐖𝐀-𝐓𝐊𝐓",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝐓𝐊𝐑-𝐓𝐄𝐂𝐇🇿🇼*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/d622xc.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*TKT-CYBER-XMD*🇿🇼",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "263718095555",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
