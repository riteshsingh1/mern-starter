const express = require("express");
const router = express.Router();

const controller = require("../controllers");

//  routes
router.get("/", controller.site.rootPage);

module.exports = router;
