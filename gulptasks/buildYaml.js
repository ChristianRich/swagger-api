var gulp = require('gulp')
    , resolve = require('json-refs').resolveRefs
    , YAML = require('yaml-js')
    , fs = require('fs')
    , toYaml = require('yamljs')
    , root = YAML.load(fs.readFileSync('./api/index.yaml').toString());

var options = {
    filter: ['relative', 'remote'],
    loaderOptions : {
        processContent : function (res, callback) {
            callback(null, YAML.load(res.text));
        }
    }
};

gulp.task('build:yaml', function(callback){

    resolve(root, options).then(function (results){

        var yaml = toYaml.stringify(results.resolved, 8, 2);

        fs.writeFile('./api/swagger/swagger.yaml', yaml, function(err){

            if(err){
                return callback(err);
            }

            callback();
        });
    });
});
