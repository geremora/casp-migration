const async = require('async');

module.exports = function () {
    async.series({
        profiles_caspusers: function(callback) {
            require('./json-to-pg/profiles_caspuser')(function(error) {
                if(error) {
                    callback(error);
                } else {
                    callback(null);
                }
            });

        }
    }, function(error, results) {
        if(error) {
            console.error(error);
        }
        process.exit();
    });
};