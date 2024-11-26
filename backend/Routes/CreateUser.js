const express = require("express")
const router = express.Router()
const User = require("../models/User")
const { body,validationResult } = require("express-validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const JWT_CODE = "root"

router.post("/createuser", [
    body("email", "Email should end with @email.com").isEmail(),
    body("password", "password length should be atleast 6 characters").isLength({ min: 6 })
], async (request, response) => {
    const errors = validationResult(request)
    if (!errors.isEmpty()) {
        console.log(errors)
        return response.status(400).json({ errors: errors.array() })
    } try {
        const { name, password, email } = request.body
        const hashedPassword = await bcrypt.hash(password, 10)
        await User.create({
            name, password: hashedPassword, email
        })
        response.json({ success: true })
    } catch (error) {
        response.json({ success: false })
    }
})


router.post("/loginuser", [
    body("email", "Email should end with @email.com").isEmail(),
    body("password", "Password length should be atleast 6 characters").isLength({ min: 6 })
], async (request, response) => {
    const errors = validationResult(request)
    if (!errors.isEmpty()) {
        console.log(errors)
        return response.status(400).json({ errors: errors.array() })
    }
    try {
        const { password, email } = request.body
        let user = await User.findOne({ email })
        if (!user) {
            return response.status(400).json({ errors: "Try logging with correct credentials" })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return response.status(400).json({ errors: "Try logging with correct credentials" })
        } else {
            const payload = {
                user: {
                    id: user.id,
                    name:user.name,
                    email:user.email
                }
            }
            const jwtToken = jwt.sign(payload, JWT_CODE)
            return response.json({ success: true, jwtToken,name:payload.user.name,email:email })
        }
    } catch (error) {
        response.json({ success: false })
    }
})


module.exports = router