const  Books = require('../models/Book.model')
module.exports.booksControllers = {
 bookGet : (req, res) => {
   Books.find({}, (err, data) => {
    if (!err) {
        res.json(data)
    }
   }).populate("authorId").populate("genreId")
 },
 bookGetId : (req, res) => {
  Books.findById(req.params.id)
  .then((data) => {
    res.json(data)
  }).catch((e) => {
    res.json(e)
  })
 },
 bookPost : (req, res) => {
   Books.create({
     name: req.body.name,
     genreId: req.body.genreId,
     authorId: req.body.authorId
   }).then(() => {
     res.json('Книга добавлена')
   })
 },
 bookDelete : (req, res) => {
    Books.findByIdAndRemove(req.params.id)
    .then(() => {
        res.json('Книга удалена')
    })
 },
 bookPatch : async (req, res) => {
    try {
        const data = await Books.findByIdAndUpdate(req.params.id, {
            name : req.body.name})
     res.json(data)
    } catch (error) {
        res.json(error)
    }
 },
 bookGetGenre : (req, res) => {
  Books.find({
    genreId : req.body.genreId
  }).then((data) => {
    res.json(data)
  })
 }
}



// - - вывод всех книги из определенного жанра