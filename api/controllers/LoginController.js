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
            if (isEmpty(user)) {
                res.writeHead(400, { 'Content-Type': 'application/text' });
                res.end('Login Fail');
            }
            console.log(user);
            req.session.me = user;
            console.log(req.session.me);
            res.view('homepage', { user: user });

        });
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