const Router = require('express');
const router = Router();

const { reviewsControllers } = require('../controllers/review.controller')

router.post('/reviews', reviewsControllers.reviewPostBook)
router.get('/reviews', reviewsControllers.reviewGetBook)
router.delete('/reviews/:id', reviewsControllers.reviewDelete)



module.exports = router