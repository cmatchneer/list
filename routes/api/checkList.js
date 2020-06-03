const router = require("express").Router();
const checkListController = require("../../controllers/checkListController");

router.route("/")
    .post(checkListController.addToCheckList);
router.route("/:id")
    .get(checkListController.getCheckList);



module.exports = router;
