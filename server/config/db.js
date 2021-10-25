module.exports = {
  //local MongoDB deployment ->
  "URI": `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.yospw.mongodb.net/libraryDB?retryWrites=true&w=majority`
};
