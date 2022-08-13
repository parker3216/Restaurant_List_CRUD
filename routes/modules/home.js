const express = require('express')
const router = express.Router()

const produceShortUrl = require('../../utils/shortUrl') //載入產生短網址函式
const URL = require('../../models/url')//載入URL Ｍodel



//首頁
router.get('/', (req, res) => {
  res.render('index')
})

//input網址路由
router.post('/', (req, res) => {
  const url = req.body.url
  URL.findOne({ initialURL: url })
    .then(data => {
      //如果資料庫已存在req的網址縮址,則回傳資料庫內的縮址
      if (data) {
        res.render('index', { shortURL: data.shortURL, initialURL: data.initialURL })
      } else {
        //如資料庫無此縮址,則新增原網址與建立縮址,並存入資料庫
        const shortUrl = req.protocol + '://' + req.headers.host + '/' + produceShortUrl()
        URL.create({ initialURL: url, shortURL: shortUrl })
          .then(() => res.render('index', { initialURL: url, shortURL: shortUrl }))
      }
    })
    .catch(error => res.render('error', { error }))
})

//將縮址導向input網址
router.get('/:shortURL', (req, res) => {
  const { shortURL } = req.params
  const url = req.protocol + '://' + req.headers.host + '/' + shortURL

  URL.findOne({ shortURL: url })
    .then(data => {
      if (!data) {
        return res.render('error')
      }
      res.redirect(data.initialURL)
    })
    .catch(error => res.render('error', { error }))

})

module.exports = router //匯出