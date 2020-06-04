const db = require("../models");
module.exports={
    addToList:function(req,res){
        db.WishList.create(req.body).then(function(response){
            res.json(response)
        })
    },
    getAll:function(req,res){
        var id =req.params.id;
        db.ListType.findAll({
            where:{id:id},
            include:[
                db.WishList
            ]
        }).then(function(response){
            res.json(response);
        })
    },
    removeItem:function(req,res){
        var id = req.params.id;
        db.WishList.destroy({
            where:{id:id}
        }).then(function(response){
            res.json(response);
        })
    },
    purchased:function(req,res){
        var id = req.params.id;
        db.WishList.update({
            purchased:true
        },{
            where:{id:id}
        }).then(function(response){
            res.json(response);
        })
    }
}