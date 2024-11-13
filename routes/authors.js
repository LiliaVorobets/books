const express = require('express');
const router = express.Router();
const authorsDb = require("../data/authors-data");

router.get('/', (req, res) => {
    authorsDb.find({}, (err, authors) => {
        if (err) return res.status(500).send('Помилка при отриманні авторів');
        res.render('authors', {authors});
    });
});

module.exports = router;
