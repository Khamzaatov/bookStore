const Router = require('express');
const router = Router();
const { booksControllers } = require('../controllers/book.controller')

router.get('/books', booksControllers.bookGet);
router.get('/books/:id', booksControllers.bookGetId)
router.get('/booksGenre', booksControllers.bookGetGenre)
router.post('/books', booksControllers.bookPost)
router.delete('/books/:id', booksControllers.bookDelete)
router.patch('/books/:id', booksControllers.bookPatch)

module.exports = router