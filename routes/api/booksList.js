const router = require("express").Router();
const bookController = require("../../controllers/bookListController");

router.route("/")
    .post(bookController.addToBookList)
router.route("/:id")
    .delete(bookController.removeBookFromList);

module.exports = router;
