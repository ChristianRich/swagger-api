var express = require('express')
    , SwaggerExpress = require('swagger-express-mw')
    , SwaggerUi = require('swagger-tools/middleware/swagger-ui')
    , https = require('https')
    , fs = require('fs')
    , url = require('url')
    , _ = require('lodash')
    , httpsPort = 3443
    , httpPort = process.env.PORT || 10010
    , enableHttps = false;

var app = express({});

app.all('/', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
});

var config = {
    appRoot: __dirname
};

SwaggerExpress.create(config, function(err, swaggerExpress){

    if(err){
        throw err;
    }

    // Enforce API key on all endpoint routes
    app.use('/api/', function(req, res, next){

        var apiKey = url.parse(req.url, true).query['api_key'],
            e;
        
        if(!apiKey || String(apiKey).length === 0 || _.isUndefined(apiKey)){
            e = new Error('Unauthorized request: Missing api_key');
            e.statusCode = 403;
        }

        else if(apiKey !== '1234'){
            e = new Error('Unauthorized request: Invalid api_key');
            e.statusCode = 403;
        }

        if(e){
            res.statusCode =   e.statusCode;

            return res.json({
                statusCode: e.statusCode,
                message: e.message
            });
        }

        next();
    });

    app.use(SwaggerUi(swaggerExpress.runner.swagger));
    swaggerExpress.register(app);

    app.get('*', function(req, res, next){

        if(res.statusCode === 200){
            return next({statusCode: 404, message: 'End point not found: ' + req.url})
        }

        next();
    });

    app.use(function(err, req, res, next){
        res.statusCode = err.statusCode;
        res.json({error: err.message});
    });

    if(enableHttps){

        app.all('*', function(req, res, next){

            if(req.secure){
                return next();
            }

            res.redirect('https://' + req.hostname + ':' + app.get('port_https') + req.url);
        });

        var options = {
            key: fs.readFileSync('./ssl/private.key'),
            cert: fs.readFileSync('./ssl/certificate.pem')
        };

        var secureServer = https.createServer(options, app).listen(httpsPort, function(){
            console.log('app running on secure server https port ' + httpsPort);
        });
    }

    else{
        app.listen(httpPort, function(){
            // console.log('app running on port ' + httpPort);
        });
    }

    // if(swaggerExpress.runner.swagger.paths['/hello']){
    //     console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
    // }
});
