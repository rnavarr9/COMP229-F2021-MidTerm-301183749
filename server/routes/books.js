// modules required for routing
const { render } = require('ejs');
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const { userInfo } = require('os');

// define the book model
let book = require('../models/books');

/* GET books List page. READ */
router.get('/', (req, res, next) => {
  // find all books in the books collection
  book.find( (err, books) => {
    if (err) {
      return console.error(err);
    }
    else {
      console.log("books", books)
      res.render('books/index', {
        title: 'Books',
        books: books
      });
    }
  });
});

//  GET the Book Details page in order to add a new Book
router.get('/add', (req, res, next) => {
    /*****************
     * ADD CODE HERE *
     *****************/
    let books = {Title: "", Price: null, Author: "", Genre: ""};
    res.render('books/details', {title: "Create New Book", books})
});

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
    let b = req.body;
    let newBook = book({Title: b.title, Price: b.price, Author: b.author, Genre: b.genre})
    book.create(newBook, (err, book) => {
      if (err) {
        console.log("Error while creating the book", err);
        res.end(err);
      } else {
        console.log("Book added!", book)
        res.redirect("/books");
      }
    })
});

// GET the Book Details page in order to edit an existing Book
router.get('/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
    // console.log(books.books)
    // let _id = req.params.id
    // let book = books.books.find(b => b._id === _id )
    // res.render("books/details", {title: "Update Book Details", books: book})

});

// POST - process the information passed from the details form and update the document
router.post('/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/

});

// GET - process the delete by book id
router.get('/delete/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
    console.log(`Book ${req.params.id} deleted`)
    res.render('books/index', {
      title: 'Books',
      books: books.books
    });
});


module.exports = router;
