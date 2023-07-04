const express = require("express");
const { Router } = require("express");
const router = new Router();
require("../config/passport-local");
const passport = require("passport");
const session = require("express-session");
const Users = require('../models/userSchema')

router.use(
  session({
    secret: "Shh, top secret!",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60,
    },
    cookie: {
      httpOnly: false,
      secure: false,
      maxAge: 10*60*1000
    }
  })
);
router.use(passport.initialize());
router.use(passport.session());
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const auth = function(req, res, next){
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}

router.get("/", (req, res) => {
  res.send("Pagina principal");
});
router.post("/userLogin", auth, (req, res) => {
  res.send("Pagina userLogin");
})
router.post("/failUser", (req, res) => {
  res.send("Error de signup/signin");
})

router.post(
  "/newUser",
  passport.authenticate("user-registry", {
    successRedirect: "/login/userLogin",
    failureRedirect: "/login/failUser",
    failureMessage: true,
  })
);
router.post(
  "/",
  passport.authenticate("user-login", {
    successRedirect: "/login/userLogin",
    failureRedirect: "/login/failUser",
  })
);

router.post("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

// TESTS
router.get("/users", async (req, res) => {
  const usuariosRegistrados = await Users.find({})
  res.send(usuariosRegistrados)
})
router.get("/users/:id", async (req, res) => {
  const usuariosRegistrados = await Users.find({_id: req.params.id})
  res.send(usuariosRegistrados)
})
module.exports = router;
