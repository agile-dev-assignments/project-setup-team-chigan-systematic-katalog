#!/usr/bin/env node


const app = require('./app');
const mongoose = require("mongoose");
// const app = express(); 

// import the express app
//const app = require('./app')
const server = require("./app");
const express = require("express");
server.use(express.urlencoded({extended: false})); //app
const users = [];
const bcrypt = require('bcrypt');
const passport = require ('passport');

// const initializePassport = require('./passport-config')
// initializePassport(
//   passport, 
//   email => user.find(user => user.email === email)
// )


// which port to listen for HTTP(S) requests
const port = 4000

// call a function to start listening to the port
const listener = server.listen(port, function () {
  console.log(`Server running on port: ${port}`) 
})


// a function to stop listening to the port
const close = () => {
  listener.close()
}

// export the close function
module.exports = {
  close: close,
}






