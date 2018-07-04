var express = require('express');
var router = express.Router();
var db = require("../db/queries");
const passport = require('../auth/local');
const { loginRequired } = require("../auth/helpers");


/* GET users listing. */
router.post('/new', db.createUser);
router.post('/login', passport.authenticate("local", {}), db.loginUser);
router.post('/logout', loginRequired, db.logoutUser);
router.get("/getAllListings", db.getAllListings);

router.post('addApt',db.addApt )
module.exports = router;
