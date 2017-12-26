const mysql = require('mysql');
const database = require('../../config/database.json');

exports.mareConnection = mysql.createConnection(database.mare_staging);

exports.connect = function () {
    exports.mareConnection.connect();
};
