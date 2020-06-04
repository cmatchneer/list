const db = require("../models");
module.exports ={
    addToList:function(req,res){
        db.Collectables.create(req.body).then(function(response){
            res.json(response)
        })
    },
    getAll:function(req,res){
        var id = req.params.id;
        db.ListType.findAll({
            where:{id:id},
            include:[
                db.Collectables
            ]
        }).then(function(response){
            res.json(response)
        })
    },
    removeItem:function(req,res){
        var id = req.params.id;
        db.Collectables.destroy({
            where:{id:id}
        }).then(function(response){
            res.json(response)
        })
    }
}