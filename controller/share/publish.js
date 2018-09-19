var db = require('./../../common/dbCommon');

var publish = function(req, res, next) {
    var user_id = req.session.user.id;
    var txt = req.body.txt;
    var image = req.body.imgList;
    var sql = "insert into share (txt, image, user_id) values ('" + txt + "', '" + image + "' , '" + user_id + "')";
    console.log(sql);
    console.log(req.body);
    db.query(sql, function(err, rows, fields) {
        if (err) {
            return console.error(err);
        }
        res.send({
            code: 200,
            status: 'success',
            message: '发表成功！',
        });
    });
};

module.exports = publish;