#!/usr/bin/env node

// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config()
// }

// // import the express app
// const app = require('./app')
// const server = require('./app')
// const express = require('express')
// app.use(express.urlencoded({extended: false}))
// const users = []
// const bcrypt = require('bcrypt')
// const passport = require ('passport')
// const flash = require('express-flash')
// const session = require('express-session')
// const methodOverride = require('method-override')

// const initializePassport = require('./passport-config')
// initializePassport(
//   passport, 
//   email => user.find(user => user.email === email),
//   id => user.find(user => user.id === id)
// )

// // which port to listen for HTTP(S) requests
// const port = 4000

// // call a function to start listening to the port
// const listener = server.listen(port, function () {
//   console.log(`Server running on port: ${port}`) 
// })

// app.use(flash())
// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: false
// }))
// app.use(passport.initialize())
// app.use(passport.session())
// app.use(methodOverride('_method'))

// app.get('/', checkAuthenticated, (req, res) => {
//   res.render('index.ejs', {name: req.user.name})
// })

// app.get('/login', checkNotAuthenticated, (req, res) => {
//   res.render('Login.js')
// })

// app.get('/signup', checkNotAuthenticated, (req, res) => {
//   res.render('Signup.js')
// })

// app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
//   successRedirect: '/',
//   failureRedirect: '/login',
//   failureFlash: true
// }))

// app.post('/signup', checkNotAuthenticated, async (req,res) => {
//   try{
//     const hashedPassword = bcrypt.hash(req.body.password, 10)
//     users.push({
//       id: Date.now().toString(),
//       username: req.body.username,
//       email: req.body.email,
//       password: hashedPassword
//     })
//     res.redirect('/login')
//   } catch{
//     res.redirect('/signup')
//   }
//   console.log(users)
// }) 

// app.delete('/logout', (req, res) => {
//   req.logOut()
//   res.redirect('/login')
// })

// function checkAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     return next()
//   }

//   res.redirect('/login')
// }

// function checkNotAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     return res.redirect('/')
//   }
//   next()
// }

// // a function to stop listening to the port
// const close = () => {
//   listener.close()
// }

// // export the close function
// module.exports = {
//   close: close,
// }



//new shit


const app = require('./app')
const server = require('./app')
const mongoose = require("mongoose")
const express = require('express')
// const cors = require('cors')
// const bcrypt = require('bcrypt')
// const passport = require ('passport')
// const cookieParser = require('cookie-parser')
// const session = require('express-session')
// const passportLocal = require("passport-local").Strategy
// const User = require('./models/User')

// const app = express(); 

// which port to listen for HTTP(S) requests
const port = 4000

// call a function to start listening to the port
const listener = server.listen(port, function () {
  console.log(`Server running on port: ${port}`) 
})

// app.use(express.urlencoded({extended: true}))
// app.use(cors({
//   origin: "http://localhost:3000",
//   credentials: true
// }))

// app.use(session({
//   secret: "secretcode",
//   resave: true,
//   saveUninitialized: true
// }))

// app.use(cookieParser("secretcode"))
// app.use(passport.initialize())
// app.use(passport.session())
// require('./passport-config')(passport)


// //Routes
// app.post("/login", (req, res) => {
//   console.log(req.body)
//   passport.authenticate("local", (err, user, info) => {
//     if (err) throw err;
//     if (!user) res.send("No User Exists")
//     else {
//       req.logIn(user, err => {
//         if (err) throw err
//         res.send('Successful Authentication')
//         console.log(req.user)
//       })
//     }
//   })(req, res, next)

// })

// app.post("/signup", (req, res) => {
//   console.log(req.body)
//   User.findOne({username: req.body.username}, async (err,doc) => {
//     if (err) throw err
//     if (doc) res.send("User Already Exists")
//     if (!doc) {
//         const hashedPassword = await bcrypt.hash(req.body.password, 10)

//       const newUser = new User({
//         username: req.body.username,
//         password: hashedPassword,
//       })
//       await newUser.save()
//       res.send("User Created")
//     }
//   })
// })

// app.post("/user", (req, res) => {})


// a function to stop listening to the port
const close = () => {
  listener.close()
}

// export the close function
module.exports = {
  close: close,
}






