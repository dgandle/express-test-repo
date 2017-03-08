var express = require('express')
var app = express()

// GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage')
})

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})


// == Route Paths ==

// Examples of route paths based on strings
// This route will match requests to /about
app.get('/about', function (req, res) {
  res.send('about')
})

// This route will match requests to /random.text
app.get('/random.text', function (req, res) {
  res.send('random.text')
})


// Examples of route paths based on string patterns
// This route will match /acd and /abcd
app.get('/ab?cd', function (req, res) {
  res.send('ab?cd')
})

// This route will match /abcd, /abbcd, /abbbcd, and so on
app.get('/ab+cd', function (req, res) {
  res.send('ab+cd')
})

// This route will match /abcd, /abxcd, /abRANDOMcd, /ab123cd, and so on
app.get('/ab*cd', function (req, res) {
  res.send('ab*cd')
})

// This route will match /abe and /abcde
app.get('/ab(cd)?e', function (req, res) {
  res.send('ab(cd)?e')
})


// Examples of route paths based on regular expressions
// This route will match anything with an "a" in the route name
// app.get(/a/, function (req, res) {
//   res.send('/a')
// })

// This route will match /butterfly and /dragonfly, but not /butterflyman,
// /dragonflyman, and so on
app.get(/.*fly$/, function (res, res) {
  res.send('/.*fly$/')
})


// == Route Parameters ==

// Route parameters allow for URL values to be populated by an object, with
// the name of the route parameter specific in the path as their
// respective keys.

var users = {
  'dgandle': {
    email: 'dgandle@umass.edu',
    website: 'douglasgandle.com'
  }
}

app.get('/users/:username', function (req, res) {
  res.send('Email: ' + users[req.params.username].email + ' Website: ' + users[req.params.username].website)
})




app.listen(3000, function() {
  console.log('Routing app listening on port 3000')
})
