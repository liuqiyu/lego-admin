var env = process.env.NODE_ENV || 'development';

var host = 'http://localhost:3334';

console.log(process.env.NODE_ENV );

if (env == 'development') {
    // configure stuff here
    // app.enable("view cache");
    console.log('我们的host是1：' + host);
} else if (env == 'production') {
    host = 'http://39.108.61.54:3334/'
    console.log('我们的host是2：' + host);
}

module.exports = host;