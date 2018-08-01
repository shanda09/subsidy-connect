const pgp = require("pg-promise")({});
const db = pgp("postgres://localhost/userlist1");
const authHelpers = require("../auth/helpers");
const passport = require("../auth/local");


//creat user users/new
const createUser = (req, res, next) => {
    const hash = authHelpers.createHash(req.body.password);
  
    db.none('INSERT INTO users (username, password_digest) VALUES (${username}, ${password})', {username: req.body.username, password: hash})
      .then(() => {
        res.status(200)
           .json({
             message: "Registration successful."
           })
      })
      .catch((err) => {
        res.status(500)
           .json({
             message: err
           })
      })
  }

  const logoutUser = (req, res, next) => {
    req.logout();
    res.status(200).send("log out success");
  }
  
 
//login user
const loginUser = (req, res) => {
  res.json(req.user);
  console.log(req.user)
};

// POST. Route: "/addApt"
const addApt = (req,res, next) =>{
  db.none("INSERT INTO listings(address,description,rent,subsidy,bedrooms,picture,title) VALUES (${address}, ${description}, ${rent}, ${subsidy}, ${bedrooms},${picture},${title}) ",
{
  address: req.body.address,
  description: req.body.description,
  rent: req.body.rent,
  subsidy: req.body.subsidy,
  bedrooms:req.body.bedrooms,
  picture:req.body.picture,
  title:req.body.title


  })
  .then(()=>{
    res.status(200).send("Apt Added to listing")
  })
  .catch(err =>{
    res.status(500).send("Error adding apt",err)
  })
}
// Route: "/getAllListings"
const getAllListings = (req, res, next) => {
  db
  .any("SELECT * FROM listings")
  .then(data => {
    console.log(data)
    res.status(200).send(data)
  })
  .catch(err => {
    res.status(500).send("Error  " + err)
  })
}


  module.exports = {
    createUser: createUser,
    logoutUser: logoutUser,
    loginUser: loginUser,
    addApt: addApt,
    getAllListings: getAllListings,
  }