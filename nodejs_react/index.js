const express = require('express') // express 모듈을 가져온다
const app = express()
const port = 5000 // 5000번 포트를 백서버로 둔다
const bodyParser = require('body-parser');
const { User } = require('./models/User');

//application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//application/json
app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://test:1234@nodejsreact.y5uub.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World!~~ 안녕하세요~~ 9월 13일 월요일')
})

app.post('/register', (req, res) => {
  // 회원 가입할 때 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터베이스에서 가져온다.


  const user = new User(req.body)

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})