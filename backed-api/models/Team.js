const mongoose = require('mongoose')
const Schema = mongoose.Schema

let TeamSchema = new Schema({
    TeamName: {
        type: String
    },
    TeamDescrip: {
        type: String
    },
    point:{
        type: String
    }
},{
  collection: 'team',
  versionKey: false
})

module.exports = mongoose.model('team',TeamSchema)