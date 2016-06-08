module.exports = {
    get: function(req, res) {
        res.json(new Date().toString());
    }
};
