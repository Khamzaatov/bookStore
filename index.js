const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000

app.use(express.json())
app.use(require('./routes/book.route'))
app.use(require('./routes/genre.route'))
app.use(require('./routes/author.route'))
app.use(require('./routes/review.route'))


mongoose.connect("mongodb+srv://Khamzatov:Magham01@cluster0.zaemc.mongodb.net/bookStore", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB')) 







 



app.listen(port, () => {
    console.log('Сервер болх беш ю хьун!')
})