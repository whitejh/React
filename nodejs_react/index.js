const express = require('express') // express 모듈을 가져온다
const app = express()
const port = 5000 // 5000번 포트를 백서버로 둔다

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://test:1234@nodejsreact.y5uub.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World!~~ 안녕하세요~~')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})