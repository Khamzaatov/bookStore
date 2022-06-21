const Router = require('express');
const router = Router();

const { authorsControllers } = require('../controllers/author.controller');


router.get('/authors', authorsControllers.authorGet)
router.post('/authors', authorsControllers.authorPost)



module.exports = router