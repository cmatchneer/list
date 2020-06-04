const router = require("express").Router();
const wishListController = require("../../controllers/wishListController");

router.route("/")
    .post(wishListController.addToList)
router.route("/:id")
    .get(wishListController.getAll)
    .delete(wishListController.removeItem)
    .put(wishListController.purchased);

module.exports = router;