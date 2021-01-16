'use strict';
// var express = require('express');
module.exports = function(app) {
  let newsCtrl = require('../controllers/NewsController');

  // todoList Routes
  // app.route('/api',express.static("static"))
  
  app.route('/api/News')
    .get(newsCtrl.getall)
    .post(newsCtrl.store);

  app.route('/api/News/:IdNews')
    .get(newsCtrl.detail)
    .put(newsCtrl.update)
    .delete(newsCtrl.delete);

 
};