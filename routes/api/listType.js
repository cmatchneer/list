const router = require("express").Router();
const listTypeController = require("../../controllers/listTypeController");

router.route("/")
    .post(listTypeController.newList);
    
router.route("/:id")
    .delete(listTypeController.removeList);


module.exports = router;