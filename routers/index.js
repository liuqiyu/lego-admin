var createError = require('http-errors');
var user = require('./user');
var share = require('./share');
var recommend = require('./recommend');
var uploadImg = require('./upload');

var router = function(app) {
    app.use('/user', user);
    app.use('/share', share);
    app.use('/recommend', recommend);
    app.use('/upload', uploadImg);

    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        next(createError(404));
    });

    // error handler
    app.use(function(err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.status || 500);
        res.render('error');
    });
};

module.exports = router;