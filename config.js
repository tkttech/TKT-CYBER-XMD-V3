const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "TKT-CYBER~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU5LM1FUYlpJRzArRWZUTTI4Y003WTZtR2xJN3creHAwdlFKZ0hhVC9WUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVGJjSFlvWkc1Z1B4SlFGTTBocHJVcjdpM3JleWRLaHpJM25FblZRVThUZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhTUxkamhWK2VqaVQxMFlkMDVWd3JBZm82SDZ3RVY1NU1NK2wzNmtMazNrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqL3ltU3FZb3M0SVcybFhsZ2VKY25KNTdOT0NMVGxxZ1lXMm1SRjNVbEc0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNNV1ZhYVdSRnY4aDdTS2MwY1haSlV1TTlCMkJtYWU4NU1oZ2hqdkxKWHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imx4RkJ4ZG9Iek1VR2llL1J3MndmalIxdGhQOVcrOFRiemIxZVRFRlhmaW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ05uQUJQK3BKSzlCUFdqaWkxN1VpY1N2SVFHNGwrQStsVEhBOWwwTTVHTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVk5JWjYvU09BdE9pMFBwZ1RHVkJoZG51UjlDazhRQkVaWEYxUG54ZHB3dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InIvMnoyMWlBTFZ1UEp3S3llUUZCb0VsbWN1R0RDM1hZNmg0WVhta24zT1d1dmxxRGJlNWdKM0ZWeE02dXpYMktiQytvaXZXOWpCVmJsSjlNMktWV2hBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMsImFkdlNlY3JldEtleSI6IkdZNW40bXROTU9wRmluYnBobDE2VUUxYjV3S29lcTM4SzVndncvc1hRbEU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IldZQlMyODFFIiwibWUiOnsiaWQiOiIyNjM3MTgwOTU1NTU6MzNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2Qk/CdkIDwnZCF8J2QgPCdkIPwnZCZ8J2QlvCdkIAt8J2Qk/CdkIrwnZCTIiwibGlkIjoiNzQzNTUwOTQ1OTc4Njg6MzNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMZW8rZmNERUl2OXFjWUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJYMm8xZVVuclZWTmxPUzE3OXpkOFBuT2Z0ZGplaFl0MnVENGZTWE1UMGlvPSIsImFjY291bnRTaWduYXR1cmUiOiJEc1Z5UnhrcXhiYXdpSUJTMnR5QitCY1VZcDJGMWJsdGxML0Fwa0JGdGR3bUcvbm1lRDgyYXpkbjA1QWI4b3BDRjl0K1NldWsweW9laFRib1I0WkRBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUDQ5SFArbWNIWWJvUmFub0V1YVdrUkhONXFLdkFqeVBZSWFGd0tKWER2a3l5Ykd5T2VIaTZMYUh5ZENPK2xKZjRGYTlBKzF1MGEwN1NISzhoMVBWaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3MTgwOTU1NTU6MzNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVjlxTlhsSjYxVlRaVGt0ZS9jM2ZENXpuN1hZM29XTGRyZytIMGx6RTlJcSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU4MTAxMTM2LCJsYXN0UHJvcEhhc2giOiIzZ1BVSmsiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtkdSJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY TKT-CYBER-XMD🇿🇼*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
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
BOT_NAME: process.env.BOT_NAME || "TKT-CYBER-XMD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "TKT-TECH🇿🇼",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🇿🇼,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "263718095555",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "TKT-TECH🇿🇼",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 TKT-TECH🇿🇼*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/d622xc.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive *TKT-CYBER-XMD🇿🇼*",
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
