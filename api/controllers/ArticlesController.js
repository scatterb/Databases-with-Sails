/**
 * ArticlesController
 *
 * @description :: Server-side logic for managing Articles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    list:function(req, res) {
        //res.view('list');
        Articles.find({}).exec(function(err, articles) {
            if(err) {
                res.send(500, {error: "Database Error"});
            }
            res.view('list', {articles:articles});
        });
    }
	
};

