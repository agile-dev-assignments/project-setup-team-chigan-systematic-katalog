const chai = require("chai")
const expect = require("chai").expect;
const app = require("../app")
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);
const photocarddata = require("../public/photocards.json")

describe("get request of photocard", () => {
    it("should successfully return photocard json data", (done) => {
        chai.request(app)
        .get('/photocarddata')
        .end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.a('array')
            done()
        })
    })
    it("should return the correct photocard data", (done) => {
        chai.request(app)
        .get('/photocarddata')
        .end((err, res) => {
            expect(res.body[0].id).to.equal(photocarddata[0].id)
            done()
        })
    })
})