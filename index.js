const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.status(200).json({ a: "eba"})
})

app.listen(3000)