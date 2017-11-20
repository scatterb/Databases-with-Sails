/**
 * BooksController
 *
 * @description :: Server-side logic for managing Books
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    listbook:function(req, res){
        Books.find({}).exec(function(err, books) {
            if(err) {
                res.send(500, {error: "Database Error"});
            }
            res.view('listbook', {books:books});
        });
    },
    add: function(req, res){
        res.view('add');
    },
    create:function(req, res){
        var title = req.body.title;
        var body = req.body.synopsis;

        Books.create({title:title, body:synopsis}).exec(function(err){
            if(err) {
                res.send(500, {error: 'Database Error'});
            }

            res.redirect('/books/listbook');
        });
    },
    delete: function(req, res){
        Books.destroy({id:req.params.id}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }

            res.redirect('/books/listbook');
        });

        return false;
    },
    edit: function(req, res){
        Books.findOne({id:req.params.id}).exec(function(err, article){
            if(err){
                res.send(500, {error: 'Database Error'});
            }

            res.view('edit', {book:book});
        });
    },
    update: function(req, res){
        var title = req.body.title;
        var synopsis = req.body.synopsis;

        Books.update({id: req.params.id},{title:title, body:synopsis}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }

            res.redirect('/books/listbook');
        });

        return false;
    }
};

