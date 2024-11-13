const Datastore = require('nedb');
const db = new Datastore({ filename: './data/authors.db', autoload: true, corruptAlertThreshold: 1 });

authors = [
    {
        "_id": "1",
        "firstName": "Тарас",
        "lastName": "Шевченко",
        "country": "Україна"
    },
    {
        "_id": "2",
        "firstName": "Леся",
        "lastName": "Українка",
        "country": "Україна"
    },
    {
        "_id": "3",
        "firstName": "Іван",
        "lastName": "Франко",
        "country": "Україна"
    },
    {
        "_id": "4",
        "firstName": "Григорій",
        "lastName": "Сковорода",
        "country": "Україна"
    },
    {
        "_id": "5",
        "firstName": "Ольга",
        "lastName": "Кобилянська",
        "country": "Україна"
    }
];

const insertIfNotExists = (db, data, uniqueField) => {
    data.forEach(item => {
        db.findOne({ [uniqueField]: item[uniqueField] }, (err, existing) => {
            if (err) {
                console.error('Error checking for existing item:', err);
            } else if (!existing) {
                db.insert(item, (err, newDoc) => {
                    if (err) {
                        console.error('Error inserting item:', err);
                    }
                });
            }
        });
    });
};
insertIfNotExists(db, authors, 'lastName');
module.exports = db;
