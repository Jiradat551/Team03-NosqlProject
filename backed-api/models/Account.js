const mongoose = require('mongoose')
const Schema = mongoose.Schema

let AccountSchema = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    fullname: {
        type: String
    },
    role:{
        type: String
    }
},{
  collection: 'Account',
  versionKey: false
})

module.exports = mongoose.model('Account',AccountSchema)