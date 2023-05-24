const express = require("express")
const router = express.Router()
const controllers = require("../controllers/post")

router.post("/publication", controllers.publicationPost)

module.exports = router
