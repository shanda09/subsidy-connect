const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const init = require('./passport');
const helpers = require('./helpers');

const pgp = require("pg-promise")({});
const connectionString = "postgres://localhost/userlist1";
const db = pgp(connectionString);

const options = {};

init();

passport.use(
  new LocalStrategy(options, (username, password, done) => {
    console.log(username)
    db.any('SELECT * FROM users WHERE username = ${username}',
           {username: username})
      .then((rows) => {
        console.log(rows)
        const user = rows[0];

        if (!user) {
          return done(null, false);
        }
        if (!helpers.comparePass(password, user.password_digest)) {
          return done(null, false);
        }
        else {
          return done(null, user);
        }
      })
      .catch((err) => {
        console.log(err);
        return done(err);
      })
  })
)

module.exports = passport;