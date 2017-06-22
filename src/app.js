'use strict'

const express = require('express')
const config = require('./config')
const Twit = require('twit')
const T = new Twit(config)

//
//  search twitter for all tweets containing the word 'banana' since July 11, 2011
//
T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function (err, data, response) {
  console.log(data)
})
