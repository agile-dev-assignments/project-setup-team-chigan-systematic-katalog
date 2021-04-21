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
    // it("should return the correct username object", (done) => { //This will be a unit test to check that each field is properly being updated with the inserted data
    //     chai.request(app)
    //     .get('/update')
    //     .end((err, res) => {
    //         expect(res.body).to.equal("myusername")
    //         done()
    //     })
    // })
})
