const router = require("express").Router();
const userInfoController = require("../../controller/loginController");

// Matches with "/api/imagePath"
router.route("/auth(0.1)")
  //.post(userInfoController.getPictureInfoRequest);

router
  .route("/:id")
  //.get(imgController.findById)

module.exports = router;
