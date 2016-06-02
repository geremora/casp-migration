const async = require('async');

module.exports = function () {
    async.series({
       // profiles_caspusers: function(callback) {
       //     require('./mssql-to-json/profiles_caspuser')(function(error) {
       //         if(error) {
       //             callback(error);
       //         } else {
       //             callback(null);
       //         }
       //     });
       //
       // },
       // contacts_contact: function(callback) {
       //     require('./mssql-to-json/contacts_contact')(function(error) {
       //         if(error) {
       //             callback(error);
       //         } else {
       //             callback(null);
       //         }
       //     });
       //
       // },
        cases: function(callback) {
            require('./mssql-to-json/meetings_meeting')(function(error) {
                if(error) {
                    callback(error);
                } else {
                    callback(null);
                }
            });
        },
        cases_contacts: function (callback) {
            require('./mssql-to-json/cases_contacts')(function(error) {
                if(error) {
                    callback(error);
                } else {
                    callback(null);
                }
            });

        },
        events_event: function(callback) {
            require('./mssql-to-json/events_event')(function(error) {
                if(error)
                    return callback(error);
                return callback();
            });
        }
    }, function(error, results) {
        console.log(error);
        if(error) {
            console.error(error);
        }
        process.exit();
    });
};
