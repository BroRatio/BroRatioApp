const router = require("express").Router();
const login = require("./login");
const userInfo= require("./userInfo");
const imagePath = require("./imagePath");


//router.use("/login", login);
router.use("/userInfo", userInfo);
router.use("/images", imagePath); //make the images show up

module.exports = router;
