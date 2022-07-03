const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const Users = require("../models/userSchema");
const saltRounds = 11;

passport.use(
  "user-registry",
  new LocalStrategy(
    { passReqToCallback: true },
    async (req, email, password, cb) => {
      try {
        await Users.findOne({ email: email }, async (err, user) => {
          if (err) {
            return cb(err, { message: "Error al registrar el usario" });
          }
          if (user) {
            return cb(null, false, { message: "Usuario ya registrado" });
          }
          const newUser = {
            email: email,
            password: bcrypt.hashSync(password.toString(), saltRounds),
            username: req.body.username,
            lastname: req.body.lastname,
            age: req.body.age,
          };
          await Users(newUser).save().then((user) => {return cb(null, user)});
          // console.log(req.sessionID);
          // return cb(null, user);
        });
      } catch (error) {
        console.log(error + "Entro al catch...");
      }
    }
  )
);

let comparePassword = async (password, hash) => {
  try {
    return await bcrypt.compare(password.toString(), hash);
  } catch (error) {
    console.log(error);
  }
  return false
}

passport.use(
  "user-login",
  new LocalStrategy(
    {usernameField: "email", passwordField: "password"},
    async (email, password, cb) => {
      try {
        const result = await Users.findOne({ email: email });
        if (!result) {
          return cb(null, false, { message: "El usuario no existe" });
        }
        const isValid = await comparePassword(password, result.password);
        if (!isValid) {
          return cb(null, false, { message: "Contraseña incorrecta" });
        }
        return cb(null, result);
      } catch (error) {
        console.log("Error al buscar usuario: " + error);
      }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await Users.findById(id)
  done(null, user);
});

// passport.use(
//   "user-registry",
//   new LocalStrategy(
//     { passReqToCallback: true },
//     (req, email, password, done) => {
//       Users.findOne({ email: email })
//         .then((user) => {
//           if (user) {
//             return done(null, false, { message: "Usuario ya registrado" });
//           }
//           const newUser = {
//             email: email,
//             password: bcrypt.hashSync(password.toString(), saltRounds),
//             username: req.body.username,
//             lastname: req.body.lastname,
//             age: req.body.age,
//           };
//           new Users(newUser).save().then((user) => {return done(null, user)})
//           console.log("Usuario registrado");
//           console.log(user);
//         })
//         .catch((err) => {
//           console.log("Catch/error: "+ err);
//         });
//     }
//   )
// );

module.exports;
