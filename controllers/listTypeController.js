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
    },
    purchasedItem: function(req, res){
        var id = req.params.id
        console.log(id);
        db.ShoppingItem.update({
            purchased:true
        },{
            where:{id:id}
        }).then(function(response){
            res.json(response)
        })
    },
    fixName: function(req, res){
        var id = req.body.id
        console.log(req.body);
        db.ShoppingItem.update({
            itemName:req.body.itemName
        },{
            where:{id:id}
        }).then(function(response){
            res.json(response)
        })
    }


}