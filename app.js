var app = require('express')()
    , SwaggerExpress = require('swagger-express-mw')
    , SwaggerUi = require('swagger-tools/middleware/swagger-ui');

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

    app.use(SwaggerUi(swaggerExpress.runner.swagger));
    swaggerExpress.register(app);

    app.get('*', function(req, res, next){
        next({statusCode: 404, message: 'End point does not exist: ' + req.url})
    });

    app.use(function(err, req, res, next){
        res.statusCode = err.statusCode;
        res.json({error: err.message});
    });

    var port = process.env.PORT || 10010;
    app.listen(port);

    console.log('app running on port ' + port);

    // if(swaggerExpress.runner.swagger.paths['/hello']){
    //     console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
    // }
});
