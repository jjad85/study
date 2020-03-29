const bookModel = require('../models/booksModels');

exports.addBook = async (libro) => {
    let addResult = await bookModel.create(libro);
    return addResult;
  };