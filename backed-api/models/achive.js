const mongoose = require('mongoose')
const Schema = mongoose.Schema

let achiveSchema = new Schema({
    achiveNames: {
        type: String
    },
    score: {
        type: String
    },
},{
  collection: 'achive',
  versionKey: false
})

module.exports = mongoose.model('achive',achiveSchema)