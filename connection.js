const mysql = require("mysql")
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "AMDRyzen5",
    database: "miniproject",
    port: 3306
});


con.connect((err) => {
    if (err) throw err;
    console.log("connection creates...!");
});

module.exports.con = con;