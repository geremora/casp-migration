"use strict";

var manage = {};

manage.testPGModel = function() {
    require('./tests/models-pg')();
};

manage.testMSModel = function () {
    require('./tests/models-mssql')();
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
