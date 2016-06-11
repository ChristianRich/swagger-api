var gulp = require('gulp');
var resolve = require('json-refs').resolveRefs;
var YAML = require('yaml-js');
var fs = require('fs');
var toYaml = require('yamljs');

var root = YAML.load(fs.readFileSync('./api/index.yaml').toString());
var options = {
    filter        : ['relative', 'remote'],
    loaderOptions : {
        processContent : function (res, callback) {
            callback(null, YAML.load(res.text));
        }
    }
};

resolve(root, options).then(function (results) {

    // console.log(results.resolved)

    // var burger = toYaml.stringify(results.resolved, [1, 1]);
    var burger = toYaml.stringify(results.resolved, 8, 2);

    console.log(burger)
    // yamlString = YAML.stringify(nativeObject[, inline /* @integer depth to start using inline notation at */[, spaces /* @integer number of spaces to use for indentation */] ]);

    var data = JSON.stringify(results.resolved, null, 2);

    fs.writeFile('./api/swagger/swagger.yaml', burger, function(err){

        if(err){
            throw err;
        }

        console.log('Build service file ok')
    });
});
