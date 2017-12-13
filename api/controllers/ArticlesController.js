/**
 * ArticlesController
 *
 * @description :: Server-side logic for managing Articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    articles: function(req, res) {
        Articles.find({}).exec(function(err, articles) {
            if (err) {
                res.send(500, { error: "Database Error" });
            }
            res.view('articles', { articles: articles });
        });
    },

    // This was formerly edit & still also does work as an edit page if admin user (TODO)
    articlepage: function(req, res) {
        Articles.findOne({ id: req.params.id }).exec(function(err, article) {
            if (err) {
                res.send(500, { error: 'Database Error' });
            }

            res.view('articlepage', { article: article });
        });
    },

    //////// TODO! All these functions below just for admin user \\\\\\\\\\\

    list: function(req, res) {
        Articles.find({}).exec(function(err, articles) {
            if (err) {
                res.send(500, { error: "Database Error" });
            }
            res.view('list', { articles: articles });
        });
    },

    add: function(req, res) {
        if (req.session.me) {
            res.view('add');
        } else {
            res.redirect('/');
        }
    },

    create: function(req, res) {
        var title = req.body.title;
        var body = req.body.body;
        var category = req.body.category;
        if (req.session.me) {
            Articles.create({ title: title, body: body, category: category }).exec(function(err) {
                if (err) {
                    res.send(500, { error: 'Database Error' });
                } else {
                    res.redirect('/');
                }
                res.redirect('/articles/list');

            });
        }
    },

    delete: function(req, res) {
        if (req.session.me) {
            Articles.destroy({ id: req.params.id }).exec(function(err) {
                if (err) {
                    res.send(500, { error: 'Database Error' });
                }
                res.redirect('/articles/list');
            });
        } else {
            res.redirect('/');
        }
        return false;
    },

    edit: function(req, res) {
        if (req.session.me) {
            Articles.findOne({ id: req.params.id }).exec(function(err, article) {
                if (err) {
                    res.send(500, { error: 'Database Error' });
                }
                res.view('edit', { article: article });
            });
        } else {
            res.redirect('/');
        }
    },

    update: function(req, res) {
        var title = req.body.title;
        var body = req.body.body;
        var category = req.body.category;
        if (req.session.me) {
            Articles.update({ id: req.params.id }, { title: title, body: body, body: category }).exec(function(err) {
                if (err) {
                    res.send(500, { error: 'Database Error' });
                }
                res.redirect('/articles/list');
            });
        } else {
            res.redirect('/');
        }

        return false;
    }
};