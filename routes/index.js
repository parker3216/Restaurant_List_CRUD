const express = require('express') //載入Express
const router = express.Router() //載入Express路由

const home = require('./modules/home') // 引入 home 模組程式碼

//將網址結構 符合 / 字串的 request 導向home 模組
router.use('/', home) 

module.exports = router //匯出路由