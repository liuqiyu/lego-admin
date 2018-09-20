var db = require('./../../common/dbCommon');

var list = function(req, res, next) {
    var user_id = req.session.user.id;
    var sql = 'select * from user where id != ' + user_id;
    db.query(sql, function (err, rows, fields) {
        if (err) {
            return console.error(err);
        }
        const data = rows;
        data.forEach(function(value, index) {
            if (value.follows) {
                var follows = value.follows.split(',');
                console.log(follows);
                console.log(user_id);
                if (follows.indexOf(user_id.toString()) >= 0) {
                    data[index].status = 1;
                } else {
                    data[index].status = 0;
                }
            } else {
                data[index].status = 0;
            }
        });
        res.send({
            code: 200,
            status: 'success',
            data: data,
            message: '操作成功！'
        });
    });
};

module.exports = list;