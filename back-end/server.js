#!/usr/bin/env node

// import the express app
//const app = require('./app')
const server = require("./app")
const express = require("express")
server.use(express.urlencoded({extended: false})) //app
const users = []
const bcrypt = require('bcrypt')
const passport = require ('passport')

const initializePassport = require('./passport-config')
initializePassport(
  passport, 
  email => user.find(user => user.email === email)
)

// which port to listen for HTTP(S) requests
const port = 4000

// call a function to start listening to the port
const listener = server.listen(port, function () {
  console.log(`Server running on port: ${port}`)
})

server.post('/login', (req,res) => { //app
  req.body.email
})

server.post('/signup', (req,res) => { //app
  try{
    const hashedPassword = bcrypt.hash(req.body.password, 10)
    users.push({
      id: Date.now().toString(),
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    })
    res.redirect('/login')
  } catch{
    res.redirect('/signup')
  }
  console.log(users)
})

// a function to stop listening to the port
const close = () => {
  listener.close()
}

// export the close function
module.exports = {
  close: close,
}


