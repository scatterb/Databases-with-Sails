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

    getUser: function(req, res) {
        var username = req.body.username;
        var password = req.body.password;

        User.find({ username: username, password: password }).exec(function(err, user) {
            if (err) {
                res.send(500, { error: "Database Error" });
            }
            console.log("läpi menee");
            res.view('homepage', { user: user });
        });
    }
}