let express = require("express");
let router = express.Router();
let models = require("../models");
var bcrypt = require("bcryptjs");
// GET route to display Login Page
router.get("/", (req, res) => {
  res.render("login");
});
// POST route to login username and password
router.post("/", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  models.User.findOne({
    where: {
      username: username,
    },
  }).then((user) => {
    if (user == null) {
      res.render("login", { messageError: "Username not found" });
    } else {
      if (bcrypt.compareSync(password, user.password)) {
        // user password is correct
        req.session.username = user.username;
        req.session.userid = user.id;
        res.redirect("/products");
      } else {
        // password not correct
        res.render("login", { messageError: "Password is incorrect!" });
      }
    }
  });
});

module.exports = router;
