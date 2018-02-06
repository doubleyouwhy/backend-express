const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send("Hello World, I'm up and running!")
})

app.listen(3000)
