const express = require('express')
const exphbs = require('express-handlebars')//載入handlebars
const URL = require('./models/url')//載入URL Ｍodel

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
//啟用樣板引擎
app.engine('handlebars',exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public')) //使用靜態檔案
app.use(express.urlencoded({ extended: true }))//setting body-parser

//首頁
app.get('/', (req,res) =>{
  res.render('index')
})

//提交網址表單路由
app.post('/', (req,res) =>{
  const url = req.body.url //避免網址空白及輸入非網址格式的內容
  
  if(!url) {
    return res.render('error typeing')
  }

  URL.findOne({ initialURL:url })
    .then(data =>
      //如果資料庫已存在req的網址縮址,則回傳資料庫內的縮址
      const searchData = data.findOne(Datas => Datas.url === url)
      if(searchData){
        return searchData.shortURL
      }else{
        const 




      }











})


//





app.listen(port, () =>{
  console.log(`App is running on http://localhost:${port}`)
})