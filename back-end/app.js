// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const cors = require('cors')
const profileRouter = require('./profile')
const sellingpostbackRouter = require('./sellingpostback')
const photocards = require('./public/photocards.json');
const Photocard = require('./models/Photocard');
const mongoose = require("mongoose");
const db = require('./db');
db();
const bcrypt = require('bcrypt')
const passport = require ('passport')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const LocalStrategy = require("passport-local").Strategy
const User = require('./models/User')
const passportLocalMongoose = require('passport-local-mongoose');
const connectEnsureLogin = require('connect-ensure-login');
const flash = require("express-flash");
const path = require('path');
const expressSession = require('express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
  });

let users = [
  {   
      "Username" : "Rocky",
      "Name" : "Asap",
      "Bio" : "This is my bio",
      "Venmo" : "RockysVenmo",
      "Email" : "rocky@gmail.com",
      "Number" : "0123456789",
      "Password" : "Rockyspassword"
  },
  {   
      "Username" : "BrunoMars",
      "Name" : "Bruno",
      "Bio" : "This is Bruno's bio",
      "Venmo" : "BrunosVenmo",
      "Email" : "bruno@gmail.com",
      "Number" : "9876543210",
      "Password" : "Brunospassword"
  },
  {
      "Username" : "Frank",
      "Name" : "Frank Dommer",
      "Bio" : "This is Frank's bio",
      "Venmo" : "FranksVenmo",
      "Email" : "Frank@gmail.com",
      "Number" : "7685943210",
      "Password" : "Frankspassword"
  }
];


// import some useful middleware
// const bodyParser = require("body-parser") // middleware to help parse incoming HTTP POST data
const multer = require("multer") // middleware to handle HTTP POST requests with file uploads
const axios = require("axios") // middleware for making requests to APIs
require("dotenv").config({ silent: true }) // load environmental variables from a hidden file named .env
const morgan = require("morgan") // middleware for nice logging of incoming HTTP requests

/**
 * Typically, all middlewares would be included before routes
 * In this file, however, most middlewares are after most routes
 * This is to match the order of the accompanying slides
 */

// use the morgan middleware to log all incoming http requests
app.use(morgan("dev")) // morgan has a few logging default styles - dev is a nice concise color-coded style

app.use(cors())

// use the bodyparser middleware to parse any data included in a request
app.use(express.json()) // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })) // decode url-encoded incoming POST data

// make 'public' directory publicly readable with static content
app.use("/static", express.static("public"))


// use profile router
app.use("/profile", profileRouter)

//use sellingpostback router
app.use("/sellingpostback", sellingpostbackRouter)

//search
app.get('/search', (req,res)=> {
  const parsedInfo = {};
  let filtered = [];
  
  const all = photocards //await Photocard.find({});

  if(req.query.name !== undefined){
      if (req.query.name.length !== 0){
          parsedInfo.name = req.query.name;
      }
      all.forEach(card =>{
        if (card.photocard_name.toLowerCase().match(parsedInfo.name.toLowerCase())){
            filtered.push(card);
        }
      });
  }else{
    filtered = all; 
  }

  res.send(filtered);
});

// app.get('/api/search', (req,res)=> {
//   const parsedInfo = {};

//   if(req.query.name !== undefined){
//       if (req.query.name.length !== 0){
//           parsedInfo.name = req.query.name;
//       }
//   }
//   const filtered = [];
  
//   photocards.forEach(card =>{
//     if (card.photocard_name.toLowerCase().match(parsedInfo.name)){
//         filtered.push(card);
//     }
//   });
  
//   res.send(filtered);
// });

const photocard_json = require("./public/photocards.json")

app.get("/photocarddata", (req, res, next) => {

  // axios
  //   .get("https://my.api.mockaroo.com/photocard.json?key=49083ca0")
  //   .then(apiResponse => res.json(apiResponse.data))
  //   .catch(err => next(err))
  res.json(photocard_json)
})

app.get("/tradingdata", (req, res, next) => {

  axios
    .get("https://my.api.mockaroo.com/photocardtrading.json?key=49083ca0")
    .then(apiResponse => res.json(apiResponse.data))
    .catch(err => next(err))
})

app.get("/sellingdata", (req, res, next) => {

  axios
    .get("https://my.api.mockaroo.com/photocardselling.json?key=49083ca0")
    .then(apiResponse => res.json(apiResponse.data))
    .catch(err => next(err))
})

