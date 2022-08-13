# URL Shortener 短網址產生器
![Index page about Shortener URL](./Public/img/url-shortener.png)

## 簡介
  將過長的網址轉換成簡短網址

## 專案功能
- 使用者input非網址或空白會有警示
- 使用者可將input的網址轉為簡短網址
- 使用者可按Copy來複製簡短網址
- 已轉換過的網址只會回傳第一次轉換的簡短網址

## 環境建置要求
- node.js v16.15.1
- Express v4.18.1
- express-handlebars v6.0.3
- MongoDB
- mongoose v6.4.6
- nodemon v2.0.16
-

## 安裝及執行程序
1.將專案clone到本機
   ```bash
$ git clone https://github.com/parker3216/Shortener_URL.git
   ```
2.進入專案資料夾
   ```
$ cd url_shortener
   ```
3.設定MONGO_URI
將下列連結中的alpha改為自己的使用者名稱,camp改為自己的使用者密碼

Mac設定如下
```
export MONGODB_URI="mongodb+srv://alpha:camp@cluster0.h1zdvoc.mongodb.net/restaurant_list?retryWrites=true&w=majority"
```
Windows設定如下：
```
set MONGODB_URI="mongodb+srv://alpha:camp@cluster0.h1zdvoc.mongodb.net/restaurant_list?retryWrites=true&w=majority"
```
4.確認已安裝node.js,npm套件,MongoDb雲端版,圖形化介面Robo3T

5.啟用伺服器執行app.js檔案
   ```bash
   npm run dev
   ```

6.當終端機出現下列字樣代表伺服器起動成功
```bash
App is running on http://localhost:3000
mongodb connected!
 ```

7.開啟瀏覽器網址列輸入 http://localhost:3000/ 即可看到本專案的網頁呈現