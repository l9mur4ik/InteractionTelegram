const TEXT_LINK = "Подробнее..."

function postPropertyNotNull (obj){
    const property = ["title", "image", "description", "url"]

    for (let item of property){
        if (!obj.hasOwnProperty(item)){
            return false
        }
    }
    return true
}

const formatPost = (item) => {
    const title = `<a href="${item.url}"><b>${item.title}</b></a>`
    const description = item.description ? `\n${item.description}` : ""
    const url = `\n<a href="${item.url}">${TEXT_LINK}</a>`

    return title + description + url
}

module.exports = {
    formatPost: formatPost,
    postPropertyNotNull: postPropertyNotNull
}
