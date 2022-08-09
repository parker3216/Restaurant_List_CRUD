const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlSchema = new Schema({
  Url: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model( 'url', urlSchema ) //匯出資料