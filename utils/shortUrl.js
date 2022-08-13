const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
const upperCaseLetters = lowerCaseLetters.toUpperCase()
const numbers = '1234567890'

const collection = lowerCaseLetters + upperCaseLetters + numbers



//隨機抽取一個元素的函式
function randomsample() {
  const index = Math.floor(Math.random() * collection.length)
  return collection.charAt(index)
}

//產出隨機url函式
function produceShortUrl() {

  let shortUrl = ''

  for (let i = 0; i < 5; i++) {
    shortUrl += randomsample()
  }
  return shortUrl
}

module.exports = produceShortUrl