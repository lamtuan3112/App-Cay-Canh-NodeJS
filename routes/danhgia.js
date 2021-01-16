'use strict';
// var express = require('express');
module.exports = function(app) {
  let danhgiaCtrl = require('../controllers/DanhGiaController');

  // todoList Routes
  // app.route('/api',express.static("static"))
  
  app.route('/api/DanhGia/:BinhLuan')
    .post(danhgiaCtrl.danhgia); 
};