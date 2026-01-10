const express = require('express')
const path = require('path')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME

// config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// config static file
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
  res.send('Hello World! & node mon')
})

app.get('/route', (req, res) => {
  res.render('index.ejs')
})

app.get('/routes', (req, res) => {
  res.send('<h1>Check routes</h1>')
})

app.listen(port, hostname, () => {
  console.log(`App listening on port ${port}`)
})