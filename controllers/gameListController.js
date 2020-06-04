const db = require("../models");
module.exports ={
    addToGameList:function(req,res){
        db.Games.create(req.body).then(function(response){
            res.json(response)
        })
    },
    allGames:function(req,res){
        var id =req.params.id;
        db.ListType.findAll({
            where:{id:id},
            include:[
                db.Games
            ]
        }).then(function(response){
            res.json(response)
        })
    },
    gamePurchased:function(req,res){
        var id =req.params.id;
        db.Games.update({
            owned:true
        },{
            where:{id:id}
        }).then(function(response){
            res.json(response);
        })
    },
    gameRemove:function(req,res){
        var id =req.params.id;
        db.Games.destroy({
            where:{id:id}
        }).then(function(response){
            res.json(response)
        })
    }
}