const mongoose = require('mongoose');
const reviewSchhema = mongoose.Schema({
    text: String,
    authorNameReview : String,
    bookId : {type: mongoose.Schema.Types.ObjectId, ref: 'Books'}
})
const Review = mongoose.model('Review', reviewSchhema)


module.exports = Review
