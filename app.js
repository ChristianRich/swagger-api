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
    appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress){

    if(err){
        throw err;
    }


    // install middleware
    app.use(SwaggerUi(swaggerExpress.runner.swagger));
    swaggerExpress.register(app);

    var port = process.env.PORT || 10010;
    app.listen(port);

    console.log('app running')

    // if(swaggerExpress.runner.swagger.paths['/hello']){
    //     console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
    // }
});
