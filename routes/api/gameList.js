const router = require("express").Router();
const gameListController = require("../../controllers/gameListController");

router.route("/")
    .post(gameListController.addToGameList);
router.route("/:id")
    .delete(gameListController.gameRemove)
    .get(gameListController.allGames);
router.route("/owned/:id")
    .put(gameListController.gamePurchased)


module.exports = router;