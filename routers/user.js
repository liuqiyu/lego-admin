var fs = require('fs');
var express = require('express');
var router = express.Router();
var path = require('path');
var multer = require('multer');//接收图片

var createFolder = function(folder){
    try{
        fs.accessSync(folder);
    }catch(e){
        fs.mkdirSync(folder);
    }
};

var uploadFolder = './upload/';

createFolder(uploadFolder);

// 通过 filename 属性定制
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadFolder);    // 保存的路径，备注：需要自己创建
    },
    filename: function (req, file, cb) {
        var extname = path.extname(file.originalname);// 获取文件扩展名
        // 将保存文件名设置为 字段名 + 时间戳+文件扩展名，比如 logo-1478521468943.jpg
        cb(null, file.fieldname + '-' + Date.now() + extname);
    }
});

// 通过 storage 选项来对 上传行为 进行定制化
var upload = multer({ storage: storage });

// var upload = multer({
//     dest: './uploads'
// });// 定义图片上传的临时目录

var login = require('./../controller/user/login');
var logout = require('./../controller/user/logout');
var register = require('./../controller/user/register');
var index = require('./../controller/user/index');
var uploadPhoto = require('./../controller/user/uploadPhoto');

router.post('/login', login);
router.post('/register', register);
router.get('/logout', logout);
router.get('/index', index);
router.post('/uploadPhoto',  upload.single('file'), uploadPhoto);

module.exports =  router;