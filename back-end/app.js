// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const mongoose = require('mongoose');
const cors = require('cors')
const profileRouter = require('./profile')

const sellingpostbackRouter = require('./sellingpostback');
const photocard_json = require("./public/photocards.json")

const Photocard = require('./models/Photocard');
const db = require('./db');

db();

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
});

app.get("/photocarddata", (req, res, next) => {
  // axios
  //   .get("https://my.api.mockaroo.com/photocard.json?key=49083ca0")
  //   .then(apiResponse => res.json(apiResponse.data))
  //   .catch(err => next(err))
  res.json(photocard_json);
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

app.post("/update", async (req,res,next) => {

  console.log(req.body)
  res.status(200).json({ok:true})

  //once user auth is complete, this line below will be replaced with this.user._id
  if (User.find({_id:"607f3995aec3658bd8c4af7b"})) { //for now, searches to see this user exists, using this condition until user auth is fully implemented
    console.log("api is hit")
    if (req.body.username!=null) {
      await User.findOneAndUpdate({_id:"607f3995aec3658bd8c4af7b"},{username:req.body.username});  //use await before bc its a promise
    }
    if (req.body.name!=null) {
      await User.findOneAndUpdate({_id:"607f3995aec3658bd8c4af7b"},{name:req.body.name});
    }
    if (req.body.bio!=null) {
      await User.findOneAndUpdate({_id:"607f3995aec3658bd8c4af7b"},{bio:req.body.bio});
    }
    if (req.body.venmo!=null) {
      await User.findOneAndUpdate({_id:"607f3995aec3658bd8c4af7b"},{venmo:req.body.venmo});
    }
    if (req.body.email!=null) {
      await User.findOneAndUpdate({_id:"607f3995aec3658bd8c4af7b"},{email:req.body.email});
    }
    if (req.body.number!=null) {
      await User.findOneAndUpdate({_id:"607f3995aec3658bd8c4af7b"},{phoneNum:req.body.number});
    }
    if (req.body.password!=null) {
      await User.findOneAndUpdate({_id:"607f3995aec3658bd8c4af7b"},{password:req.body.password});
    }
  }
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
// export the express app we created to make it available to other modules
module.exports = app // CommonJS export style!