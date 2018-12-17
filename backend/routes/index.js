const express = require("express");
const router = express.Router();
const passport = require("passport");

const controller = require("../controllers");

//  routes
router.get("/", controller.site.rootPage);

// auth routes
router.post("/register", controller.site.register);
router.post("/login", controller.site.login);

// protected routes
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  controller.site.currentUser
);

module.exports = router;
