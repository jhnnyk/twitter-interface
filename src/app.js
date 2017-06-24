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

//
//  search twitter for all tweets containing the word 'banana' since July 11, 2011
//
T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function (err, data, response) {
  console.log(data)
})

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log('The frontend server is running on port 3000!')
})
