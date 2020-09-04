const router = require("express").Router();
const userController = require("../../controllers/userController");


router.route("/")
  .post(userController.signup);

router.route("/:id")
  .get(userController.findEmailById)
router.route("/userLists/:id")
  .get(userController.allLists);

module.exports = router;
