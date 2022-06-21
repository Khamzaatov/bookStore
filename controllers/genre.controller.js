const  Genres  = require('../models/Genre.model')
module.exports.genresControllers = {
 genreGet : (req, res) => {
    Genres.find({}, (err, data) => {
        if(!err) {
            res.json(data)
        }
    })
 },
 genrePost : (req, res) => {
    Genres.create({
        name: req.body.name,
        description: req.body.description
    }).then(() => {
        res.json('Жанр добавлен')
    })
 },
 genreDelete : (req, res) => {
    Genres.findByIdAndRemove(req.params.id)
    .then(() => {
        res.json('Жанр удалён')
    })
 }
}


// - добавление жанра
//  - удаление жанра
//  - вывод всех жанров