var host = require('./../../common/config');
var db = require('./../../common/dbCommon');

var uploadPhoto = function(req, res) {
    console.log(req.session.user.id);
    var file = req.file;
    var path = host + file.path.replace(/\\/g,"\/").replace('public', '');
    var user_id = req.session.user.id;
    var sql = "update user set photo = '" + path + "' where id = " + user_id;
    db.query(sql, function(err, rows, fields) {
        if (err) {
            return console.error(err);
        }
        res.send({
            code: 200,
            status: 'success',
            data: path,
            message: '上传成功！'
        });
    });

};

module.exports = uploadPhoto;