var restfulAPI = function(req, res, callback){
    this.req = req;
    this.res = res;


    // console.log(req.swagger.params)
};

restfulAPI.prototype = {

    respond: function(data){
        this.res.json(data);
    },

    log: function(msg){

    }
};

module.exports = restfulAPI;
