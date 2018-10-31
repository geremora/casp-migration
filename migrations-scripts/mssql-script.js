const async = require('async');

module.exports = function () {
    async.series({
        profiles_caspuser: function(callback) {
           require('./mssql-to-json/profiles_caspuser')(function(error) {
               if(error) {
                   callback(error);
               } else {
                   callback(null);
               }
           });

        },
        contacts_contact: function(callback) {
           require('./mssql-to-json/contacts_contact')(function(error) {
               if(error) {
                   callback(error);
               } else {
                   callback(null);
               }
           });

        },
        cases: function (callback) {
            require('./mssql-to-json/cases')(function (error) {
                if(error) {
                    callback(error)
                } else {
                    callback(null);
                }
            })
        },
        cases_contacts: function (callback) {
            require('./mssql-to-json/cases_contacts')(function (error) {
                if (error) {
                    callback(error);
                } else {
                    callback(null);
                }
            });
        },

        meetings_meeting: function(callback) {
            require('./mssql-to-json/meetings_meeting')(function(error) {
                if(error) {
                    callback(error);
                } else {
                    callback(null);
                }
            });
        },
        events_importedevent: function(callback) {
            require('./mssql-to-json/events_importedevent')(function(error) {
                if(error) {
                    callback(error);
                } else {
                    callback(null);
                }
            });
        },

        notes_note: function (callback) {
            require('./mssql-to-json/notes_note')(function (error) {
                if(error)
                    return callback(error);
                return callback(null);
            })
        },
        /*user_permissions: function (callback) {
            require('./mssql-to-json/users_permissions')(function (error) {
                if(error)
                    return callback(error);
                return callback(null);
            });
        }*/
}, function(error, results) {
    if(error) {
        console.error(error);
    }
    process.exit();
});
};
