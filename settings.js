const fs = require('fs')
const chalk = require('chalk')

module.exports = {
  SESSION_ID: '',
  ALIVE_REACT: '👋',
  ALIVE_MESSAGE: `*Hello @name [ And @gname @members Number of Members ] I am Alive Now !*

⏰ Now time is @time
📅 Date : @date

🟢 I am online still @uptime
🔄 Response Delay : @ping Ms
💻 Host : @host
🪢 Version : @version

☫ Work Mode : @mode
☫ Work Type : @worktype

Qᴜᴇᴇɴ ᴇʟɪꜱᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ`,
  ALIVE_MEDIA: 'https://telegra.ph/file/d842677f522b6bef4dfe6.jpg',
  MONGODB_URL: 'mongodb+srv://yegoedwin254:<db_password>@yego.vymd54d.mongodb.net/?retryWrites=true&w=majority&appName=Yego', 
  PREFIX: '.$&',
  LANGUAGE: 'EN',
  PORT: 3000,
  BOT_NAME: 'YEGO',
  OWNER_NAME: 'YEGO',
  OWNER_NUMBER: '254705677688',
  SUDO: '254705677688',
  WORK_TYPE: 'public',
  WORK_MODE: 'group',
  TIME_ZONE: 'Asia/Colombo',
  CAPTION: '© YEGOᴅ',
  STICKER_AUTHOR: 'YEGO',
  STICKER_PACK: 'YEGO',
  REMOVE_BG_APIKEY: '',
  MAXIMUM_FILESIZE: 90,
  OWNER_R_EMOJI: '👽',
  ALIVE_AS_GIF: true,
  AUTO_VOICE: false,
  INBOX_BLOCK: false,
  OWNER_REACT: true,
  AUTO_REACT: false,
  ONLY_PM_GROUP_MSG_SEND: false,
  AUTO_SEEN_STATUS: true,
  BOT_OFFLINE: false,
  READ_MESSAGE: false,
  ANTI_MSG_SPAM: false,
  ANTI_BAD_WORD: false,
  ANTI_VIEW_ONES: true,
  ANTI_DELETE: true,
  BANED_USER_MSG_SEND: false,
  BLOCK_CMD_MSG_SEND: false,
  INBOX_BLOCK_MSG_SEND: false,
  CMD_CORRECT: true,
  ANTI_CHANNEL_FORWARD: false,
  ANTI_BOT: false,
  BUTTON_MESSAGES: true,
  SONG_DOWNLOAD_TYPE: 'selectable', // audio , document
  VIDEO_DOWNLOAD_TYPE: 'selectable', // video
  FB_DOWNLOAD_TYPE: 'selectable', // hdvideo , sdvideo
  TIKTOK_DOWNLOAD_TYPE: 'selectable', // nowmvideo , wmvideo
  MSG: {
    ONLY_GROUP_MSG: '',
    ONLY_PM_MSG: '',
    BAD_DETECT_MSG: '',
    BANED_MSG: "",
    GROUP_LEAVE: '',
    INBOX_BLOCK:
      ''
  },
  BOT_RULES:
    ""
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright('Update ' + __filename))
  delete require.cache[file]
  require(file)
})
