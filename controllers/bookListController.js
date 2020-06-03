const db = require("../models");
module.exports={
    addToBookList:function(req,res){
        db.Books.create(req.body).then(function(response){
            res.json(response);
        })
    },
    removeBookFromList:function(req , res){
        var id = req.params.id;
        db.Books.destroy({
            where:{id:id}
        }).then(function(response){
            res.json(response);
        })
    }
}