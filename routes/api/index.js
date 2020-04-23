const path = require("path");
const router = require("express").Router();
const userRoutes = require("./users");
const listTypeRoutes = require("./listType");
const shoppingListRoutes = require("./shoppingList");

router.use("/users", userRoutes);

router.use("/listType", listTypeRoutes);

router.use("/shoppingList", shoppingListRoutes);


router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  });
  
  module.exports = router;
  