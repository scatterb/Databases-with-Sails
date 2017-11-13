/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 
module.exports = {

    create: function(req, res){
        var params = req.params.all()
        User.create({name: params.name}).exec(function createCB(err,created){
          return res.json({
            notice: 'Created user with name ' + created.name
          });
        });
      }
	
};


