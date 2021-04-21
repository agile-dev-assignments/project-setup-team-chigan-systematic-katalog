const localStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt') 
const User = require('./models/User')

module.exports = function(passport) {

passport.use(
    new localStrategy((username, password, done) => {
        User.findOne({username: username}, (err, user) => {
            if (err) throw err;
            if (!user) return done(null, false);
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) throw err
                if (result === true) {
                    return done(null, user)
                } else {
                    return done(null, false)
                }
            })
        })
    })
)

passport.serializeUser((user, cb) => {
    cb(null, user.id)
})
passport.deserializeUser((id, cb) => {
    User.findOne({_id: id }, (err, user) => {
        cb(err, user)
    })
})
}

// function initialize(passport, getUserByEmail, getUserById) {
//     const authenticateUser = async (email, password, done) => {
//         const user = getUserByEmail(email)
//         if (user==null){
//             return done(null, false, {message: 'No user with that email'})
//         }
//         try {
//             if (await bcrypt.compare(password, user.password)) {
//                 return done(null,user)
//             }else {
//                 return done(null, false,{message: 'Password incorrect'})
//             }
//         }catch(e) {
//             return done(e)

//         }
//     }
//     passport.use(new localStrategy({usernameField: 'email'}, authenticateUser))
//     passport.serializeUser((user, done) => done(null, user.id))
//     passport.deserializeUser((id,done) => {
//         return done(null, getUserById(id))
//     })  
// }
// module.exports = initialize




