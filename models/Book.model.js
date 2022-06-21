const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
  name: String,
  authorId: {type: mongoose.Schema.Types.ObjectId, ref: 'Author'},
  genreId: {type: mongoose.Schema.Types.ObjectId, ref: 'Genres'}
})

const Books = mongoose.model('Books', bookSchema);


module.exports = Books
