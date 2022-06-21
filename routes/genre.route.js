const Router = require('express');
const router = Router();
const { genresControllers } = require('../controllers/genre.controller');


router.get('/genres', genresControllers.genreGet)
router.post('/genres', genresControllers.genrePost)
router.delete('/genres/:id', genresControllers.genreDelete)







module.exports = router