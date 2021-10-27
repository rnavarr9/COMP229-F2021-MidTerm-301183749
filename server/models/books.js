/**
 * File name      : book.js
 * Student’s Name : Renzo Navarro
 * StudentID      : 301183749
 * Wev App Name   : comp229-f2021-midterm
 */
let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
