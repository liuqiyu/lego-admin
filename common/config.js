var env = process.env.NODE_ENV || 'development';

var host = 'http://localhost:3334';

if (env == 'development') {
    // configure stuff here
    // app.enable("view cache");
} else if (env == 'production') {
    host = 'http://39.108.61.54:3334/'
}
module.exports = host;