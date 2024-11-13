const Datastore = require('nedb');
const path = require('path');
const express = require('express');
const app = express();

const authorsRoutes = require('./routes/authors');
const booksRoutes = require('./routes/books');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());

app.use('/', booksRoutes);
app.use('/authors', authorsRoutes);
app.use(express.static('public'));


module.exports = app;