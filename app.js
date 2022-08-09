const express = require('express')
const exphbs = require('express-handlebars')//載入handlebars


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
  res.render('index')
})

app.listen(port, () =>{
  console.log(`App is running on http://localhost:${port}`)
})