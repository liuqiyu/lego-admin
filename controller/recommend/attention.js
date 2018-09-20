var db = require('./../../common/dbCommon');

var attention = function(req, res, next) {
    var user_id = req.session.user.id;
    var sql = 'select * from user where id = ' + req.query.id;
    db.query(sql, function (err, rows, fields) {
        if (err) {
            return console.error(err);
        }
        var follows = rows[0].follows;
        if (rows[0].follows) {
            follows = follows + ',' + user_id;
        } else {
            follows = user_id.toString();
        }

        var sql1 = "update user set follows = '" + follows + "' where id = " + req.query.id;
        db.query(sql1, function (err, rows, fields) {
            if (err) {
                return console.error(err);
            }
            res.send({
                code: 200,
                status: 'success',
                message: '操作成功！'
            });
        });
    });
};

module.exports = attention;