const express = require("express")
const router = express.Router()
const Global = require("../models/globalMsgs")
const { body, validationResult } = require("express-validator")

router.post("/postglobalmsg", [
    body("email").isEmail(),
    body("message").isLength({ min: 1 })
], async (request, response) => {
    const errors = validationResult(request)
    if (!errors.isEmpty()) {
        console.log(errors)
        return response.status(400).json({ errors: errors.array() })
    } try {
        const { email, message, name } = request.body
        await Global.create({
            email, name, message
        })
        response.json({ success: true })
    } catch (error) {
        response.json({ success: false })
    }
})


router.get("/getglobalmsgs", async (request, response) => {
    try {
        let globalMsgsData = await Global.find({})
        console.log((globalMsgsData))
        response.json({ success: true,globalMsgs:globalMsgsData })
    } catch (error) {
        response.json({ success: false })
    }
})

module.exports = router