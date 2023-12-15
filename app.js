
 //載入套件
const express = require('express')
const exphbs = require('express-handlebars')
const generatePassword = require('./generate_password.js')
const app = express()
const port = 3000

// 設定模板引擎
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))  //讀取main.handlebars作為樣板佈局/主要佈局
app.set('view engine', 'handlebars') //根據這裡的設定當作副檔名

// 資料載入
app.use(express.urlencoded({ extended: true }))

// 設定路由(首頁)
app.get('/', (req, res) => {
  res.render('index') 
})

// 送出表單(POST)
app.post('/', (req, res) => {
  console.log(`Password is ${generatePassword(req.body)}`)
  res.render('index')
})

// 監聽
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})
