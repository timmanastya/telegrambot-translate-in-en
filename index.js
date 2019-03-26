const TelegramBot = require('node-telegram-bot-api')
const Agent = require('socks5-https-client/lib/Agent')
const translate = require('node-google-translate-skidz')

const telegram = new TelegramBot("*****token*****", { 
    polling: true,
    request: {
        agentClass: Agent,
        agentOptions:{
            socksHost: "socks.*********.com",
            socksPort: 0000,
            //если нужна авторизация
            socksUsername: "*************",
            socksPassword: "*************"
        }  
    }
 })

telegram.on("text", (message) => {
  translate({
    text: message.text,
    target: 'en',
  }, (result) => telegram.sendMessage(message.chat.id, result.translation))
})