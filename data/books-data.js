const Datastore = require('nedb');
const db = new Datastore({ filename: './data/books.db', autoload: true, corruptAlertThreshold: 1 });

books = [
    {
        "_id": "1",
        "title": "Кобзар",
        "author": "Тарас Шевченко",
        "year": 1840,
        "genre": "Поезія"
    },
    {
        "_id": "2",
        "title": "Лісова пісня",
        "author": "Леся Українка",
        "year": 1911,
        "genre": "Драма"
    },
    {
        "_id": "3",
        "title": "Захар Беркут",
        "author": "Іван Франко",
        "year": 1883,
        "genre": "Історична повість"
    },
    {
        "_id": "4",
        "title": "Маруся",
        "author": "Григорій Квітка-Основ'яненко",
        "year": 1834,
        "genre": "Повість"
    },
    {
        "_id": "5",
        "title": "Тіні забутих предків",
        "author": "Михайло Коцюбинський",
        "year": 1911,
        "genre": "Повість"
    },
    {
        "_id": "6",
        "title": "Хіба ревуть воли, як ясла повні?",
        "author": "Панас Мирний",
        "year": 1880,
        "genre": "Роман"
    },
    {
        "_id": "7",
        "title": "Місто",
        "author": "Валер'ян Підмогильний",
        "year": 1928,
        "genre": "Роман"
    },
    {
        "_id": "8",
        "title": "Сонячні кларнети",
        "author": "Павло Тичина",
        "year": 1918,
        "genre": "Поезія"
    },
    {
        "_id": "9",
        "title": "На полі крові",
        "author": "Леся Українка",
        "year": 1911,
        "genre": "Драма"
    },
    {
        "_id": "10",
        "title": "Борислав сміється",
        "author": "Іван Франко",
        "year": 1882,
        "genre": "Повість"
    },
    {
        "_id": "11",
        "title": "Зачарована Десна",
        "author": "Олександр Довженко",
        "year": 1957,
        "genre": "Автобіографічна повість"
    },
    {
        "_id": "12",
        "title": "Чорна рада",
        "author": "Пантелеймон Куліш",
        "year": 1857,
        "genre": "Історичний роман"
    },
    {
        "_id": "13",
        "title": "Моя автобіографія",
        "author": "Остап Вишня",
        "year": 1927,
        "genre": "Гумор"
    },
    {
        "_id": "14",
        "title": "Кайдашева сім'я",
        "author": "Іван Нечуй-Левицький",
        "year": 1879,
        "genre": "Повість"
    },
    {
        "_id": "15",
        "title": "Вершники",
        "author": "Юрій Яновський",
        "year": 1935,
        "genre": "Роман"
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
                    } else {
                        console.log('Inserted:', newDoc);
                    }
                });
            }
        });
    });
};
insertIfNotExists(db, books, 'title');
module.exports = db;
