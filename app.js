const express = require('express')
const exphbs = require('express-handlebars')//載入handlebars
const Url = require('./models/url')//載入Url Ｍodel

const port = 3000
const app = express()


const mongoose = require('mongoose') //載入 mongoose
mongoose.connect(process.env.MONGODB_URI)//設定連線到 mongoDB

const db = mongoose.connection

db.on('error', ()=>{
  console.log('mongodb error!')
})
db.once('open', () =>{
  console.log('mongodb connected!')
})

app.engine('handlebars',exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')




app.get('/', (req,res) =>{
  Url.find() //取出Url Model所有資料
  .lean() //把mongoose Model物件轉換為JavaScript物件
  .then( urls => res.render('index',{ urls })) //將資料傳給index樣版
  .catch(error => console.error(error))//錯誤處理
})

app.listen(port, () =>{
  console.log(`App is running on http://localhost:${port}`)
})