
const chai = require("chai")
const assert = require("assert");
const app = require('../app');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);
//login
describe('user login', ()=> {
    it('Should succesfully login user and return auth token', (done)=> {
        chai.request(app)
        .get('/login')
        .send({
            email: users[1].email,
            password: users[1].password
        })
        .expect(200)
        .expect((res)=> {
            expect(res.headers['x-auth']).not.toBeNull();
        })
        .end((err,res)=> {
            if(err) return done(err);

            User.findById(users[1]._id).then((user)=> {
                expect(user.tokens[1]).toHaveProperty('access', 'auth');
                expect(user.tokens[1]).toHaveProperty('token', res.headers['x-auth']);
                done();
        }).catch((err)=>done(err));
    });
});
});

//signup
describe('user signup', ()=> {
    it('should successfully create a user', (done)=> {
        var email = "abc@email.com";
        var password = "12334!";

        chai.request(app)
        .get('/signup')
        .send({email,password})
        .expect((res)=> {
            expect(res.headers['x-auth']).not.toBeNull();
            expect(res.body._id).not.toBeNull();
            expect(res.body.email).toBe(email);
        })
        .end((err)=> {
            if(err) return done(err);

            User.findOne({email}).then((user)=> {
                expect(user).not.toBeNull();
                expect(user.password).not.toBe(password);
                done();
            });
        });
    });
});