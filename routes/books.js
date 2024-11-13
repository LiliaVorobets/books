const express = require('express');
const router = express.Router();
const booksDb = require('./../data/books-data');

router.get('/', (req, res) => {
  booksDb.find({}, (err, books) => {
    if (err) {
      return res.status(500).json({ error: 'Не вдалося отримати книги' });
    }
    res.render('books', { books });
  });
});

module.exports = router;
