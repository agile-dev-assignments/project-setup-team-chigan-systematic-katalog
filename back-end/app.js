// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const mongoose = require('mongoose');
const cors = require('cors');
const profileRouter = require('./profile');
const listingRouter = require('./listingRoute');
const sellingpostbackRouter = require('./sellingpostback');
const photocard_json = require("./public/photocards.json")
const Photocard = require('./models/Photocard');
const Listing = require('./models/listing');
const db = require('./db');
db();

const bcrypt = require('bcrypt')
const passport = require('passport')
const cookieParser = require('cookie-parser');
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

// import some useful middleware
// const bodyParser = require("body-parser") // middleware to help parse incoming HTTP POST data
const multer = require("multer") // middleware to handle HTTP POST requests with file uploads
const axios = require("axios") // middleware for making requests to APIs
require("dotenv").config({ silent: true }) // load environmental variables from a hidden file named .env
const morgan = require("morgan"); // middleware for nice logging of incoming HTTP requests
const { parse } = require("dotenv");
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

// use listing router
app.use("/listing", listingRouter)

//use sellingpostback router
app.use("/sellingpostback", sellingpostbackRouter)
//search

app.get('/search', async (req,res)=> {
  // console.log('api hit')
  // let parsedInfo = "";
  // // const all = photocard_json;
  // if(req.query.name !== undefined){
  //     if (req.query.name.length !== 0){
  //         parsedInfo = req.query.name;
  // //         all.map(card => {
  // //           if (card.photocard_name.toLowerCase().match(parsedInfo.name.toLowerCase())) {
  // //             filtered.push(card);
  // //           }
  // //         });
  //     }
  // // }else{
  // //   filtered = all;
  // }
  // const newPC = new Photocard(photoCardData);
  // console.log(newPC);
  // let x = await newPC.save();
  // console.log(parsedInfo);
  const photocards = await Photocard.find({ photocard_name: new RegExp(req.query.name, 'gi') });
  // console.log(photocards)

  res.send(photocards);
})

app.get("/photocarddata", (req, res, next) => {
  // axios
  //   .get("https://my.api.mockaroo.com/photocard.json?key=49083ca0")
  //   .then(apiResponse => res.json(apiResponse.data))
  //   .catch(err => next(err))
  res.json(photocard_json);
})

app.get("/tradingdata", async (req, res) => {
  const trading = await Listing.find({ "listedFor.trading": { $exists: true } });
  res.send(trading);
})
app.get("/sellingdata", async (req, res) => {
  const selling = await Listing.find({ "listedFor.selling": { $exists: true } });
  res.send(selling);
})
app.get("/lookingfordata", async (req, res) => {
  const lookingfor = await Listing.find({ "listedFor.looking": { $exists: true } });
  res.send(lookingfor);
})

app.post("/update", async (req, res, next) => {
  console.log(req.body)
  res.status(200).json({ ok: true })

  //once user auth is complete, this line below will be replaced with this.user._id
  if (User.find({ _id: "607f3995aec3658bd8c4af7b" })) { //for now, searches to see this user exists, using this condition until user auth is fully implemented
    console.log("api is hit")
    if (req.body.username != null) {
      await User.findOneAndUpdate({ _id: "607f3995aec3658bd8c4af7b" }, { username: req.body.username });  //use await before bc its a promise
    }
    if (req.body.name != null) {
      await User.findOneAndUpdate({ _id: "607f3995aec3658bd8c4af7b" }, { name: req.body.name });
    }
    if (req.body.bio != null) {
      await User.findOneAndUpdate({ _id: "607f3995aec3658bd8c4af7b" }, { bio: req.body.bio });
    }
    if (req.body.venmo != null) {
      await User.findOneAndUpdate({ _id: "607f3995aec3658bd8c4af7b" }, { venmo: req.body.venmo });
    }
    if (req.body.email != null) {
      await User.findOneAndUpdate({ _id: "607f3995aec3658bd8c4af7b" }, { email: req.body.email });
    }
    if (req.body.number != null) {
      await User.findOneAndUpdate({ _id: "607f3995aec3658bd8c4af7b" }, { phoneNum: req.body.number });
    }
    if (req.body.password != null) {
      await User.findOneAndUpdate({ _id: "607f3995aec3658bd8c4af7b" }, { password: req.body.password });
    }
  }
});


app.post("/addtowishlist", async (req, res) => {

  if (User.find({_id:"607f3995aec3658bd8c4af7b"})) {
    console.log("add api is hit")
    //console.log(req.body)
    await User.findOneAndUpdate({_id:"607f3995aec3658bd8c4af7b"}, {$push:{wishlist:req.body}})
  }
  
})

app.delete("/removefromwishlist/:id", async (req, res) => {
  
  if (User.find({_id:"607f3995aec3658bd8c4af7b"})) {
    console.log("remove api is hit")
    await User.updateOne({_id:"607f3995aec3658bd8c4af7b"}, {$pull:{"wishlist": {"id": req.params.id}}})
  }
  
})

app.get("/checkwishlist/:id", async (req, res) => {
  
  if (User.find({_id:"607f3995aec3658bd8c4af7b"})) {
    console.log("check api is hit")
    const wishlist = await User.find({_id:"607f3995aec3658bd8c4af7b", "wishlist": {$elemMatch: {"id": req.params.id }}})
    if (wishlist.length >= 1) {
      //console.log("found")
      res.send(true)
    }
    else{
      //console.log("not found")
      res.send(false)
    }
    
  }
})

app.get("/returnwishlist/", async (req, res) => {
  
  if (User.find({_id:"607f3995aec3658bd8c4af7b"})) {
    console.log("return api is hit")
    const userArr = await User.find({_id:"607f3995aec3658bd8c4af7b", "wishlist": {$exists: true}})
    //console.log(userArr[0].wishlist)
    if (userArr[0].wishlist.length >= 1) {
      //console.log("found")
      res.send(userArr[0].wishlist)
    }
    else{
      //console.log("not found")
      res.send(false)
    }
    
  }
})


app.use(express.static(path.join(__dirname, 'public')));
// app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressSession);

passport.use(User.createStrategy());

passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
  User.findOne({
    _id: id
  }, '-password -salt', function (err, user) {
    done(err, user);
  });
});

passport.use(new LocalStrategy(function (username, password, done) {
  User.findOne({
    username: username,
    password: password
  }, function (err, user) {
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

app.get('/', function (req, res) {
  res.redirect('/login');
});

app.get('/signups', (req, res) => {
  res.render('signup', { error: '' });
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
    if (err) {
      User.find({}, (err, users) => {
        res.render('signup', { error: 'there was an error in your submission' });
      });
    }
    else {
      res.redirect('/search');
    }
  });

});

app.get('/login', (req, res) => {
  res.render('login', { error: '' });
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

      req.logIn(user, function (err) {
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
module.exports = app; // CommonJS export style!