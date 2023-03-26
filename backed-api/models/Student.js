const mongoose = require('mongoose')
const Schema = mongoose.Schema

let studentSchema = new Schema({
    name: {
        type: String
    },
    uname: {
        type: String
    },
    position: {
        type: String
    },
    passwords: {
        type: String
    },
    cluster: {
        type: String
    },
    achiveNames: {
        type: String
    },
    score: {
        type: String
    },
},{
  collection: 'students',
  versionKey: false
})

module.exports = mongoose.model('Student',studentSchema)