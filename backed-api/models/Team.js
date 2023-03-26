const mongoose = require('mongoose')
const Schema = mongoose.Schema

let TeamSchema = new Schema({
    TeamName: {
        type: String
    },
    TeamDescrip: {
        type: String
    },
},{
  collection: 'team',
  
})

module.exports = mongoose.model('team',TeamSchema)