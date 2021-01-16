'use strict';
const sql = require("mssql"); // cấu hình csdl
const config = { 
    user: 'sa', 
    password: '123456',
    server: 'localhost', 
    database: 'WEBBANHANG_D11TMDT' };
// kết nối đến csdl
const db = sql.connect(config, function (err) {
    if (err) throw err;
    var request = new sql.Request(); // tạo đối tượng Request
    return request
})

module.exports = db