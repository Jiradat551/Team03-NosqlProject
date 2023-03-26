const mongoose = require('mongoose')
const Schema = mongoose.Schema

let AccountSchema = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    fullName: {
        type: String
    },
    role:{
        type: String
    }
},{
  collection: 'Account',
  
})

module.exports = mongoose.model('Account',AccountSchema)