const router = require("express").Router();
const userPath= require("./userInfo");
const imagePath = require("./imagePath");
const loginPath = require("./loginLogic");

//Most all of the routes
router.use("/userInfo", userPath); //User auth

// router.use("/login", loginPath); //Login Path

module.exports = router;