app.get("/lookingfordata", (req, res, next) => {

  axios
    .get("https://my.api.mockaroo.com/photocardlookingfor.json?key=49083ca0")
    .then(apiResponse => res.json(apiResponse.data))
    .catch(err => next(err))
})

// for search page to search results
app.get('/search', (req,res)=> {
  const parsedInfo = {};

  if(req.query.name !== undefined){
      if (req.query.name.length !== 0){
          parsedInfo.name = req.query.name;
      }
      if (req.query.element.length !== 0){
        parsedInfo.element = req.query.element;
      }
      if (req.query.weapon.length !== 0){
          parsedInfo.weapon = req.query.weapon;
      }
      if (req.query.rarity.length !== 0){
        parsedInfo.rarity = parseInt(req.query.rarity,10);
    }
  }

  Character.find(parsedInfo, function(err, characters) {
      if (err){
          console.log("error from db.reviews.find");
      }else {
          res.render('search', {characters: characters});
      }
  });
});
  app.post("/hello", (req,res,next) => {
    res.json({message:"hello"})
    console.log("api is hit");
    // console.log(req.body);
    users.forEach(user => {if (user.Username===users[0].Username) {
      if (req.body.username!=null) { 
        user.Username=req.body.username;
      }
    }});

    users.forEach(user => {if (user.Bio===users[0].Bio) {
      if (req.body.bio!=null) {
        user.Bio=req.body.bio; 
      }
    }});

    users.forEach(user => {if (user.Email===users[0].Email) {
      if (req.body.email!=null) {
        user.Email=req.body.email; 
      }
    }});

    users.forEach(user => {if (user.Name===users[0].Name) {
      if (req.body.name!=null) {
        user.Name=req.body.name; 
      }
    }});

    users.forEach(user => {if (user.Number===users[0].Number) {
      if (req.body.number!=null) {
        user.Number=req.body.number; 
      }
    }});

    users.forEach(user => {if (user.Password===users[0].Password) {
      if (req.body.password!=null) {
        user.Password=req.body.password; 
      }
    }});

    users.forEach(user => {if (user.Venmo===users[0].Venmo) {
      if (req.body.venmo!=null) {
        user.Venmo=req.body.venmo; 
      }
    }});
    console.log(users);
});

app.get("/hello", (req,res,next) => {
  res.json({users})
});

// const User = mongoose.model('User');
// const Photocard = mongoose.model('Photocard');


app.use(express.static(path.join(__dirname, 'public')));
// app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(expressSession);

passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    User.findOne({
        _id: id
    }, '-password -salt', function(err, user) {
        done(err, user);
    });
});

passport.use(new LocalStrategy(function(username, password, done) {
    User.findOne({
        username: username,
        password: password
    }, function(err, user) {
        if (err) return done(err);
        if (!user) return done(null, false);
        if (!user.authenticate(password)) return done(null, false);
        return done(null, user);
     });
}));

//passport middleware
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.get('/', function(req, res) {
res.redirect('/login');
});

app.get('/signups', (req, res) => {
res.render('signup', {error: ''});
});

app.post('/signups', (req, res, next) => {
  const obj = {
 username: req.body.username,
 password: req.body.password,
 email: req.body.email,
 confirm: req.body.confirm
 };
 
   const u = new User(obj);
 
   u.save((err, savedUser) => {
     console.log(err, savedUser);
     if(err) {
       User.find({}, (err, users) => {
       res.render('signup', {error: 'there was an error in your submission'});
       });
     } 
     else {
       res.redirect('/search');
     }
   });
 
 });
 
 app.get('/login', (req, res) => {
 res.render('login', {error: ''});
 });
 
 app.post('/login', (req, res, next) => {
   passport.authenticate('local', 
   (err, user, info) => {
     if (err) {
       return next(err);
     }
 
     if (!user) {
       return res.redirect('/login');
       // res.render('login', {error: 'username or password not found'});
     }
 
     req.logIn(user, function(err) {
   if (err) {
     return next(err);
  }
 
   return res.redirect('/search');
     });
 
   })(req, res, next);
 });

//  app.listen(process.env.PORT || 3000);

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

// export the express app we created to make it available to other modules
module.exports = app // CommonJS export style!
