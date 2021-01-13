const cfg = require('./pkg/config');
require('./pkg/db');

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');

const blogs = require('./handlers/blogs');

const api = express();

api.use(bodyParser.json());
api.use(jwt({
    secret: cfg.get('server').jwt_key,
    algorithms: ['HS256']
}).unless({
    path: [
        // { url: '/api/v1/blogs', methods: ['GET'] }
    ]
}));

api.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('Bad JWT');
    }
});

api.post('/api/v1/blogs', blogs.save);
api.get('/api/v1/blogs', blogs.getAll);
api.get('/api/v1/blogs/latestblogs', blogs.getLast10); //
api.get('/api/v1/blogs/search', blogs.getTags); //
api.get('/api/v1/blogs/:id', blogs.getOne); 
api.put('/api/v1/blogs/:id', blogs.update);
api.patch('/api/v1/blogs/:id', blogs.updatePartial);
api.delete('/api/v1/blogs/:id', blogs.hide);
api.delete('/api/v1/blogs/deleteblog/:id', blogs.remove);

api.listen(cfg.get('server').port, err => {
    if (err) {
        return console.error('Could not start server: ', err);
    }
    console.log('Server successfully started on port: ', cfg.get('server').port);
});