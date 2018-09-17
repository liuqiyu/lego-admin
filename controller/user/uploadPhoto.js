var uploadPhoto = function(req, res) {
    console.log(req);
    res.send({
        code: 200,
        status: 'success',
        message: '上传成功！'
    });
};

module.exports = uploadPhoto;