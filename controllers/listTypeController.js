const db = require("../models");
module.exports ={
    newList:function(req,res){
        db.ListType.create(req.body).then(function(response){
            res.json(response)
        })
    },
    addToShoppingList:function(req,res){
        db.ShoppingItem.create(req.body).then(function(response){
            res.json(response)
        })
    },
    findShoppingList: function(req,res){
        var id = req.params.id
        db.ListType.findAll({
            where:{id:id},
            include:[
                    db.ShoppingItem  
            ]
        }).then(function(response){
            res.json(response);
        })
    }

}