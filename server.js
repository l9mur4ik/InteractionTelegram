require('dotenv').config();
const express = require("express");
const bodyParser = require('body-parser');

const postRouter = require("./routes/post");

const app = express()
const port = process.env.PORT

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true,
    parameterLimit: 100000,
    limit: '50mb'
}))

app.use("/post", postRouter)

app.get("/", (req, res) => {
    res.json({
        name: "TelegramApi",
        status: "Всё ОК!",
        date: new Date()
    })
})

app.listen(port);
