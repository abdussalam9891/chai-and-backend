require('dotenv').config()


const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res)=>{
  res.send('abdussssssssss')
})

app.get('/login', (req, res)=>{
  res.send('<h1>please log</h1>')
})

app.get('/youtube', (req, res)=>{
  res.send('<button>click me </button>')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
