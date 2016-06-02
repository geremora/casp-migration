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
        meetings_meeting: function(callback) {
            require('./mssql-to-json/meetings_meeting')(function(error) {
                if(error) {
                    callback(error);
                } else {
                    callback(null);
                }
            });
        },
        notes_note: function(callback) {
            require('./mssql-to-json/notes_note')(function(error) {
                if(error) {
                    callback(error);
                } else {
                    callback(null);
                }
            });
        }
        }, function(error, results) {
          console.log(error);
          if(error) {
            console.error(error);
        }
        process.exit();
    });
        //cases_contacts: function (callback) {
         //   require('./mssql-to-json/cases_contacts')(function(error) {
          //      if(error) {
           //         callback(error);
           //     } else {
          //          callback(null);
           //     }
            //});
};
