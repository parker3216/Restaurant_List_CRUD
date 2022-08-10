//設從陣列中隨機抽出一個元素的函式
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

//產出隨機url函式
function produceShortUrl{
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  
  const collection = []
  let shortUrl=''

  for(let i = 0; i < 5; i++){
    shortUrl += sample(collection)
  }
  
  return shortUrl
}
