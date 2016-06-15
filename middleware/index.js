var url = require('url')
    , _ = require('lodash')
    , SwaggerUi = require('swagger-tools/middleware/swagger-ui');

module.exports = function(app, swaggerExpress){

    // Enforce API key on all endpoint routes
    // app.use('/api/', function(req, res, next){
    //
    //     var apiKey = url.parse(req.url, true).query['api_key'],
    //         e;
    //
    //     if(!apiKey || String(apiKey).length === 0 || _.isUndefined(apiKey)){
    //         e = new Error('Unauthorized request: Missing api_key');
    //         e.statusCode = 403;
    //     }
    //
    //     else if(apiKey !== '1234'){
    //         e = new Error('Unauthorized request: Invalid api_key');
    //         e.statusCode = 403;
    //     }
    //
    //     if(e){
    //         res.statusCode =   e.statusCode;
    //
    //         return res.json({
    //             statusCode: e.statusCode,
    //             message: e.message
    //         });
    //     }
    //
    //     next();
    // });

    app.use(SwaggerUi(swaggerExpress.runner.swagger));
};
