// REST - representational state transfer
// HTTP - hyper text transfer protocol - so nekoi plus pravila -> HTML

// POST, GET + (PUT, PATCH, DELETE)

// GET -> кога сакаме да преземеме податоци од серверотc // 200
// POST -> кога сакаме да додадеме/креираме податоци на серверот // 201
// PUT -> служи за ажурирање на целосен запис/податок // 204
// PATCH -> служи за делумно ажурирање на запис/податок // 204
// DELETE -> служи за бришење на податоци/записи // 204

// REST endpoints -> патеки до податоци на REST серверот

// http://localhost:8000/[PATEKA]
// http://localhost:8000/users

// users -> ресурс кој содржи информации за еден или повеќе корисници

// POST http://localhost:8000/users -> запиши корисник во users
// GET  http://localhost:8000/users -> земи ги сите корисници од users
// GET  http://localhost:8000/users/:id -> земи го корисникот со ID = :id од users
// PUT  http://localhost:8000/users/:id -> ажурирај го корисникот со ID = :id од users
// PATCH http://localhost:8000/users/:id -> делумно ажурирање на корисникот со ID = :id од users
// DELETE http://localhost:8000/users/:id -> бришење на корисникот со ID = :id од users

const express = require('express');
const bodyParser = require('body-parser');

let usersData = [];

const api = express();

api.use(bodyParser.json()); // middleware - ke ni dozvoli da mozeme da citame JSON podatoci od req objektot

api.post('/users', (req, res) => {
    usersData = [...usersData, req.body];
    // console.log(usersData);
    res.status(201).send(req.body);
});

api.get('/users', (req, res) => {
    res.status(200).send(usersData);
});

api.get('/users/:id', (req, res) => {
    if (!usersData[req.params.id]) {
        return res.status(404).send('Not Found');
    }
    res.status(200).send(usersData[req.params.id]);
});

api.put('/users/:id', (req, res) => {
    if (!usersData[req.params.id]) {
        return res.status(404).send('Not Found');
    }
    usersData[req.params.id] = req.body;
    res.status(204).send(req.body);
});

api.patch('/users/:id', (req, res) => {
    if (!usersData[req.params.id]) {
        return res.status(404).send('Not Found');
    }

    if (req.body.first_name && req.body.last_name) {
        return usersData[req.params.id] = req.body;
    }
    if (req.body.first_name) {
        return usersData[req.params.id].first_name = req.body.first_name;
    }
    if (req.body.last_name) {
        return usersData[req.params.id].last_name = req.body.last_name;
    }
    res.status(204).send(req.body);
});

api.delete('/users/:id', (req, res) => {
    if (!usersData[req.params.id]) {
        return res.status(404).send('Not Found');
    }
    usersData = usersData.filter((user, id) => {
        return id != (req.params.id);
    })
    res.status(204).send('delete ok');
});

api.listen(8080, err => {
    if (err) {
        return console.error(err);
    }
    console.log('Server successfully started on port 8080');
});