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
} = require("@whiskeysockets/baileys");
const fs = require('fs');
const path = require("path");
const util = require("util");
global.axios = require("axios")["default"];
const chalk = require("chalk");
const speed = require("performance-now");
const Genius = require("genius-lyrics");
const yts = require('yt-search');
const {
  DateTime
} = require("luxon");
const uploadtoimgur = require("./lib/imgur");
const advice = require("badadvice");
const {
  c,
  cpp,
  node,
  python,
  java
} = require("compile-run");
const acrcloud = require('acrcloud');
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
} = require('openai');
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
} = require('./lib/dragonfunc');
const {
  exec,
  spawn,
  execSync
} = require("child_process");
module.exports = dragon = async (_0x38743a, _0x3b8766, _0x127c44, _0x14562e) => {
  try {
    var _0x39ee71 = _0x3b8766.mtype === "conversation" ? _0x3b8766.message.conversation : _0x3b8766.mtype == 'imageMessage' ? _0x3b8766.message.imageMessage.caption : _0x3b8766.mtype == "videoMessage" ? _0x3b8766.message.videoMessage.caption : _0x3b8766.mtype == "extendedTextMessage" ? _0x3b8766.message.extendedTextMessage.text : _0x3b8766.mtype == "buttonsResponseMessage" ? _0x3b8766.message.buttonsResponseMessage.selectedButtonId : _0x3b8766.mtype == 'listResponseMessage' ? _0x3b8766.message.listResponseMessage.singleSelectReply.selectedRowId : _0x3b8766.mtype == 'templateButtonReplyMessage' ? _0x3b8766.message.templateButtonReplyMessage.selectedId : _0x3b8766.mtype === "messageContextInfo" ? _0x3b8766.message.buttonsResponseMessage?.['selectedButtonId'] || _0x3b8766.message.listResponseMessage?.["singleSelectReply"]["selectedRowId"] || _0x3b8766.text : '';
    var _0xf7d324 = typeof _0x3b8766.text == 'string' ? _0x3b8766.text : '';
    var _0x214b48 = _0x3b8766.message.extendedTextMessage?.['contextInfo']?.["quotedMessage"];
    const _0x1436a4 = require("heroku-client");
    const _0x3acc5c = _0x39ee71.replace(prefix, '').trim().split(/ +/).shift().toLowerCase();
    const _0x32b774 = _0x39ee71.trim().split(/ +/).slice(0x1);
    const _0x4250cf = _0x3b8766.pushName || "No Name";
    const _0x2bee53 = await _0x38743a.decodeJid(_0x38743a.user.id);
    const _0x3a45f5 = !!(_0x3b8766.sender == _0x2bee53);
    let _0x1f241d = q = _0x32b774.join(" ");
    _0x3b8766.isBaileys = _0x3b8766.id.startsWith('BAE5') && _0x3b8766.id.length === 0x10;
    const _0x3a9bca = _0x3b8766.chat;
    const _0x2ac30c = _0x3b8766.reply;
    const _0x382f69 = _0x3b8766.sender;
    const _0x70a26b = _0x127c44.messages[0x0];
    const _0x4db8ac = _0x2a8bc9 => {
      let _0x241380 = [];
      for (let _0xa733ab of _0x2a8bc9) {
        if (_0xa733ab.admin === "superadmin") {
          _0x241380.push(_0xa733ab.id);
        } else if (_0xa733ab.admin === "admin") {
          _0x241380.push(_0xa733ab.id);
        } else {
          '';
        }
      }
      return _0x241380 || [];
    };
    const _0x561f73 = _0x3b8766.quoted || _0x3b8766;
    const _0x44775e = _0x561f73.mtype == "buttonsMessage" ? _0x561f73[Object.keys(_0x561f73)[0x1]] : _0x561f73.mtype == 'templateMessage' ? _0x561f73.hydratedTemplate[Object.keys(_0x561f73.hydratedTemplate)[0x1]] : _0x561f73.mtype == "product" ? _0x561f73[Object.keys(_0x561f73)[0x0]] : _0x3b8766.quoted ? _0x3b8766.quoted : _0x3b8766;
    const _0x5269b0 = (_0x44775e.msg || _0x44775e).mimetype || '';
    const _0x1c3bdf = _0x44775e.msg || _0x44775e;
    const _0x378c0d = _0x39ee71.startsWith(prefix);
    const _0x222f2a = bad.split(',');
    const _0x4a0f81 = DevDragon.map(_0x1ac333 => _0x1ac333.replace(/[^0-9]/g, '') + "@s.whatsapp.net").includes(_0x3b8766.sender);
    const _0xbd10c6 = _0x3b8766.isGroup ? await _0x38743a.groupMetadata(_0x3b8766.chat)["catch"](_0x181cfc => {}) : '';
    const _0xbb5138 = _0x3b8766.isGroup && _0xbd10c6 ? await _0xbd10c6.subject : '';
    const _0x3b3856 = _0x3b8766.isGroup && _0xbd10c6 ? await _0xbd10c6.participants : '';
    const _0x3e92c8 = _0x3b8766.isGroup ? await _0x4db8ac(_0x3b3856) : '';
    const _0xdc6800 = _0x3b8766.isGroup ? _0x3e92c8.includes(_0x2bee53) : false;
    const _0x3e97fd = _0x3b8766.isGroup ? _0x3e92c8.includes(_0x3b8766.sender) : false;
    const _0x571291 = '254780015430'.split(',');
    const _0x511cf3 = new Date();
    const _0x5163b8 = speed();
    const _0x5f1b3e = speed() - _0x5163b8;
    if (!fs.existsSync("message_data")) {
      fs.mkdirSync("message_data");
    }
    function _0x10967f(_0x303aa7, _0x9497ea) {
      const _0x147e7a = path.join("message_data", _0x303aa7, _0x9497ea + ".json");
      try {
        const _0x28bea7 = fs.readFileSync(_0x147e7a, "utf8");
        return JSON.parse(_0x28bea7) || [];
      } catch (_0x21add8) {
        return [];
      }
    }
    function _0x40f92d(_0xaa1b58, _0x39198a, _0x17931e) {
      const _0x2bc146 = path.join("message_data", _0xaa1b58);
      if (!fs.existsSync(_0x2bc146)) {
        fs.mkdirSync(_0x2bc146, {
          'recursive': true
        });
      }
      const _0x494b20 = path.join(_0x2bc146, _0x39198a + '.json');
      try {
        fs.writeFileSync(_0x494b20, JSON.stringify(_0x17931e, null, 0x2));
      } catch (_0x320173) {
        console.error("Error saving chat data:", _0x320173);
      }
    }
    function _0x38eac3(_0x6d53b3) {
      const _0x258cec = _0x6d53b3.key.remoteJid;
      const _0x1be227 = _0x6d53b3.key.id;
      const _0x5a0aa0 = _0x10967f(_0x258cec, _0x1be227);
      _0x5a0aa0.push(_0x6d53b3);
      _0x40f92d(_0x258cec, _0x1be227, _0x5a0aa0);
    }
    async function _0x36f2f1(_0x47d605, _0x46dcfe) {
      const _0x206fb0 = _0x46dcfe.key.remoteJid;
      const _0x36d00f = _0x46dcfe.message.protocolMessage.key.id;
      const _0x47e32b = _0x10967f(_0x206fb0, _0x36d00f);
      const _0x12b7d7 = _0x47e32b[0x0];
      if (_0x12b7d7) {
        const _0x1b3292 = _0x46dcfe.participant || _0x46dcfe.key.participant || _0x46dcfe.key.remoteJid;
        const _0x14d9b0 = _0x12b7d7.key.participant || _0x12b7d7.key.remoteJid;
        const _0x3226c0 = '@' + _0x1b3292.split('@')[0x0];
        if (_0x1b3292.includes(_0x47d605.user.id) || _0x14d9b0.includes(_0x47d605.user.id)) {
          return;
        }
        let _0x1fa102 = "░𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 𝗔𝗡𝗧𝗜𝗗𝗘𝗟𝗘𝗧𝗘 𝗥𝗘𝗣𝗢𝗥𝗧░\n\n" + (" 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗯𝘆: " + _0x3226c0 + "\n\n");
        if (_0x12b7d7.message?.["conversation"]) {
          const _0x485ba8 = _0x12b7d7.message.conversation;
          _0x1fa102 += " 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗠𝗲𝘀𝘀𝗮𝗴𝗲: " + _0x485ba8;
          await _0x47d605.sendMessage(_0x47d605.user.id, {
            'text': _0x1fa102
          }, {
            'quoted': _0x3b8766
          });
        } else {
          if (_0x12b7d7.message?.['extendedTextMessage']) {
            const _0x2865c3 = _0x12b7d7.message.extendedTextMessage.text;
            _0x1fa102 += " 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗖𝗼𝗻𝘁𝗲𝗻𝘁: " + _0x2865c3;
            await _0x47d605.sendMessage(_0x47d605.user.id, {
              'text': _0x1fa102
            }, {
              'quoted': _0x3b8766
            });
          }
        }
      }
    }
    let _0x302145 = _0xf7d324.length > 0x1e ? q.substring(0x0, 0x1e) + "..." : _0xf7d324;
    const _0x1632e0 = _0x70a26b.key.remoteJid;
    if (wapresence === "online") {
      _0x38743a.sendPresenceUpdate('available', _0x1632e0);
    } else {
      if (wapresence === "typing") {
        _0x38743a.sendPresenceUpdate("composing", _0x1632e0);
      } else if (wapresence === "recording") {
        _0x38743a.sendPresenceUpdate('recording', _0x1632e0);
      } else {
        _0x38743a.sendPresenceUpdate('unavailable', _0x1632e0);
      }
    }
    if (_0x378c0d && mode === "PRIVATE" && !_0x3a45f5 && !_0x4a0f81 && _0x3b8766.sender !== dev) {
      return;
    }
    if (autoread === "TRUE" && !_0x3b8766.isGroup) {
      _0x38743a.readMessages([_0x3b8766.key]);
    }
    if (_0x3a45f5 && _0x70a26b.key.id.startsWith("BAE5") && _0x70a26b.key.id.length === 0x10 && !_0x3b8766.isGroup) {
      return;
    }
    if (antidel === "TRUE") {
      if (_0x70a26b.message?.["protocolMessage"]?.["key"]) {
        await _0x36f2f1(_0x38743a, _0x70a26b);
      } else {
        _0x38eac3(_0x70a26b);
      }
    }
    _0x38743a.sendContact = async (_0x132c3b, _0x6228b6, _0x50f310 = '', _0x22a994 = {}) => {
      let _0x428661 = [];
      for (let _0x7d1dfd of _0x6228b6) {
        _0x428661.push({
          'displayName': "RAVEN DEV",
          'vcard': "BEGIN:VCARD\nVERSION:3.0\nN: RADRAGON DEV\nFN:DRAGON DEV\nitem1.TEL;waid=" + _0x7d1dfd + ':' + _0x7d1dfd + "\nitem1.X-ABLabel:Number\nitem2.EMAIL;type=INTERNET:dicksonnicky50@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://instagram.com/nick_hunter9\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Kenya;;;;\nitem4.X-ABLabel:Region\nEND:VCARD"
        });
      }
      _0x38743a.sendMessage(_0x132c3b, {
        'contacts': {
          'displayName': "RAVEN DEV",
          'contacts': _0x428661
        },
        ..._0x22a994
      }, {
        'quoted': _0x50f310
      });
    };
    if (antibot === "TRUE" && _0x70a26b.key.id.startsWith("BAE5") && _0x3b8766.isGroup && !_0x3e97fd && _0xdc6800 && _0x70a26b.key.id.length === 16) {
      kidts = _0x3b8766.sender;
      _0x38743a.sendMessage(_0x3b8766.chat, {
        'text': "𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧 antibot:\n\n@" + kidts.split('@')[0] + " has been identified as a bot. Removed by RAVEN to prevent unnecessary spam!",
        'contextInfo': {
          'mentionedJid': [kidts]
        }
      }, {
        'quoted': _0x3b8766
      });
      await _0x38743a.groupParticipantsUpdate(_0x3b8766.chat, [kidts], "remove");
    }
    if (_0xf7d324.startsWith('>')) {
      if (!_0x4a0f81) {
        return _0x2ac30c("Only owner can evaluate bailey codes");
      }
      try {
        let _0x392fde = await eval(_0xf7d324.slice(0x2));
        if (typeof _0x392fde !== "string") {
          _0x392fde = require("util").inspect(_0x392fde);
        }
        await _0x2ac30c(_0x392fde);
      } catch (_0x2f7995) {
        await _0x2ac30c(String(_0x2f7995));
      }
    }
    async function _0x3f9cb2() {}
    if (gptdm === 'TRUE' && _0x3b8766.chat.endsWith('@s.whatsapp.net')) {
      let _0x1dceb4 = await fetchJson('https://bk9.fun/ai/llama?q=' + _0x1f241d);
      if (!_0x1dceb4.BK9) {
        return _0x2ac30c("An error occurred while fetching the AI chatbot response. Please try again later.");
      } else {
        _0x2ac30c(_0x1dceb4.BK9);
      }
    }
    if (antitag === "TRUE" && !_0x4a0f81 && _0xdc6800 && !_0x3e97fd && _0x3b8766.mentionedJid && _0x3b8766.mentionedJid.length > 0xa) {
      if (_0x3a45f5) {
        return;
      }
      const _0x4760d1 = _0x3b8766.sender;
      await _0x38743a.sendMessage(_0x3b8766.chat, {
        'text': '@' + _0x4760d1.split('@')[0x0] + ", Antitag is Active🔨",
        'contextInfo': {
          'mentionedJid': [_0x4760d1]
        }
      }, {
        'quoted': _0x3b8766
      });
      await _0x38743a.sendMessage(_0x3b8766.chat, {
        'delete': {
          'remoteJid': _0x3b8766.chat,
          'fromMe': false,
          'id': _0x3b8766.key.id,
          'participant': _0x4760d1
        }
      });
      await _0x38743a.groupParticipantsUpdate(_0x3b8766.chat, [_0x4760d1], "remove");
    }
    async function _0x398bd2() {
      var _0x5915b6 = ['💓', '❤️', '🧡', '💚', "𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 𝗦𝗽𝗲𝗲𝗱𝗧𝗲𝘀𝘁 𝗖𝗼𝗺𝗽𝗹𝗲𝘁𝗲!"];
      let {
        key: _0x24c853
      } = await _0x38743a.sendMessage(_0x3a9bca, {
        'text': '🅿🅾🅽🅶'
      });
      for (let _0x466c78 = 0x0; _0x466c78 < _0x5915b6.length; _0x466c78++) {
        await _0x38743a.sendMessage(_0x3a9bca, {
          'text': _0x5915b6[_0x466c78],
          'edit': _0x24c853
        });
      }
    }
    const _0x351e38 = () => {
      const _0x40d0fe = DateTime.now().setZone("Africa/Nairobi").hour;
      if (_0x40d0fe >= 0x5 && _0x40d0fe < 0xc) {
        return "𝗚𝗼𝗼𝗱 𝗠𝗼𝗿𝗻𝗶𝗻𝗴 🌅";
      } else {
        if (_0x40d0fe >= 0xc && _0x40d0fe < 0x10) {
          return "𝗚𝗼𝗼𝗱 𝗔𝗳𝘁𝗲𝗿𝗻𝗼𝗼𝗻 ☀️";
        } else {
          return _0x40d0fe >= 0x10 && _0x40d0fe < 0x14 ? "𝗚𝗼𝗼𝗱 𝗘𝘃𝗲𝗻𝗶𝗻𝗴 🌇" : "𝗚𝗼𝗼𝗱 𝗡𝗶𝗴𝗵𝘁 😴";
        }
      }
    };
    if (badwordkick === "TRUE" && _0xdc6800 && !_0x3e97fd && _0x39ee71 && new RegExp("\\b" + _0x222f2a.join("\\b|\\b") + "\\b").test(_0x39ee71.toLowerCase())) {
      _0x38743a.groupParticipantsUpdate(_0x3a9bca, [_0x382f69], 'remove');
      _0x2ac30c("Hey niggah.\n\nMy owner hates usage of bad words in my presence!");
    }
    if (antilink === "TRUE" && _0x39ee71.includes("chat.whatsapp.com") && !_0x4a0f81 && _0xdc6800 && !_0x3e97fd && _0x3b8766.isGroup) {
      kid = _0x3b8766.sender;
      _0x38743a.sendMessage(_0x3b8766.chat, {
        'delete': {
          'remoteJid': _0x3b8766.chat,
          'fromMe': false,
          'id': _0x3b8766.key.id,
          'participant': kid
        }
      }).then(() => _0x38743a.groupParticipantsUpdate(_0x3b8766.chat, [kid], "remove"));
      _0x38743a.sendMessage(_0x3b8766.chat, {
        'text': "𝗛𝗲𝘆 @" + kid.split('@')[0x0] + "👋\n\n𝗦𝗲𝗻𝗱𝗶𝗻𝗴 𝗚𝗿𝗼𝘂𝗽 𝗟𝗶𝗻𝗸𝘀 𝗶𝘀 𝗣𝗿𝗼𝗵𝗶𝗯𝗶𝘁𝗲𝗱 𝗶𝗻 𝘁𝗵𝗶𝘀 𝗚𝗿𝗼𝘂𝗽 !",
        'contextInfo': {
          'mentionedJid': [kid]
        }
      }, {
        'quoted': _0x3b8766
      });
    }
    if (antilinkall === "TRUE" && _0x39ee71.includes("https://") && !_0x4a0f81 && _0xdc6800 && !_0x3e97fd && _0x3b8766.isGroup) {
      ki = _0x3b8766.sender;
      _0x38743a.sendMessage(_0x3b8766.chat, {
        'delete': {
          'remoteJid': _0x3b8766.chat,
          'fromMe': false,
          'id': _0x3b8766.key.id,
          'participant': ki
        }
      }).then(() => _0x38743a.groupParticipantsUpdate(_0x3b8766.chat, [ki], "remove"));
      _0x38743a.sendMessage(_0x3b8766.chat, {
        'text': "𝗛𝗲𝘆 @" + ki.split('@')[0x0] + "👋\n\n𝗦𝗲𝗻𝗱𝗶𝗻𝗴 𝗟𝗶𝗻𝗸𝘀 𝗶𝘀 𝗣𝗿𝗼𝗵𝗶𝗯𝗶𝘁𝗲𝗱 𝗶𝗻 𝘁𝗵𝗶𝘀 𝗚𝗿𝗼𝘂𝗽 !",
        'contextInfo': {
          'mentionedJid': [ki]
        }
      }, {
        'quoted': _0x3b8766
      });
    }
    if (_0x378c0d && !_0x3b8766.isGroup) {
      console.log(chalk.black(chalk.bgWhite("[ RAVEN-BOT ]")), chalk.keyword('turquoise')(_0x302145), chalk.magenta("From"), chalk.green(_0x4250cf), chalk.yellow("[ " + _0x3b8766.sender.replace('@s.whatsapp.net', '') + " ]"));
    } else if (_0x378c0d && _0x3b8766.isGroup) {
      console.log(chalk.black(chalk.bgWhite("[ LOGS ]")), !_0xf6c8(0x2d3) ? chalk.green(_0x302145) : chalk.keyword("turquoise")(_0x302145), chalk.magenta('From'), chalk.green(_0x4250cf), chalk.yellow("[ " + _0x3b8766.sender.replace("@s.whatsapp.net", '') + " ]"), chalk.blueBright('IN'), chalk.green(_0xbb5138));
    }
    if (_0x378c0d) {
      switch (_0x3acc5c) {
        case "dragon":
        case "menu":
          await _0x3f9cb2();
          let _0x2f89df = "𝗛𝗲𝘆 𝘁𝗵𝗲𝗿𝗲😁, " + _0x351e38() + "\n\n𝐀𝐬𝐩𝐢𝐫𝐞 𝐭𝐨 𝐢𝐧𝐬𝐩𝐢𝐫𝐞 𝐛𝐞𝐟𝐨𝐫𝐞 𝐲𝐨𝐮 𝐞𝐱𝐩𝐢𝐫𝐞\n\n╭═════〘 𝐌𝐙𝐀𝐙𝐈-𝐗𝐌𝐃 〙═════╮\n┃✫╭═─────────────────═╮\n┃✬│ 𝗨𝘀𝗲𝗿 : " + _0x3b8766.pushName + "\n┃✬│ 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 : 𝙼𝚉𝙰𝚉𝙸-𝙽𝙴𝚃 𝚃𝙴𝙲𝙷 𝙺𝙴𝙽𝚈𝙰\n┃✫│ 𝗣𝗿𝗲𝗳𝗶𝘅 : " + prefix + "\n┃✫│ 𝗠𝗼𝗱𝗲 : " + mode + "\n┃✯│ 𝗦𝗽𝗲𝗲𝗱 :   " + _0x5f1b3e.toFixed(0x4) + " 𝗠𝘀\n┃✬│ 𝗧𝗶𝗺𝗲 : " + DateTime.now().setZone("Africa/Nairobi").toLocaleString(DateTime.TIME_SIMPLE) + " on " + _0x511cf3.toLocaleString("en-US", {
            'weekday': "long",
            'timeZone': "Africa/Nairobi"
          }) + "\n┃✫│ 𝗔𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 𝗥𝗔𝗠 : 76𝗚𝗕 𝗼𝗳 256𝗚𝗕\n┃✫│═════════════════════\n┃✬│𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎 𝐌𝐙𝐀𝐙𝐈-𝐗𝐌𝐃 𝐂𝐌𝐃𝐒\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎\n┃✫│═════════════════════\n╰══──────────────────══╯\n●════ 〘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝐂𝐌𝐃𝐒 〙═──═●\n╭══───────◇───────══╮\n┃💥│ 𝗩𝗶𝗱𝗲𝗼\n┃💥│ 𝗣𝗹𝗮𝘆\n┃💥│ 𝗣𝗹𝗮𝘆2\n┃💥│ 𝗦𝗼𝗻𝗴\n┃💥│ 𝗦𝗼𝗻𝗴2\n┃💥│ 𝗙𝗯𝗱𝗹\n┃💥│ 𝗧𝗶𝗸𝘁𝗼𝗸\n┃💥│ 𝗧𝘄𝗶𝘁𝘁𝗲𝗿\n┃💥│ 𝗶𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺\n┃💥│ 𝗠𝗼𝘃𝗶𝗲\n┃💥│ 𝗟𝘆𝗿𝗶𝗰𝘀\n┃💥│ 𝗪𝗵𝗮𝘁𝘀𝗼𝗻𝗴\n┃💥│ 𝗬𝘁𝘀\n┃💥│ 𝗬𝘁𝗺𝗽3\n┃💥│ 𝗬𝘁𝗺𝗽4\n╰══───────◇───────══╯\n●═════  〘 𝗘𝗗𝗜𝗧 𝐂𝐌𝐃𝐒 〙══───═●\n╭══───────◇───────══╮\n┃💥│ 𝗦𝘁𝗶𝗰𝗸𝗲𝗿\n┃💥│ 𝗦𝗺𝗲𝗺𝗲\n┃💥│ 𝗣𝗵𝗼𝘁𝗼\n┃💥│ 𝗠𝗽4\n┃💥│ 𝗥𝗲𝘁𝗿𝗶𝗲𝘃𝗲\n┃💥│ 𝗩𝘃\n┃💥│ 𝗩𝘃2\n┃💥│ 𝐖𝐚𝐡\n┃💥│ 𝗦𝗰𝗿𝗲𝗲𝗻𝘀𝗵𝗼𝘁\n┃💥│ 𝗠𝗶𝘅\n┃💥│ 𝗧𝗮𝗸𝗲\n┃💥│ 𝗧𝘄𝗲𝗲𝘁\n┃💥│ 𝗤𝘂𝗼𝘁𝗲𝗹𝘆\n╰══───────◇───────══╯\n●═══〘 𝗖𝗢𝗡𝗙𝗜𝗚 𝗩𝗔𝗥𝗦 𝐂𝐌𝐃𝐒 〙═───═●\n╭══───────◇───────══╮\n┃💥│ 𝗔𝗻𝘁𝗶𝗱𝗲𝗹𝗲𝘁𝗲\n┃💥│ 𝗔𝗻𝘁𝗶𝗰𝗮𝗹𝗹\n┃💥│ 𝗔𝗻𝘁𝗶𝗳𝗼𝗿𝗲𝗶𝗴𝗻\n┃💥│ 𝗔𝗻𝘁𝗶𝘁𝗮𝗴\n┃💥│ 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸\n┃💥│ 𝗔𝗻𝘁𝗶𝗹𝗶𝗻𝗸_𝗮𝗹𝗹\n┃💥│ 𝗚𝗽𝘁_𝗜𝗻𝗯𝗼𝘅\n╰══───────◇───────══╯\n●═════  〘 𝗚𝗣𝗧 𝐂𝐌𝐃𝐒 〙═────═●\n╭══───────◇───────══╮\n┃💥│ 𝗔𝗶\n┃💥│ 𝗔𝗶2\n┃💥│ 𝗩𝗶𝘀𝗶𝗼𝗻\n┃💥│ 𝗗𝗲𝗳𝗶𝗻𝗲\n┃💥│ 𝗗𝗮𝗿𝗸𝗴𝗽𝘁\n┃💥│ 𝗥𝗮𝘃𝗲𝗻\n┃💥│ 𝗚𝗲𝗺𝗶𝗻𝗶\n┃💥│ 𝗚𝗼𝗼𝗴𝗹𝗲\n┃💥│ 𝗚𝗽𝘁\n┃💥│ 𝗚𝗽𝘁2\n┃💥│ 𝗚𝗽𝘁3\n╰══───────◇───────══╯\n●════  〘 𝗚𝗥𝗢𝗨𝗣 𝐂𝐌𝐃𝐒 〙═───═●\n╭══───────◇───────══╮\n┃💥│ 𝗔𝗽𝗽𝗿𝗼𝘃𝗲\n┃💥│ 𝗥𝗲𝗷𝗲𝗰𝘁\n┃💥│ 𝗣𝗿𝗼𝗺𝗼𝘁𝗲\n┃💥│ 𝗗𝗲𝗺𝗼𝘁𝗲\n┃💥│ 𝗗𝗲𝗹𝗲𝘁𝗲\n┃💥│ 𝗥𝗲𝗺𝗼𝘃𝗲\n┃💥│ 𝗙𝗮𝗸𝗲𝗿\n┃💥│ 𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀\n┃💥│ 𝗖𝗹𝗼𝘀𝗲\n┃💥│ 𝗢𝗽𝗲𝗻\n┃💥│ 𝗖𝗹𝗼𝘀𝗲𝗧𝗶𝗺𝗲\n┃💥│ 𝗢𝗽𝗲𝗻𝗧𝗶𝗺𝗲\n┃💥│ 𝗗𝗶𝘀𝗽-𝗼𝗳𝗳\n┃💥│ 𝗗𝗶𝘀𝗽-1\n┃💥│ 𝗗𝗶𝘀𝗽-7\n┃💥│ 𝗗𝗶𝘀𝗽-90\n┃💥│ 𝗜𝗰𝗼𝗻\n┃💥│ 𝗚𝗰𝗽𝗿𝗼𝗳𝗶𝗹𝗲\n┃💥│ 𝗦𝘂𝗯𝗷𝗲𝗰𝘁\n┃💥│ 𝗗𝗲𝘀𝗰\n┃💥│ 𝗟𝗲𝗮𝘃𝗲\n┃💥│ 𝗔𝗱𝗱\n┃💥│ 𝗧𝗮𝗴𝗮𝗹𝗹\n┃💥│ 𝗛𝗶𝗱𝗲𝘁𝗮𝗴\n┃💥│ 𝗥𝗲𝘃𝗼𝗸𝗲\n┃💥│ 𝗠𝘂𝘁𝗲\n┃💥│ 𝗨𝗻𝗺𝘂𝘁𝗲\n╰══───────◇───────══╯\n●═══  〘 𝗖𝗢𝗗𝗜𝗡𝗚 𝐂𝐌𝐃𝐒 〙 ═───═●\n╭══───────◇───────══╮\n┃💥│ 𝗖𝗮𝗿𝗯𝗼𝗻\n┃💥│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗰\n┃💥│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗰++\n┃💥│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗷𝘀\n┃💥│ 𝗖𝗼𝗺𝗽𝗶𝗹𝗲-𝗽𝘆\n┃💥│ 𝗜𝗻𝘀𝗽𝗲𝗰𝘁\n┃💥│ 𝗘𝗻𝗰𝗿𝘆𝗽𝘁𝗲\n┃💥│ 𝗘𝘃𝗮𝗹\n╰══───────◇───────══╯\n●═══  〘 𝗚𝗘𝗡𝗘𝗥𝗔𝗟 𝐂𝐌𝐃𝐒 〙 ═───═●\n╭══───────◇───────══╮\n┃💥│ 𝗢𝘄𝗻𝗲𝗿\n┃💥│ 𝗦𝗰𝗿𝗶𝗽𝘁\n┃💥│ 𝗠𝘇𝗮𝘇𝗶\n┃💥│ 𝗟𝗶𝘀𝘁\n┃💥│ 𝗣𝗶𝗻𝗴\n┃💥│ 𝗣𝗼𝗹𝗹\n┃💥│ 𝗔𝗹𝗶𝘃𝗲\n┃💥│ 𝗦𝗽𝗲𝗲𝗱\n┃💥│ 𝗥𝗲𝗽𝗼\n┃💥│ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲\n┃💥│ 𝗨𝗽𝘁𝗶𝗺𝗲\n┃💥│ 𝗗𝗽\n┃💥│ 𝗗𝗹𝘁\n┃💥│ 𝗠𝗮𝗶𝗹\n┃💥│ 𝗜𝗻𝗯𝗼𝘅\n┃💥│ 𝗡𝗲𝘄𝘀\n┃💥│ 𝗔𝗻𝗶𝗺𝗲\n╰══───────◇───────══╯\n●═══   〘 𝗢𝗪𝗡𝗘𝗥 𝐂𝐌𝐃𝐒  〙═───═●\n╭══───────◇───────══╮\n┃💥│ 𝗥𝗲𝘀𝘁𝗮𝗿𝘁\n┃💥│ 𝗔𝗱𝗺𝗶𝗻\n┃💥│ 𝗖𝗮𝘀𝘁\n┃💥│ 𝗕𝗿𝗼𝗮𝗱𝗰𝗮𝘀𝘁\n┃💥│ 𝗝𝗼𝗶𝗻\n┃💥│ 𝗚𝗲𝘁𝘃𝗮𝗿\n┃💥│ 𝗥𝗲𝗱𝗲𝗽𝗹𝗼𝘆\n┃💥│ 𝗨𝗽𝗱𝗮𝘁𝗲\n┃💥│ 𝗦𝗲𝘁𝘃𝗮𝗿\n┃💥│ 𝗕𝗼𝘁𝗽𝗽\n┃💥│ 𝗙𝘂𝗹𝗹𝗽𝗽\n┃💥│ 𝗕𝗹𝗼𝗰𝗸\n┃💥│ 𝗨𝗻𝗯𝗼𝗰𝗸\n┃💥│ 𝗞𝗶𝗹𝗹\n┃💥│ 𝗞𝗶𝗹𝗹2\n┃💥│ 𝗦𝗮𝘃𝗲\n┃💥│ >\n╰══───────◇───────══╯\n●═══   〘 𝗣𝗥𝗔𝗡𝗞 𝐂𝐌𝐃  〙 ═──═●\n╭══───────◇───────══╮\n┃💥│ 𝗛𝗮𝗰𝗸\n╰══───────◇───────══╯\n●═══   〘 𝗟𝗢𝗚𝗢𝗦 𝐂𝐌𝐃𝐒 〙 ═──═●\n╭══───────◇───────══╮\n┃💥│ 𝗛𝗮𝗰𝗸𝗲𝗿\n┃💥│ 𝗛𝗮𝗰𝗸𝗲𝗿2\n┃💥│ 𝗚𝗿𝗮𝗳𝗳𝗶𝘁𝗶\n┃💥│ 𝗖𝗮𝘁\n┃💥│ 𝗦𝗮𝗻𝗱\n┃💥│ 𝗚𝗼𝗹𝗱\n┃💥│ 𝗔𝗿𝗲𝗻𝗮\n┃💥│ 𝗗𝗿𝗮𝗴𝗼𝗻𝗯𝗮𝗹𝗹\n┃💥│ 𝗡𝗮𝗿𝘂𝘁𝗼\n┃💥│ 𝗖𝗵𝗶𝗹𝗱\n┃💥│ 𝗟𝗲𝗮𝘃𝗲𝘀\n┃💥│ 1917\n┃💥│ 𝗧𝘆𝗽𝗼𝗴𝗿𝗮𝗽𝗵𝘆\n╰══───────◇───────══╯\n●═══ 〘  𝗧𝗘𝗫𝗧𝗠𝗔𝗞𝗘𝗥 𝐂𝐌𝐃𝐒  〙═──═●\n╭══───────◇───────══╮\n┃💥│ 𝗣𝘂𝗿𝗽𝗹𝗲\n┃💥│ 𝗡𝗲𝗼𝗻\n┃💥│ 𝗡𝗼𝗲𝗹\n┃💥│ 𝗠𝗲𝘁𝗮𝗹𝗹𝗶𝗰\n┃💥│ 𝗗𝗲𝘃𝗶𝗹\n┃💥│ 𝗜𝗺𝗽𝗿𝗲𝘀𝘀𝗶𝘃𝗲\n┃💥│ 𝗦𝗻𝗼𝘄\n┃💥│ 𝗪𝗮𝘁𝗲𝗿\n┃💥│ 𝗧𝗵𝘂𝗻𝗱𝗲𝗿\n┃💥│ 𝗜𝗰𝗲\n┃💥│ 𝗠𝗮𝘁𝗿𝗶𝘅\n┃💥│ 𝗦𝗶𝗹𝘃𝗲𝗿\n┃💥│ 𝗟𝗶𝗴𝗵𝘁\n╰══───────◇───────══╯\n●═══   〘 𝗠𝗜𝗦𝗖 𝐂𝐌𝐃 〙 ═──═●\n╭══───────◇───────══╮\n┃💥│ 𝗪𝗲𝗮𝘁𝗵𝗲𝗿\n┃💥│ 𝗚𝗶𝘁𝗵𝘂𝗯\n┃💥│ 𝗚𝗶𝘁𝗰𝗹𝗼𝗻𝗲\n┃💥│ 𝗔𝗱𝘃𝗶𝗰𝗲\n┃💥│ 𝗥𝗲𝗺𝗼𝘃𝗲𝗯𝗴\n┃💥│ 𝗥𝗲𝗺𝗶𝗻𝗶\n┃💥│ 𝗧𝘁𝘀\n┃💥│ 𝗧𝗿𝘁\n┃💥│ 𝗙𝗮𝗰𝘁\n┃💥│ 𝗖𝗮𝘁𝗳𝗮𝗰𝘁\n┃💥│ 𝗤𝘂𝗼𝘁𝗲𝘀\n┃💥│ 𝗣𝗶𝗰𝗸𝘂𝗽𝗹𝗶𝗻𝗲\n╰══───────◇───────══╯\n●═══  〘 𝗢𝗧𝗛𝗘𝗥𝗦 𝐂𝐌𝐃𝐒 〙 ═──═●\n╭══───────◇───────══╮\n┃💥│ 𝗖𝗿𝗲𝗱𝗶𝘁𝘀\n┃💥│ 𝗨𝗽𝗹𝗼𝗮𝗱\n┃💥│ 𝗔𝘁𝘁𝗽\n┃💥│ 𝗨𝗿𝗹\n┃💥│ 𝗜𝗺𝗮𝗴𝗲\n┃💥│ 𝗦𝘆𝘀𝘁𝗲𝗺\n┃✫╰═───────◇───────═╯\n┃   𝗠𝗮𝗱𝗲 𝗶𝗻 𝗞𝗲𝗻𝘆𝗮 𝗕𝘆 𝗗𝗥𝗔𝗚𝗢𝗡🤩\n┃   𝗕𝗘𝗦𝗧 𝗫𝗠𝗗 𝗕𝗢𝗧 𝗜𝗡 𝗨𝗡𝗜𝗩𝗘𝗥𝗦𝗘\n╰══────────────────══╯";
          if (menu === "VIDEO") {
            _0x38743a.sendMessage(_0x3b8766.chat, {
              'video': fs.readFileSync("./Media/menu.mp4"),
              'caption': _0x2f89df,
              'gifPlayback': true
            }, {
              'quoted': _0x3b8766
            });
          } else {
            if (menu === 'TEXT') {
              _0x38743a.sendMessage(_0x3a9bca, {
                'text': _0x2f89df
              }, {
                'quoted': _0x3b8766
              });
            } else {
              if (menu === 'IMAGE') {
                _0x38743a.sendMessage(_0x3b8766.chat, {
                  'image': {
                    'url': "https://i.imgur.com/A08nrWx.jpeg"
                  },
                  'caption': _0x2f89df,
                  'fileLength': "9999999999"
                }, {
                  'quoted': _0x3b8766
                });
              } else if (menu === "LINK") {
                _0x38743a.sendMessage(_0x3b8766.chat, {
                  'text': _0x2f89df,
                  'contextInfo': {
                    'externalAdReply': {
                      'showAdAttribution': true,
                      'title': "𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗",
                      'body': '' + runtime(process.uptime()),
                      'thumbnail': fs.readFileSync("./Media/Dragon.jpg"),
                      'sourceUrl': "https://wa.me/254780015430?text=Hello👋+Dragon+Nihostie+Bot+Mkuu+😔",
                      'mediaType': 0x1,
                      'renderLargerThumbnail': true
                    }
                  }
                }, {
                  'quoted': _0x3b8766
                });
              }
            }
          }
          break;
        case "advice":
          _0x2ac30c(advice());
          console.log(advice());
          break;
        case "owner":
        case "developer":
          _0x38743a.sendContact(_0x3a9bca, _0x571291, _0x3b8766);
          break;
        case "lyrics2":
          try {
            if (!_0x1f241d) {
              return _0x2ac30c("Provide a song name!");
            }
            const _0x257e97 = await Client.songs.search(_0x1f241d);
            const _0x301a36 = _0x257e97[0x0];
            const _0x2f9c9b = await _0x301a36.lyrics();
            await _0x38743a.sendMessage(_0x3a9bca, {
              'text': _0x2f9c9b
            }, {
              'quoted': _0x3b8766
            });
          } catch (_0x2978cc) {
            _0x2ac30c("I did not find any lyrics for " + _0x1f241d + ". Try searching a different song.");
            console.log(_0x2978cc);
          }
          break;
        case "play2":
          {
            const _0x4f81d8 = require("yt-search");
            try {
              if (!_0x1f241d) {
                return _0x3b8766.reply("What song do you want to download?");
              }
              const {
                videos: _0xe30e17
              } = await _0x4f81d8(_0x1f241d);
              if (!_0xe30e17 || _0xe30e17.length === 0x0) {
                return _0x3b8766.reply("No songs found!");
              }
              const _0x40caa9 = _0xe30e17[0x0].url;
              try {
                let _0x2a177f = await fetchJson("https://api.dreaded.site/api/ytdl/audio?url=" + _0x40caa9);
                const {
                  title: _0x4d0b8d,
                  format: _0xf16d05,
                  url: _0x154ae6
                } = _0x2a177f.result;
                await _0x38743a.sendMessage(_0x3b8766.chat, {
                  'document': {
                    'url': _0x154ae6
                  },
                  'mimetype': 'audio/mpeg',
                  'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗",
                  'fileName': _0x4d0b8d + ".mp3"
                }, {
                  'quoted': _0x3b8766
                });
              } catch (_0x3db541) {
                console.error("API request failed:", _0x3db541.message);
                _0x3b8766.reply("Download failed: Unable to retrieve audio.");
              }
            } catch (_0x328ee7) {
              _0x3b8766.reply("Download failed\n" + _0x328ee7.message);
            }
          }
          ;
          break;
        case "music":
          {
            const _0x121501 = require("yt-search");
            const _0x4e5403 = require("node-fetch");
            try {
              if (!_0x1f241d) {
                return _0x3b8766.reply("What song you want to download.");
              }
              let _0x5738d7 = await _0x121501(_0x1f241d);
              if (!_0x5738d7.all.length) {
                return sendReply(_0x38743a, _0x3b8766, "No results found for your query.");
              }
              let _0x14edc3 = _0x5738d7.all[0x0].url;
              const _0xc32318 = 'https://keith-api.vercel.app/download/dlmp3?url=' + _0x14edc3;
              let _0x20dd1b = await _0x4e5403(_0xc32318);
              let _0x353215 = await _0x20dd1b.json();
              if (_0x353215.status && _0x353215.result) {
                const _0x1d4ef3 = {
                  'title': _0x353215.result.title,
                  'downloadUrl': _0x353215.result.downloadUrl,
                  'thumbnail': _0x5738d7.all[0x0].thumbnail,
                  'format': _0x353215.result.format,
                  'quality': _0x353215.result.quality
                };
                await _0x38743a.sendMessage(_0x3b8766.chat, {
                  'document': {
                    'url': _0x1d4ef3.downloadUrl
                  },
                  'mimetype': "audio/mp3",
                  'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗",
                  'fileName': _0x1d4ef3.title.replace(/[^a-zA-Z0-9 ]/g, '') + '.mp3'
                }, {
                  'quoted': _0x3b8766
                });
                await _0x38743a.sendMessage(_0x3b8766.chat, {
                  'audio': {
                    'url': _0x1d4ef3.downloadUrl
                  },
                  'mimetype': "audio/mp4"
                }, {
                  'quoted': _0x3b8766
                });
                return;
              } else {
                return _0x2ac30c("Unable to fetch the song. Please try again later.");
              }
            } catch (_0xa1949f) {
              return _0x2ac30c("An error occurred: ");
            }
          }
          break;
        case 'video':
          {
            const _0xa3f7ec = require('yt-search');
            const _0x21197f = require("node-fetch");
            try {
              if (!_0x1f241d) {
                return sendReply(_0x38743a, _0x3b8766, "Please specify the video you want to download.");
              }
              let _0x3c8959 = await _0xa3f7ec(_0x1f241d);
              if (!_0x3c8959.all.length) {
                return sendReply(_0x38743a, _0x3b8766, "No results found for your query.");
              }
              let _0x4e3712 = _0x3c8959.all[0x0].url;
              const _0x30c756 = "https://apis-keith.vercel.app/download/dlmp4?url=" + _0x4e3712;
              let _0x293466 = await _0x21197f(_0x30c756);
              let _0x13739e = await _0x293466.json();
              if (_0x13739e.status && _0x13739e.result) {
                const _0x425e51 = {
                  'title': _0x13739e.result.title,
                  'downloadUrl': _0x13739e.result.downloadUrl,
                  'thumbnail': _0x3c8959.all[0x0].thumbnail,
                  'format': _0x13739e.result.format,
                  'quality': _0x13739e.result.quality
                };
                await _0x38743a.sendMessage(_0x3b8766.chat, {
                  'video': {
                    'url': _0x425e51.downloadUrl
                  },
                  'mimetype': 'video/mp4',
                  'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
                }, {
                  'quoted': _0x3b8766
                });
                return;
              } else {
                return _0x2ac30c(_0x38743a, _0x3b8766, "Unable to fetch the video. Please try again later.");
              }
            } catch (_0x5e8dd0) {
              return _0x2ac30c(_0x38743a, _0x3b8766, "An error occurred: " + _0x5e8dd0.message);
            }
          }
          ;
          break;
        case "update":
        case "redeploy":
          {
            const _0x36b016 = require("axios");
            if (!_0x4a0f81) {
              throw NotOwner;
            }
            if (!appname || !herokuapi) {
              await _0x3b8766.reply("It looks like the Heroku app name or API key is not set. Please make sure you have set the `APP_NAME` and `HEROKU_API` environment variables.");
              return;
            }
            async function _0x23c06a() {
              try {
                const _0x48b89e = await _0x36b016.post("https://api.heroku.com/apps/" + appname + "/builds", {
                  'source_blob': {
                    'url': "https://github.com/Viniznimco/DRAGON-XMD/tarball/main"
                  }
                }, {
                  'headers': {
                    'Authorization': "Bearer " + herokuapi,
                    'Accept': "application/vnd.heroku+json; version=3"
                  }
                });
                await _0x3b8766.reply("Your bot is undergoing a ruthless upgrade, hold tight for the next 2 minutes as the redeploy executes! Once done, you’ll have the freshest version of *DRAGON-XMD* unleashed upon you.");
                console.log("Build details:", _0x48b89e.data);
              } catch (_0x8bc02e) {
                const _0x3751d3 = _0x8bc02e.response?.["data"] || _0x8bc02e.message;
                await _0x3b8766.reply("Failed to update and redeploy. Please check if you have set the Heroku API key and Heroku app name correctly.");
                console.error("Error triggering redeploy:", _0x3751d3);
              }
            }
            _0x23c06a();
          }
          break;
        case "credits":
          _0x38743a.sendMessage(_0x3b8766.chat, {
            'image': {
              'url': "https://i.imgur.com/Jp8zoUC.jpeg"
            },
            'caption': "We express sincere gratitude and acknowledgement to the following:\n\n -Dika Ardnt ➪ Indonesia\n - Writing the base code using case method\nhttps://github.com/DikaArdnt\n\n -Adiwajshing ➪ India\n - Writing and Coding the bot's library (baileys)\nhttps://github.com/WhiskeySockets/Baileys\n\n -WAWebSockets Discord Server community\n-Maintaining and reverse engineering the Web Sockets\nhttps://discord.gg/WeJM5FP9GG\n\n - Nick Hunter ➪ Kenya\n - Actively compiling and debugging parts of this bot script\nhttps://github.com/HunterNick2\n\n - Keithkeizzah (Ghost) ➪ Kenya\n - Compiling and debugging parts of this bot script\nhttps://github.com/Keithkeizzah\n\n - NickHunter ➪ Kenya\n - Founder of the bot Base\nhttps://github.com/TeddyDommie\n\n𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
          }, {
            'quoted': _0x3b8766
          });
          break;
        case 'poll':
          {
            let [_0x2ea7bd, _0x55dd70] = _0x1f241d.split('|');
            if (_0x1f241d.split('|') < 0x2) {
              return _0x3b8766.reply("Wrong format::\nExample:- poll who is the best developer|Putin, Dragon");
            }
            let _0x4995bd = [];
            for (let _0x1c125f of _0x55dd70.split(',')) {
              _0x4995bd.push(_0x1c125f);
            }
            await _0x38743a.sendMessage(_0x3b8766.chat, {
              'poll': {
                'name': _0x2ea7bd,
                'values': _0x4995bd
              }
            });
          }
          break;
        case "play":
          {
            const _0x44b346 = require('axios');
            const _0x1e4b89 = require("yt-search");
            const _0x4caf21 = require("fluent-ffmpeg");
            const _0x3de139 = require('fs');
            const _0x389e2f = require("path");
            try {
              if (!_0x1f241d) {
                return _0x3b8766.reply("What song do you want to download?");
              }
              let _0x34c9ac = await _0x1e4b89(_0x1f241d);
              let _0x5a12e7 = _0x34c9ac.all[0x0].url;
              const _0x52385a = ["https://xploader-api.vercel.app/ytmp3?url=" + _0x5a12e7, 'https://apis.davidcyriltech.my.id/youtube/mp3?url=' + _0x5a12e7, "https://api.ryzendesu.vip/api/downloader/ytmp3?url=" + _0x5a12e7, "https://api.dreaded.site/api/ytdl/audio?url=" + _0x5a12e7];
              for (const _0x4dbbf1 of _0x52385a) {
                try {
                  let _0x45c846 = await fetchJson(_0x4dbbf1);
                  if (_0x45c846.status === 0xc8 || _0x45c846.success) {
                    let _0x1d5ddd = _0x45c846.result?.["downloadUrl"] || _0x45c846.url;
                    let _0xa8e0d1 = _0x34c9ac.all[0x0].title.replace(/[^a-zA-Z0-9 ]/g, '') + ".mp3";
                    let _0x275eac = _0x389e2f.join(__dirname, _0xa8e0d1);
                    const _0x267b64 = await _0x44b346({
                      'url': _0x1d5ddd,
                      'method': "GET",
                      'responseType': "stream"
                    });
                    if (_0x267b64.status !== 0xc8) {
                      _0x3b8766.reply("sorry but the API endpoint didn't respond correctly. Try again later.");
                      continue;
                    }
                    _0x4caf21(_0x267b64.data).toFormat("mp3").save(_0x275eac).on('end', async () => {
                      await _0x38743a.sendMessage(_0x3b8766.chat, {
                        'document': {
                          'url': _0x275eac
                        },
                        'mimetype': "audio/mp3",
                        'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗",
                        'fileName': _0xa8e0d1
                      }, {
                        'quoted': _0x3b8766
                      });
                      _0x3de139.unlinkSync(_0x275eac);
                    }).on("error", _0x13d820 => {
                      _0x3b8766.reply("Download failed\n" + _0x13d820.message);
                    });
                    return;
                  }
                } catch (_0x359656) {
                  continue;
                }
              }
              _0x3b8766.reply("An error occurred. All APIs might be down or unable to process the request.");
            } catch (_0x36155d) {
              _0x3b8766.reply("Download failed\n" + _0x36155d.message);
            }
          }
          break;
        case "inspect":
          {
            const _0x2ae048 = require("node-fetch");
            const _0x20040a = require("cheerio");
            if (!_0x1f241d) {
              return _0x3b8766.reply("Provide a valid web link to fetch! The bot will crawl the website and fetch its HTML, CSS, JavaScript, and any media embedded in it.");
            }
            if (!/^https?:\/\//i.test(_0x1f241d)) {
              return _0x3b8766.reply("Please provide a URL starting with http:// or https://");
            }
            try {
              const _0x482cf6 = await _0x2ae048(_0x1f241d);
              const _0x96563d = await _0x482cf6.text();
              const _0x10c041 = _0x20040a.load(_0x96563d);
              const _0x35b5d1 = [];
              _0x10c041("img[src], video[src], audio[src]").each((_0x44104d, _0x570a4c) => {
                let _0x45d01d = _0x10c041(_0x570a4c).attr("src");
                if (_0x45d01d) {
                  _0x35b5d1.push(_0x45d01d);
                }
              });
              const _0x416cd4 = [];
              _0x10c041("link[rel=\"stylesheet\"]").each((_0x572856, _0x5c5709) => {
                let _0x3aee47 = _0x10c041(_0x5c5709).attr('href');
                if (_0x3aee47) {
                  _0x416cd4.push(_0x3aee47);
                }
              });
              const _0x597815 = [];
              _0x10c041("script[src]").each((_0x106213, _0x4563de) => {
                let _0x36f7fa = _0x10c041(_0x4563de).attr("src");
                if (_0x36f7fa) {
                  _0x597815.push(_0x36f7fa);
                }
              });
              await _0x3b8766.reply("**Full HTML Content**:\n\n" + _0x96563d);
              if (_0x416cd4.length > 0x0) {
                for (const _0xfe360d of _0x416cd4) {
                  const _0x1015ae = await _0x2ae048(new URL(_0xfe360d, _0x1f241d));
                  const _0x723090 = await _0x1015ae.text();
                  await _0x3b8766.reply("**CSS File Content**:\n\n" + _0x723090);
                }
              } else {
                await _0x3b8766.reply("No external CSS files found.");
              }
              if (_0x597815.length > 0x0) {
                for (const _0x3cce73 of _0x597815) {
                  const _0x378e18 = await _0x2ae048(new URL(_0x3cce73, _0x1f241d));
                  const _0x388200 = await _0x378e18.text();
                  await _0x3b8766.reply("**JavaScript File Content**:\n\n" + _0x388200);
                }
              } else {
                await _0x3b8766.reply("No external JavaScript files found.");
              }
              if (_0x35b5d1.length > 0x0) {
                await _0x3b8766.reply("**Media Files Found**:\n" + _0x35b5d1.join("\n"));
              } else {
                await _0x3b8766.reply("No media files (images, videos, audios) found.");
              }
            } catch (_0x5e5852) {
              console.error(_0x5e5852);
              return _0x3b8766.reply("An error occurred while fetching the website content.");
            }
          }
          break;
        case "metallic":
          {
            var _0x1e3e38 = require("mumaker");
            if (!_0x1f241d || _0x1f241d == '') {
              _0x3b8766.reply("Example Usage : " + prefix + "Metallic Dragon");
              return;
            }
            try {
              var _0x14a0dc = await _0x1e3e38.ephoto("https://en.ephoto360.com/impressive-decorative-3d-metal-text-effect-798.html", _0x1f241d);
              _0x3b8766.reply("*Wait a moment...*");
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'image': {
                  'url': _0x14a0dc.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              });
            } catch (_0xe50cae) {
              _0x3b8766.reply(_0xe50cae);
            }
          }
          break;
        case "ice":
          {
            var _0x1e3e38 = require("mumaker");
            if (!_0x1f241d || _0x1f241d == '') {
              _0x3b8766.reply("Example Usage : " + prefix + "Ice Nick");
              return;
            }
            try {
              var _0x1612c4 = await _0x1e3e38.ephoto('https://en.ephoto360.com/ice-text-effect-online-101.html', _0x1f241d);
              _0x3b8766.reply("*Wait a moment...*");
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'image': {
                  'url': _0x1612c4.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              });
            } catch (_0x44c8ea) {
              _0x3b8766.reply(_0x44c8ea);
            }
          }
          break;
        case "snow":
          {
            var _0x1e3e38 = require("mumaker");
            if (!_0x1f241d || _0x1f241d == '') {
              _0x3b8766.reply("Example Usage : " + prefix + "Snow Dragon");
              return;
            }
            try {
              var _0x561880 = await _0x1e3e38.ephoto("https://en.ephoto360.com/create-a-snow-3d-text-effect-free-online-621.html", _0x1f241d);
              _0x3b8766.reply("*Wait a moment...*");
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'image': {
                  'url': _0x561880.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              });
            } catch (_0x1b4ae1) {
              _0x3b8766.reply(_0x1b4ae1);
            }
          }
          break;
        case 'impressive':
          {
            var _0x1e3e38 = require("mumaker");
            if (!_0x1f241d || _0x1f241d == '') {
              _0x3b8766.reply("Example Usage : " + prefix + "impressive Nick");
              return;
            }
            try {
              var _0x5ba46c = await _0x1e3e38.ephoto("https://en.ephoto360.com/create-3d-colorful-paint-text-effect-online-801.html", _0x1f241d);
              _0x3b8766.reply("*Wait a moment...*");
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'image': {
                  'url': _0x5ba46c.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              });
            } catch (_0x59bfd9) {
              _0x3b8766.reply(_0x59bfd9);
            }
          }
          break;
        case 'noel':
          {
            var _0x1e3e38 = require("mumaker");
            if (!_0x1f241d || _0x1f241d == '') {
              _0x3b8766.reply("Example usage: " + prefix + "Noel myself");
              return;
            }
            try {
              var _0x258646 = await _0x1e3e38.ephoto("https://en.ephoto360.com/noel-text-effect-online-99.html", _0x1f241d);
              _0x3b8766.reply("*Wait a moment...*");
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'image': {
                  'url': _0x258646.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              }, {
                'quoted': _0x3b8766
              });
            } catch (_0x1b3f26) {
              _0x3b8766.reply("💀💀" + _0x1b3f26);
            }
          }
          break;
        case 'water':
          {
            var _0x1e3e38 = require("mumaker");
            if (!_0x1f241d || _0x1f241d == '') {
              _0x3b8766.reply("Example usage: " + prefix + "Water myself");
              return;
            }
            try {
              var _0x1aa6a2 = await _0x1e3e38.ephoto("https://en.ephoto360.com/create-water-effect-text-online-295.html", _0x1f241d);
              _0x3b8766.reply("*Wait a moment...*");
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'image': {
                  'url': _0x1aa6a2.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              }, {
                'quoted': _0x3b8766
              });
            } catch (_0x127297) {
              _0x3b8766.reply("💀💀" + _0x127297);
            }
          }
          break;
        case "matrix":
          {
            var _0x1e3e38 = require("mumaker");
            if (!_0x1f241d || _0x1f241d == '') {
              _0x3b8766.reply("Example usage: " + prefix + "Matrix myself");
              return;
            }
            try {
              var _0x2f7dac = await _0x1e3e38.ephoto('https://en.ephoto360.com/matrix-text-effect-154.html', _0x1f241d);
              _0x3b8766.reply("*Wait a moment...*");
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'image': {
                  'url': _0x2f7dac.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              }, {
                'quoted': _0x3b8766
              });
            } catch (_0x433548) {
              _0x3b8766.reply("💀💀" + _0x433548);
            }
          }
          break;
        case "light":
          {
            var _0x1e3e38 = require("mumaker");
            if (!_0x1f241d || _0x1f241d == '') {
              _0x3b8766.reply("Example usage: " + prefix + "Light myself");
              return;
            }
            try {
              var _0xbc5da6 = await _0x1e3e38.ephoto("https://en.ephoto360.com/light-text-effect-futuristic-technology-style-648.html", _0x1f241d);
              _0x3b8766.reply("*Wait a moment...*");
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'image': {
                  'url': _0xbc5da6.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              }, {
                'quoted': _0x3b8766
              });
            } catch (_0x10dcc2) {
              _0x3b8766.reply("💀💀" + _0x10dcc2);
            }
          }
          break;
        case "neon":
          {
            var _0x1e3e38 = require("mumaker");
            if (!_0x1f241d || _0x1f241d == '') {
              _0x3b8766.reply("Example Usage : " + prefix + "Neon Dragon");
              return;
            }
            try {
              var _0x2effdf = await _0x1e3e38.ephoto('https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html', _0x1f241d);
              _0x3b8766.reply("*Wait a moment...*");
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'image': {
                  'url': _0x2effdf.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              });
            } catch (_0x2a95d7) {
              _0x3b8766.reply(_0x2a95d7);
            }
          }
          break;
        case "silver":
        case 'silva':
          {
            var _0x1e3e38 = require("mumaker");
            if (!_0x1f241d || _0x1f241d == " ") {
              _0x3b8766.reply("Example Usage : " + prefix + "Silva Dragon");
              return;
            }
            try {
              var _0x546cf9 = await _0x1e3e38.ephoto("https://en.ephoto360.com/create-glossy-silver-3d-text-effect-online-802.html", _0x1f241d);
              _0x3b8766.reply("*Wait a moment...*");
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'image': {
                  'url': _0x546cf9.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              });
            } catch (_0x12fb70) {
              _0x3b8766.reply(_0x12fb70);
            }
          }
          break;
        case "devil":
          {
            var _0x1e3e38 = require('mumaker');
            if (!_0x1f241d || _0x1f241d == '') {
              _0x3b8766.reply("Example Usage : " + prefix + "Devil Dragon");
              return;
            }
            try {
              var _0x27101f = await _0x1e3e38.ephoto("https://en.ephoto360.com/neon-devil-wings-text-effect-online-683.html", _0x1f241d);
              _0x3b8766.reply("*Wait a moment...*");
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'image': {
                  'url': _0x27101f.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              });
            } catch (_0x4a1b8b) {
              _0x3b8766.reply(_0x4a1b8b);
            }
          }
          break;
        case "typography":
          {
            var _0x1e3e38 = require("mumaker");
            if (!_0x1f241d || _0x1f241d == '') {
              _0x3b8766.reply("Example Usage : " + prefix + "Typography Dragon");
              return;
            }
            try {
              var _0x1f44d5 = await _0x1e3e38.ephoto('https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html', _0x1f241d);
              _0x3b8766.reply("*Wait a moment...*");
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'image': {
                  'url': _0x1f44d5.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              });
            } catch (_0x453767) {
              _0x3b8766.reply(_0x453767);
            }
          }
          break;
        case "purple":
          {
            var _0x1e3e38 = require("mumaker");
            if (!_0x1f241d || _0x1f241d == '') {
              _0x3b8766.reply("Example Usage : " + prefix + "purple Dragon");
              return;
            }
            try {
              var _0x43047d = await _0x1e3e38.ephoto("https://en.ephoto360.com/purple-text-effect-online-100.html", _0x1f241d);
              _0x3b8766.reply("*Wait a moment...*");
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'image': {
                  'url': _0x43047d.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              });
            } catch (_0x59a3c2) {
              _0x3b8766.reply(_0x59a3c2);
            }
          }
          break;
        case "thunder":
          {
            var _0x1e3e38 = require('mumaker');
            if (!_0x1f241d || _0x1f241d == '') {
              _0x3b8766.reply("Example Usage : " + prefix + "Thunder Dragon");
              return;
            }
            try {
              var _0x5e01db = await _0x1e3e38.ephoto("https://en.ephoto360.com/thunder-text-effect-online-97.html", _0x1f241d);
              _0x3b8766.reply("*Wait a moment...*");
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'image': {
                  'url': _0x5e01db.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              });
            } catch (_0x4eda83) {
              _0x3b8766.reply(_0x4eda83);
            }
          }
          break;
        case "leaves":
          {
            var _0x1e3e38 = require('mumaker');
            if (!_0x1f241d || _0x1f241d == '') {
              _0x3b8766.reply("Example Usage : " + prefix + "Leaves RAVEN-BOT");
              return;
            }
            try {
              var _0x1fd7d3 = await _0x1e3e38.ephoto("https://en.ephoto360.com/green-brush-text-effect-typography-maker-online-153.html", _0x1f241d);
              _0x3b8766.reply("Wait a moment...");
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'image': {
                  'url': _0x1fd7d3.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              }, {
                'quoted': _0x3b8766
              });
            } catch (_0x5a1c0f) {
              _0x3b8766.reply(_0x5a1c0f);
            }
          }
          break;
        case "1917":
          {
            var _0x1e3e38 = require("mumaker");
            if (!_0x1f241d || _0x1f241d == '') {
              _0x3b8766.reply("Example Usage : " + prefix + "1917 Dragon");
              return;
            }
            try {
              var _0x3f3925 = await _0x1e3e38.ephoto("https://en.ephoto360.com/1917-style-text-effect-523.html", _0x1f241d);
              _0x3b8766.reply("Wait a moment...");
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'image': {
                  'url': _0x3f3925.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              }, {
                'quoted': _0x3b8766
              });
            } catch (_0x360292) {
              _0x3b8766.reply(_0x360292);
            }
          }
          break;
        case "arena":
          {
            var _0x1e3e38 = require('mumaker');
            if (!_0x1f241d || _0x1f241d == '') {
              _0x3b8766.reply("Example Usage : " + prefix + "arena DRAGON-XMD");
              return;
            }
            try {
              var _0x3be4e4 = await _0x1e3e38.ephoto("https://en.ephoto360.com/create-cover-arena-of-valor-by-mastering-360.html", _0x1f241d);
              _0x3b8766.reply("Wait a moment...");
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'image': {
                  'url': _0x3be4e4.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              }, {
                'quoted': _0x3b8766
              });
            } catch (_0x4b5df6) {
              _0x3b8766.reply(_0x4b5df6);
            }
          }
          break;
        case 'hacker':
          {
            var _0x1e3e38 = require("mumaker");
            if (!_0x1f241d || _0x1f241d == '') {
              _0x3b8766.reply("Example usage :  " + prefix + "hacker Dragon");
              return;
            }
            try {
              let _0x37ff2c = await _0x1e3e38.ephoto("https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html", _0x1f241d);
              _0x3b8766.reply("*Wait a moment...*");
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'image': {
                  'url': _0x37ff2c.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              }, {
                'quoted': _0x3b8766
              });
            } catch (_0x56238e) {
              _0x3b8766.reply("🥵🥵 " + _0x56238e);
            }
          }
          break;
        case "sand":
          {
            var _0x1e3e38 = require("mumaker");
            if (!_0x1f241d || _0x1f241d == '') {
              _0x3b8766.reply("Example Usage : " + prefix + "sand Raven");
              return;
            }
            try {
              let _0x10a48a = await _0x1e3e38.ephoto("https://en.ephoto360.com/write-names-and-messages-on-the-sand-online-582.html", _0x1f241d);
              _0x3b8766.reply("*Wait a moment...*");
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'image': {
                  'url': _0x10a48a.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              }, {
                'quoted': _0x3b8766
              });
            } catch (_0x41f092) {
              _0x3b8766.reply("🚫🚫 " + _0x41f092);
            }
          }
          break;
        case "dragonball":
          {
            var _0x1e3e38 = require('mumaker');
            if (!_0x1f241d || _0x1f241d == '') {
              _0x3b8766.reply("Example usage :  " + prefix + "dragonball Dragon");
              return;
            }
            try {
              const _0x452ee0 = await _0x1e3e38.ephoto("https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html", _0x1f241d);
              _0x3b8766.reply("*Wait a moment...*");
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'image': {
                  'url': _0x452ee0.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              }, {
                'quoted': _0x3b8766
              });
            } catch (_0x38209a) {
              _0x3b8766.reply("🥵🥵 " + _0x38209a);
            }
          }
          break;
        case "naruto":
          {
            var _0x1e3e38 = require('mumaker');
            if (!_0x1f241d || _0x1f241d == '') {
              _0x3b8766.reply("Example usage : " + prefix + "naruto Dragon");
              return;
            }
            try {
              var _0xa966e5 = await _0x1e3e38.ephoto("https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html", _0x1f241d);
              _0x3b8766.reply("*Wait a moment...*");
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'image': {
                  'url': _0xa966e5.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              }, {
                'quoted': _0x3b8766
              });
            } catch (_0x292d11) {
              _0x3b8766.reply("🥵🥵 " + _0x292d11);
            }
          }
          break;
        case 'graffiti':
          {
            var _0x1e3e38 = require('mumaker');
            if (!_0x1f241d || _0x1f241d == '') {
              _0x3b8766.reply("Example usage : " + prefix + "graffiti Dragon");
              return;
            }
            try {
              let _0x990b07 = await _0x1e3e38.ephoto("https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html", _0x1f241d);
              _0x3b8766.reply("*Wait a moment...*");
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'image': {
                  'url': _0x990b07.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              }, {
                'quoted': _0x3b8766
              });
            } catch (_0x96b361) {
              _0x3b8766.reply("🥵🥵 " + _0x96b361);
            }
          }
          break;
        case "cat":
          {
            var _0x1e3e38 = require("mumaker");
            if (!_0x1f241d || _0x1f241d == '') {
              _0x3b8766.reply("Example usage : * " + prefix + "cat Dragon");
              return;
            }
            try {
              let _0x7751b = await _0x1e3e38.ephoto('https://en.ephoto360.com/handwritten-text-on-foggy-glass-online-680.html', _0x1f241d);
              _0x3b8766.reply("*Wait a moment...*");
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'image': {
                  'url': _0x7751b.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              }, {
                'quoted': _0x3b8766
              });
            } catch (_0x324c4) {
              _0x3b8766.reply("🥵🥵 " + _0x324c4);
            }
          }
          break;
        case 'gold':
          {
            var _0x1e3e38 = require('mumaker');
            if (!_0x1f241d || _0x1f241d == '') {
              _0x3b8766.reply("Example usage: " + prefix + "Gold myself");
              return;
            }
            try {
              var _0x137e25 = await _0x1e3e38.ephoto("https://en.ephoto360.com/modern-gold-4-213.html", _0x1f241d);
              _0x3b8766.reply("*Wait a moment...*");
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'image': {
                  'url': _0x137e25.image
                },
                'caption': "GENERATED BY RAVEN-BOT"
              }, {
                'quoted': _0x3b8766
              });
            } catch (_0x47fa95) {
              _0x3b8766.reply('💀💀' + _0x47fa95);
            }
          }
          break;
        case "child":
          {
            var _0x1e3e38 = require("mumaker");
            if (!_0x1f241d || _0x1f241d == '') {
              _0x3b8766.reply("Example usage: " + prefix + "Child Dragon");
              return;
            }
            try {
              var _0x574aa7 = await _0x1e3e38.ephoto("https://en.ephoto360.com/write-text-on-wet-glass-online-589.html", _0x1f241d);
              _0x3b8766.reply("*Wait a moment...*");
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'image': {
                  'url': _0x574aa7.image
                },
                'caption': "GENERATED BY 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              }, {
                'quoted': _0x3b8766
              });
            } catch (_0x393cef) {
              _0x3b8766.reply('💀💀' + _0x393cef);
            }
          }
          break;
        case "Dommie":
          {
            if (!_0x1f241d) {
              return _0x2ac30c("Hello I'm 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 𝗔𝗜. How can i help u?");
            }
            let _0x428ef5 = await fetchJson("https://bk9.fun/ai/llama?q=" + _0x1f241d);
            if (!_0x428ef5.BK9) {
              return _0x2ac30c("An error occurred while fetching the AI chatbot response. Please try again later.");
            } else {
              _0x2ac30c(_0x428ef5.BK9);
            }
          }
          break;
        case "gpt2":
          {
            if (!_0x1f241d) {
              return _0x2ac30c("What's your question ?");
            }
            let _0x1ce8f6 = await fetchJson('https://bk9.fun/ai/jeeves-chat?q=' + _0x1f241d);
            if (!_0x1ce8f6.BK9) {
              return _0x2ac30c("An error occurred while fetching the AI chatbot response. Please try again later.");
            } else {
              _0x2ac30c(_0x1ce8f6.BK9);
            }
          }
          break;
        case "trt":
        case "translate":
          {
            try {
              const _0x679fdd = _0x1f241d.split(" ");
              if (_0x679fdd.length < 0x2) {
                return _0x3b8766.reply(" Please provide a language code and text to translate !");
              }
              const _0x18ded = _0x679fdd[0x0];
              const _0x2473ad = _0x679fdd.slice(0x1).join(" ");
              const _0x3bd197 = await fetch("https://api.mymemory.translated.net/get?q=" + encodeURIComponent(_0x2473ad) + "&langpair=en|" + _0x18ded);
              if (!_0x3bd197.ok) {
                return _0x3b8766.reply("Failed to fetch data. Please try again later.");
              }
              const _0x31d6d6 = await _0x3bd197.json();
              if (!_0x31d6d6.responseData || !_0x31d6d6.responseData.translatedText) {
                return _0x3b8766.reply("No translation found for the provided text.");
              }
              const _0x3264b9 = _0x31d6d6.responseData.translatedText;
              const _0x5aa9bc = " " + _0x3264b9;
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'text': _0x5aa9bc
              }, {
                'quoted': _0x3b8766
              });
            } catch (_0x2be49e) {
              console.error("Error occurred:", _0x2be49e);
              _0x3b8766.reply("An error occurred while fetching the data. Please try again later.\n" + _0x2be49e);
            }
          }
          break;
        case "cast":
          {
            if (!_0x4a0f81) {
              throw NotOwner;
            }
            if (!_0x3b8766.isGroup) {
              throw group;
            }
            if (!_0x1f241d) {
              return _0x3b8766.reply("provide a text to cast !");
            }
            let _0x5d1a1e = await _0x3b3856.filter(_0x37441a => _0x37441a.id.endsWith('.net')).map(_0x2bd147 => _0x2bd147.id);
            _0x3b8766.reply("Success in casting the message to contacts\n\nDo not always use this Command to avoid WA-bans ! ");
            for (let _0x2ada69 of _0x5d1a1e) {
              _0x38743a.sendMessage(_0x2ada69, {
                'text': q
              });
            }
            _0x3b8766.reply("Casting completed successfully😁");
          }
          break;
        case "img":
        case "ai-img":
        case "image":
        case "images":
          {
            var _0x29abb2 = require("g-i-s");
            if (!_0x1f241d) {
              return _0x3b8766.reply("Provide a text");
            }
            try {
              _0x29abb2(_0x1f241d, async (_0x5bf89d, _0x10b391) => {
                if (_0x5bf89d) {
                  return _0x3b8766.reply("An error occurred while searching for images.\n" + _0x5bf89d);
                }
                if (_0x10b391.length === 0x0) {
                  return _0x3b8766.reply("No images found.");
                }
                const _0x3d8b75 = Math.min(_0x10b391.length, 0x5);
                const _0x161222 = _0x10b391.slice(0x0, _0x3d8b75).map(_0x380850 => _0x380850.url);
                const _0x3d7104 = _0x161222.map(_0x3c178f => ({
                  'image': {
                    'url': _0x3c178f
                  },
                  'caption': "Downloaded by " + botname
                }));
                for (const _0x5364ca of _0x3d7104) {
                  await _0x38743a.sendMessage(_0x3b8766.chat, _0x5364ca, {
                    'quoted': _0x3b8766
                  });
                }
              });
            } catch (_0x1e410f) {
              _0x3b8766.reply("An error occurred.\n" + _0x1e410f);
            }
          }
          break;
        case 'foreigners':
          {
            if (!_0x3b8766.isGroup) {
              throw group;
            }
            if (!_0x3e97fd) {
              throw admin;
            }
            if (!_0xdc6800) {
              throw botAdmin;
            }
            let _0x40139c = _0x3b3856.filter(_0x597c7f => !_0x597c7f.admin).map(_0xf82b65 => _0xf82b65.id).filter(_0x412cdf => !_0x412cdf.startsWith(mycode) && _0x412cdf != _0x38743a.decodeJid(_0x38743a.user.id));
            if (!_0x32b774 || !_0x32b774[0x0]) {
              if (_0x40139c.length == 0x0) {
                return _0x3b8766.reply("No foreigners detected.");
              }
              let _0x2f80c0 = "𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀 𝗮𝗿𝗲 𝗺𝗲𝗺𝗯𝗲𝗿𝘀 𝘄𝗵𝗼𝘀𝗲 𝗰𝗼𝘂𝗻𝘁𝗿𝘆 𝗰𝗼𝗱𝗲 𝗶𝘀 𝗻𝗼𝘁 " + mycode + ". 𝗧𝗵𝗲 𝗳𝗼𝗹𝗹𝗼𝘄𝗶𝗻𝗴  " + _0x40139c.length + " 𝗳𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀 𝘄𝗲𝗿𝗲 𝗱𝗲𝘁𝗲𝗰𝘁𝗲𝗱:- \n";
              for (let _0x322195 of _0x40139c) {
                _0x2f80c0 += "𓅂 @" + _0x322195.split('@')[0x0] + "\n";
              }
              _0x2f80c0 += "\n𝗧𝗼 𝗿𝗲𝗺𝗼𝘃𝗲 𝘁𝗵𝗲𝗺 𝘀𝗲𝗻𝗱 foreigners -x";
              _0x38743a.sendMessage(_0x3b8766.chat, {
                'text': _0x2f80c0,
                'mentions': _0x40139c
              }, {
                'quoted': _0x3b8766
              });
            } else if (_0x32b774[0x0] == '-x') {
              setTimeout(() => {
                _0x38743a.sendMessage(_0x3b8766.chat, {
                  'text': "𝗠𝘇𝗮𝘇𝗶 𝘄𝗶𝗹𝗹 𝗻𝗼𝘄 𝗿𝗲𝗺𝗼𝘃𝗲 𝗮𝗹𝗹 " + _0x40139c.length + " 𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀 𝗳𝗿𝗼𝗺 𝘁𝗵𝗶𝘀 𝗴𝗿𝗼𝘂𝗽 𝗰𝗵𝗮𝘁 𝗶𝗻 𝘁𝗵𝗲 𝗻𝗲𝘅𝘁 𝘀𝗲𝗰𝗼𝗻𝗱.\n\n𝗚𝗼𝗼𝗱 𝗯𝘆𝗲 𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿𝘀. 𝗧𝗵𝗶𝘀 𝗽𝗿𝗼𝗰𝗲𝘀𝘀 𝗰𝗮𝗻𝗻𝗼𝘁 𝗯𝗲 𝘁𝗲𝗿𝗺𝗶𝗻𝗮𝘁𝗲𝗱⚠️"
                }, {
                  'quoted': _0x3b8766
                });
                setTimeout(() => {
                  _0x38743a.groupParticipantsUpdate(_0x3b8766.chat, _0x40139c, "remove");
                  setTimeout(() => {
                    _0x3b8766.reply("𝗔𝗻𝘆 𝗿𝗲𝗺𝗮𝗶𝗻𝗶𝗻𝗴 𝗙𝗼𝗿𝗲𝗶𝗴𝗻𝗲𝗿 ?🌚.");
                  }, 0x3e8);
                }, 0x3e8);
              }, 0x3e8);
            }
          }
          break;
        case 'dalle':
        case "createimage":
          {
            if (!_0x1f241d) {
              return _0x3b8766.reply("*This command generates images from text prompts*\n\n*𝙴xample usage*\n*" + (prefix + _0x3acc5c) + " Beautiful anime girl*\n*" + (prefix + _0x3acc5c) + " girl in pink dress*");
            }
            try {
              _0x3b8766.reply("Please wait, i am generating your image...");
              const _0x40bece = "https://cute-tan-gorilla-yoke.cyclic.app/imagine?text=" + encodeURIComponent(_0x1f241d);
              const _0x18fa04 = await fetch(_0x40bece);
              if (_0x18fa04.ok) {
                const _0x6f8c00 = await _0x18fa04.buffer();
                await _0x38743a.sendMessage(_0x3b8766.chat, {
                  'image': _0x6f8c00
                }, {
                  'quoted': _0x3b8766
                });
              } else {
                throw "*Aarrhhhg Image generation failed*";
              }
            } catch {
              _0x3b8766.reply("Oops! Something went wrong while generating your image. Please try again later.");
            }
          }
          break;
        case 'ai':
          {
            const {
              GoogleGenerativeAI: _0x30e1d4
            } = require("@google/generative-ai");
            const _0x460083 = require('axios');
            try {
              if (!_0x3b8766.quoted) {
                return _0x3b8766.reply("𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵!");
              }
              if (!_0x1f241d) {
                return _0x3b8766.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝘀𝗼𝗺𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵! 𝗧𝗵𝗶𝘀 𝗶𝘀 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 𝗔𝗶, 𝘂𝘀𝗶𝗻𝗴 𝗴𝗲𝗺𝗶𝗻𝗶-𝗽𝗿𝗼-𝘃𝗶𝘀𝗶𝗼𝗻 𝘁𝗼 𝗮𝗻𝗮𝗹𝘆𝘀𝗲 𝗶𝗺𝗮𝗴𝗲𝘀.");
              }
              if (!/image/.test(_0x5269b0)) {
                return _0x3b8766.reply("𝗛𝘂𝗵 𝘁𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲! 𝗣𝗹𝗲𝗮𝘀𝗲 𝗧𝗮𝗴 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵 !");
              }
              let _0x15689a = await _0x38743a.downloadAndSaveMediaMessage(_0x3b8766.quoted);
              let _0x35195b = await uploadtoimgur(_0x15689a);
              _0x3b8766.reply("𝗔 𝗺𝗼𝗺𝗲𝘁, 𝗹𝗲𝗺𝗺𝗲 𝗮𝗻𝗮𝗹𝘆𝘀𝗲 𝘁𝗵𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝘁𝘀 𝗼𝗳 𝘁𝗵𝗲 𝗜𝗺𝗮𝗴𝗲...");
              const _0x5e7875 = new _0x30e1d4("AIzaSyDJUtskTG-MvQdlT4tNE319zBqLMFei8nQ");
              async function _0x1b94d2(_0x37b779, _0x56b334) {
                const _0xc76422 = {
                  'responseType': "arraybuffer"
                };
                const _0x3f110a = await _0x460083.get(_0x37b779, _0xc76422);
                const _0x195d5c = Buffer.from(_0x3f110a.data).toString("base64");
                const _0x24a53a = {
                  'data': _0x195d5c,
                  'mimeType': _0x56b334
                };
                const _0x483906 = {
                  'inlineData': _0x24a53a
                };
                return _0x483906;
              }
              const _0x539c36 = {
                'model': "gemini-1.5-flash"
              };
              const _0x289f14 = _0x5e7875.getGenerativeModel(_0x539c36);
              const _0x492b58 = [await _0x1b94d2(_0x35195b, "image/jpeg")];
              const _0x411b74 = await _0x289f14.generateContent([_0x1f241d, ..._0x492b58]);
              const _0x5bfe18 = await _0x411b74.response;
              const _0x407611 = _0x5bfe18.text();
              await _0x3b8766.reply(_0x407611);
            } catch (_0x2561e0) {
              _0x3b8766.reply("I am unable to analyze images at the moment\n" + _0x2561e0);
            }
          }
          break;
        case "ai2":
          {
            try {
              if (!_0x3b8766.quoted) {
                return _0x3b8766.reply("Send the image then tag it with the instruction.");
              }
              if (!_0x1f241d) {
                return _0x3b8766.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝘀𝗼𝗺𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵! 𝗧𝗵𝗶𝘀 Dragon AI 𝗨𝘀𝗲 𝗚𝗲𝗺𝗶𝗻𝗶-𝗽𝗿𝗼-𝘃𝗶𝘀𝗶𝗼𝗻 𝘁𝗼 𝗮𝗻𝗮𝗹𝘆𝘀𝗲 𝗶𝗺𝗮𝗴𝗲𝘀.");
              }
              if (!/image/.test(_0x5269b0)) {
                return _0x3b8766.reply("That is not an image, try again while quoting an actual image.");
              }
              let _0x54dd9d = await _0x38743a.downloadAndSaveMediaMessage(_0x3b8766.quoted);
              let _0x16eb04 = await uploadtoimgur(_0x54dd9d);
              _0x3b8766.reply("𝗔 𝗠𝗼𝗺𝗲𝗻𝘁, 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗[𝗗𝗥𝗔𝗚𝗢𝗡-𝗔𝗜] 𝗶𝘀 𝗮𝗻𝗮𝗹𝘆𝘇𝗶𝗻𝗴 𝘁𝗵𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝘁𝘀 𝗼𝗳 𝘁𝗵𝗲 𝗶𝗺𝗮𝗴𝗲. . .");
              const _0xa530c8 = await fetchJson("https://api.dreaded.site/api/gemini-vision?url=" + _0x16eb04 + '&instruction=' + _0x1f241d);
              let _0x5523af = _0xa530c8.result;
              await _0x3b8766.reply(_0x5523af);
            } catch (_0x351acd) {
              _0x3b8766.reply("I am unable to analyze images at the moment\n" + _0x351acd);
            }
          }
          break;
        case "vision":
          {
            if (!_0x214b48 || !_0x1f241d) {
              _0x3b8766.reply("𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝗮𝗻𝗱 𝗴𝗶𝘃𝗲 𝘀𝗼𝗺𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 𝗲𝗵. 𝗜'𝗺 𝗗𝗥𝗔𝗚𝗢𝗡 𝗔𝗶, 𝗶 𝘂𝘀𝗲 𝗕𝗮𝗿𝗱 𝘁𝗼 𝗮𝗻𝗮𝗹𝘆𝘇𝗲 𝗶𝗺𝗮𝗴𝗲𝘀.");
              return;
            }
            ;
            let _0x58c8f8;
            if (_0x214b48.imageMessage) {
              _0x58c8f8 = _0x214b48.imageMessage;
            } else {
              _0x3b8766.reply("𝗛𝘂𝗵, 𝗧𝗵𝗮𝘁'𝘀 𝗻𝗼𝘁 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲, 𝗦𝗲𝗻𝗱 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘁𝗵𝗲𝗻 𝘁𝗮𝗴 𝗶𝘁 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗶𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 !");
              return;
            }
            ;
            try {
              let _0x5db07e = await _0x38743a.downloadAndSaveMediaMessage(_0x58c8f8);
              let _0x2e8f77 = await uploadtoimgur(_0x5db07e);
              _0x3b8766.reply("𝗔 𝗺𝗼𝗺𝗲𝗻𝘁, 𝗟𝗲𝗺𝗺𝗲 𝗮𝗻𝗮𝗹𝘆𝘇𝗲 𝘁𝗵𝗲 𝗰𝗼𝗻𝘁𝗲𝗻𝘁𝘀 𝗼𝗳 𝘁𝗵𝗲 𝗶𝗺𝗮𝗴𝗲. . .");
              let _0x1ddffd = await (await fetch("https://bk9.fun/ai/geminiimg?url=" + _0x2e8f77 + '&q=' + _0x1f241d)).json();
              const _0x5d8f8a = {
                'text': _0x1ddffd.BK9
              };
              await _0x38743a.sendMessage(_0x3b8766.chat, _0x5d8f8a, {
                'quoted': _0x3b8766
              });
            } catch (_0x475cec) {
              _0x3b8766.reply("An error occured\n" + _0x475cec);
            }
          }
          break;
        case 'remini':
          {
            if (!_0x44775e) {
              return _0x2ac30c("𝗪𝗵𝗲𝗿𝗲 𝗶𝘀 𝘁𝗵𝗲 𝗶𝗺𝗮𝗴𝗲 ?");
            }
            if (!/image/.test(_0x5269b0)) {
              return _0x2ac30c("𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲 𝘄𝗶𝘁𝗵 𝗰𝗮𝗽𝘁𝗶𝗼𝗻𝘀 " + (prefix + _0x3acc5c));
            }
            const {
              remini: _0x311cc3
            } = require("./lib/remini");
            let _0x5c07db = await _0x44775e.download();
            let _0x14be95 = await _0x311cc3(_0x5c07db, "enhance");
            _0x38743a.sendMessage(_0x3b8766.chat, {
              'image': _0x14be95,
              'caption': "𝗚𝗲𝗻𝗲𝗿𝗮𝘁𝗲𝗱 𝗯𝘆 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
            }, {
              'quoted': _0x3b8766
            });
          }
          break;
        case "kill2":
        case 'kickall2':
        case "terminate":
          {
            if (!_0x4a0f81) {
              throw NotOwner;
            }
            if (!_0x1f241d) {
              return _0x3b8766.reply("Provide a valid group link. Ensure the bot is in that group with admin privileges !");
            }
            let _0x3d92ca;
            let _0x403b44;
            try {
              let _0x17fb23 = _0x32b774[0x0].split("https://chat.whatsapp.com/")[0x1];
              const _0x5a4202 = await _0x38743a.groupGetInviteInfo(_0x17fb23);
              ({
                id: _0x3d92ca,
                subject: _0x403b44
              } = _0x5a4202);
            } catch (_0x57c28b) {
              _0x3b8766.reply("Why are you giving me an invalid group link?");
              return;
            }
            try {
              const _0x27d783 = await _0x38743a.groupMetadata(_0x3d92ca);
              const _0x698cb1 = await _0x27d783.participants;
              let _0xe96a6b = _0x698cb1.filter(_0x3bfca4 => _0x3bfca4.id !== _0x38743a.decodeJid(_0x38743a.user.id)).map(_0x50a5f7 => _0x50a5f7.id);
              await _0x3b8766.reply("☠️Initializing and Preparing to kill☠️ " + _0x403b44);
              await _0x38743a.groupSettingUpdate(_0x3d92ca, "announcement");
              await _0x38743a.removeProfilePicture(_0x3d92ca);
              await _0x38743a.groupUpdateSubject(_0x3d92ca, "𝗧𝗵𝗶𝘀 𝗴𝗿𝗼𝘂𝗽 𝗶𝘀 𝗻𝗼 𝗹𝗼𝗻𝗴𝗲𝗿 𝗮𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 🚫");
              await _0x38743a.groupUpdateDescription(_0x3d92ca, "//𝗕𝘆 𝘁𝗵𝗲 𝗼𝗿𝗱𝗲𝗿 𝗼𝗳 𝗗𝗥𝗔𝗚𝗢𝗡 𝗗𝗲𝘃 !");
              await _0x38743a.groupRevokeInvite(_0x3d92ca);
              await _0x38743a.sendMessage(_0x3d92ca, {
                'text': "At this time, My owner has initiated kill command remotely.\nThis has triggered me to remove all " + _0xe96a6b.length + " group participants in the next second.\n\nGoodbye Everyone! 👋\n\n⚠️THIS PROCESS CANNOT BE TERMINATED⚠️",
                'mentions': _0x698cb1.map(_0x2f00b6 => _0x2f00b6.id)
              });
              await _0x38743a.groupParticipantsUpdate(_0x3d92ca, _0xe96a6b, 'remove');
              const _0x27451d = {
                'text': "Goodbye Group owner👋\nIt's too cold in Here🥶"
              };
              await _0x38743a.sendMessage(_0x3d92ca, _0x27451d);
              await _0x38743a.groupLeave(_0x3d92ca);
              await _0x3b8766.reply("```𝑺𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍 𝑲𝒊𝒍𝒍𝒆𝒅 𝒃𝒚 𝑴𝒁𝑨𝒁𝑰-𝑿𝑴𝑫💀```");
            } catch (_0x41b83e) {
              _0x3b8766.reply("```Kill command failed, bot is either not in that group, or not an admin```.");
            }
          }
          break;
        case "carbon":
          {
            const _0x1a1a4a = require("node-fetch");
            let _0x3cf782 = "𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗘𝗗 𝗕𝗬 " + botname;
            if (_0x3b8766.quoted && _0x3b8766.quoted.text) {
              const _0x4fb825 = _0x3b8766.quoted.text;
              try {
                let _0x5514bb = await _0x1a1a4a("https://carbonara.solopov.dev/api/cook", {
                  'method': "POST",
                  'headers': {
                    'Content-Type': "application/json"
                  },
                  'body': JSON.stringify({
                    'code': _0x4fb825,
                    'backgroundColor': "#1F816D"
                  })
                });
                if (!_0x5514bb.ok) {
                  return _0x3b8766.reply("API failed to fetch a valid response.");
                }
                let _0x2b12a9 = await _0x5514bb.buffer();
                await _0x38743a.sendMessage(_0x3b8766.chat, {
                  'image': _0x2b12a9,
                  'caption': _0x3cf782
                }, {
                  'quoted': _0x3b8766
                });
              } catch (_0x1f5bb3) {
                _0x3b8766.reply("An error occured\n" + _0x1f5bb3);
              }
            } else {
              _0x3b8766.reply("Quote a code message");
            }
          }
          break;
        case 'define':
          {
            try {
              if (!_0x1f241d) {
                return _0x3b8766.reply("Please provide a word.");
              }
              const _0x3a361e = encodeURIComponent(_0x1f241d);
              const _0x4213c = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + _0x3a361e);
              if (!_0x4213c.ok) {
                return _0x3b8766.reply("Failed to fetch data. Please try again later.");
              }
              const _0x5e674a = await _0x4213c.json();
              if (!_0x5e674a || !_0x5e674a[0x0] || !_0x5e674a[0x0].meanings || _0x5e674a[0x0].meanings.length === 0x0) {
                return _0x3b8766.reply("No definitions found for the provided word.");
              }
              const _0x546a05 = _0x5e674a[0x0];
              const _0x6101f7 = _0x546a05.meanings[0x0].definitions[0x0].definition;
              const _0x33bf04 = '' + _0x6101f7;
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'text': _0x33bf04
              }, {
                'quoted': _0x3b8766
              });
            } catch (_0x3c579c) {
              console.error("Error occurred:", _0x3c579c);
              _0x3b8766.reply("An error occurred while fetching the data. Please try again later.\n" + _0x3c579c);
            }
          }
          break;
        case "tweet":
          {
            if (!_0x1f241d) {
              return _0x3b8766.reply("provide some text for the tweet");
            }
            const _0x5277e3 = _0x3b8766.sender.split('@')[0x0];
            const _0x3bf3d1 = await _0x38743a.profilePictureUrl(_0x3b8766.sender, 'image')['catch'](_0x415ac5 => 'https://i.imgur.com/vuxJCTB.jpeg');
            const _0x3f1306 = "https://some-random-api.com/canvas/misc/tweet?displayname=" + encodeURIComponent(_0x4250cf) + '&username=' + encodeURIComponent(_0x5277e3) + "&avatar=" + encodeURIComponent(_0x3bf3d1) + "&comment=" + encodeURIComponent(_0x1f241d) + "&replies=" + encodeURIComponent('246') + "&retweets=" + encodeURIComponent('125') + "&theme=" + encodeURIComponent("dark");
            await _0x38743a.sendMessage(_0x3b8766.chat, {
              'image': {
                'url': _0x3f1306
              },
              'caption': "𝗖𝗼𝗻𝘃𝗲𝗿𝘁𝗲𝗱 𝗯𝘆 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧"
            }, {
              'quoted': _0x3b8766
            });
          }
          break;
        case "pickupline":
          {
            try {
              const _0x11e0bb = await fetch("https://api.popcat.xyz/pickuplines");
              if (!_0x11e0bb.ok) {
                throw new Error("Failed to fetch data");
              }
              const {
                pickupline: _0x406f13
              } = await _0x11e0bb.json();
              const _0x201951 = '' + _0x406f13;
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'text': _0x201951
              }, {
                'quoted': _0x3b8766
              });
            } catch (_0x1e9be8) {
              console.error("Error fetching data:", _0x1e9be8);
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'text': "An error occurred while fetching the fact."
              }, {
                'quoted': _0x3b8766
              });
            }
          }
          break;
        case 'quotes':
          {
            try {
              const _0x547356 = await fetch("https://favqs.com/api/qotd");
              if (!_0x547356.ok) {
                throw new Error("Failed to fetch data");
              }
              const {
                quote: _0x245161
              } = await _0x547356.json();
              const _0x558510 = _0x245161.body + " \n\n𝗤𝘂𝗼𝘁𝗲 𝗕𝘆 " + _0x245161.author;
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'text': _0x558510
              }, {
                'quoted': _0x3b8766
              });
            } catch (_0x187ece) {
              console.error("Error fetching data:", _0x187ece);
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'text': "An error occurred while fetching the fact."
              }, {
                'quoted': _0x3b8766
              });
            }
          }
          break;
        case "google":
          {
            const _0x243b78 = require("axios");
            if (!_0x1f241d) {
              _0x3b8766.reply("Provide a search term!\nEg: .Google What is treason");
              return;
            }
            let {
              data: _0x31ef69
            } = await _0x243b78.get("https://www.googleapis.com/customsearch/v1?q=" + _0x1f241d + "&key=AIzaSyDMbI3nvmQUrfjoCJYLS69Lej1hSXQjnWI&cx=baf9bdb0c631236e5");
            if (_0x31ef69.items.length == 0x0) {
              _0x3b8766.reply("❌ Unable to find a result");
              return;
            }
            let _0x4deb28 = "SEARCH FROM GOOGLE\n🔍 Term:- " + _0x1f241d + "\n\n";
            for (let _0x573320 = 0x0; _0x573320 < _0x31ef69.items.length; _0x573320++) {
              _0x4deb28 += "🪧 Title:- " + _0x31ef69.items[_0x573320].title + "\n🖥 Description:- " + _0x31ef69.items[_0x573320].snippet + "\n🌐 Link:- " + _0x31ef69.items[_0x573320].link + "\n\n";
            }
            _0x3b8766.reply(_0x4deb28);
          }
          break;
        case "hack":
          {
            if (!_0x4a0f81) {
              throw NotOwner;
            }
            try {
              const _0x3e4c9e = ["⚠️𝗜𝗻𝗶𝘁𝗶𝗹𝗶𝗮𝘇𝗶𝗻𝗴 𝗛𝗮𝗰𝗸𝗶𝗻𝗴 𝗧𝗼𝗼𝗹𝘀⚠️", "𝗜𝗻𝗷𝗲𝗰𝘁𝗶𝗻𝗴 𝗠𝗮𝗹𝘄𝗮𝗿𝗲🐛..\n𝗟𝗼𝗮𝗱𝗶𝗻𝗴 𝗗𝗲𝘃𝗶𝗰𝗲 𝗚𝗮𝗹𝗹𝗲𝗿𝘆 𝗙𝗶𝗹𝗲𝘀⚠️", "```██ 10%``` ⏳", "```████ 20%``` ⏳", "```██████ 30%``` ⏳", "```████████ 40%``` ⏳", "```██████████ 50%``` ⏳", "```████████████ 60%``` ⏳", "```██████████████ 70%``` ⏳", "```████████████████ 80%``` ⏳", "```██████████████████ 90%``` ⏳", "```████████████████████ 100%``` ✅", "```𝗦𝘆𝘀𝘁𝗲𝗺 𝗛𝘆𝗷𝗮𝗰𝗸𝗶𝗻𝗴 𝗼𝗻 𝗽𝗿𝗼𝗰𝗲𝘀𝘀...```\n```𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗶𝗻𝗴 𝘁𝗼 𝘁𝗵𝗲 𝗦𝗲𝗿𝘃𝗲𝗿 𝘁𝗼 𝗙𝗶𝗻𝗱 𝗘𝗿𝗿𝗼𝗿 404```", "```𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱 𝘁𝗼 𝗗𝗲𝘃𝗶𝗰𝗲...\n𝗥𝗲𝗰𝗲𝗶𝘃𝗶𝗻𝗴 𝗗𝗮𝘁𝗮/𝗦𝗲𝗰𝗿𝗲𝘁 𝗣𝗮𝘀𝘀𝘄𝗼𝗿𝗱𝘀...```", "```𝗗𝗮𝘁𝗮 𝗧𝗿𝗮𝗻𝘀𝗳𝗲𝗿𝗲𝗱 𝗙𝗿𝗼𝗺 𝗱𝗲𝘃𝗶𝗰𝗲 100% 𝗖𝗼𝗺𝗽𝗹𝗲𝘁𝗲𝗱\n𝗘𝗿𝗮𝘀𝗶𝗻𝗴 𝗮𝗹𝗹 𝗘𝘃𝗶𝗱𝗲𝗻𝗰𝗲, 𝗞𝗶𝗹𝗹𝗶𝗻𝗴 𝗮𝗹𝗹 𝗠𝗮𝗹𝘄𝗮𝗿𝗲𝘀🐛...```", "```𝗦𝗘𝗡𝗗𝗜𝗡𝗗 𝗟𝗢𝗚 𝗗𝗢𝗖𝗨𝗠𝗘𝗡𝗧𝗦...```", "```𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗦𝗲𝗻𝘁 𝗗𝗮𝘁𝗮 𝗔𝗻𝗱 𝗖𝗼𝗻𝗻𝗲𝗰𝘁𝗶𝗼𝗻 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗗𝗶𝘀𝗰𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱```", "```𝗔𝗹𝗹 𝗕𝗮𝗰𝗸𝗹𝗼𝗴𝘀 𝗖𝗹𝗲𝗮𝗿𝗲𝗱 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆💣\n𝗬𝗼𝘂𝗿 𝗦𝘆𝘀𝘁𝗲𝗺 𝗪𝗶𝗹𝗹 𝗕𝗲 𝗗𝗼𝘄𝗻 𝗜𝗻 𝗧𝗵𝗲 𝗡𝗲𝘅𝘁 𝗠𝗶𝗻𝘂𝘁𝗲⚠️```"];
              for (const _0x430a43 of _0x3e4c9e) {
                await _0x38743a.sendMessage(_0x3b8766.chat, {
                  'text': _0x430a43
                }, {
                  'quoted': _0x3b8766
                });
                await new Promise(_0x3b9e84 => setTimeout(_0x3b9e84, 0x3e8));
              }
            } catch (_0x3e7012) {
              console.error("Error during prank:", _0x3e7012);
              _0x38743a.sendMessage(_0x3b8766.chat, {
                'text': "❌ *Error!* Something went wrong. Reason: " + _0x3e7012.message + ". Please try again later."
              });
            }
          }
          break;
        case "compile-py":
          if (!_0x1f241d && !_0x3b8766.quoted) {
            throw "Quote/tag a python code to compile.";
          }
          const _0x4222f6 = _0x3b8766.quoted ? _0x3b8766.quoted.text ? _0x3b8766.quoted.text : _0x1f241d ? _0x1f241d : _0x3b8766.text : _0x3b8766.text;
          let _0x3f7023 = python.runSource(_0x4222f6);
          _0x3f7023.then(_0x21e1bd => {
            console.log(_0x21e1bd);
            _0x2ac30c(_0x21e1bd.stdout);
            _0x2ac30c(_0x21e1bd.stderr);
          })["catch"](_0x5e39d4 => {
            console.log(resultt.stderr);
            _0x2ac30c(resultt.stderr);
          });
          break;
        case "save":
          {
            const _0x41b5b1 = _0x3b8766.text.toLowerCase();
            const _0x4e7b22 = _0x3b8766.msg?.["contextInfo"]?.["quotedMessage"];
            if (_0x4e7b22 && _0x41b5b1.startsWith(prefix + "save") && !_0x3b8766.quoted.chat.includes("status@broadcast")) {
              return _0x3b8766.reply("You did not tag a status media to save.");
            }
            if (_0x4a0f81 && _0x4e7b22 && _0x41b5b1.startsWith(prefix + "save") && _0x3b8766.quoted.chat.includes("status@broadcast")) {
              if (_0x4e7b22.imageMessage) {
                let _0x3bb775 = _0x4e7b22.imageMessage.caption;
                let _0x12af6c = await _0x38743a.downloadAndSaveMediaMessage(_0x4e7b22.imageMessage);
                _0x38743a.sendMessage(_0x3b8766.chat, {
                  'image': {
                    'url': _0x12af6c
                  },
                  'caption': _0x3bb775
                });
              }
              if (_0x4e7b22.videoMessage) {
                let _0x45781c = _0x4e7b22.videoMessage.caption;
                let _0x501b74 = await _0x38743a.downloadAndSaveMediaMessage(_0x4e7b22.videoMessage);
                _0x38743a.sendMessage(_0x3b8766.chat, {
                  'video': {
                    'url': _0x501b74
                  },
                  'caption': _0x45781c
                });
              }
            }
          }
          break;
        case "gitclone":
          {
            if (!_0x1f241d) {
              return _0x3b8766.reply("Where is the link?");
            }
            if (!_0x1f241d.includes("github.com")) {
              return _0x3b8766.reply("Is that a GitHub repo link ?!");
            }
            let _0x144582 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
            let [, _0xa658c5, _0x218289] = _0x1f241d.match(_0x144582) || [];
            _0x218289 = _0x218289.replace(/.git$/, '');
            let _0x2ae497 = "https://api.github.com/repos/" + _0xa658c5 + '/' + _0x218289 + "/zipball";
            let _0x48e9f4 = (await fetch(_0x2ae497, {
              'method': 'HEAD'
            })).headers.get("content-disposition").match(/attachment; filename=(.*)/)[0x1];
            await _0x38743a.sendMessage(_0x3b8766.chat, {
              'document': {
                'url': _0x2ae497
              },
              'fileName': _0x48e9f4 + '.zip',
              'mimetype': "application/zip"
            }, {
              'quoted': _0x3b8766
            })["catch"](_0x2e4175 => _0x3b8766.reply("error"));
          }
          break;
        case "darkgpt":
          {
            if (!_0x1f241d) {
              return _0x3b8766.reply("Hey there Fuckface😈, I'm Darkgpt, I respond to anything be it harmful, I'm a pure Evil👿, What sort of dark and delightful nonsense do you want to dive into Today😈 ?");
            }
            try {
              const _0x5523a3 = await fetchJson("https://api.dreaded.site/api/makgpt?text=" + _0x1f241d);
              if (_0x5523a3 && _0x5523a3.result) {
                const _0x56273b = _0x5523a3.result;
                await _0x3b8766.reply(_0x56273b);
              } else {
                _0x3b8766.reply("Huh, the silence is deafening, no response whatsoever💀.The API seems to have vanished into the abyss...😔");
              }
            } catch (_0x29fa10) {
              _0x2ac30c("An error occured while communicating with the APIs\n" + _0x29fa10);
            }
          }
          break;
        case "github":
          {
            if (!_0x1f241d) {
              return _0x3b8766.reply("Provide a github username to stalk");
            }
            try {
              const _0x4df88e = await fetch("https://itzpire.com/stalk/github-user?username=" + _0x1f241d);
              const _0x8fd4f6 = await _0x4df88e.json();
              const _0xd5bf0a = _0x8fd4f6.data.username;
              const _0x3fe27a = _0x8fd4f6.data.nickname;
              const _0x1ef45a = _0x8fd4f6.data.bio;
              const _0x6be777 = _0x8fd4f6.data.profile_pic;
              const _0x2bfaf4 = _0x8fd4f6.data.url;
              const _0x52f3d1 = _0x8fd4f6.data.location;
              const _0xd1e8a7 = _0x8fd4f6.data.public_repo;
              const _0x26b793 = _0x8fd4f6.data.followers;
              const _0x13fbf6 = _0x8fd4f6.data.following;
              const _0x19a709 = _0x8fd4f6.data.ceated_at;
              const _0xfc32e2 = "Username:- " + _0xd5bf0a + "\n\nNickname:- " + _0x3fe27a + "\n\nBio:- " + _0x1ef45a + "\n\nLink:- " + _0x2bfaf4 + "\n\nLocation:- " + _0x52f3d1 + "\n\nFollowers:- " + _0x26b793 + "\n\nFollowing:- " + _0x13fbf6 + "\n\nRepos:- " + _0xd1e8a7 + "\n\nCreated:- " + _0x19a709;
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'image': {
                  'url': _0x6be777
                },
                'caption': _0xfc32e2
              }, {
                'quoted': _0x3b8766
              });
            } catch (_0x3f9363) {
              _0x3b8766.reply("Unable to fetch data\n" + _0x3f9363);
            }
          }
          break;
        case "screenshot":
        case 'ss':
          {
            try {
              let _0x2fd417 = "𝗦𝗰𝗿𝗲𝗲𝗻𝘀𝗵𝗼𝘁 𝗯𝘆 " + botname;
              if (!_0x1f241d) {
                return _0x3b8766.reply("Provide a website link to screenshot.");
              }
              const _0x102fed = "https://image.thum.io/get/fullpage/" + _0x1f241d;
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'image': {
                  'url': _0x102fed
                },
                'caption': _0x2fd417
              }, {
                'quoted': _0x3b8766
              });
            } catch (_0x4ead86) {
              _0x3b8766.reply("An error occured.");
            }
          }
          break;
        case "alive":
        case "test":
          {
            const _0x4e75c8 = {
              'audio': {
                'url': "./Media/alive.mp3"
              },
              'mimetype': "audio/mp4",
              'ptt': true,
              'waveform': [0x64, 0x0, 0x64, 0x0, 0x64, 0x0, 0x64],
              'fileName': "𝗠𝘇𝗮𝘇𝗶",
              'contextInfo': {
                'mentionedJid': [_0x3b8766.sender],
                'externalAdReply': {
                  'title': "𝗛𝗶 𝘆𝗼𝘂👋, 𝗜 𝗮𝗺 𝗔𝗹𝗶𝘃𝗲 𝗮𝗹𝗹 𝘁𝗵𝗲 𝘁𝗶𝗺𝗲😂",
                  'body': '𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗',
                  'thumbnailUrl': "https://i.imgur.com/A08nrWx.jpeg",
                  'sourceUrl': '',
                  'mediaType': 0x1,
                  'renderLargerThumbnail': true
                }
              }
            };
            await _0x38743a.sendMessage(_0x3b8766.chat, _0x4e75c8, {
              'quoted': _0x3b8766
            });
          }
          break;
        case "removebg":
          {
            try {
              if (!_0x3b8766.quoted) {
                return _0x3b8766.reply("Send the image then tag it with the command.");
              }
              if (!/image/.test(_0x5269b0)) {
                return _0x3b8766.reply("That is not an image, try again while quoting an actual image.");
              }
              let _0x545380 = await _0x38743a.downloadAndSaveMediaMessage(_0x3b8766.quoted);
              let _0x515b7c = await uploadtoimgur(_0x545380);
              _0x3b8766.reply("𝗔 𝗺𝗼𝗺𝗲𝗻𝘁, 𝗠𝘇𝗮𝘇𝗶 𝗶𝘀 𝗲𝗿𝗮𝘀𝗶𝗻𝗴 𝘁𝗵𝗲 𝗯𝗮𝗰𝗸𝗴𝗿𝗼𝘂𝗻𝗱. . .");
              const _0x36a19d = "https://api.dreaded.site/api/removebg?imageurl=" + _0x515b7c;
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'image': {
                  'url': _0x36a19d
                },
                'caption': "𝗘𝗱𝗶𝘁𝗲𝗱 𝗯𝘆 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              }, {
                'quoted': _0x3b8766
              });
            } catch (_0x3a9e97) {
              _0x3b8766.reply("An error occured...");
            }
          }
          break;
        case "fact":
          {
            try {
              const _0x253555 = await fetchJson("https://api.dreaded.site/api/fact");
              const _0x32b38d = _0x253555.fact;
              await _0x3b8766.reply(_0x32b38d);
            } catch (_0x4d3deb) {
              _0x3b8766.reply("Something is wrong.");
            }
          }
          break;
        case "catfact":
          {
            try {
              const _0x17c048 = await fetchJson("https://api.dreaded.site/api/catfact");
              const _0x24f0a0 = _0x17c048.fact;
              await _0x3b8766.reply(_0x24f0a0);
            } catch (_0x2ec28c) {
              _0x3b8766.reply("Something is wrong.");
            }
          }
          break;
        case "tts":
        case 'say':
          {
            const _0x2c2160 = require('google-tts-api');
            if (!_0x1f241d) {
              return _0x3b8766.reply("Povide a text for conversion !");
            }
            const _0x9a85ce = _0x2c2160.getAudioUrl(_0x1f241d, {
              'lang': 'hi-IN',
              'slow': false,
              'host': "https://translate.google.com"
            });
            _0x38743a.sendMessage(_0x3b8766.chat, {
              'audio': {
                'url': _0x9a85ce
              },
              'mimetype': 'audio/mp4',
              'ptt': true
            }, {
              'quoted': _0x3b8766
            });
          }
          break;
        case "gpt":
          {
            if (!_0x1f241d) {
              return _0x2ac30c("Hello there, what's your question?");
            }
            let _0x51d14a = await fetchJson('https://bk9.fun/ai/jeeves-chat2?q=' + _0x1f241d);
            if (!_0x51d14a.BK9) {
              return _0x2ac30c("An error occurred while fetching the AI chatbot response. Please try again later.");
            } else {
              _0x2ac30c(_0x51d14a.BK9);
            }
          }
          break;
        case 'weather':
          {
            try {
              if (!_0x1f241d) {
                return _0x3b8766.reply("provide a city/town name");
              }
              const _0x4a5a07 = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + _0x1f241d + "&units=metric&appid=1ad47ec6172f19dfaf89eb3307f74785");
              const _0x37adeb = await _0x4a5a07.json();
              console.log("Weather data:", _0x37adeb);
              const _0x435bbe = _0x37adeb.name;
              const _0x4bf4e4 = _0x37adeb.main.temp;
              const _0x1a8574 = _0x37adeb.weather[0x0].description;
              const _0x5b43d4 = _0x37adeb.main.humidity;
              const _0x1377c7 = _0x37adeb.wind.speed;
              const _0x1ac12c = _0x37adeb.rain ? _0x37adeb.rain['1h'] : 0x0;
              const _0xd5b6b = _0x37adeb.clouds.all;
              const _0x3e71a6 = new Date(_0x37adeb.sys.sunrise * 0x3e8);
              const _0x31b1d6 = new Date(_0x37adeb.sys.sunset * 0x3e8);
              await _0x3b8766.reply("❄️ Weather in " + _0x435bbe + "\n\n🌡️ Temperature: " + _0x4bf4e4 + "°C\n📝 Description: " + _0x1a8574 + "\n❄️ Humidity: " + _0x5b43d4 + "%\n🌀 Wind Speed: " + _0x1377c7 + " m/s\n🌧️ Rain Volume (last hour): " + _0x1ac12c + " mm\n☁️ Cloudiness: " + _0xd5b6b + "%\n🌄 Sunrise: " + _0x3e71a6.toLocaleTimeString() + "\n🌅 Sunset: " + _0x31b1d6.toLocaleTimeString());
            } catch (_0x30c104) {
              _0x3b8766.reply("Unable to find that location.");
            }
          }
          break;
        case "compile-js":
          if (!_0x1f241d && !_0x3b8766.quoted) {
            throw "Quote/tag a Js code to compile.";
          }
          const _0x3aca6b = _0x3b8766.quoted ? _0x3b8766.quoted.text ? _0x3b8766.quoted.text : _0x1f241d ? _0x1f241d : _0x3b8766.text : _0x3b8766.text;
          let _0x318b42 = node.runSource(_0x3aca6b);
          _0x318b42.then(_0x53ac0e => {
            console.log(_0x53ac0e);
            _0x2ac30c(_0x53ac0e.stdout);
            _0x2ac30c(_0x53ac0e.stderr);
          })["catch"](_0x44704e => {
            console.log(resultt1.stderr);
            _0x2ac30c(resultt1.stderr);
          });
          break;
        case "quotely":
          {
            try {
              if (!_0x3b8766.quoted.text) {
                throw "qoute a text";
              }
              let _0x322579 = _0x3b8766.quoted.text;
              const {
                quote: _0x50d2f2
              } = require("./lib/dragonquotely.js");
              let _0xbab14e = await _0x38743a.profilePictureUrl(_0x3b8766.sender, "image")["catch"](_0x5d81a9 => 'https://telegra.ph/file/75272825615a4dcb69526.png');
              const _0x6e8b44 = await _0x50d2f2(_0x322579, _0x4250cf, _0xbab14e);
              _0x38743a.sendImageAsSticker(_0x3b8766.chat, _0x6e8b44.result, _0x3b8766, {
                'packname': _0x4250cf,
                'author': "DRAGON-XMD"
              });
            } catch (_0x593c35) {
              await _0x2ac30c("Qoute some text for quotely");
            }
          }
          break;
        case "fullpp":
          {
            if (!_0x4a0f81) {
              throw NotOwner;
            }
            const {
              S_WHATSAPP_NET: _0x305c0e
            } = require("@whiskeysockets/baileys");
            try {
              const _0x333189 = require('fs');
              if (!_0x214b48) {
                _0x3b8766.reply("𝗤𝘂𝗼𝘁𝗲 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲...");
                return;
              }
              ;
              let _0x256c8e;
              if (_0x214b48.imageMessage) {
                _0x256c8e = _0x214b48.imageMessage;
              } else {
                _0x3b8766.reply("𝗛𝘂𝗵 𝘁𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮𝗻 𝗶𝗺𝗮𝗴𝗲...");
                return;
              }
              ;
              var _0x4761a3 = await _0x38743a.downloadAndSaveMediaMessage(_0x256c8e);
              var {
                img: _0xfca270
              } = await generateProfilePicture(_0x4761a3);
              _0x38743a.query({
                'tag': 'iq',
                'attrs': {
                  'target': undefined,
                  'to': _0x305c0e,
                  'type': "set",
                  'xmlns': "w:profile:picture"
                },
                'content': [{
                  'tag': "picture",
                  'attrs': {
                    'type': "image"
                  },
                  'content': _0xfca270
                }]
              });
              _0x333189.unlinkSync(_0x4761a3);
              _0x3b8766.reply("𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗽𝗶𝗰𝘁𝘂𝗿𝗲 𝘂𝗽𝗱𝗮𝘁𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆✅");
            } catch (_0x2ae71d) {
              _0x3b8766.reply("An error occured while updating profile photo\n" + _0x2ae71d);
            }
          }
          break;
        case "upload":
        case "url":
          {
            let _0x47426c = _0x3b8766.quoted ? _0x3b8766.quoted : _0x3b8766;
            let _0x3f99e7 = (_0x47426c.msg || _0x47426c).mimetype || '';
            if (!_0x3f99e7) {
              return _0x3b8766.reply("Quote an image or video");
            }
            let _0x391982 = await _0x47426c.download();
            if (_0x391982.length > 10485760) {
              return _0x3b8766.reply("Media is too large.");
            }
            let _0x282c48 = /image\/(png|jpe?g|gif)|video\/mp4/.test(_0x3f99e7);
            if (_0x282c48) {
              let _0x20963b = await _0x38743a.downloadAndSaveMediaMessage(_0x47426c);
              let _0x1ca6df = await uploadtoimgur(_0x20963b);
              _0x3b8766.reply("Media Link:-\n\n" + _0x1ca6df);
            } else {
              _0x3b8766.reply("Error occured...");
            }
          }
          break;
        case 'attp':
          if (!q) {
            return _0x2ac30c("I need text;");
          }
          _0x38743a.sendMessage(_0x3b8766.chat, {
            'sticker': {
              'url': "https://api.lolhuman.xyz/api/attp?apikey=cde5404984da80591a2692b6&text=" + q
            }
          }, {
            'quoted': _0x3b8766
          });
          break;
        case "smeme":
          {
            if (!/image/.test(_0x5269b0)) {
              return _0x2ac30c("Quote an image or sticker with the 2 texts separated with |");
            }
            if (!_0x1f241d) {
              return _0x2ac30c("Quote an image or sticker with the 2 texts separated with |");
            }
            atas = _0x1f241d.split('|')[0x0] ? _0x1f241d.split('|')[0x0] : '-';
            bawah = _0x1f241d.split('|')[0x1] ? _0x1f241d.split('|')[0x1] : '-';
            let _0x496b83 = await _0x38743a.downloadAndSaveMediaMessage(_0x1c3bdf);
            let _0x6bcfdd = await uploadtoimgur(_0x496b83);
            let _0x3f9140 = 'https://api.memegen.link/images/custom/' + encodeURIComponent(bawah) + '/' + encodeURIComponent(atas) + ".png?background=" + _0x6bcfdd;
            let _0x4d9cf8 = await _0x38743a.sendImageAsSticker(_0x3b8766.chat, _0x3f9140, _0x3b8766, {
              'packname': packname
            });
            fs.unlinkSync(_0x4d9cf8);
          }
          break;
        case "compile-c":
          if (!_0x1f241d && !_0x3b8766.quoted) {
            throw "Quote/tag a C code to compile";
          }
          const _0x39ce2c = _0x3b8766.quoted ? _0x3b8766.quoted.text ? _0x3b8766.quoted.text : _0x1f241d ? _0x1f241d : _0x3b8766.text : _0x3b8766.text;
          let _0xd9111 = c.runSource(_0x39ce2c);
          _0xd9111.then(_0x452c7c => {
            console.log(_0x452c7c);
            _0x2ac30c(_0x452c7c.stdout);
            _0x2ac30c(_0x452c7c.stderr);
          })["catch"](_0xf440d4 => {
            console.log(resultt3.stderr);
            _0x2ac30c(resultt3.stderr);
          });
          break;
        case "compile-c++":
          if (!_0x1f241d && !_0x3b8766.quoted) {
            throw "Quote/tag a C++ code to compile";
          }
          const _0x18d274 = _0x3b8766.quoted ? _0x3b8766.quoted.text ? _0x3b8766.quoted.text : _0x1f241d ? _0x1f241d : _0x3b8766.text : _0x3b8766.text;
          let _0x5861ad = cpp.runSource(_0x18d274);
          _0x5861ad.then(_0x460ff8 => {
            console.log(_0x460ff8);
            _0x2ac30c(_0x460ff8.stdout);
            _0x2ac30c(_0x460ff8.stderr);
          })["catch"](_0x5ca9a5 => {
            console.log(resultt4.stderr);
            _0x2ac30c(resultt4.stderr);
          });
          break;
        case 'eval':
          {
            if (!_0x4a0f81) {
              throw NotOwner;
            }
            if (!_0x1f241d) {
              throw "Provide a valid Bot Baileys Function to evaluate";
            }
            try {
              let _0x8173f = await eval(_0xf7d324.slice(0x2));
              if (typeof _0x8173f !== "string") {
                _0x8173f = require("util").inspect(_0x8173f);
              }
              await _0x2ac30c(_0x8173f);
            } catch (_0x4db95e) {
              await _0x2ac30c(String(_0x4db95e));
            }
          }
          break;
        case 'add':
          if (!_0x1f241d) {
            return _0x2ac30c("provide a number to be added in this format. \n\n add 254780015430");
          }
          if (!_0x3b8766.isGroup) {
            throw group;
          }
          if (!_0x3e97fd) {
            throw admin;
          }
          if (!_0xdc6800) {
            throw botAdmin;
          }
          await _0x38743a.groupParticipantsUpdate(_0x3b8766.chat, [_0x1f241d], "add");
          _0x2ac30c("succesfully added");
          break;
        case "kill":
        case "kickall":
        case 'terminate':
          if (!_0x3b8766.isGroup) {
            throw group;
          }
          if (!_0xdc6800) {
            throw "I need admin previlleges to execute this command.";
          }
          if (!_0x4a0f81) {
            throw "Only Raven owner can use this command😲!";
          }
          let _0x257f73 = _0x3b3856.filter(_0x3a8b67 => _0x3a8b67.id != _0x38743a.decodeJid(_0x38743a.user.id)).map(_0x3b3a35 => _0x3b3a35.id);
          _0x3b8766.reply("⚠️ Initializing Kick-all command💀...");
          setTimeout(() => {
            _0x38743a.sendMessage(_0x3b8766.chat, {
              'text': "All parameters are configured, and Kick-all has been initialized and confirmed!. Now, Raven will remove all " + _0x257f73.length + " group participants in the next second.\n\nGoodbye Everyone! 👋\n\nTHIS PROCESS CANNOT BE TERMINATED💀!"
            }, {
              'quoted': _0x3b8766
            });
            setTimeout(() => {
              _0x38743a.groupParticipantsUpdate(_0x3b8766.chat, _0x257f73, "remove");
              setTimeout(() => {
                _0x3b8766.reply("Done✅. All group participants have been removed. Do not always use this command to avoid Wa bans!");
              }, 0x3e8);
            }, 0x3e8);
          }, 0x3e8);
          break;
        case "system":
          _0x38743a.sendMessage(_0x3b8766.chat, {
            'image': {
              'url': "https://i.imgur.com/YpHG3eT.jpeg"
            },
            'caption': "*𝐁𝐎𝐓 𝐍𝐀𝐌𝐄: 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧*\n\n*𝐒𝐏𝐄𝐄𝐃: " + _0x5f1b3e.toFixed(0x4) + " 𝐌𝐒*\n\n*𝐑𝐔𝐍𝐓𝐈𝐌𝐄: " + runtime(process.uptime()) + "*\n\n*𝐏𝐋𝐀𝐓𝐅𝐎𝐑𝐌: 𝗛𝗲𝗿𝗼𝗸𝘂*\n\n*𝐇𝐎𝐒𝐓𝐍𝐀𝐌𝐄: 𝗥𝗮𝘃𝗲𝗻*\n\n*𝐋𝐈𝐁𝐑𝐀𝐑𝐘: Baileys*\n\n𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑: 𝗡𝗶𝗰𝗸༆"
          });
          break;
        case 'vcf':
        case "group-vcf":
          {
            if (!_0x3b8766.isGroup) {
              return _0x3b8766.reply("Command meant for groups");
            }
            const _0x586375 = require('fs');
            let _0x582973 = await _0x38743a.groupMetadata(_0x3b8766.chat);
            let _0x5c0492 = '';
            let _0x40a819 = 0x0;
            for (let _0x507382 of _0x582973.participants) {
              _0x5c0492 += "BEGIN:VCARD\nVERSION:3.0\nFN:[" + _0x40a819++ + "] +" + _0x507382.id.split('@')[0x0] + "\nTEL;type=CELL;type=VOICE;waid=" + _0x507382.id.split('@')[0x0] + ':+' + _0x507382.id.split('@')[0x0] + "\nEND:VCARD\n";
            }
            await _0x3b8766.reply("𝗔 𝗺𝗼𝗺𝗲𝗻𝘁, 𝐌𝐙𝐀𝐙𝐈-𝐗𝐌𝐃 𝗶𝘀 𝗖𝗼𝗺𝗽𝗶𝗹𝗶𝗻𝗴 " + _0x582973.participants.length + " 𝗖𝗼𝗻𝘁𝗮𝗰𝘁𝘀 𝗶𝗻𝘁𝗼 𝗮 𝗩𝗰𝗳...");
            await _0x586375.writeFileSync('./contacts.vcf', _0x5c0492.trim());
            await _0x38743a.sendMessage(_0x3b8766.chat, {
              'document': _0x586375.readFileSync('./contacts.vcf'),
              'mimetype': 'text/vcard',
              'fileName': "Group contacts.vcf",
              'caption': "VCF for " + _0x582973.subject + "\n" + _0x582973.participants.length + " contacts"
            }, {
              'ephemeralExpiration': 0x15180,
              'quoted': _0x3b8766
            });
            _0x586375.unlinkSync('./contacts.vcf');
          }
          break;
        case "faker":
          if (!_0x3b8766.isGroup) {
            throw group;
          }
          if (!_0xdc6800) {
            throw botAdmin;
          }
          if (!_0x3e97fd) {
            throw admin;
          }
          let _0x5bf5b1 = _0x3b3856.filter(_0xaae84b => !_0xaae84b.admin).map(_0xbb8ede => _0xbb8ede.id).filter(_0x1772ff => _0x1772ff.startsWith('1') && _0x1772ff != _0x38743a.decodeJid(_0x38743a.user.id));
          if (!_0x32b774 || !_0x32b774[0]) {
            if (_0x5bf5b1.length == 0) {
              return _0x2ac30c("No virtual numbers detected!");
            }
            _0x3b8766.reply("Raven has detected " + _0x5bf5b1.length + " members using +1 fake virtual WhatsApp accounts.  To remove them send faker -x");
          } else if (_0x32b774[0] == '-x') {
            await _0x38743a.groupParticipantsUpdate(_0x3b8766.chat, [_0x5bf5b1], "remove");
            await _0x3b8766.reply(_0x5bf5b1.length + " +1 fake accounts successfully removed!");
          }
          break;
        case 'mail':
          {
            const {
              TempMail: _0x54a8ca
            } = require("tempmail.lol");
            const _0x470a99 = new _0x54a8ca();
            const _0x246ec8 = await _0x470a99.createInbox();
            const _0xf5e41a = '' + _0x246ec8.address;
            await _0x3b8766.reply(_0xf5e41a);
            const _0x19cb1b = await _0x38743a.sendMessage(_0x3b8766.chat, {
              'text': '' + _0x246ec8.token
            });
            await _0x38743a.sendMessage(_0x3b8766.chat, {
              'text': "Quoted text is your token. To fetch messages in your email use <.inbox your-token>"
            }, {
              'quoted': _0x19cb1b
            });
          }
          break;
        case 'hacker2':
          {
            if (!/image/.test(_0x5269b0)) {
              return _0x3b8766.reply("Hello hacker 👋, quote an image, probably a clear image of yourself or a person.");
            }
            let _0x13dd66 = await _0x38743a.downloadAndSaveMediaMessage(_0x1c3bdf);
            const _0x188e2b = await uploadtoimgur(_0x13dd66);
            await UploadFileUgu();
            const _0x497972 = 'https://aemt.me/hacker2?link=' + _0x188e2b;
            await _0x38743a.sendMessage(_0x3b8766.chat, {
              'image': {
                'url': _0x497972
              },
              'caption': "Converted by Raven! 🦄"
            }, {
              'quoted': _0x3b8766
            });
          }
          break;
        case "inbox":
          {
            if (!_0x1f241d) {
              return _0x3b8766.reply("To fetch messages from your mail, provide the email address which was issued.");
            }
            const _0x33099e = encodeURIComponent(_0x1f241d);
            const _0x58ce91 = "https://tempmail.apinepdev.workers.dev/api/getmessage?email=" + _0x33099e;
            try {
              const _0x2ce8c5 = await fetch(_0x58ce91);
              if (!_0x2ce8c5.ok) {
                return _0x3b8766.reply(_0x2ce8c5.status + " error occurred while communicating with API.");
              }
              const _0x5f5346 = await _0x2ce8c5.json();
              if (!_0x5f5346 || !_0x5f5346.messages) {
                return _0x3b8766.reply("I am unable to fetch messages from your mail, your inbox might be empty or some other error occurred.");
              }
              const _0x122f2d = _0x5f5346.messages;
              for (const _0x40ec99 of _0x122f2d) {
                const _0x56a3b6 = _0x40ec99.sender;
                const _0x57d7fa = _0x40ec99.subject;
                const _0x3ab930 = new Date(JSON.parse(_0x40ec99.message).date).toLocaleString();
                const _0xf924c5 = JSON.parse(_0x40ec99.message).body;
                const _0x59d105 = "👥 Sender: " + _0x56a3b6 + "\n📝 Subject: " + _0x57d7fa + "\n🕜 Date: " + _0x3ab930 + "\n📩 Message: " + _0xf924c5;
                await _0x3b8766.reply(_0x59d105);
              }
            } catch (_0x13b609) {
              console.error("𝗢𝗼𝗽𝘀 𝗘𝗿𝗿𝗼𝗿!");
              return _0x3b8766.reply("𝗦𝗼𝗺𝗲𝘁𝗵𝗶𝗻𝗴 𝗶𝘀 𝘄𝗿𝗼𝗻𝗴!");
            }
          }
          break;
        case "anime":
        case "random-anime":
          {
            const _0x3e8c2e = require("axios");
            try {
              const _0x5c420a = await _0x3e8c2e.get('https://api.jikan.moe/v4/random/anime');
              const _0x305a1d = _0x5c420a.data.data;
              const _0x38f31c = _0x305a1d.title;
              const _0x21373c = _0x305a1d.synopsis;
              const _0x220ffe = _0x305a1d.images.jpg.image_url;
              const _0x36af05 = _0x305a1d.episodes;
              const _0x502fcc = _0x305a1d.status;
              const _0x22bb79 = "📺 Title: " + _0x38f31c + "\n🎬 Épisodes: " + _0x36af05 + "\n📡 Status: " + _0x502fcc + "\n📝 Synopsis: " + _0x21373c + "\n🔗 URL: " + _0x305a1d.url;
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'image': {
                  'url': _0x220ffe
                },
                'caption': _0x22bb79
              }, {
                'quoted': _0x3b8766
              });
            } catch (_0x5c80cb) {
              _0x3b8766.reply("𝗢𝗼𝗽𝘀 𝗘𝗿𝗿𝗼𝗿!");
            }
          }
          break;
        case "news":
          {
            const _0x2b5c72 = await fetch("https://fantox001-scrappy-api.vercel.app/technews/random");
            const _0x2f0978 = await _0x2b5c72.json();
            const {
              thumbnail: _0x8afff3,
              news: _0x2e2b6d
            } = _0x2f0978;
            await _0x38743a.sendMessage(_0x3b8766.chat, {
              'image': {
                'url': _0x8afff3
              },
              'caption': _0x2e2b6d
            }, {
              'quoted': _0x3b8766
            });
          }
          break;
        case "approve":
        case "approve-all":
          {
            if (!_0x3b8766.isGroup) {
              throw group;
            }
            if (!_0x3e97fd) {
              throw admin;
            }
            if (!_0xdc6800) {
              throw botAdmin;
            }
            const _0x51a77d = await _0x38743a.groupRequestParticipantsList(_0x3b8766.chat);
            if (_0x51a77d.length === 0x0) {
              return _0x3b8766.reply("𝗛𝘂𝗵, 𝗡𝗼 𝗣𝗲𝗻𝗱𝗶𝗻𝗴 𝗷𝗼𝗶𝗻 𝗿𝗲𝗾𝘂𝗲𝘀𝘁𝘀 𝘁𝗵𝗶𝘀 𝘁𝗶𝗺𝗲!");
            }
            for (const _0x1950ca of _0x51a77d) {
              const _0x481d67 = await _0x38743a.groupRequestParticipantsUpdate(_0x3b8766.chat, [_0x1950ca.jid], "approve");
              console.log(_0x481d67);
            }
            _0x3b8766.reply("𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 ℎ𝑎𝑠 𝑎𝑝𝑝𝑟𝑜𝑣𝑒𝑑 𝑎𝑙𝑙 𝑡ℎ𝑒 𝑝𝑒𝑛𝑑𝑖𝑛𝑔 𝑟𝑒𝑞𝑢𝑒𝑠𝑡𝑠 𝑠𝑢𝑐𝑐𝑒𝑠𝑠𝑓𝑢𝑙𝑙𝑦 ✅");
          }
          break;
        case "reject":
        case 'reject-all':
          {
            if (!_0x3b8766.isGroup) {
              throw group;
            }
            if (!_0x3e97fd) {
              throw admin;
            }
            if (!_0xdc6800) {
              throw botAdmin;
            }
            const _0x1aff5b = await _0x38743a.groupRequestParticipantsList(_0x3b8766.chat);
            if (_0x1aff5b.length === 0x0) {
              return _0x3b8766.reply("𝗛𝘂𝗵, 𝗡𝗼 𝗽𝗲𝗻𝗱𝗶𝗻𝗴 𝗷𝗼𝗶𝗻 𝗿𝗲𝗾𝘂𝗲𝘀𝘁𝘀 𝘁𝗵𝗶𝘀 𝘁𝗶𝗺𝗲");
            }
            for (const _0x3e69f8 of _0x1aff5b) {
              const _0x2856eb = await _0x38743a.groupRequestParticipantsUpdate(_0x3b8766.chat, [_0x3e69f8.jid], "reject");
              console.log(_0x2856eb);
            }
            _0x3b8766.reply("𝑃𝑒𝑛𝑑𝑖𝑛𝑔 𝑝𝑎𝑟𝑡𝑖𝑐𝑖𝑝𝑎𝑛𝑡𝑠 ℎ𝑎𝑣𝑒 𝑏𝑒𝑒𝑛 𝑟𝑒𝑗𝑒𝑐𝑡𝑒𝑑!");
          }
          break;
        case 'admin':
          {
            if (!_0x3b8766.isGroup) {
              throw group;
            }
            if (!_0xdc6800) {
              throw botAdmin;
            }
            if (!_0x4a0f81) {
              throw NotOwner;
            }
            await _0x38743a.groupParticipantsUpdate(_0x3b8766.chat, [_0x3b8766.sender], "promote");
            _0x3b8766.reply("Promoted To Admin<🥇");
          }
          break;
        case "getvar":
          if (!_0x4a0f81) {
            throw NotOwner;
          }
          const _0x44539b = new _0x1436a4({
            'token': herokuapi
          });
          let _0x519868 = "/apps/" + appname;
          let _0x53493e = await _0x44539b.get(_0x519868 + "/config-vars");
          let _0x22031e = "*𝗕𝗲𝗹𝗼𝘄 𝗔𝗿𝗲 𝗛𝗲𝗿𝗼𝗸𝘂 𝗩𝗮𝗿𝗶𝗮𝗯𝗹𝗲𝘀 𝗙𝗼𝗿 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗:*\n\n";
          for (vrt in _0x53493e) {
            _0x22031e += vrt + '=' + _0x53493e[vrt] + "\n\n";
          }
          _0x2ac30c(_0x22031e);
          break;
        case 'restart':
          if (!_0x4a0f81) {
            throw NotOwner;
          }
          _0x2ac30c("𝐌𝐙𝐀𝐙𝐈-𝐗𝐌𝐃 𝐢𝐬 𝐫𝐞𝐬𝐭𝐚𝐫𝐭𝐢𝐧𝐠. . .");
          await sleep(0xbb8);
          process.exit();
          break;
        case "remove":
        case "kick":
        case 'toka':
          {
            if (!_0x3b8766.isGroup) {
              throw group;
            }
            if (!_0xdc6800) {
              throw botAdmin;
            }
            if (!_0x3e97fd) {
              throw admin;
            }
            if (!_0x3b8766.quoted && (!_0x3b8766.mentionedJid || _0x3b8766.mentionedJid.length === 0x0)) {
              return _0x3b8766.reply("Who should i remove !?");
            }
            let _0x20362b = _0x3b8766.mentionedJid[0x0] ? _0x3b8766.mentionedJid[0x0] : _0x3b8766.quoted ? _0x3b8766.quoted.sender : null;
            const _0x2ec3a6 = _0x20362b.split('@')[0x0];
            if (_0x20362b == "254780015430@s.whatsapp.net") {
              return _0x3b8766.reply("It's an Owners Number and he is dating😂");
            }
            if (_0x20362b == _0x38743a.decodeJid(_0x38743a.user.id)) {
              throw "I cannot remove Myself 😂";
            }
            _0x3b8766.reply('@' + _0x2ec3a6 + " Goodbye🖕");
            await _0x38743a.groupParticipantsUpdate(_0x3b8766.chat, [_0x20362b], "remove");
          }
          break;
        case "instagram":
        case "igdl":
        case 'ig':
          {
            const {
              igdl: _0x1f6de3
            } = require("ruhend-scraper");
            if (!_0x1f241d) {
              return _0x3b8766.reply("Please provide an Instagram link for the video.");
            }
            if (!_0x1f241d.includes("https://www.instagram.com/")) {
              return _0x3b8766.reply("That is not a valid Instagram link.");
            }
            try {
              const _0x1f57d5 = await _0x1f6de3(_0x1f241d);
              if (!_0x1f57d5 || !_0x1f57d5.data || _0x1f57d5.data.length === 0x0) {
                return _0x3b8766.reply("No video found at the provided link.");
              }
              const _0x541572 = _0x1f57d5.data;
              for (let _0x16e884 = 0x0; _0x16e884 < Math.min(0x14, _0x541572.length); _0x16e884++) {
                const _0x2eea57 = _0x541572[_0x16e884];
                const _0x20f3f3 = _0x2eea57.url;
                await _0x38743a.sendMessage(_0x3b8766.chat, {
                  'video': {
                    'url': _0x20f3f3
                  },
                  'mimetype': 'video/mp4',
                  'caption': "DOWNLOADED BY " + botname
                }, {
                  'quoted': _0x3b8766
                });
              }
            } catch (_0x42789e) {
              console.error(_0x42789e);
              return _0x3b8766.reply("An error occurred while processing the request.");
            }
          }
          break;
        case "twitter":
        case "twtdl":
          {
            if (!_0x1f241d) {
              return _0x3b8766.reply("𝗽𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝘁𝘄𝗶𝘁𝘁𝗲𝗿 𝗹𝗶𝗻𝗸 !");
            }
            try {
              const _0x4470a0 = await fetchJson("https://api.dreaded.site/api/alldl?url=" + _0x1f241d);
              if (!_0x4470a0 || _0x4470a0.status !== 0xc8 || !_0x4470a0.data || !_0x4470a0.data.videoUrl) {
                return _0x3b8766.reply("𝗦𝗼𝗿𝗿𝘆 𝘁𝗵𝗲 𝗔𝗣𝗜 𝗱𝗶𝗱𝗻'𝘁 𝗿𝗲𝘀𝗽𝗼𝗻𝗱 𝗰𝗼𝗿𝗿𝗲𝗰𝘁𝗹𝘆. 𝗣𝗹𝗲𝗮𝘀𝗲 𝘁𝗿𝘆 𝗔𝗴𝗮𝗶𝗻 𝗹𝗮𝘁𝗲𝗿!");
              }
              const _0x12dc03 = _0x4470a0.data.videoUrl;
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'video': {
                  'url': _0x12dc03
                },
                'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧",
                'gifPlayback': false
              }, {
                'quoted': _0x3b8766
              });
            } catch (_0x4b1019) {
              _0x3b8766.reply("An error occured. API might be down\n" + _0x4b1019);
            }
          }
          break;
        case 'facebook':
        case 'fb':
        case 'fbdl':
          {
            if (!_0x1f241d) {
              return _0x3b8766.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗹𝗶𝗻𝗸 !");
            }
            if (!_0x1f241d.includes("facebook.com")) {
              return _0x3b8766.reply("That is not a facebook link.");
            }
            try {
              let _0x496e66 = await fetchJson("https://api.dreaded.site/api/facebook?url=" + _0x1f241d);
              if (!_0x496e66 || _0x496e66.status !== 0xc8 || !_0x496e66.facebook || !_0x496e66.facebook.sdVideo) {
                return _0x3b8766.reply("𝗦𝗼𝗿𝗿𝘆 𝘁𝗵𝗲 𝗔𝗣𝗜 𝗱𝗶𝗱𝗻'𝘁 𝗿𝗲𝘀𝗽𝗼𝗻𝗱 𝗰𝗼𝗿𝗿𝗲𝗰𝘁𝗹𝘆. 𝗣𝗹𝗲𝗮𝘀𝗲 𝘁𝗿𝘆 𝗔𝗴𝗮𝗶𝗻 𝗹𝗮𝘁𝗲𝗿!");
              }
              const _0x2e582a = _0x496e66.facebook.sdVideo;
              if (!_0x2e582a) {
                return _0x3b8766.reply("Wrong facebook data. Please ensure the video exists.");
              }
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'video': {
                  'url': _0x2e582a
                },
                'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗",
                'gifPlayback': false
              }, {
                'quoted': _0x3b8766
              });
            } catch (_0x17fe35) {
              console.error("Error occurred:", _0x17fe35);
              _0x3b8766.reply("An error occurred. API might be down. Error: " + _0x17fe35.message);
            }
          }
          break;
        case "tiktok":
        case "tikdl":
          {
            if (!_0x1f241d) {
              return _0x3b8766.reply("Please provide a TikTok video link.");
            }
            try {
              const _0x24e4a1 = await axios.get("https://bk9.fun/download/tiktok?url=" + encodeURIComponent(_0x1f241d));
              if (_0x24e4a1.data.status && _0x24e4a1.data.BK9) {
                const _0x22e986 = _0x24e4a1.data.BK9.BK9;
                await _0x38743a.sendMessage(_0x3b8766.chat, {
                  'text': "𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 𝐹𝑒𝑡𝑐ℎ𝑒𝑑 𝑑𝑎𝑡𝑎 𝑠𝑢𝑐𝑐𝑒𝑠𝑠𝑓𝑢𝑙𝑙𝑦✅ 𝑤𝑎𝑖𝑡 𝑎 𝑚𝑜𝑚𝑒𝑛𝑡. . ."
                }, {
                  'quoted': _0x3b8766
                });
                await _0x38743a.sendMessage(_0x3b8766.chat, {
                  'video': {
                    'url': _0x22e986
                  },
                  'caption': "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗",
                  'gifPlayback': false
                }, {
                  'quoted': _0x3b8766
                });
              } else {
                _0x2ac30c("Failed to retrieve video from the provided link.");
              }
            } catch (_0x245a1a) {
              _0x2ac30c("An error occurred during download: " + _0x245a1a.message);
            }
          }
          break;
        case 'song':
          {
            const _0x14f039 = require("yt-search");
            try {
              if (!_0x1f241d) {
                return _0x3b8766.reply("What song do you want to download?");
              }
              const {
                videos: _0x1ad91f
              } = await _0x14f039(_0x1f241d);
              if (!_0x1ad91f || _0x1ad91f.length === 0x0) {
                return _0x3b8766.reply("No songs found!");
              }
              await _0x3b8766.reply("_Please wait your download is in progress_");
              const _0x4466a1 = _0x1ad91f[0x0].url;
              let _0x340c2a = await fetchJson('https://api.dreaded.site/api/ytdl/audio?url=' + _0x4466a1);
              if (!_0x340c2a || !_0x340c2a.result || !_0x340c2a.result.url) {
                return _0x3b8766.reply("Failed to fetch audio from the API.");
              }
              const _0x4fff39 = _0x340c2a.result.url;
              const _0x3f6644 = _0x340c2a.result.title;
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'audio': {
                  'url': _0x4fff39
                },
                'mimetype': "audio/mpeg",
                'fileName': _0x3f6644 + ".mp3"
              }, {
                'quoted': _0x3b8766
              });
            } catch (_0x595df1) {
              _0x3b8766.reply("Download failed\n" + _0x595df1.message);
            }
          }
          break;
        case 'sc':
        case 'script':
        case "repo":
          _0x38743a.sendMessage(_0x3b8766.chat, {
            'image': {
              'url': "https://i.imgur.com/A08nrWx.jpeg"
            },
            'caption': " Hello👋 *" + _0x4250cf + "*,You can deploy 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 using the GitHub link below 𓅂\n\nFork and give us a star✨.\n\n https://github.com/Viniznimco/DRAGON-XMD\n\nLink with your whatsapp using pairing link below\n\nhttps://dragon-xmd-cjp7.onrender.com/\n\nCopy the session_id and Fill in the required Variables before Deploy\n\nEnjoy and have fun with ░𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗░\n\n𝗠𝗮𝗱𝗲 𝗶𝗻 𝗞𝗲𝗻𝘆𝗮 𝗯𝘆 𝗗𝗥𝗔𝗚𝗢𝗡!\n\n𝗜𝗳 𝘆𝗼𝘂 𝗻𝗲𝗲𝗱 𝘁𝗼 𝗯𝗲 𝗱𝗲𝗽𝗹𝗼𝘆𝗲𝗱 𝘁𝗲𝘅𝘁 𝗺𝗲 𝗼𝗻 +254780015430 𝗼𝗿 𝘁𝗲𝘅𝘁 𝘆𝗼𝘂𝗿 𝗳𝗮𝘃𝗼𝘂𝗿𝗶𝘁𝗲 𝗱𝗲𝗽𝗹𝗼𝘆𝗲𝗿\n\n© 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 𝗗𝗥𝗔𝗚𝗢𝗡 "
          }, {
            'quoted': _0x3b8766
          });
          break;
        case "closetime":
          if (!_0x3b8766.isGroup) {
            throw group;
          }
          if (!_0x3e97fd) {
            throw admin;
          }
          if (!_0xdc6800) {
            throw botAdmin;
          }
          if (_0x32b774[0x1] == 'second') {
            var _0x2e5096 = _0x32b774[0x0] * "1000";
          } else {
            if (_0x32b774[0x1] == "minute") {
              var _0x2e5096 = _0x32b774[0x0] * '60000';
            } else {
              if (_0x32b774[0x1] == "hour") {
                var _0x2e5096 = _0x32b774[0x0] * "3600000";
              } else {
                if (_0x32b774[0x1] == "day") {
                  var _0x2e5096 = _0x32b774[0x0] * "86400000";
                } else {
                  return _0x2ac30c("*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second");
                }
              }
            }
          }
          _0x2ac30c("Countdown of  " + q + " starting from now to close the group");
          setTimeout(() => {
            _0x38743a.groupSettingUpdate(_0x3b8766.chat, "announcement");
            _0x2ac30c("𝗚𝗿𝗼𝘂𝗽 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗰𝗹𝗼𝘀𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝗯𝘆 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗");
          }, _0x2e5096);
          break;
        case "opentime":
          if (!_0x3b8766.isGroup) {
            throw group;
          }
          if (!_0x3e97fd) {
            throw admin;
          }
          if (!_0xdc6800) {
            throw botAdmin;
          }
          if (_0x32b774[0x1] == 'second') {
            var _0x2e5096 = _0x32b774[0x0] * "1000";
          } else {
            if (_0x32b774[0x1] == "minute") {
              var _0x2e5096 = _0x32b774[0x0] * "60000";
            } else {
              if (_0x32b774[0x1] == 'hour') {
                var _0x2e5096 = _0x32b774[0x0] * "3600000";
              } else {
                if (_0x32b774[0x1] == 'day') {
                  var _0x2e5096 = _0x32b774[0x0] * "86400000";
                } else {
                  return _0x2ac30c("*select:*\nsecond\nminute\nhour\n\n*example*\n10 second");
                }
              }
            }
          }
          _0x2ac30c("Countdown of " + q + " starting from now to open the group");
          setTimeout(() => {
            _0x38743a.groupSettingUpdate(_0x3b8766.chat, 'not_announcement');
            _0x2ac30c("𝗚𝗿𝗼𝘂𝗽 𝗼𝗽𝗲𝗻𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗯𝘆 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗠𝗗");
          }, _0x2e5096);
          break;
        case "close":
        case 'mute':
          {
            if (!_0x3b8766.isGroup) {
              throw group;
            }
            if (!_0xdc6800) {
              throw botAdmin;
            }
            if (!_0x3e97fd) {
              throw admin;
            }
            await _0x38743a.groupSettingUpdate(_0x3b8766.chat, 'announcement');
            _0x3b8766.reply("Group successfully locked!");
          }
          break;
        case "open":
        case 'unmute':
          {
            if (!_0x3b8766.isGroup) {
              throw group;
            }
            if (!_0xdc6800) {
              throw botAdmin;
            }
            if (!_0x3e97fd) {
              throw admin;
            }
            await _0x38743a.groupSettingUpdate(_0x3b8766.chat, "not_announcement");
            _0x3b8766.reply("𝗚𝗿𝗼𝘂𝗽 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝗨𝗻𝗹𝗼𝗰𝗸𝗲𝗱 𝗕𝘆 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗!");
          }
          break;
        case "disp-1":
          {
            if (!_0x3b8766.isGroup) {
              throw group;
            }
            if (!_0xdc6800) {
              throw botAdmin;
            }
            if (!_0x3e97fd) {
              throw admin;
            }
            await _0x38743a.groupToggleEphemeral(_0x3b8766.chat, 86400);
            _0x3b8766.reply("Dissapearing messages successfully turned on for 24hrs!");
          }
          break;
        case 'promote':
          {
            if (!_0x3b8766.isGroup) {
              throw group;
            }
            if (!_0xdc6800) {
              throw botAdmin;
            }
            if (!_0x3e97fd) {
              throw admin;
            }
            if (!_0x3b8766.quoted) {
              throw "Ttag someone with the command!";
            }
            let _0x134be9 = _0x3b8766.mentionedJid[0x0] ? _0x3b8766.mentionedJid : _0x3b8766.quoted ? [_0x3b8766.quoted.sender] : [_0x1f241d.replace(/[^0-9]/g, '') + "@s.whatsapp.net"];
            await _0x38743a.groupParticipantsUpdate(_0x3b8766.chat, _0x134be9, 'promote');
            _0x3b8766.reply("𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝗽𝗿𝗼𝗺𝗼𝘁𝗲𝗱,𝗯𝗲 𝗮 𝗵𝗮𝗿𝗱𝘄𝗼𝗿𝗸𝗶𝗻𝗴 𝗮𝗱𝗺𝗶𝗻! 🦄");
          }
          break;
        case 'demote':
          {
            if (!_0x3b8766.isGroup) {
              throw group;
            }
            if (!_0xdc6800) {
              throw botAdmin;
            }
            if (!_0x3e97fd) {
              throw admin;
            }
            if (!_0x3b8766.quoted) {
              throw "Ttag someone with the command!";
            }
            let _0x170912 = _0x3b8766.mentionedJid[0x0] ? _0x3b8766.mentionedJid : _0x3b8766.quoted ? [_0x3b8766.quoted.sender] : [_0x1f241d.replace(/[^0-9]/g, '') + "@s.whatsapp.net"];
            await _0x38743a.groupParticipantsUpdate(_0x3b8766.chat, _0x170912, "demote");
            _0x3b8766.reply("𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗴𝘂𝗹𝗹𝘆 𝗱𝗲𝗺𝗼𝘁𝗲𝗱, 𝗵𝗼𝘄 𝗱𝗼 𝘆𝗼𝘂 𝗳𝗲𝗲𝗹 𝘆𝗼𝘂 𝗮𝗿𝗲 𝗻𝗼𝘁 𝗮𝗻 𝗮𝗱𝗺𝗶𝗻! 😲");
          }
          break;
        case "disp-7":
          {
            if (!_0x3b8766.isGroup) {
              throw group;
            }
            if (!_0xdc6800) {
              throw botAdmin;
            }
            if (!_0x3e97fd) {
              throw admin;
            }
            await _0x38743a.groupToggleEphemeral(_0x3b8766.chat, 604800);
            _0x3b8766.reply("𝗗𝗶𝘀𝗮𝗽𝗽𝗲𝗮𝗿𝗶𝗻𝗴 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀 𝘀𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝘁𝘂𝗿𝗻𝗲𝗱 𝗼𝗻 𝗳𝗼𝗿 7𝗱𝗮𝘆𝘀!");
          }
          break;
        case "disp-90":
          {
            if (!_0x3b8766.isGroup) {
              throw group;
            }
            if (!_0xdc6800) {
              throw botAdmin;
            }
            if (!_0x3e97fd) {
              throw admin;
            }
            await _0x38743a.groupToggleEphemeral(_0x3b8766.chat, 7776000);
            _0x3b8766.reply("𝗗𝗶𝘀𝗮𝗽𝗽𝗲𝗮𝗿𝗶𝗻𝗴 𝗺𝗲𝘀𝘀𝗮𝗴𝗲𝘀 𝘀𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝘁𝘂𝗿𝗻𝗲𝗱 𝗼𝗻 𝗳𝗼𝗿 90 𝗱𝗮𝘆𝘀!");
          }
          break;
        case "disp-off":
          {
            if (!_0x3b8766.isGroup) {
              throw group;
            }
            if (!_0xdc6800) {
              throw botAdmin;
            }
            if (!_0x3e97fd) {
              throw admin;
            }
            await _0x38743a.groupToggleEphemeral(_0x3b8766.chat, 0x0);
            _0x3b8766.reply("Dissapearing messages successfully turned off!");
          }
          break;
        case "icon":
          {
            if (!_0x3b8766.isGroup) {
              throw group;
            }
            if (!_0x3e97fd) {
              throw admin;
            }
            if (!_0xdc6800) {
              throw botAdmin;
            }
            if (!_0x44775e) {
              throw "Send or tag an image with the caption " + (prefix + _0x3acc5c);
            }
            if (!/image/.test(_0x5269b0)) {
              throw "Send or tag an image with the caption " + (prefix + _0x3acc5c);
            }
            if (/webp/.test(_0x5269b0)) {
              throw "Send or tag an image with the caption " + (prefix + _0x3acc5c);
            }
            let _0x37b261 = await _0x38743a.downloadAndSaveMediaMessage(_0x44775e);
            await _0x38743a.updateProfilePicture(_0x3b8766.chat, {
              'url': _0x37b261
            })["catch"](_0x5d3287 => fs.unlinkSync(_0x37b261));
            _0x2ac30c("𝗚𝗿𝗼𝘂𝗽 𝗜𝗰𝗼𝗻 𝗨𝗽𝗱𝗮𝘁𝗲𝗱 𝗯𝘆 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗");
          }
          break;
        case "revoke":
        case "newlink":
        case "reset":
          {
            if (!_0x3b8766.isGroup) {
              throw group;
            }
            if (!_0x3e97fd) {
              throw admin;
            }
            if (!_0xdc6800) {
              throw botAdmin;
            }
            await _0x38743a.groupRevokeInvite(_0x3b8766.chat);
            await _0x38743a.sendText(_0x3b8766.chat, "Group link revoked!", _0x3b8766);
            let _0x5ed6b5 = await _0x38743a.groupInviteCode(_0x3b8766.chat);
            _0x38743a.sendText(_0x3b8766.sender, "https://chat.whatsapp.com/" + _0x5ed6b5 + "\n\nHere is the new group link for " + _0xbd10c6.subject, _0x3b8766, {
              'detectLink': true
            });
            _0x38743a.sendText(_0x3b8766.chat, "Sent you the new group link in your inbox!", _0x3b8766);
          }
          break;
        case "delete":
        case "del":
          {
            if (!_0x3b8766.isGroup) {
              throw group;
            }
            if (!_0xdc6800) {
              throw botAdmin;
            }
            if (!_0x3e97fd) {
              throw admin;
            }
            if (!_0x3b8766.quoted) {
              throw "No message quoted for deletion";
            }
            let {
              chat: _0x104281,
              fromMe: _0x3884df,
              id: _0x27992d,
              isBaileys: _0x32b2eb
            } = _0x3b8766.quoted;
            if (_0x32b2eb) {
              throw "I cannot delete. Quoted message is my message or another bot message.";
            }
            _0x38743a.sendMessage(_0x3b8766.chat, {
              'delete': {
                'remoteJid': _0x3b8766.chat,
                'fromMe': false,
                'id': _0x3b8766.quoted.id,
                'participant': _0x3b8766.quoted.sender
              }
            });
          }
          break;
        case "leave":
          {
            if (!_0x4a0f81) {
              throw NotOwner;
            }
            if (!_0x3b8766.isGroup) {
              throw group;
            }
            await _0x38743a.sendMessage(_0x3b8766.chat, {
              'text': "𝗚𝗼𝗼𝗱𝗯𝘆𝗲 𝗲𝘃𝗲𝗿𝘆𝗼𝗻𝗲👋. 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 𝗶𝘀 𝗟𝗲𝗮𝘃𝗶𝗻𝗴 𝘁𝗵𝗲 𝗚𝗿𝗼𝘂𝗽 𝗻𝗼𝘄...",
              'mentions': _0x3b3856.map(_0xf01534 => _0xf01534.id)
            }, {
              'quoted': _0x3b8766
            });
            await _0x38743a.groupLeave(_0x3b8766.chat);
          }
          break;
        case "subject":
        case "changesubject":
          {
            if (!_0x3b8766.isGroup) {
              throw group;
            }
            if (!_0xdc6800) {
              throw botAdmin;
            }
            if (!_0x3e97fd) {
              throw admin;
            }
            if (!_0x1f241d) {
              throw "Provide the text for the group subject.";
            }
            await _0x38743a.groupUpdateSubject(_0x3b8766.chat, _0x1f241d);
            _0x3b8766.reply("Group name successfully updated! 💀");
          }
          break;
        case "desc":
        case "setdesc":
          {
            if (!_0x3b8766.isGroup) {
              throw group;
            }
            if (!_0xdc6800) {
              throw botAdmin;
            }
            if (!_0x3e97fd) {
              throw admin;
            }
            if (!_0x1f241d) {
              throw "Provide the text for the group description";
            }
            await _0x38743a.groupUpdateDescription(_0x3b8766.chat, _0x1f241d);
            _0x3b8766.reply("Group description successfully updated! 🥶");
          }
          break;
        case "hidetag":
        case "tag":
          {
            if (!_0x3b8766.isGroup) {
              throw group;
            }
            if (!_0xdc6800) {
              throw botAdmin;
            }
            if (!_0x3e97fd) {
              throw admin;
            }
            _0x38743a.sendMessage(_0x3b8766.chat, {
              'text': q ? q : "😅𝗕𝗹𝗶𝗻𝗱 𝗧𝗮𝗴𝘀😅",
              'mentions': _0x3b3856.map(_0x3a237f => _0x3a237f.id)
            }, {
              'quoted': _0x3b8766
            });
          }
          break;
        case 'tagall':
          {
            if (!_0x3b8766.isGroup) {
              throw group;
            }
            if (!_0xdc6800) {
              throw botAdmin;
            }
            if (!_0x3e97fd) {
              throw admin;
            }
            let _0x3491e7 = "𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 𝗶𝘀 𝗧𝗮𝗴𝗶𝗻𝗴 𝘆𝗼𝘂 𝗼𝗻 𝗯𝗲𝗵𝗮𝗹𝗳 𝗼𝗳 𝘆𝗼𝘂𝗿 𝗶𝗻𝗮𝗰𝘁𝗶𝘃𝗲 𝗹𝗼𝘃𝗲𝗿🖕😅: \n   \n  Message " + (q ? q : '') + "*\n\n";
            for (let _0x337373 of _0x3b3856) {
              _0x3491e7 += "📧 @" + _0x337373.id.split('@')[0x0] + "\n";
            }
            _0x38743a.sendMessage(_0x3b8766.chat, {
              'text': _0x3491e7,
              'mentions': _0x3b3856.map(_0x3cbb53 => _0x3cbb53.id)
            }, {
              'quoted': _0x3b8766
            });
          }
          break;
        case 'whatsong':
        case "shazam":
          let _0x127c0b = new acrcloud({
            'host': "identify-eu-west-1.acrcloud.com",
            'access_key': "2631ab98e77b49509e3edcf493757300",
            'access_secret': "KKbVWlTNCL3JjxjrWnywMdvQGanyhKRN0fpQxyUo"
          });
          if (!_0x3b8766.quoted) {
            throw "Tag a short video or audio";
          }
          let _0x571123 = _0x3b8766.quoted ? _0x3b8766.quoted : _0x3b8766;
          let _0x289464 = (_0x571123.msg || _0x571123).mimetype || _0x571123.mediaType || '';
          if (/video|audio/.test(_0x289464)) {
            let _0x133a0d = await _0x571123.download();
            await _0x2ac30c("Analyzing the media...");
            let {
              status: _0x2022ff,
              metadata: _0x29bae2
            } = await _0x127c0b.identify(_0x133a0d);
            if (_0x2022ff.code !== 0x0) {
              throw _0x2022ff.msg;
            }
            let {
              title: _0xa1a052,
              artists: _0x3c1983,
              album: _0x275357,
              genres: _0x11cb9b,
              release_date: _0x457e4f
            } = _0x29bae2.music[0x0];
            let _0x3ececa = "*• Title:* " + _0xa1a052 + (_0x3c1983 ? "\n*• Artists:* " + _0x3c1983.map(_0x42333b => _0x42333b.name).join(", ") : '');
            _0x3ececa += '' + (_0x275357 ? "\n*• Album:* " + _0x275357.name : '') + (_0x11cb9b ? "\n*• Genres:* " + _0x11cb9b.map(_0x259add => _0x259add.name).join(", ") : '') + "\n";
            _0x3ececa += "*• Release Date:* " + _0x457e4f;
            await _0x38743a.sendMessage(_0x3b8766.chat, {
              'text': _0x3ececa.trim()
            }, {
              'quoted': _0x3b8766
            });
            const {
              videos: _0x59f71a
            } = await yts(_0xa1a052);
            if (!_0x59f71a || _0x59f71a.length <= 0x0) {
              _0x2ac30c("No Matching videos found for : *" + _0x32b774[0x0] + "*!!");
              return;
            }
            let _0x31ac09 = _0x59f71a[0x0].url;
            let _0x1e3b82 = await ytdl.getInfo(_0x31ac09);
            if (_0x1e3b82.videoDetails.lengthSeconds >= 0x708) {
              _0x2ac30c("Too big!");
              return;
            }
            let _0x3c1d10 = _0x1e3b82.videoDetails.title;
            let _0x25b0ea = '' + Math.floor(Math.random() * 0x2710) + ".mp3";
            const _0x3d9c1a = ytdl(_0x31ac09, {
              'filter': _0x3f69cf => _0x3f69cf.audioBitrate == 0xa0 || _0x3f69cf.audioBitrate == 0x80
            }).pipe(fs.createWriteStream('./' + _0x25b0ea));
            console.log("Audio downloading ->", _0x31ac09);
            await new Promise((_0x448473, _0x396126) => {
              _0x3d9c1a.on("error", _0x396126);
              _0x3d9c1a.on("finish", _0x448473);
            });
            let _0x214d66 = fs.statSync('./' + _0x25b0ea);
            let _0x1f141c = _0x214d66.size;
            let _0x5bb611 = _0x1f141c / 1048576;
            console.log("Audio downloaded ! \n Size: " + _0x5bb611);
            if (_0x5bb611 <= 0x28) {
              await _0x38743a.sendMessage(_0x3a9bca, {
                'document': fs.readFileSync('./' + _0x25b0ea),
                'mimetype': "audio/mpeg",
                'fileName': _0x3c1d10 + ".mp3"
              }, {
                'quoted': _0x3b8766
              });
            } else {
              _0x2ac30c("File size bigger.");
            }
            fs.unlinkSync('./' + _0x25b0ea);
          }
          break;
        case 's':
        case "sticker":
          {
            const {
              Sticker: _0x491cd9,
              createSticker: _0x203b15,
              StickerTypes: _0x307c9d
            } = require('wa-sticker-formatter');
            if (!_0x214b48) {
              _0x3b8766.reply("Quote an image or a short video.");
              return;
            }
            ;
            let _0x1a8799;
            if (_0x214b48.imageMessage) {
              _0x1a8799 = _0x214b48.imageMessage;
            } else {
              if (_0x214b48.videoMessage) {
                _0x1a8799 = _0x214b48.videoMessage;
              } else {
                _0x3b8766.reply("That is neither an image nor a short video! ");
                return;
              }
            }
            ;
            var _0x12a202 = await _0x38743a.downloadAndSaveMediaMessage(_0x1a8799);
            let _0xa6aefb = new _0x491cd9(_0x12a202, {
              'pack': packname,
              'author': author,
              'type': _0x307c9d.FULL,
              'categories': ['🤩', '🎉'],
              'id': "12345",
              'quality': 0x46,
              'background': "transparent"
            });
            const _0x4c6405 = await _0xa6aefb.toBuffer();
            _0x38743a.sendMessage(_0x3b8766.chat, {
              'sticker': _0x4c6405
            }, {
              'quoted': _0x3b8766
            });
          }
          break;
        case 'dp':
          {
            try {
              ha = _0x3b8766.quoted.sender;
              qd = await _0x38743a.getName(ha);
              pp2 = await _0x38743a.profilePictureUrl(ha, "image");
            } catch {
              pp2 = 'https://tinyurl.com/yx93l6da';
            }
            if (!_0x3b8766.quoted) {
              throw "Tag a user!";
            }
            bar = "Profile Picture of " + qd;
            _0x38743a.sendMessage(_0x3b8766.chat, {
              'image': {
                'url': pp2
              },
              'caption': bar,
              'fileLength': "999999999999"
            }, {
              'quoted': _0x3b8766
            });
          }
          break;
        case "list":
        case "vars":
        case "help":
          _0x2ac30c("𝟏 Owner➣ 𝐆𝐞𝐭 𝗠𝘇𝗮𝘇𝗶  𝐜𝐨𝐧𝐭𝐚𝐜𝐭\n\n𝟐 𝐁𝐫𝐨𝐚𝐝𝐜𝐚𝐬𝐭➣ 𝐒𝐞𝐧𝐝𝐬 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐭𝐨 𝐚𝐥𝐥 𝐠𝐫𝐨𝐮𝐩𝐬\n\n𝟑 𝐉𝐨𝐢𝐧➣ 𝐭𝐚𝐠 𝐠𝐫𝐨𝐮𝐩 𝐥𝐢𝐧𝐤 𝐰𝐢𝐭𝐡 𝐣𝐨𝐢𝐧\n\n𝟒 𝐛𝐨𝐭𝐩𝐩➣ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐛𝐨𝐭𝐬 𝐚𝐜𝐜𝐨𝐮𝐧𝐭 𝐝𝐩\n\n𝟓 𝐁𝐥𝐨𝐜𝐤➣ 𝐁𝐥𝐨𝐜𝐤 𝐭𝐡𝐞𝐦 𝐟𝐚𝐤𝐞 𝐟𝐫𝐢𝐞𝐧𝐝𝐬\n\n𝟔 𝐊𝐢𝐥𝐥➣ 𝐊𝐢𝐥𝐥𝐬 𝐠𝐫𝐨𝐮𝐩 𝐢𝐧 𝐬𝐞𝐜𝐨𝐧𝐝𝐬\n\n𝟕 𝐔𝐧𝐛𝐥𝐨𝐜𝐤➣ 𝐆𝐢𝐯𝐞 𝐭𝐡𝐞𝐦 𝐟𝐚𝐤𝐞 𝐟𝐫𝐢𝐞𝐧𝐝𝐬 𝐚 𝐬𝐞𝐜𝐨𝐧𝐝 𝐜𝐡𝐚𝐧𝐜𝐞\n\n𝟖 𝐒𝐞𝐭𝐯𝐚𝐫➣ 𝐒𝐞𝐭 𝐯𝐚𝐫𝐬 𝐢𝐧 𝐡𝐞𝐫𝐨𝐤𝐮\n\n𝟗 𝐒𝐭𝐢𝐜𝐤𝐞𝐫➣ 𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐬 𝐚 𝐩𝐡𝐨𝐭𝐨 𝐨𝐫 𝐚 𝐬𝐡𝐨𝐫𝐭 𝐯𝐢𝐝𝐞𝐨 𝐭𝐨 𝐚 𝐬𝐭𝐢𝐜𝐤𝐞𝐫\n\n𝟏𝟎 𝐓𝐨𝐢𝐦𝐠➣ 𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐬 𝐚 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝐭𝐨 𝐚 𝐩𝐡𝐨𝐭𝐨\n\n𝟏𝟏 𝐏𝐥𝐚𝐲➣ 𝐆𝐞𝐭 𝐲𝐨𝐮𝐫 𝐟𝐚𝐯𝐨𝐫𝐢𝐭𝐞 𝐬𝐨𝐧𝐠\n\n𝟏𝟐 𝐖𝐡𝐚𝐭𝐬𝐨𝐧𝐠➣ 𝐠𝐞𝐭 𝐭𝐡𝐞 𝐭𝐢𝐭𝐥𝐞 𝐨𝐟 𝐭𝐡𝐞 𝐬𝐨𝐧𝐠\n\n𝟏𝟑 𝐘𝐭𝐬 ➣ 𝐆𝐞𝐭 𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐯𝐢𝐝𝐞𝐨𝐬\n\n𝟏𝟒 𝐌𝐨𝐯𝐢𝐞➣ 𝐆𝐞𝐭 𝐲𝐨𝐮𝐫 𝐟𝐚𝐯𝐨𝐫𝐢𝐭𝐞 𝐦𝐨𝐯𝐢𝐞 𝐝𝐞𝐭𝐚𝐢𝐥𝐬\n\n𝟏𝟓 𝐌𝐢𝐱➣ 𝐂𝐨𝐦𝐛𝐢𝐧𝐞𝐬 +𝟐𝐞𝐦𝐨𝐣𝐢𝐬\n\n𝟏𝟔 𝐀𝐢-𝐢𝐦𝐠➣ 𝐆𝐞𝐭 𝐚𝐧 𝐀𝐢 𝐩𝐡𝐨𝐭𝐨\n\n𝟏𝟕 𝐆𝐩𝐭 ➣ 𝐇𝐞𝐫𝐞 𝐭𝐨 𝐚𝐧𝐬𝐰𝐞𝐫 𝐲𝐨𝐮𝐫 𝐪𝐮𝐞𝐬𝐭𝐢𝐨𝐧𝐬\n\n𝟏𝟖 𝐃𝐩➣ 𝐆𝐞𝐭𝐬 𝐚 𝐩𝐞𝐫𝐬𝐨𝐧 𝐝𝐩\n\n𝟏𝟗 𝐒𝐩𝐞𝐞𝐝 ➣ 𝐂𝐡𝐞𝐜𝐤𝐬 𝐛𝐨𝐭𝐬 𝐬𝐩𝐞𝐞𝐝\n\n𝟐𝟎 𝐀𝐥𝐢𝐯𝐞➣ 𝐂𝐡𝐞𝐜𝐤 𝐰𝐡𝐞𝐭𝐡𝐞𝐫 𝐭𝐡𝐞 𝐛𝐨𝐭 𝐢𝐬 𝐬𝐭𝐢𝐥𝐥 𝐤𝐢𝐜𝐤𝐢𝐧𝐠\n\n𝟐𝟏 𝐑𝐮𝐧𝐭𝐢𝐦𝐞➣ 𝐖𝐡𝐞𝐧 𝐝𝐢𝐝 𝐛𝐨𝐭 𝐬𝐭𝐚𝐫𝐭𝐞𝐝 𝐨𝐩𝐞𝐫𝐚𝐭𝐢𝐧𝐠\n\n𝟐𝟐 𝐒𝐜𝐫𝐢𝐩𝐭➣ 𝐆𝐞𝐭 𝐛𝐨𝐭 𝐬𝐜𝐫𝐢𝐩𝐭\n\n𝟐𝟑 𝐎𝐰𝐧𝐞𝐫  ➣ 𝐆𝐞𝐭 𝐨𝐰𝐧𝐞𝐫(𝐬) 𝐜𝐨𝐧𝐭𝐚𝐜𝐭\n\n𝟐𝟒 𝐕𝐚𝐫𝐬 ➣ 𝐒𝐞𝐞 𝐚𝐥𝐥 𝐯𝐚𝐫𝐢𝐚𝐛𝐥𝐞𝐬\n\n𝟐𝟓 𝐏𝐫𝐨𝐦𝐨𝐭𝐞➣ 𝐆𝐢𝐯𝐞𝐬 𝐨𝐧𝐞 𝐚𝐝𝐦𝐢𝐧 𝐫𝐨𝐥𝐞\n\n𝟐𝟔 𝐃𝐞𝐦𝐨𝐭𝐞➣ 𝐃𝐞𝐦𝐨𝐭𝐞𝐬 𝐟𝐫𝐨𝐦 𝐠𝐫𝐨𝐮𝐩 𝐚𝐝𝐦𝐢𝐧 𝐭𝐨 𝐚 𝐦𝐞𝐦𝐛𝐞𝐫\n\n𝟐𝟕 𝐃𝐞𝐥𝐞𝐭𝐞➣ 𝐃𝐞𝐥𝐞𝐭𝐞 𝐚 𝐦𝐞𝐬𝐬𝐚𝐠𝐞\n\n𝟐𝟖 𝐑𝐞𝐦𝐨𝐯𝐞/𝐤𝐢𝐜𝐤➣ 𝐊𝐢𝐜𝐤 𝐭𝐡𝐚𝐭 𝐭𝐞𝐫𝐫𝐨𝐫𝐢𝐬𝐭 𝐟𝐫𝐨𝐦 𝐚 𝐠𝐫𝐨𝐮𝐩\n\n𝟐𝟗 𝐅𝐨𝐫𝐞𝐢𝐠𝐧𝐞𝐫𝐬➣ 𝐆𝐞𝐭 𝐟𝐨𝐫𝐞𝐢𝐠𝐧 𝐧𝐮𝐦𝐛𝐞𝐫𝐬\n\n𝟑𝟎 𝐂𝐥𝐨𝐬𝐞➣ 𝐓𝐢𝐦𝐞 𝐟𝐨𝐫 𝐠𝐫𝐨𝐮𝐩 𝐦𝐞𝐦𝐛𝐞𝐫𝐬 𝐭𝐨 𝐭𝐚𝐤𝐞 𝐚 𝐛𝐫𝐞𝐚𝐤 𝐨𝐧𝐥𝐲 𝐚𝐝𝐦𝐢𝐧𝐬 𝐜𝐚𝐧 𝐜𝐡𝐚𝐭\n\n𝟑𝟏 𝐎𝐩𝐞𝐧 ➣ 𝐄𝐯𝐞𝐫𝐲𝐨𝐧𝐞 𝐜𝐚𝐧 𝐜𝐡𝐚𝐭 𝐢𝐧 𝐚 𝐠𝐫𝐨𝐮𝐩\n\n𝟑𝟐 𝐈𝐜𝐨𝐧➣ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐠𝐫𝐨𝐮𝐩 𝐢𝐜𝐨𝐧\n\n𝟑𝟑 𝐒𝐮𝐛𝐣𝐞𝐜𝐭➣ 𝐂𝐡𝐚𝐧𝐠𝐞 𝐠𝐫𝐨𝐮𝐩 𝐬𝐮𝐛𝐣𝐞𝐜𝐭\n\n𝟑𝟒 𝐃𝐞𝐬𝐜➣ 𝐆𝐞𝐭 𝐠𝐫𝐨𝐮𝐩 𝐝𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧\n\n𝟑𝟓 𝐋𝐞𝐚𝐯𝐞➣ 𝐓𝐡𝐞 𝐠𝐫𝐨𝐮𝐩 𝐢𝐬 𝐛𝐨𝐫𝐢𝐧𝐠 ,𝐭𝐢𝐦𝐞 𝐟𝐨𝐫 𝐛𝐨𝐭 𝐭𝐨 𝐥𝐞𝐚𝐯𝐞\n\n𝟑𝟔 𝐓𝐚𝐠𝐚𝐥𝐥 ➣ 𝐓𝐚𝐠 𝐞𝐯𝐞𝐫𝐲𝐨𝐧𝐞 𝐢𝐧 𝐚 𝐠𝐫𝐨𝐮𝐩 𝐜𝐡𝐚𝐭\n\n𝟑𝟕 𝐇𝐢𝐝𝐞𝐭𝐚𝐠➣ 𝐀𝐭𝐭𝐞𝐧𝐭𝐢𝐨𝐧! 𝐀𝐭𝐭𝐞𝐧𝐭𝐢𝐨𝐧! 𝐬𝐨𝐦𝐞𝐨𝐧𝐞 𝐡𝐚𝐬 𝐬𝐨𝐦𝐞𝐭𝐡𝐢𝐧𝐠 𝐭𝐨 𝐬𝐚𝐲\n\n𝟑𝟖 𝐑𝐞𝐯𝐨𝐤𝐞 ➣ 𝐑𝐞𝐬𝐞𝐭 𝐠𝐫𝐨𝐮𝐩 𝐥𝐢𝐧𝐤");
          break;
        case 'vv':
        case "retrieve":
          {
            if (!_0x3b8766.quoted) {
              return _0x3b8766.reply("quote a viewonce message eh");
            }
            const _0x5d6666 = _0x3b8766.msg?.["contextInfo"]?.["quotedMessage"];
            if (_0x5d6666.imageMessage) {
              let _0x412381 = _0x5d6666.imageMessage.caption;
              let _0x5dc46f = await _0x38743a.downloadAndSaveMediaMessage(_0x5d6666.imageMessage);
              _0x38743a.sendMessage(_0x3b8766.chat, {
                'image': {
                  'url': _0x5dc46f
                },
                'caption': "Retrieved by DRAGON-XMD!\n" + _0x412381
              }, {
                'quoted': _0x3b8766
              });
            }
            if (_0x5d6666.videoMessage) {
              let _0x25dfe7 = _0x5d6666.videoMessage.caption;
              let _0x51bba5 = await _0x38743a.downloadAndSaveMediaMessage(_0x5d6666.videoMessage);
              _0x38743a.sendMessage(_0x3b8766.chat, {
                'video': {
                  'url': _0x51bba5
                },
                'caption': "Retrieved by DRAGON-XMD!\n" + _0x25dfe7
              }, {
                'quoted': _0x3b8766
              });
            }
          }
          break;
        case "vv2":
        case "wah":
          {
            if (!_0x3b8766.quoted) {
              return _0x3b8766.reply("quote a viewonce message eh");
            }
            const _0x590bd4 = _0x3b8766.msg?.["contextInfo"]?.["quotedMessage"];
            if (_0x590bd4.imageMessage) {
              let _0x443377 = _0x590bd4.imageMessage.caption;
              let _0x1d8e60 = await _0x38743a.downloadAndSaveMediaMessage(_0x590bd4.imageMessage);
              _0x38743a.sendMessage(_0x38743a.user.id, {
                'image': {
                  'url': _0x1d8e60
                },
                'caption': "Retrieved by DRAGON-XMD!\n" + _0x443377
              }, {
                'quoted': _0x3b8766
              });
            }
            if (_0x590bd4.videoMessage) {
              let _0x152e09 = _0x590bd4.videoMessage.caption;
              let _0x2cd62c = await _0x38743a.downloadAndSaveMediaMessage(_0x590bd4.videoMessage);
              _0x38743a.sendMessage(_0x38743a.user.id, {
                'video': {
                  'url': _0x2cd62c
                },
                'caption': "Retrieved by DRAGON-XMD!\n" + _0x152e09
              }, {
                'quoted': _0x3b8766
              });
            }
          }
          break;
        case "take":
          {
            const {
              Sticker: _0x2fd71b,
              createSticker: _0x4cdba5,
              StickerTypes: _0x2322c7
            } = require("wa-sticker-formatter");
            if (!_0x214b48) {
              _0x3b8766.reply("Quote an image, a short video or a sticker to change watermark.");
              return;
            }
            ;
            let _0x28d7d2;
            if (_0x214b48.imageMessage) {
              _0x28d7d2 = _0x214b48.imageMessage;
            } else {
              if (_0x214b48.videoMessage) {
                _0x28d7d2 = _0x214b48.videoMessage;
              } else {
                if (_0x214b48.stickerMessage) {
                  _0x28d7d2 = _0x214b48.stickerMessage;
                } else {
                  _0x3b8766.reply("This is neither a sticker, image nor a video...");
                  return;
                }
              }
            }
            ;
            var _0x12a202 = await _0x38743a.downloadAndSaveMediaMessage(_0x28d7d2);
            let _0xf9bbb0 = new _0x2fd71b(_0x12a202, {
              'pack': _0x4250cf,
              'author': _0x4250cf,
              'type': _0x2322c7.FULL,
              'categories': ['🤩', '🎉'],
              'id': "12345",
              'quality': 0x46,
              'background': 'transparent'
            });
            const _0x28ed53 = await _0xf9bbb0.toBuffer();
            _0x38743a.sendMessage(_0x3b8766.chat, {
              'sticker': _0x28ed53
            }, {
              'quoted': _0x3b8766
            });
          }
          break;
        case 'song2':
          {
            const _0x4ed139 = require("yt-search");
            const _0x302d4d = require("node-fetch");
            const _0x382294 = async _0x3e9467 => {
              const _0x21aa29 = await _0x302d4d(_0x3e9467);
              return _0x21aa29.json();
            };
            try {
              if (!_0x1f241d || _0x1f241d.trim().length === 0x0) {
                return _0x3b8766.reply("What song do you want to download ?");
              }
              const _0x5ebff5 = await _0x4ed139(_0x1f241d);
              if (!_0x5ebff5 || !_0x5ebff5.videos.length) {
                return message.reply("No video found for the specified query.");
              }
              const _0x5dd817 = _0x5ebff5.videos[0x0];
              const _0x4345fa = _0x5dd817.url;
              _0x3b8766.reply("_Please wait your download on progress..._");
              let _0x16386d;
              let _0x1c124c;
              let _0x1046f2;
              _0x16386d = await _0x382294("https://xploader-api.vercel.app/ytmp3?url=" + encodeURIComponent(_0x4345fa));
              if (_0x16386d.success) {
                _0x1c124c = _0x16386d.result.download_url;
                _0x1046f2 = _0x16386d.result;
              } else {
                _0x16386d = await _0x382294("https://api.ryzendesu.vip/api/downloader/ytmp3?url=" + encodeURIComponent(_0x4345fa));
                if (_0x16386d.success) {
                  _0x1c124c = _0x16386d.result.download_url;
                  _0x1046f2 = _0x16386d.result;
                } else {
                  _0x16386d = await _0x382294("https://api.dreaded.site/api/ytdl/audio?url=" + encodeURIComponent(_0x4345fa));
                  if (_0x16386d.success) {
                    _0x1c124c = _0x16386d.result.download_url;
                    _0x1046f2 = _0x16386d.result;
                  }
                }
              }
              if (!_0x1c124c || !_0x1046f2) {
                return _0x3b8766.reply("Failed to retrieve download URL from all sources. Please try again later.");
              }
              const _0x2c5667 = {
                'audio': {
                  'url': _0x1c124c
                },
                'mimetype': "audio/mp4",
                'fileName': _0x1046f2.title + ".mp3"
              };
              await _0x38743a.sendMessage(_0x3b8766.chat, _0x2c5667, {
                'quoted': _0x3b8766
              });
            } catch (_0x407c2e) {
              console.error("Error during download process:", _0x407c2e);
              return _0x3b8766.reply("Download failed due to an error: " + (_0x407c2e.message || _0x407c2e));
            }
          }
          break;
        case 'ytsearch':
        case 'yts':
          {
            if (!_0x1f241d) {
              _0x2ac30c("Provide a search term!E.g: Alan walker alone");
              return;
            }
            const {
              videos: _0x5463e9
            } = await yts(_0x1f241d);
            if (!_0x5463e9 || _0x5463e9.length <= 0x0) {
              _0x2ac30c("No Matching videos found for : *" + _0x1f241d + "*!!");
              return;
            }
            const _0x3a6e85 = _0x5463e9.length < 0xa ? _0x5463e9.length : 0xa;
            let _0x53c246 = "YouTube Search\n🔍 Query ~> " + _0x1f241d + "\n\n";
            for (let _0xc74485 = 0x0; _0xc74485 < _0x3a6e85; _0xc74485++) {
              _0x53c246 += "Link ~> " + _0x5463e9[_0xc74485].url + "\nChannel ~> " + _0x5463e9[_0xc74485].author.name + "\nTitle ~> " + _0x5463e9[_0xc74485].title + "\n\n";
            }
            _0x2ac30c(_0x53c246);
            return;
          }
          break;
        case "ytmp3":
        case "yta":
          {
            try {
              if (!_0x1f241d) {
                return _0x3b8766.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝗹𝗶𝗻𝗸!");
              }
              let _0x12ff85 = _0x1f241d.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
              if (!_0x12ff85) {
                return _0x3b8766.reply("𝗧𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮 𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝗟𝗶𝗻𝗸");
              }
              let _0x312de5 = parseInt(_0x1f241d) - 0x1;
              if (_0x312de5 < 0x0 || _0x312de5 >= _0x12ff85.length) {
                return _0x3b8766.reply("𝗜𝗻𝘃𝗮𝗹𝗶𝗱 𝗟𝗶𝗻𝗸.");
              }
              const {
                videos: _0xa0f74
              } = await yts(_0x1f241d);
              if (!_0xa0f74 || _0xa0f74.length === 0x0) {
                return _0x3b8766.reply("No songs found!");
              }
              const _0x9d0d75 = _0xa0f74[0x0].url;
              let _0x30aad8 = await fetchJson("https://api.dreaded.site/api/ytdl/audio?url=" + _0x9d0d75);
              if (!_0x30aad8 || !_0x30aad8.result || !_0x30aad8.result.url) {
                return _0x3b8766.reply("Failed to fetch audio from the API.");
              }
              const _0x4385fb = _0x30aad8.result.url;
              const _0x4bf3b8 = _0x30aad8.result.title;
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'audio': {
                  'url': _0x4385fb
                },
                'mimetype': "audio/mpeg",
                'fileName': _0x4bf3b8 + ".mp3"
              }, {
                'quoted': _0x3b8766
              });
            } catch (_0x23eaa8) {
              _0x3b8766.reply("Download failed\n" + _0x23eaa8.message);
            }
          }
          break;
        case 'ytmp4':
        case "ytv":
          {
            try {
              if (!_0x1f241d) {
                return _0x3b8766.reply("𝗣𝗿𝗼𝘃𝗶𝗱𝗲 𝗮 𝘃𝗮𝗹𝗶𝗱 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 𝗹𝗶𝗻𝗸!");
              }
              let _0x13f888 = _0x1f241d.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
              if (!_0x13f888) {
                return _0x3b8766.reply("𝗧𝗵𝗶𝘀 𝗶𝘀 𝗻𝗼𝘁 𝗮 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 𝗹𝗶𝗻𝗸");
              }
              let _0x19adea = parseInt(_0x1f241d) - 0x1;
              if (_0x19adea < 0x0 || _0x19adea >= _0x13f888.length) {
                return _0x3b8766.reply("𝗜𝗻𝘃𝗮𝗹𝗶𝗱 𝗹𝗶𝗻𝗸.");
              }
              const {
                videos: _0x320237
              } = await yts(_0x1f241d);
              if (!_0x320237 || _0x320237.length === 0x0) {
                return _0x3b8766.reply("No songs found!");
              }
              const _0x35f434 = _0x320237[0x0].url;
              let _0x3f9b6e = await fetchJson('https://api.dreaded.site/api/ytdl/video?url=' + _0x35f434);
              if (!_0x3f9b6e || !_0x3f9b6e.result || !_0x3f9b6e.result.url) {
                return _0x3b8766.reply("Failed to fetch video from the API.");
              }
              const _0x1da6a1 = _0x3f9b6e.result.url;
              const _0x4f856e = _0x3f9b6e.result.title;
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'video': {
                  'url': _0x1da6a1
                },
                'mimetype': "video/mpeg",
                'fileName': _0x4f856e + ".mp4"
              }, {
                'quoted': _0x3b8766
              });
            } catch (_0x4b7e49) {
              _0x3b8766.reply("Download failed\n" + _0x4b7e49.message);
            }
          }
          break;
        case "ping":
        case "speed":
          {
            await _0x398bd2();
            _0x3b8766.reply("𝗣𝗼𝗻𝗴\n " + _0x5f1b3e.toFixed(0x4) + " 𝗠𝘀");
          }
          break;
        case "uptime":
          {
            _0x3b8766.reply('' + runtime(process.uptime()));
          }
          break;
        case "runtime":
          let _0x2d2ad8 = "𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗿𝘂𝗻𝗻𝗶𝗻𝗴 𝘀𝗶𝗻𝗰𝗲 " + runtime(process.uptime());
          _0x38743a.sendMessage(_0x3b8766.chat, {
            'text': _0x2d2ad8,
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
            'quoted': _0x3b8766
          });
          break;
        case "apk":
        case "app":
          {
            if (!_0x1f241d) {
              return _0x2ac30c("Where is the app name?");
            }
            let _0x5e31e1 = await fetchJson('https://bk9.fun/search/apk?q=' + _0x1f241d);
            let _0x4775fd = await fetchJson('https://bk9.fun/download/apk?id=' + _0x5e31e1.BK9[0x0].id);
            await _0x38743a.sendMessage(_0x3b8766.chat, {
              'document': {
                'url': _0x4775fd.BK9.dllink
              },
              'fileName': _0x4775fd.BK9.name,
              'mimetype': "application/vnd.android.package-archive",
              'contextInfo': {
                'externalAdReply': {
                  'title': "𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗",
                  'body': '' + _0x4775fd.BK9.name,
                  'thumbnailUrl': '' + _0x4775fd.BK9.icon,
                  'sourceUrl': '' + _0x4775fd.BK9.dllink,
                  'mediaType': 0x2,
                  'showAdAttribution': true,
                  'renderLargerThumbnail': false
                }
              }
            }, {
              'quoted': _0x3b8766
            });
          }
          break;
        case "mix":
          {
            const {
              Sticker: _0x114eea,
              createSticker: _0x3f6102,
              StickerTypes: _0x548d76
            } = require("wa-sticker-formatter");
            if (!_0x1f241d) {
              return _0x3b8766.reply("No emojis provided ? ");
            }
            const _0x51f181 = _0x1f241d.split('+');
            if (_0x51f181.length !== 0x2) {
              _0x3b8766.reply("Specify the emojis and separate with '+'");
              return;
            }
            const _0xa7577 = _0x51f181[0x0].trim();
            const _0x29c1e7 = _0x51f181[0x1].trim();
            try {
              const _0x3277fe = require("axios");
              const _0x3be715 = await _0x3277fe.get('https://levanter.onrender.com/emix?q=' + _0xa7577 + _0x29c1e7);
              if (_0x3be715.data.status === true) {
                let _0x32ff55 = new _0x114eea(_0x3be715.data.result, {
                  'pack': botname,
                  'type': _0x548d76.CROPPED,
                  'categories': ['🤩', '🎉'],
                  'id': "12345",
                  'quality': 0x46,
                  'background': 'transparent'
                });
                const _0x2aa5e9 = await _0x32ff55.toBuffer();
                _0x38743a.sendMessage(_0x3b8766.chat, {
                  'sticker': _0x2aa5e9
                }, {
                  'quoted': _0x3b8766
                });
              } else {
                _0x3b8766.reply("Unable to create emoji mix.");
              }
            } catch (_0x5d57d3) {
              _0x3b8766.reply("An error occurred while creating the emoji mix." + _0x5d57d3);
            }
          }
          break;
        case 'lyrics':
          {
            const _0x23d93a = require("node-fetch");
            const _0xf9ddc4 = "https://api.dreaded.site/api/lyrics?title=" + encodeURIComponent(_0x1f241d);
            try {
              if (!_0x1f241d) {
                return _0x3b8766.reply("Provide a song name!");
              }
              const _0x317972 = await fetchJson(_0xf9ddc4);
              if (!_0x317972.success || !_0x317972.result || !_0x317972.result.lyrics) {
                return _0x3b8766.reply("Sorry, I couldn't find any lyrics for \"" + _0x1f241d + "\".");
              }
              const {
                title: _0x5425eb,
                artist: _0x21e97f,
                link: _0x592b64,
                thumb: _0x14d3b9,
                lyrics: _0x578b52
              } = _0x317972.result;
              const _0x46ac78 = _0x14d3b9 || "https://i.imgur.com/Cgte666.jpeg";
              const _0x588692 = await _0x23d93a(_0x46ac78).then(_0x1d50ed => _0x1d50ed.buffer())['catch'](_0x150294 => {
                console.error("Error fetching image:", _0x150294);
                return null;
              });
              if (!_0x588692) {
                return _0x3b8766.reply("An error occurred while fetching the image.");
              }
              const _0x31a3c0 = "**Title**: " + _0x5425eb + "\n**Artist**: " + _0x21e97f + "\n\n" + _0x578b52;
              await _0x38743a.sendMessage(_0x3b8766.chat, {
                'image': _0x588692,
                'caption': _0x31a3c0
              }, {
                'quoted': _0x3b8766
              });
            } catch (_0x574608) {
              console.error(_0x574608);
              _0x3b8766.reply("An error occurred while fetching the lyrics for \"" + _0x1f241d + "\".");
            }
          }
          break;
        case 'toimage':
        case "photo":
          {
            if (!_0x44775e) {
              throw "Tag a static video with the command!";
            }
            if (!/webp/.test(_0x5269b0)) {
              throw "Tag a sticker with " + (prefix + _0x3acc5c);
            }
            let _0x15c9b2 = await _0x38743a.downloadAndSaveMediaMessage(_0x44775e);
            let _0x516e0d = await getRandom(".png");
            exec("ffmpeg -i " + _0x15c9b2 + " " + _0x516e0d, _0x178246 => {
              fs.unlinkSync(_0x15c9b2);
              if (_0x178246) {
                throw _0x178246;
              }
              let _0x2c772a = fs.readFileSync(_0x516e0d);
              _0x38743a.sendMessage(_0x3b8766.chat, {
                'image': _0x2c772a,
                'caption': "𝗖𝗼𝗻𝘃𝗲𝗿𝘁𝗲𝗱 𝗯𝘆 𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗"
              }, {
                'quoted': _0x3b8766
              });
              fs.unlinkSync(_0x516e0d);
            });
          }
          break;
        case "movie":
          if (!_0x1f241d) {
            return _0x2ac30c("Provide a series or movie name.");
          }
          let _0x39735e = await axios.get('http://www.omdbapi.com/?apikey=742b2d09&t=' + _0x1f241d + "&plot=full");
          let _0x2c29c6 = '';
          console.log(_0x39735e.data);
          _0x2c29c6 += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n ``` IMDB MOVIE SEARCH```\n⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";
          _0x2c29c6 += "🎬Title      : " + _0x39735e.data.Title + "\n";
          _0x2c29c6 += "📅Year       : " + _0x39735e.data.Year + "\n";
          _0x2c29c6 += "⭐Rated      : " + _0x39735e.data.Rated + "\n";
          _0x2c29c6 += "📆Released   : " + _0x39735e.data.Released + "\n";
          _0x2c29c6 += "⏳Runtime    : " + _0x39735e.data.Runtime + "\n";
          _0x2c29c6 += "🌀Genre      : " + _0x39735e.data.Genre + "\n";
          _0x2c29c6 += "👨🏻‍💻Director   : " + _0x39735e.data.Director + "\n";
          _0x2c29c6 += "✍Writer     : " + _0x39735e.data.Writer + "\n";
          _0x2c29c6 += "👨Actors     : " + _0x39735e.data.Actors + "\n";
          _0x2c29c6 += "📃Plot       : " + _0x39735e.data.Plot + "\n";
          _0x2c29c6 += "🌐Language   : " + _0x39735e.data.Language + "\n";
          _0x2c29c6 += "🌍Country    : " + _0x39735e.data.Country + "\n";
          _0x2c29c6 += "🎖️Awards     : " + _0x39735e.data.Awards + "\n";
          _0x2c29c6 += "📦BoxOffice  : " + _0x39735e.data.BoxOffice + "\n";
          _0x2c29c6 += "🏙️Production : " + _0x39735e.data.Production + "\n";
          _0x2c29c6 += "🌟imdbRating : " + _0x39735e.data.imdbRating + "\n";
          _0x2c29c6 += "❎imdbVotes  : " + _0x39735e.data.imdbVotes + '';
          _0x38743a.sendMessage(_0x3a9bca, {
            'image': {
              'url': _0x39735e.data.Poster
            },
            'caption': _0x2c29c6
          }, {
            'quoted': _0x3b8766
          });
          break;
        case "linkgroup":
        case "link":
          {
            if (!_0x3b8766.isGroup) {
              throw group;
            }
            if (!_0xdc6800) {
              throw botAdmin;
            }
            let _0x2b7fe8 = await _0x38743a.groupInviteCode(_0x3b8766.chat);
            _0x38743a.sendText(_0x3b8766.chat, "https://chat.whatsapp.com/" + _0x2b7fe8 + "\n\nGroup link for  " + _0xbd10c6.subject, _0x3b8766, {
              'detectLink': true
            });
          }
          break;
        case 'botpp':
          {
            if (!_0x4a0f81) {
              throw NotOwner;
            }
            if (!_0x44775e) {
              throw "Tag an image you want to be the bot's profile picture with " + (prefix + _0x3acc5c);
            }
            if (!/image/.test(_0x5269b0)) {
              throw "Tag an image you want to be the bot's profile picture with " + (prefix + _0x3acc5c);
            }
            if (/webp/.test(_0x5269b0)) {
              throw "Tag an image you want to be the bot's profile picture with " + (prefix + _0x3acc5c);
            }
            let _0xb65295 = await _0x38743a.downloadAndSaveMediaMessage(_0x44775e);
            await _0x38743a.updateProfilePicture(_0x2bee53, {
              'url': _0xb65295
            })["catch"](_0x186fa3 => fs.unlinkSync(_0xb65295));
            _0x2ac30c`Bot's profile picture has been successfully updated!`;
          }
          break;
        case 'broadcast':
          {
            if (!_0x4a0f81) {
              throw NotOwner;
              return;
            }
            if (!_0x1f241d) {
              _0x2ac30c("❌ No broadcast message provided!");
              return;
            }
            let _0x1a3e30 = await _0x38743a.groupFetchAllParticipating();
            let _0xd4e9a2 = Object.entries(_0x1a3e30).slice(0x0).map(_0x572b64 => _0x572b64[0x1]);
            let _0x391c9 = _0xd4e9a2.map(_0x4acfae => _0x4acfae.id);
            _0x2ac30c(" Broadcasting in " + _0x391c9.length + " Group Chat, in " + _0x391c9.length * 1.5 + " seconds");
            for (let _0x265cd2 of _0x391c9) {
              let _0xcecfd9 = "𝗗𝗥𝗔𝗚𝗢𝗡-𝗫𝗠𝗗 𝗕𝗥𝗢𝗔𝗗𝗖𝗔𝗦𝗧 >\n\n🀄 Message: " + _0x1f241d + "\n\nAuthor: " + _0x4250cf;
              await _0x38743a.sendMessage(_0x265cd2, {
                'image': {
                  'url': "https://telegra.ph/file/416c3ae0cfe59be8db011.jpg"
                },
                'caption': '' + _0xcecfd9
              });
            }
            _0x2ac30c("Broadcasted to " + _0x391c9.length + " Groups.");
          }
          break;
        case "gemini":
          {
            try {
              if (!_0x1f241d) {
                return _0x3b8766.reply("This is DRAGON-XMD, an AI using Gemini APIs to process text, provide yr query");
              }
              const {
                default: _0x309a69
              } = await import("gemini-ai");
              const _0x8c72d = new _0x309a69("AIzaSyDJUtskTG-MvQdlT4tNE319zBqLMFei8nQ");
              const _0x17bc06 = _0x8c72d.createChat();
              const _0x2cd106 = await _0x17bc06.ask(_0x1f241d);
              await _0x3b8766.reply(_0x2cd106);
            } catch (_0x10a315) {
              _0x3b8766.reply("I am unable to generate responses\n\n" + _0x10a315);
            }
          }
          break;
        case "setvar":
          if (!_0x4a0f81) {
            throw NotOwner;
          }
          if (!_0x1f241d.split('=')[0x1]) {
            return _0x2ac30c("Incorrect Usage:\nProvide the key and value correctly\nExample: setvar AUTOVIEW_STATUS=TRUE");
          }
          const _0x425c16 = new _0x1436a4({
            'token': herokuapi
          });
          let _0x2e8b7d = "/apps/" + appname;
          await _0x425c16.patch(_0x2e8b7d + "/config-vars", {
            'body': {
              [_0x1f241d.split('=')[0x0]]: _0x1f241d.split('=')[0x1]
            }
          });
          await _0x2ac30c("✅ The variable " + _0x1f241d.split('=')[0x0] + " = " + _0x1f241d.split('=')[0x1] + " has been set Successfuly.\nWait 20s for changes to effect!");
          break;
        case "dlt":
        case 'dil':
          {
            if (!_0x3b8766.quoted) {
              throw "No message quoted for deletion";
            }
            let {
              chat: _0x3f19e6,
              fromMe: _0x308298,
              id: _0x1963cd,
              isBaileys: _0x13359f
            } = _0x3b8766.quoted;
            if (_0x13359f) {
              throw "I cannot delete. Quoted message is my message or another bot message.";
            }
            _0x38743a.sendMessage(_0x3b8766.chat, {
              'delete': {
                'remoteJid': _0x3b8766.chat,
                'fromMe': true,
                'id': _0x3b8766.quoted.id,
                'participant': _0x3b8766.quoted.sender
              }
            });
          }
          break;
        case "block":
          {
            if (!_0x4a0f81) {
              throw NotOwner;
            }
            if (!_0x3b8766.quoted) {
              throw "𝗧𝗮𝗴 𝘀𝗼𝗺𝗲𝗼𝗻𝗲!";
            }
            let _0x8b06b5 = _0x3b8766.mentionedJid[0x0] ? _0x3b8766.mentionedJid[0x0] : _0x3b8766.quoted ? _0x3b8766.quoted.sender : _0x1f241d.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
            if (_0x8b06b5 == '254114660061@s.whatsapp.net') {
              return _0x3b8766.reply("𝗜 𝗰𝗮𝗻𝗻𝗼𝘁 𝗯𝗹𝗼𝗰𝗸 𝗺𝘆 𝗢𝘄𝗻𝗲𝗿 😡");
            }
            if (_0x8b06b5 == _0x38743a.decodeJid(_0x38743a.user.id)) {
              throw "𝗜 𝗰𝗮𝗻𝗻𝗼𝘁 𝗯𝗹𝗼𝗰𝗸 𝗺𝘆𝘀𝗲𝗹𝗳 𝗶𝗱𝗶𝗼𝘁 😡";
            }
            await _0x38743a.updateBlockStatus(_0x8b06b5, "block");
            _0x3b8766.reply("𝗕𝗹𝗼𝗰𝗸𝗲𝗱 𝘁𝗵𝗶𝘀 𝗺𝗼𝘁𝗵𝗲𝗿𝗳*𝗰𝗸𝗲𝗿 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆!");
          }
          break;
        case "unblock":
          {
            if (!_0x4a0f81) {
              throw NotOwner;
            }
            if (!_0x3b8766.quoted) {
              throw "𝗧𝗮𝗴 𝘀𝗼𝗺𝗲𝗼𝗻𝗲!";
            }
            let _0x5d0a70 = _0x3b8766.mentionedJid[0x0] ? _0x3b8766.mentionedJid[0x0] : _0x3b8766.quoted ? _0x3b8766.quoted.sender : _0x1f241d.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
            await _0x38743a.updateBlockStatus(_0x5d0a70, 'unblock');
            _0x3b8766.reply("𝗨𝗻𝗯𝗹𝗼𝗰𝗸𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆✅!");
          }
          break;
        case "join":
          {
            if (!_0x4a0f81) {
              throw NotOwner;
            }
            if (!_0x1f241d) {
              return _0x2ac30c("provide a valid group link");
            }
            let _0x1a9687 = _0x32b774[0x0].split("https://chat.whatsapp.com/")[0x1];
            await _0x38743a.groupAcceptInvite(_0x1a9687).then(_0x27710a => _0x2ac30c(jsonformat(_0x27710a)))["catch"](_0x56ff59 => _0x2ac30c("Link has problem."));
          }
          break;
        case 'enc':
        case "encrypte":
          {
            const _0x1158a8 = require('javascript-obfuscator');
            if (_0x3b8766.quoted && _0x3b8766.quoted.text) {
              const _0x5a5b05 = _0x3b8766.quoted.text;
              const _0x114af7 = _0x1158a8.obfuscate(_0x5a5b05, {
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
              _0x3b8766.reply(_0x114af7.getObfuscatedCode());
            } else {
              _0x3b8766.reply("Quote/Tag a valid JavaScript code to encrypt!");
            }
          }
          break;
        case "gpt3":
          {
            if (!_0x1f241d) {
              return _0x2ac30c("Hello there, How can i help you?");
            }
            let _0x307048 = await fetchJson("https://bk9.fun/ai/blackbox?q=" + _0x1f241d);
            if (!_0x307048.BK9) {
              return _0x2ac30c("An error occurred while fetching the AI chatbot response. Please try again later.");
            } else {
              _0x2ac30c(_0x307048.BK9);
            }
          }
          break;
        case "gcprofile":
          {
            function _0x4cbfaa(_0x437e61) {
              const _0x5ae5e3 = new Date(_0x437e61 * 0x3e8);
              const _0x1917cd = ["Sunday", 'Monday', "Tuesday", "Wednesday", 'Thursday', 'Friday', "Saturday"];
              return {
                'date': _0x5ae5e3.getDate(),
                'month': new Intl.DateTimeFormat("en-US", {
                  'month': 'long'
                }).format(_0x5ae5e3),
                'year': _0x5ae5e3.getFullYear(),
                'day': _0x1917cd[_0x5ae5e3.getUTCDay()],
                'time': _0x5ae5e3.getUTCHours() + ':' + _0x5ae5e3.getUTCMinutes() + ':' + _0x5ae5e3.getUTCSeconds()
              };
            }
            if (!_0x3b8766.isGroup) {
              return _0x3b8766.reply("This command is meant for groups");
            }
            let _0x569180 = await _0x38743a.groupMetadata(_0x3b8766.chat);
            let _0x1787f1 = await _0x4cbfaa(_0x569180.creation);
            try {
              pp = await _0x38743a.profilePictureUrl(chat, "image");
            } catch {
              pp = "https://i.imgur.com/l6rYr1f.jpeg";
            }
            await _0x38743a.sendMessage(_0x3b8766.chat, {
              'image': {
                'url': pp
              },
              'caption': "_Name_ : *" + _0x569180.subject + "*\n\n_ID_ : *" + _0x569180.id + "*\n\n_Group owner_ : " + ('@' + _0x569180.owner.split('@')[0x0]) + " || 'No Creator'\n\n_Group created_ : *" + _0x1787f1.day + ", " + _0x1787f1.date + " " + _0x1787f1.month + " " + _0x1787f1.year + ", " + _0x1787f1.time + "*\n\n_Participants_ : *" + _0x569180.size + "*\n_Members_ : *" + _0x569180.participants.filter(_0x416161 => _0x416161.admin == null).length + "*\n\n_Admins_ : *" + Number(_0x569180.participants.length - _0x569180.participants.filter(_0x2e9e02 => _0x2e9e02.admin == null).length) + "*\n\n_Who can send message_ : *" + (_0x569180.announce == true ? "Admins" : 'Everyone') + "*\n\n_Who can edit group info_ : *" + (_0x569180.restrict == true ? "Admins" : 'Everyone') + "*\n\n_Who can add participants_ : *" + (_0x569180.memberAddMode == true ? "Everyone" : "Admins") + '*'
            }, {
              'quoted': _0x3b8766
            });
          }
          break;
        case "tovideo":
        case "mp4":
        case "tovid":
          {
            if (!_0x44775e) {
              return _0x2ac30c("Reply to Sticker");
            }
            if (!/webp/.test(_0x5269b0)) {
              return _0x2ac30c("reply sticker with caption *" + (prefix + _0x3acc5c) + '*');
            }
            let _0x38e5c9 = await fetch("https://bk9.fun/converter/webpToMp4?url=" + _0x44775e);
            let _0x225cab = await _0x38743a.downloadAndSaveMediaMessage(_0x44775e);
            let _0x395873 = await _0x38e5c9(_0x225cab);
            await _0x38743a.sendMessage(_0x3b8766.chat, {
              'video': {
                'url': _0x395873.result,
                'caption': "Convert Webp To Video"
              }
            }, {
              'quoted': _0x3b8766
            });
            await fs.unlinkSync(_0x225cab);
          }
          break;
        default:
          {
            if (_0x378c0d && _0xf7d324.toLowerCase() != undefined) {
              if (_0x3b8766.chat.endsWith("broadcast")) {
                return;
              }
              if (_0x3b8766.isBaileys) {
                return;
              }
              if (!_0xf7d324.toLowerCase()) {
                return;
              }
              if (_0x302145 || _0x378c0d && !_0x3b8766.isGroup) {
                console.log(chalk.black(chalk.bgRed("[ ERROR ]")), chalk.keyword('turquoise')("command"), !_0xf6c8(0x2d3) ? chalk.green('' + prefix + _0x3acc5c) : chalk.keyword("turquoise")('' + prefix + _0x3acc5c), chalk.keyword('turquoise')('Dragon'));
              } else if (_0x302145 || _0x378c0d && _0x3b8766.isGroup) {
                console.log(chalk.black(chalk.bgRed("[ ERROR ]")), !_0xf6c8(0x2d3) ? chalk.green(_0xf6c8(0x389)) : chalk.keyword("turquoise")("command"), !_0xf6c8(0x2d3) ? chalk.green('' + prefix + _0x3acc5c) : chalk.keyword("turquoise")('' + prefix + _0x3acc5c), chalk.keyword('turquoise')("Dragon"));
              }
            }
          }
      }
    }
  } catch (_0x104687) {
    _0x3b8766.reply(util.format(_0x104687));
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[file];
  require(file);
});
