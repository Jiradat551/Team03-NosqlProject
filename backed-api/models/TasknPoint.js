const mongoose = require('mongoose')
const Schema = mongoose.Schema

let TasknPointSchema = new Schema({
    taskname: {
        type: String
    },
    point: {
        type: String
    },
},{
  collection: 'TasknPoint',
  versionKey: false
})

module.exports = mongoose.model('TasknPoint',TasknPointSchema)