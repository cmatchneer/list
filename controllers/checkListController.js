const db = require("../models");

module.exports={
    addToCheckList:function(req,res){
        db.CheckList.create(req.body).then(function(respose){
            res.json(respose)
        })
    },
    getCheckList:function(req,res){
        var id =req.params.id;
        db.ListType.findAll({
            where:{id:id},
            include:[
                db.CheckList
            ]
        }).then(function(respose){
            res.json(respose);
        })
    },
    itsDone:function(req,res){
        var id = req.params.id;
        db.CheckList.update({
            done:true
        },{
            where:{id:id}
        }).then(function(respose){
            res.json(respose);
        })
    }
}