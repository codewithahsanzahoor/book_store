import express from "express";
import {
	authorBooks,
	bookReaderAll,
	booksPerPages,
	createBook,
	deleteBook,
	singleBookReader,
	updateBook,
} from "./bookController";
import uploadMulter from "../middlewares/multer";
import { authenticate } from "../middlewares/authentication";
import { admin } from "../middlewares/admin";
const bookRouter = express.Router();

bookRouter.post(
	"/",
	authenticate,
	admin,
	uploadMulter.fields([
		{ name: "coverImage", maxCount: 1 },
		{ name: "file", maxCount: 1 },
	]),
	createBook
);

bookRouter.put(
	"/:id",
	authenticate,
	admin,
	uploadMulter.fields([
		{ name: "coverImage", maxCount: 1 },
		{ name: "file", maxCount: 1 },
	]),
	updateBook
);

bookRouter.get("/authorBooks", authenticate, authorBooks);

bookRouter.get("/", authenticate, bookReaderAll);

bookRouter.get("/:bookId", singleBookReader);

//? pagination for books
bookRouter.post("/booksPerPages", authenticate, booksPerPages);

bookRouter.delete("/:id", authenticate, admin, deleteBook);

export default bookRouter;
