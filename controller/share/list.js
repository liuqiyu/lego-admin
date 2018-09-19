var db = require('./../../common/dbCommon');

var list = function(req, res, next) {
    var sql = 'select share.id, share.txt, share.image, share.user_id, share.likes_id, share.collections_id, share.comment_id, user.username, user.photo from share join user on user.id = share.user_id';
    db.query(sql, function (err, rows, fields) {
        if (err) {
            return console.error(err);
        }
        res.send({
            code: 200,
            status: 'success',
            data: rows,
            message: '操作成功！'
        });
    });
};

module.exports = list;