const mysql = require('mysql2');
const connection = mysql.createPool({
  host: 'localhost',
  user: '',
  password: '',
  database: 'test_3'
});
module.exports = connection;
