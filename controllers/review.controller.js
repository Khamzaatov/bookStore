const Review = require('../models/Review.model')
module.exports.reviewsControllers = {
  reviewPostBook : (req, res) => {
    Review.create({
      text: req.body.text,
      authorNameReview: req.body.authorNameReview,
      bookId: req.body.bookId
    }).then(() => {
      res.json('Резенция добавлена к книге')
    })
  },
  reviewGetBook : (req, res) => {
    Review.find({bookId: req.body.bookId})
    .then((data) => {
      res.json(data)
    })
  },
  reviewDelete : (req, res) => {
    Review.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json('Рецензия удалена!')
    })
  }
}
// - добавление рецензии к определенной книге
// - удалени рецензии
// - вывод всех рецензий к определенной книге