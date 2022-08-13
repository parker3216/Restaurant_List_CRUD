const express = require('express')
const exphbs = require('express-handlebars')//載入handlebars
const routes = require('./routes') //引用路由
require('./config/mongoose') //引用mongoose連線


const port = 3000
const app = express()



//啟用樣板引擎
app.engine('handlebars',exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public')) //使用靜態檔案
app.use(express.urlencoded({ extended: true }))//setting body-parser
app.use(routes)//使用路由器



app.listen(port, () =>{
  console.log(`App is running on http://localhost:${port}`)
})