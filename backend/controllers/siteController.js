const validateRegisterInput = require("../validations/register");
const validateLoginInput = require("../validations/login");
const users = require("../models/users");
const bcrypt = require("bcryptjs");
const uuidv4 = require("uuid/v4");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");

exports.rootPage = (req, res) => {
  return res.json({
    msg: "Hello"
  });
};

exports.register = (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check Validation
  if (!isValid) {
    return res.status(422).json(errors);
  }
  users.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "Alread Exists";
      return res.status(422).json(errors);
    } else {
      const newUser = new users({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        token: uuidv4()
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(usr => res.json(usr))
            .catch(err => console.log(err));
        });
      });
    }
  });
};

exports.login = (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(422).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  users.findOne({ email }).then(user => {
    // Check for user
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payload = { id: user.id, name: user.name, email: user.email }; // Create JWT Payload

        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "Password incorrect";
        return res.status(422).json(errors);
      }
    });
  });
};

exports.currentUser = (req, res) => {
  res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email
  });
};
