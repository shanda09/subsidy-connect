const pgp = require("pg-promise")({});
const connectionString = "postgres://localhost/userlist1";
const db = pgp(connectionString);
const bcrypt = require("bcryptjs");

function comparePass(userPass, databasePass) {
  return bcrypt.compareSync(userPass, databasePass);
}

function createHash(password) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}

function loginRequired(req, res, next) {
  console.log(req.user)
  if (!req.user) {
    res.status(401)
       .json({status: "Forbidden - please log in."});
    return;
  }
  next();
}

module.exports = {
  comparePass,
  createHash,
  loginRequired
};