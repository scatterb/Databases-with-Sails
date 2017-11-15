/**
 * ArticlesController
 *
 * @description :: Server-side logic for managing Articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    list:function(req, res){
        //res.view('list');
        Articles.find({}).exec(function(err, articles) {
            if(err) {
                res.send(500, {error: "Database Error"});
            }
            res.view('list', {articles:articles});
        });
    },
    add: function(req, res){
        res.view('add');
    },
    create:function(req, res){
        var title = req.body.title;
        var body = req.body.body;

        Articles.create({title:title, body:body}).exec(function(err){
            if(err) {
                res.send(500, {error: 'Database Error'});
            }

            res.redirect('/articles/list');
        })
    }
	
};

