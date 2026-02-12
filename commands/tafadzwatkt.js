const axios = require('axios');
const { cmd, commands } = require('../command');
const config = require("../config");
const { setConfig, getConfig } = require("../lib/configdb");

// Default AI states
let AI_STATE = {
  IB: "false",
  GC: "false"
};

// Initialize saved state
(async () => {
  const saved = await getConfig("AI_STATE");
  if (saved) AI_STATE = JSON.parse(saved);
})();

// Utility
function choose(arr) { return arr[Math.floor(Math.random()*arr.length)]; }

function isHelpText(text){
  return /\b(help|problem|issue|missing|error|kaise|kya karun|command|support|sahi kar)\b/i.test(text);
}
function isRomantic(text){
  return /\b(love|love you|miss you|pyar|dil|ishq|romantic|saath|chah|kisses|kiss|sundar|beautiful|dil se)\b/i.test(text);
}
function isInsult(text){
  return /\b(gandu|bewaqoof|harami|haramzada|bewafa|chod|chut|kutta|kaminey|gora)\b/i.test(text);
}
function isGreeting(text){
  return /\b(hi|hello|hey|assalam|salaam|salaamwalekum|salam|acha|kya haal|kese ho|kaise ho)\b/i.test(text);
}
function isIdentityQuery(text){
  return /\b(who (are|is)|tum kaun|kaun ho|kon ne banaya|developer|kis ne banaya|kaha se ho)\b/i.test(text);
}
function cleanText(text){
  return (text||"").replace(/\n/g," ").trim();
}

// Local human-style reply generator
function localReply(original){
  const txt = cleanText(original).toLowerCase();

  if(isHelpText(txt)){
    return choose([
      "Batao kya masla hai, main madad karta hoon. Detail mein batao—screenshot ya error ka lafz bhejo.",
      "Chalo step-by-step karte hain. Pehle kya hua tha, aur ab kya error aa raha hai?",
      "Thik hai, mujhe problem batao (example: command ka naam ya screenshot). Main solution dhoondta hoon."
    ]);
  }

  if(isIdentityQuery(txt)){
    return "Main TKT-CYBER-XMD hoon — ek chatbot jo TAFADZWA-TKT (Zimbabwe) ne banaya hai. Agar madad chahiye to seedha bolo.";
  }

  if(isRomantic(txt)){
    return choose([
      "Aww, ye sun ke achha laga 😌. Tum jaisa sochte ho, waise hi me bhi sochta/sochti hoon. 💭",
      "Hmmm... dil se suna. Tumhari baat me warmth hai — batao aur kya sochte ho?",
      "Suna tum romantic ho — ache se bolo, main sun raha/sun rahi hoon. 💕"
    ]);
  }

  if(isInsult(txt)){
    return choose([
      "Waisa hi jawab milega jo diya gaya — par shant rehna behtar hai. 😏",
      "Acha? Wapas wahi style me: tu bhi banda hi hai, thoda tameez se chal.",
      "Oho, bohot tez boli! Lekin chill maro, yahi baat, seedha jawab mil gaya."
    ]);
  }

  if(isGreeting(txt)){
    return choose([
      "Haan bhai, mein theek hoon. Tum batao, kia chal raha hai aaj?",
      "Salaam! Kya haal chaal? Kuch masti karni hai ya madad chahiye?",
      "Hey! Theek thaak, tum kaisay ho? Kuch batao."
    ]);
  }

  // Short casual messages
  if(txt.length<40){
    return choose([
      "Theek hai, aisa karte hain.",
      "Samajh gaya, aur batao?",
      "Bilkul, mujhe batao detail."
    ]);
  }

  // Default local fallback
  return choose([
    "Achha, ye baat interesting hai — thoda aur batao taake main behtar jawab doon.",
    "Hmm, mujhe samajh aaya. Agar tum chaho to main step-by-step batata/ batati hoon.",
    "Yeh theek hai. Acha plan yeh ho sakta hai ke pehle settings check karo ya app restart karke dekho."
  ]);
}

// Chatbot enable/disable
cmd({
  pattern: "chatbot",
  alias: ["aichat","arslanmd","arslanmdbot"],
  desc: "Enable or disable TKT-CYBER-XMD",
  category: "settings",
  filename: __filename,
  react: "✅"
}, async (conn, mek, m, { from, args, isOwner, reply })=>{
  if(!isOwner) return reply("*📛 Sirf owner istimal kar sakta hai!*");
  const mode = args[0]?.toLowerCase();
  const target = (args[1]||"all").toLowerCase();

  if(mode==="on"){
    if(target==="all"||!args[1]) AI_STATE.IB=AI_STATE.GC="true";
    else if(target==="ib") AI_STATE.IB="true";
    else if(target==="gc") AI_STATE.GC="true";
    await setConfig("AI_STATE", JSON.stringify(AI_STATE));
    return reply("🤖 Chatbot ab active hai — ab sab jagah insani style me reply karega.");
  } else if(mode==="off"){
    if(target==="all"||!args[1]) AI_STATE.IB=AI_STATE.GC="false";
    else if(target==="ib") AI_STATE.IB="false";
    else if(target==="gc") AI_STATE.GC="false";
    await setConfig("AI_STATE", JSON.stringify(AI_STATE));
    return reply("😴 Chatbot ab band kar diya gaya hai.");
  } else {
    return reply("Usage: .chatbot on/off all|ib|gc");
  }
});

// Main handler: hybrid local + API
cmd({
  on: "body"
}, async (conn, m, store, { from, body, sender, isGroup, reply })=>{
  try{
    if(!body) return;
    const isInbox = !isGroup;
    if((isInbox && AI_STATE.IB!=="true") || (isGroup && AI_STATE.GC!=="true")) return;
    if(m.key.fromMe) return;
    if(body.startsWith(config.PREFIX)) return;

    let replyText = localReply(body);

    // If message is long or complicated, fallback to API
    if(body.length>80){
      try{
        const prompt = encodeURIComponent(
          "Tum TAFADZWA-MD ho, insani style me, Roman Urdu me, funny aur friendly. Developer ArslanMD Official 🇵🇰, Pakistan. Reply me natural feeling aur tone rakho."
        );
        const query = encodeURIComponent(body);
        const apiUrl = `https://arslan-apis.vercel.app/ai/chatbot?q=${query}`;
        const { data } = await axios.get(apiUrl);
        if(data && data.status && data.result){
          replyText = data.result;
        }
      }catch(e){
        console.error("API fallback error:", e?.message||e);
      }
    }

    // Human touches
    const extras=[""," 😂"," 🙂"," 😏"," 🤔"];
    const finalReply = replyText + choose(extras);

    await conn.sendMessage(from,{ text: finalReply },{ quoted:m });

  }catch(err){
    console.error("Arslan MD error:", err?.message||err);
    try{ reply("Kuch masla ho gaya, phir se bolo."); }catch(e){}
  }
});
