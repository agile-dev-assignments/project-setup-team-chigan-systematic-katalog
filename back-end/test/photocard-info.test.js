const chai = require("chai")
const expect = require("chai").expect;
const app = require("../app")
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);
const photocarddata = require("../public/photocards.json")

beforeEach(done => setTimeout(done, 2000));

describe("get request of selling data", () => {
    it("should successfully return selling json data", (done) => {
        chai.request(app)
        .get('/sellingdata/:id')
        .end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.a('array')
            done()
        })
    })
})

describe("get request of trading data", () => {
    it("should successfully return trading json data", (done) => {
        chai.request(app)
        .get('/tradingdata/:id')
        .end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.a('array')
            done()
        })
    })
})

describe("get request of looking for data", () => {
    it("should successfully return looking for json data", (done) => {
        chai.request(app)
        .get('/lookingfordata/:id')
        .end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.a('array')
            done()
        })
    })
})