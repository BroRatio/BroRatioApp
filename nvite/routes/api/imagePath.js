const router = require("express").Router();
const imgController = require("../../controller/imageController");

// Matches with "/api/imagePath"
router.route("/")
  //.post(imgController.create);

router
  .route("/:id")
  //.get(imgController.findById)

module.exports = router;
