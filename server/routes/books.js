// modules required for routing
const { render } = require('ejs');
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let books = require('../../books.json')

// define the book model
let book = require('../models/books');

/* GET books List page. READ */
router.get('/', (req, res, next) => {
  // find all books in the books collection
  // book.find( (err, books) => {
  //   if (err) {
  //     return console.error(err);
  //   }
  //   else {
  //     res.render('books/index', {
  //       title: 'Books',
  //       books: books
  //     });
  //   }
  // });
  res.render('books/index', {
    title: 'Books',
    books: books.books
  });
});

//  GET the Book Details page in order to add a new Book
router.get('/add', (req, res, next) => {
console.log({req,res})
    /*****************
     * ADD CODE HERE *
     *****************/
    res.render('books/details', {title: "", books: []})

});

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/

});

// GET the Book Details page in order to edit an existing Book
router.get('/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
    // console.log(books.books)
    let _id = req.params.id
    let book = books.books.find(b => b._id === _id )
    console.log({book})
    res.render("books/details", {title: "Update Book", books: book})

});

// POST - process the information passed from the details form and update the document
router.post('/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/

});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
});


module.exports = router;
