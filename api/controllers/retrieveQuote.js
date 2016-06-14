module.exports = {
    get: function(req, res) {
        var params = req.swagger.params;
        res.json({id: params.id.value});
    }
};
