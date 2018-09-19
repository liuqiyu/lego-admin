var host = require('./../../common/config');

var upload = function(req, res, next) {
    var data = [];
    for (var i = 0; i < req.files.length; i ++) {
        var path = host + req.files[i].path.replace(/\\/g,"\/").replace('public', '');
        data.push({
            url: path,
            name: req.files[i].filename,
        });
    }
    return res.send({
        code: 200,
        status: 'success',
        data: data,
    });
};

module.exports = upload;