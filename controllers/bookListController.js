const db = require("../models");
module.exports={
    addToBookList:function(req,res){
        db.Books.create(req.body).then(function(response){
            res.json(response);
        })
    }
}