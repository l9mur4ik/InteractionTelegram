const TelegramBot = require('node-telegram-bot-api')
const {TOKEN_BOT} = require("../config/api")

const {
    formatPost,
    postPropertyNotNull
} = require("../view/post")

module.exports.publicationPost = async function (req, res) {
    let {posts, weather_bot_url, weather_image_url, channel_id} = req['body']
    let token_bot = TOKEN_BOT
    if (posts) {
        addPost(posts, channel_id, token_bot)
        addPostWeather(channel_id, weather_image_url, weather_bot_url, token_bot)
    }
    res.status(200).json("post add")
}


const addPostWeather = (channelId, weatherImageUrl, UrlBotWeather, token) => {
    botSendMessage(channelId, {
        image: weatherImageUrl,
        text: `Погода на завтра!`
    }, token)
}

const addPost = (listPost, chatId, token) => {
    listPost.map((item, key) => {
        if (postPropertyNotNull(item)) {
            const send = () => botSendMessage(chatId, {
                image: item.image ? item.image : null,
                text: formatPost(item)
            }, token)
            setTimeout(send, 1000 * key)
        }
    })
}

const botSendMessage = (chatId, message, token) => {
    const bot = new TelegramBot(token, {
        polling: true
    })
    if (message.image && message.text) {
        bot.sendPhoto(chatId, message.image,
            {
                caption: message.text,
                parse_mode: 'HTML'
            })
    }
}
