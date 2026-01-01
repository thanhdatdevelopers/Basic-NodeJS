const express = require('express')
const path = require('path')

const app = express()
const port = 9090

// config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/route', (req, res) => {
  // res.send('Check route')
  res.render('index.ejs')
})

app.get('/routes', (req, res) => {
  res.send('<h1>Check routes</h1>')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})