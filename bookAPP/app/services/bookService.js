const bookModel = require("../models/booksModels");
const ReqFieldException = require("../exceptions/ReqFieldException");

exports.addBook = async libro => {
	if (!libro.nombre) {
		throw new ReqFieldException("Nombre");
	}
	let addResult = await bookModel.create(libro);
	return addResult;
};
