const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host: process.env.HOST_MYSQL,
    port: process.env.PORT_MYSQL,
    user: process.env.USER_MYSQL,
    password: process.env.PASS_MYSQL ,
    database: process.env.DATABASE_MYSQL
});

module.exports = conexao;