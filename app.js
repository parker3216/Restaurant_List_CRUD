const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose') //載入 mongoose
mongoose.connect(process.env.MONGODB_URI)//設定連線到 mongoDB

const db = mongoose.connection

db.on('error', ()=>{
  console.log('mongodb error!')
})
db.once('open', () =>{
  console.log('mongodb connected!')
})



app.get('/', (req,res) =>{
  res.send('fuckyou')
})

app.listen(port, () =>{
  console.log(`App is running on http://localhost:${port}`)
})