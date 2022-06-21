const Author = require('../models/Author.model')
module.exports.authorsControllers = {
    authorGet : (req, res) => {
      Author.find({}, (err, data) => {
        if (!err) {
            res.json(data)
        }
      })
    },
    authorPost : (req, res) => {
        Author.create({
            name: req.body.name,
            description: req.body.description,
            
        }).then((data) => {
            console.log(data)
            res.json(data)
        })
    }
}