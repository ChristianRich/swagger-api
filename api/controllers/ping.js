module.exports = {
    get: function(req, res) {
        res.json({ping: new Date().toString()});
    }
};
