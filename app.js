var express = require('express')
var app = express()
var SiteController = require('./controllers/SiteController')

app.get('/',//SiteController.Index()
function(req,resp){
  resp.render('index')
})
app.get('/about',function(req,resp){
  resp.render('about')
})
app.get('/contact',function(req,resp){
  resp.render('contact')
})

module.exports = app
