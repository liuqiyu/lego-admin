var db = require('./../../common/dbCommon');

var unsubscribe = function(req, res, next) {
    var user_id = req.session.user.id;
    var sql = 'select * from user where id = ' + req.query.id;
    db.query(sql, function (err, rows, fields) {
        if (err) {
            return console.error(err);
        }
        var follows = rows[0].follows.split(',');
        var index = follows.indexOf(user_id.toString());
        follows.splice(index, 1);
        follows = follows.join(',');
        var sql1 = "update user set follows = '" + follows + "' where id = " + req.query.id;
        db.query(sql1, function (err, rows, fields) {
            if (err) {
                return console.error(err);
            }
            res.send({
                code: 200,
                status: 'success',
                message: '取消关注成功！'
            });
        });
    });
};

module.exports = unsubscribe;