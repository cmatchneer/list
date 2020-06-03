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
    },
    allBooksInTheList:function(req,res){
        var id =req.params.id;
        db.ListType.findAll({
            where:{id:id},
            include:[
                db.Books
            ]
        }).then(function(response){
            res.json(response);
        })
    },
    finishedBook:function(req,res){
        var id = req.params.id;
        db.Books.update({
            finished:true
        },{
            where:{id:id}
        }).then(function(response){
            res.json(response);
        })
    },
    titleUpdate:function(req,res){
        var id = req.body.id
        db.Books.update({
            title:req.body.title
        },{
            where:{id:id}
        }).then(function(response){
        res.json(response);
        })
    },
    authorUpdate:function(req,res){
        var id = req.body.id
        db.Books.update({
            author:req.body.author
        },{
            where:{id:id}
        }).then(function(response){
        res.json(response);
        })
    }
}