/**
 * File name      : db.js
 * Student’s Name : Renzo Navarro
 * StudentID      : 301183749
 * Wev App Name   : comp229-f2021-midterm
 */
module.exports = {
  //local MongoDB deployment ->
  "URI": `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.yospw.mongodb.net/libraryDB?retryWrites=true&w=majority`
};
