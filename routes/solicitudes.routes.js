const express = require("express")
const solicitudContorller = require("../controllers/solicitudes.controllers.js")
const encrypting = require("../middlewares/encrypting.js")
const decrypting = require("../middlewares/decrypting.js")
const router = express.Router()

router.post("/", encrypting.encrypt, solicitudContorller.uploadSolicitud);

router.get("/:name", decrypting.decrypt, solicitudContorller.getSolicitud);


module.exports = router