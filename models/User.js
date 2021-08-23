const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String },
    password: String,
    isAdmin:{type:Boolean , default:false} ,
})

module.exports=User=mongoose.model('user',UserSchema)