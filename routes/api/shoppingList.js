const router = require("express").Router();
const shoppingListController = require("../../controllers/listTypeController");

router.route("/")
    .post(shoppingListController.addToShoppingList)
    .put(shoppingListController.fixName);

router.route("/:id")
    .get(shoppingListController.findShoppingList)
    
    
    
router.route("/purchased/:id")
    .put(shoppingListController.purchasedItem);
    
  
  module.exports = router;
