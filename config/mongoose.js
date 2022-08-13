const mongoose = require('mongoose') //載入 mongoose
mongoose.connect(process.env.MONGODB_URI)//設定連線到 mongoDB

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

module.exports = db

