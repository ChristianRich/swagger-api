var Responder = require('../../server/restfulAPI');

var Ping = function(){
};

Ping.prototype = {

    get: function(req, res) {
        var r = new Responder(req, res);
            r.respond({ping: new Date().toString()});
        
    }
};

var ping = new Ping();

module.exports = {
    get: ping.get
};
