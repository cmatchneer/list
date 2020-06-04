const router = require("express").Router();
const bookController = require("../../controllers/bookListController");

router.route("/")
    .post(bookController.addToBookList)
router.route("/:id")
    .get(bookController.allBooksInTheList)
    .delete(bookController.removeBookFromList);
router.route("/purchased/:id")
    .put(bookController.finishedBook);
router.route("/title")
    .put(bookController.titleUpdate);
router.route("/author")
    .put(bookController.authorUpdate);

module.exports = router;
