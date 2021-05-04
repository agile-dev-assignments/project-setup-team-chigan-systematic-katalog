const chai = require("chai")
const expect = require("chai").expect;
const app = require("../app")
const should = chai.should();
//const User = require("./models/User")

describe("Edit Profile Request Finds And Returns Object", () => { //Updating username
    it("should successfully return an object from database", (done) => {
        chai.request(app)
        .get('/update')
        .end((err, res) => {
            res.body.should.be.a('Object')
            expect(200)
            done()
        })
    })


// const assert = require('assert');
// const User = require('../models/User');

// // describe('Creating a user', () => {
// //     it("saves a user", (done) => {
// //         var user = new User({name: 'Henry'});

// //         user.save()
// //         .then(() => {
// //             assert(!user.isNew);
// //             done();

// //         });
// //     });
// // });

// describe('Updating a user', () => {

//   let user;

// //   beforeEach((done) => {
// //     user = new User({ name: 'Henry' });
// //     user.save()
// //       .then(() => done());
// //   });

// beforeEach(async function() {
//     // await db.clear();
//     // await db.save([tobi, loki, jane]);
//     user = new User({ name: 'Henry' });
//     user.save() 
//   });
  
// //   function assertHelper(statement, done) {
// //     statement
// //      .then(() => User.find({}))
// //      .then((users) => {
// //       //assert(users.length === 1);
// //       assert(users[13].name === 'Not Henry');
// //       done();
// //     });
// //   }

//   function assertHelper(statement, done) {
//     statement
//      .then(() => User.find({}))
//      .then((users) => {
//       //assert(users.length === 1);
//       assert(users[13].name === 'Not Henry');
//       done();
//     });
//   }

//   //change promise in assert helper
//   it('sets and saves name using an instance', (done) => {
//     user.set('name', 'Not Henry'); //not updated in mongodb yet
//     assertHelper(user.save(), done);
//     // return new Promise(function(resolve) {
//     //     assert.ok(true);
//     //     resolve();
//     //   })
//    });
 
//   it('update name using instance', (done) => {
//     //useful to update multiple fields of the object
//     assertHelper(user.update({ name: 'Not Henry' }), done);
//     // return new Promise(function(resolve) {
//     //     assert.ok(true);
//     //     resolve();
//     //   })
//   });

//   it('update one name with id using model', (done) => {
//     assertHelper(User.findByIdAndUpdate(user._id, { name: 'Not Henry' }), done);
//     // return new Promise(function(resolve) {
//     //     assert.ok(true);
//     //     resolve();
//     //   })
//   });
// });


//     // it("should return the correct username object", (done) => { //This will be a unit test to check that each field is properly being updated with the inserted data
//     //     chai.request(app)
//     //     .get('/update')
//     //     .end((err, res) => {
//     //         expect(res.body).to.equal("myusername")
//     //         done()
//     //     })
//     // })


})
