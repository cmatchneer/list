const router = require("express").Router();
const collectableListController = require("../../controllers/collectablesController");

router.route("/")
    .post(collectableListController.addToList);
router.route("/:id")
    .get(collectableListController.getAll)
    .delete(collectableListController.removeItem);

module.exports = router;