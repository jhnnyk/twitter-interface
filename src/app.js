'use strict'

const express = require('express')
const path = require('path')
const config = require(path.join(__dirname, 'config'))
const Twit = require('twit')
const T = new Twit(config)

const app = express()

app.use('/static', express.static(__dirname + '/public'))

app.set('view engine', 'pug')
app.set('views', __dirname + '/views')

const tweets = T.get('statuses/home_timeline', { count: 5 }, (err, data, res) => {
  data
})

app.get('/', (req, res, next) => {
  const timeLine = tweets._rejectionHandler0.data
  res.render('index', {tweets: timeLine})
})

app.listen(3000, () => {
  console.log('The frontend server is running on port 3000!')
})
