const express = require('express');
const bodyParser = require('body-parser');
const usersData = require('./users')

const api = express();

api.use(bodyParser.json());

api.get('/users', (req, res) => {
    usersData.fileRead()
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Internal Server Error');
        })
});

api.post('/users', (req, res) => {
    usersData.fileRead()
        .then(data => {
            let newData = [...data, req.body];
            return usersData.fileWrite(newData);
        })
        .then(() => {
            res.status(201).send(req.body);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Internal Server Error');
        });
});

api.get('/users/:id', (req, res) => {
    usersData.fileRead()
        .then(data => {
            if (!data[req.params.id]) {
                return res.status(404).send('Not Found');
            }
            res.status(200).send(data[req.params.id]);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Internal Server Error');
        });
});

api.put('/users/:id', (req, res) => {
    usersData.fileRead()
        .then(data => {
            if (!data[req.params.id]) {
                return res.status(404).send('Not Found');
            }
            data[req.params.id] = req.body;
            return usersData.fileWrite(data);
        })
        .then(() => {
            res.status(204).send(req.body);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Internal Server Error');
        });
});

api.patch('/users/:id', (req, res) => {
    usersData.fileRead()
        .then(data => {
            if (!data[req.params.id]) {
                return res.status(404).send('Not Found');
            }
            if (req.body.id && req.body.first_name && req.body.last_name) {
                return data[req.params.id] = req.body;
            }
            if (req.body.first_name) {
                return data[req.params.id].first_name = req.body.first_name;
            }
            if (req.body.last_name) {
                return data[req.params.id].last_name = req.body.last_name;
            }
            return usersData.fileWrite(data);
        })
        .then(() => {
            res.status(204).send(req.body);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Internal Server Error');
        });
});

api.delete('/users/:id', (req, res) => {
    usersData.fileRead()
        .then(data => {
            if (!data[req.params.id]) {
                return res.status(404).send('Not Found');
            }
            let newData = data.filter((user, id) => {
                return id != (req.params.id);
            })
            return usersData.fileWrite(newData);
        })
        .then(() => {
            res.status(204).send('User is deleted');
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Internal Server Error');
        });
});

api.listen(8081, err => {
    if (err) {
        return console.error(err);
    }
    console.log('Server successfully started on port 8081');
});

