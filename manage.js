"use strict";

var manage = {};

manage.testPGModel = function() {
    require('./tests/models-pg')();
};

manage.testMSModel = function () {
    require('./tests/models-mssql')();
};

manage.testMSModel = function () {
    require('./tests/pgOld-pgNew')();
};
manage.migrateMSSQL = function() {
    require('./migrations-scripts/mssql-script')();
};
manage.migratePG = function() {
    require('./migrations-scripts/pg-script')();
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
    case "migrate-mssql": {
        manage.migrateMSSQL();
        break;
    }
    case "migrate-pg": {
        manage.migratePG();
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
