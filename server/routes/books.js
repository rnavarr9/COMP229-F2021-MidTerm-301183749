/**
 * File name      : books.js
 * Student’s Name : Renzo Navarro
 * StudentID      : 301183749
 * Wev App Name   : comp229-f2021-midterm
 */
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
    let reqBook = req.body;
    let newBook = book({Title: reqBook.title, Price: reqBook.price, Author: reqBook.author, Genre: reqBook.genre})
    // creates book in db
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
    let id = req.params.id;
    // find book by id in db
    book.findById(id, (err, bookToEdit) => {
      if (err) {
        console.log("Error while retrieving book to update", err)
      } else {
        console.log("Book retrieved from database", bookToEdit)
        res.render("books/details", { title: "Update Book Details", books: bookToEdit });
      }
    })
});

// POST - process the information passed from the details form and update the document
router.post('/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
     let id = req.params.id;
     let reqBook = req.body;

     let updatedBook = book({
      _id: id,
      Title: reqBook.title,
      Price: reqBook.price,
      Author: reqBook.author,
      Genre: reqBook.genre
    });
    
    // update method is deprecated, then for security I used the one suggested by mongoose: updateOne
    book.updateOne({ _id: id }, updatedBook, (err) => {
      if (err) {
        console.log("Error while updating book", err);
        res.end(err);
      } else {
        // refresh the book list
        console.log("Book Updated!!!")
        res.redirect("/books");
      }
    });
});

// GET - process the delete by book id
router.get('/delete/:id', (req, res, next) => {

    /*****************
     * ADD CODE HERE *
     *****************/
     let id = req.params.id;

     // remove book from db
     book.remove({ _id: id }, (err) => {
      if (err) {
        console.log("Error while deleting book", err);
        res.end(err);
      } else {
        res.redirect("/books");
      }
    });
});


module.exports = router;
