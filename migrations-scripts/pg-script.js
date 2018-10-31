const async = require('async');

module.exports = function () {
    async.series({
        /*  profiles_caspuser: function(callback) {
               require('./json-to-pg/profiles_caspuser')(function(error) {
                   if(error) {
                       callback(error);
                   } else {
                       callback(null);
                   }
               });
           },*/
        /*  contacts_contact: function(callback) {
               require('./json-to-pg/contacts_contact')(function (error) {
                   if(error)
                       return callback(error);
                   return callback(null);
               });
           },*/
        /*cases_case: function(callback) {
            require('./json-to-pg/cases')(function (error) {
                if(error)
                    return callback(error);
                return callback(null);
            });
        },*/
        /* cases_contacts: function (callback) {
             require('./json-to-pg/cases_contacts')(function (error) {
                 if(error)
                     return callback(error);
                 return callback(null);
             });
         },*/
        meetings_meeting: function (callback) {
            require('./json-to-pg/meetings_meeting')(function (error) {
                if(error)
                    return callback(error);
                return callback(null);
            });
        },
        events_importedevent: function (callback) {
            require('./json-to-pg/events_importedevent')(function (error) {
                if(error)
                    return callback(error);
                return callback(null);
            });
        },
        notes_note: function (callback) {
            require('./json-to-pg/notes_note')(function (error) {
                if(error)
                    return callback(error);
                return callback(null);
            });
        },
        /*user_permission: function (callback) {
            require('./json-to-pg/users_permissions')(function (error) {
                if(error)
                    return callback(error);
                return callback(null);
            });
        },*/
    }, function(error, results) {
        if(error) {
            console.error(error);
        }
        process.exit();
    });
};