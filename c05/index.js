const express = require('express');
const bodyParser = require('body-parser');
const users = require('./handlers/users');
const books = require('./handlers/books');

const api = express();

api.use(bodyParser.json());

api.get('/users', users.getAll);
api.get('/users/:id', users.getOne);
api.post('/users', users.save);
api.put('/users/:id', users.update);
api.patch('/users/:id', users.updatePartial);
api.delete('/users/:id', users.remove);

api.get('/books', books.getAll);
api.get('/books/:id', books.getOne);
api.post('/books', books.save);
api.put('/books/:id', books.update);
api.patch('/books/:id', books.updatePartial);
api.delete('/books/:id', books.remove);

api.listen(9000, err => {
    if(err) {
        return console.error(err);
    }
    console.log('Server successfully started on port 9000');
});