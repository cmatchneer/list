const router = require("express").Router();
const listTypeController = require("../../controllers/listTypeController");

router.route("/")
    .post(listTypeController.newList);

module.exports = router;