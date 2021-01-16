'use strict';
// var express = require('express');
module.exports = function(app) {
  let chuyengiaCtrl = require('../controllers/ChuyengiaController');

  // todoList Routes
  // app.route('/api',express.static("static"))
  
  app.route('/api/ChuyenGia')
    .get(chuyengiaCtrl.getchuyengia)
    .post(chuyengiaCtrl.store);

  app.route('/api/ChuyenGia/:IdChuyenGia')
    .get(chuyengiaCtrl.detail)
    .put(chuyengiaCtrl.update)
    .delete(chuyengiaCtrl.delete);

 
};