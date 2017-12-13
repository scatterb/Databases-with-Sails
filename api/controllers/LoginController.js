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

    GetUser: function(req, res) {
        var username = req.body.username;
        var password = req.body.password;

        console.log(username);
        console.log(password);
        User.find({}).exec(function(err, user) {
            if (err) {
                res.send(500, { error: "Database Error" });
            }
            res.view('homepage', { user: user });
        });
    }
}