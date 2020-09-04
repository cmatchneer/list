const router = require("express").Router();
const checkListController = require("../../controllers/checkListController");

router.route("/")
    .post(checkListController.addToCheckList);
router.route("/:id")
    .put(checkListController.itsDone)
    .delete(checkListController.removeItem)
    .get(checkListController.getCheckList);
module.exports = router;
