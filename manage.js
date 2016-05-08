var PGModels = require('./models-pg');
var MSModels = require('./models-mssql');

var async = require('async');

var manage = {};

manage.testPGModel = function() {
    async.parallel({
        casesCaseType: function(callback) {
            PGModels.cases_casetype.findAll({raw: true}).then(function(caseTypeList) {
                callback(null, caseTypeList);
            }).catch(function(error) {
                callback(error);
            });
        }
    }, function (error, results) {
        if(error) {
            console.log(error);
        } else {
            console.log("Success connected to Postgres");
            console.log(results)
        }
        process.exit();
    });
};

manage.testMSModel = function () {
    async.parallel({
        tblTipoAccion: function (callback) {
            MSModels.tblTipoAccion.findAll({raw: true}).then(function(tipoAccionList) {
                callback(null, tipoAccionList);
            }).catch(function (error) {
                callback(error);
            });
        }
    }, function (error, results) {
        if(error) {
            console.log(error);
        } else {
            console.log("Success connected to MSSQL");
            console.log(results);
        }
        process.exit();
    });
};

switch (process.argv[2]) {
    case "testPGModel": {
        manage.testPGModel();
        break;
    }
    case "testMSModel": {
        manage.testMSModel();
        break;
    }
    default: {
        console.log("Commands available:");
        for (var cmd in manage) {
            if (manage.hasOwnProperty(cmd)) {
                console.log("\t" + cmd);
            }
        }
    }
}
