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
    // Delete this later. Maybe
    /*
    testi: function(req, res){
        //res.view('testi');
        Articles.find({}).exec(function(err, articles) {
            if(err) {
                res.send(500, {error: "Database Error"});
            }
            res.view('testi', {articles:articles});

        });
    }, */
    testi: function(req, res){
        //res.view('testi');
        Articles.find({}).exec(function(err, articles) {
            if(err) {
                res.send(500, {error: "Database Error"});
            }
            res.view('testi', {articles:articles});

        });
    },
    create: function(req, res){
        var title = req.body.title;
        var body = req.body.body;

        Articles.create({title:title, body:body}).exec(function(err){
            if(err) {
                res.send(500, {error: 'Database Error'});
            }

            res.redirect('/articles/list');
        });
    },
    delete: function(req, res){
        Articles.destroy({id:req.params.id}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }

            res.redirect('/articles/list');
        });

        return false;
    },
    edit: function(req, res){
        Articles.findOne({id:req.params.id}).exec(function(err, article){
            if(err){
                res.send(500, {error: 'Database Error'});
            }

            res.view('edit', {article:article});
        });
    },
    
    /* THESE ARE PROBABLY UNNECESSARY, DELETE!
    updatebook: function(req, res){
        var title = req.body.title;
        var body = req.body.body;

        Articles.update({id: req.params.id},{title:title, body:body}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }

            res.redirect('/articles/list');
        });

        return false;
    }
    ,
    update: function(req, res){
        var title = req.body.title;
        var body = req.body.body;

        Articles.update({id: req.params.id},{title:title, body:body}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }

            res.redirect('/articles/list');
        });

        return false;
    }
    */

    articleview: function(req, res){
        Articles.findOne({id:req.params.id}).exec(function(err, article){
            if(err){
                res.send(500, {error: 'Database Error'});
            }

            res.view('articleview', {article:article});
        });
    },
};

