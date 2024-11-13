const express = require('express');
const Datastore = require('nedb');
const path = require('path');
const app = express();
const PORT = 4000;

const authorsRoutes = require('./routes/authors');
const booksRoutes = require('./routes/books');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());

app.use('/', booksRoutes);
app.use('/authors', authorsRoutes);
app.use(express.static('public'));


app.listen(PORT, () => {
  console.log(`Сервер запущено на http://localhost:${PORT}`);
});
