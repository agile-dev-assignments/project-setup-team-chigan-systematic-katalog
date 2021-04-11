const chai = require("chai")
const expect = require("chai").expect;
const app = require("../app")
const should = chai.should();


describe("check for search", () => {
    it("should successfully return search", (done) => {
        chai.request(app)
        .get('/search')
        .end((err, res) => {
            res.body.should.be.a('array')
            expect(200)
            done()
        })
    })
})