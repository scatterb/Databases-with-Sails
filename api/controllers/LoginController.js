/**
 * ArticlesController
 *
 * @description :: Server-side logic showing login page
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    login: function(req, res) {
        res.view('login');
    },

    CheckDbWithUsername: function(req, res) {
        User.find({}).exec(function(err, user) {
            if (err) {
                res.send(500, { error: "Database Error" });
            }
            res.view('/', { user: user });
        });
    }
}