const express = require('express')

const app = express()
const port = 9090

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/route', (req, res) => {
  res.send('Check route')
})

app.get('/routes', (req, res) => {
  res.send('<h1>Check routes</h1>')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})