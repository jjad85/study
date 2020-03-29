const bookService = require("../services/bookService");

exports.addBook = async (req, res) => {
    try {
      Libro = await bookService.addBook(req.body);
      res.status(200).send(Libro);
    }catch(err){
      res.status(500).send(err);
    }
  };