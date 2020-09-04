const router = require("express").Router();
const shoppingListController = require("../../controllers/listTypeController");

router.route("/")
    .post(shoppingListController.addToShoppingList);
    

router.route("/:id")
    .get(shoppingListController.findShoppingList)
    .delete(shoppingListController.removeItem);
    
    
    
router.route("/purchased/:id")
    .put(shoppingListController.purchasedItem);
    
  
  module.exports = router;
