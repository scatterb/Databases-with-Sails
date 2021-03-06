/**
 * ArticlesController
 *
 * @description :: Server-side logic showing login page
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
'use strict';

module.exports = {
    login: function(req, res) {
        res.view('login');
    },

    getUser: function(req, res) {
        var username = req.body.username;
        var password = req.body.password;
        User.find({ username: username, password: password }).exec(function(err, user) {
            if (err) {
                res.send(500, { error: "Database Error" });
            }
            if (isEmpty(user)) {
                req.session.me = null;
                return res.view('login');
            }
            req.session.me = user;
            res.redirect('/');

        });
    },
    logOut: function(req, res) {
        req.session.me = null;
        return res.redirect('/');
    }
}

function isEmpty(myObject) {
    for (var key in myObject) {
        if (myObject.hasOwnProperty(key)) {
            return false;
        }
    }

    return true;
}