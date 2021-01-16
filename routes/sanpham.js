'use strict';
var express = require('express');
module.exports = function(app) {
  let sanphamCtrl = require('../controllers/SanPhamController');

  // todoList Routes
  app.route('/api/Cay/search/:TenCay')
    .get(sanphamCtrl.search);  

  app.route('/api',express.static("static"))
  app.route('/api/Cay/yeuthich')
    .get(sanphamCtrl.yeuthich);
  app.route('/api/Cay')
    .get(sanphamCtrl.get)
    .post(sanphamCtrl.store);

  app.route('/api/Cay/:IdCay')
    .get(sanphamCtrl.detail)
    .put(sanphamCtrl.update)
    .delete(sanphamCtrl.delete);

 
};