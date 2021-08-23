const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt')
const User = require("../models/User")
const { registerRules, validator } = require("../middlewares/validator")
const jwt = require('jsonwebtoken');
const isAuth=require("../middlewares/passport")

//test
router.get('/test', (req, res) => {
    res.send({ mes: 'hello router' })
})

//register

router.post('/register', registerRules(), validator, async (req, res) => {
    const { name, email, password, phone } = req.body
    try {
        const newUser = new User({ name, email, password, phone })
        const existUser = await User.findOne({ email })
        if (existUser) { return res.status(400).json({ msg: 'User already exist' }) }
        const hashedPassword = await bcrypt.hash(password, 10)
        newUser.password = hashedPassword
        const result = await newUser.save()
        res.json({ user:result, msg: "user added" })
    } catch (error) {
        res.status(500).json({ errors: error })
    }
})
//login
router.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {
        const searchUser = await User.findOne({ email })
        if (!searchUser) { return res.status(400).json({ msg: "bad credential" }) }
        const isMatch = await bcrypt.compare(password, searchUser.password)
        if (!isMatch) { return res.status(400).json({ msg: "bad credential" }) }
        const payload = {
            id: searchUser._id,
            name: searchUser.name,
            email: searchUser.email
        }
        const user= await User.findOne({ email }).select('-password')
        jwt.sign(payload, process.env.privateKey, function (err, token) {
            if (err) throw err;
            res.json({ token: `Bearer ${token}`,user:user })
        });
    }

    catch (error) {
        res.status(500).json({ errors: error })
    }
})

router.get("/current",isAuth(),(req,res)=>{
    console.log(req.user)
    try {
        res.send({user:req.user})
    } catch (error) {
        res.status(500).json({errors:error})
    }
})

module.exports = router