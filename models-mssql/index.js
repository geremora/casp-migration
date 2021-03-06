var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var nconf = require('nconf');
nconf.env().file({ file: __dirname + '/../config/config.json' });

var username = nconf.get('SQLSERVER_USER');
var password = nconf.get('SQLSERVER_PASSWORD');
var database = nconf.get('SQLSERVER_DATABASE');
var host = nconf.get('SQLSERVER_HOST');
var port = nconf.get('SQLSERVER_PORT');
var dialect = 'mssql'

var sequelize = new Sequelize(database, username, password, {
    host: host,
    port: port,
    dialect: dialect,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    dialectOptions: {
        encrypt: true,
        requestTimeout: 200000
    }
});

var db = {};

fs
    .readdirSync(__dirname)
    .filter(function (file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function (file) {
        var model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function (modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;