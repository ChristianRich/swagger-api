module.exports = {

    get: function(req, res) {
        res.json({noop: null});
    },

    post: function(req, res){
        res.json({noop: 'null'});
    }
};
