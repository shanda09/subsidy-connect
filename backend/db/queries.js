const pgp = require("pg-promise")({});
const db = pgp("postgres://localhost/userlist1");
const authHelpers = require("../auth/helpers");
const passport = require("../auth/local");


//creat user users/new
function createUser(req, res, next) {
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

  function logoutUser(req, res, next) {
    req.logout();
    res.status(200).send("log out success");
  }
  
 
//   function loginUser(req, res, next) {
//     passport.authenticate('local', (err, user, info) => {
//       if (err) {
//         console.log("FIRST ERROR")
//         res.status(500)
//           .json({
//             status: 'error',
//             error: err
//           })
//       }
//       else if (!user) {
//         res.status(404)
//           .json({
//             status: 'Not Found',
//             error: err
//           })
//       } else if (user) {
//         req.logIn(user, function (err) { 
//           if (err) {
//             console.log("THIS ERROR")
//             res.status(500)
//               .json({
//                 status: 'Login Error',
//                 error: err
//               })
//           }
//           // res.send(user)
// console.log(user)
//           res.status(200)
//             .json({
//               status: 'success',
//               data: user ,
//               message: 'Logged in user'
//             });
//         })
//       }
//     }
//     )(req, res, next);
//   };

function loginUser(req, res) {
  res.json(req.user);
  console.log(req.user)
};

// POST. Route: "/addApt"
const addApt = (req,res, next) =>{
  db
  .none("INSERT INTO listings(address,description,rent,subsidy,bedrooms,picture) VALUES (${address}, ${description}, ${rent}, ${subsidy}, ${bedrooms},${picture}) ",
{
  address: req.body.address,
  description: req.body.description,
  rent: req.body.rent,
  subsidy: req.body.subsidy,
  bedrooms:req.body.bedrooms,
  picture:req.body.picture


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
    res.status(500).send("Error getting movies bro. " + err)
  })
}


  module.exports = {
    createUser: createUser,
    logoutUser: logoutUser,
    loginUser: loginUser,
    addApt: addApt,
    getAllListings: getAllListings
  };

