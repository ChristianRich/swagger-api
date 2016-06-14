var Responder = require('../../server/restfulAPI')
    , instance;

var Ping = function(){
};

Ping.prototype = {

    get: function(req, res) {
        var r = new Responder(req, res);
            r.respond({ping: new Date().toString()});
        
    }
};

instance = new Ping();

module.exports = {
    get: instance.get
};
