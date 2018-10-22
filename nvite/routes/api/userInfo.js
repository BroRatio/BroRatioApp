const router = require("express").Router();
const userInfoController = require("../../controller/userInfoController");
const userLoginController = require("../../controller/loginController");

router.route('/analyze')
  .post(userInfoController.getPictureInfoRequest)

//WithPicture
router.route('/loginAuth')
  .post(userLoginController.postLoginInfoRequest)

//With Username and Password
router.route('/loginUserPass')
  .post(userLoginController.postUserPassRequest)

//Login validity
router.route('/loginValid')
  .post(userLoginController.isTokenValid)

module.exports = router;
