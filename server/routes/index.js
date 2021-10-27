/**
 * File name      : index.js
 * Student’s Name : Renzo Navarro
 * StudentID      : 301183749
 * Wev App Name   : comp229-f2021-midterm
 */
// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
