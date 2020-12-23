const cfg = require('./pkg/config');
require('./pkg/db');

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('express-jwt'); // middleware

const auth = require('./handlers/auth');
const movies = require('./handlers/movies');
const songs = require('./handlers/songs');
const games = require('./handlers/games');

const api = express();

api.use(bodyParser.json());
api.use(jwt({
    secret: cfg.get('server').jwt_key,
    algorithms: ['HS256']
}).unless({
    path: [
        { url: '/api/v1/auth', methods: ['POST'] },
        { url: '/api/v1/auth/login', methods: ['POST'] },
        { url: '/api/v1/auth/forgot-password', methods: ['POST'] },
        { url: '/api/v1/auth/reset-password', methods: ['POST'] }
    ]
}));

api.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('Bad JWT');
    }
});

// create user account (user registration)
api.post('/api/v1/auth', auth.create); // http://domain.com/api/v1/auth
// api.post('/api/v2/auth'); // http://domain.com/api/v2/auth
// user login (sign in)
api.post('/api/v1/auth/login', auth.login);
// refresh token
api.get('/api/v1/auth/refresh-token', auth.refreshToken);
// * forgot password
api.post('/api/v1/auth/forgot-password', auth.forgotPassword);
// * reset password
api.post('/api/v1/auth/reset-password', auth.resetPassword);
// * change password
api.post('/api/v1/auth/change-password', auth.changePassword);
// list all user accounts
api.get('/api/v1/auth/accounts', auth.listAccounts);

// MOVIES - multitennancy

api.post('/api/v1/movies', movies.save);
api.get('/api/v1/movies', movies.getAll);
api.get('/api/v1/movies/:id', movies.getOne);
api.put('/api/v1/movies/:id', movies.update);
api.patch('/api/v1/movies/:id', movies.updatePartial);
api.delete('/api/v1/movies/:id', movies.remove);

// Songs [get, post, getall, put, patch, delete]

api.post('/api/v1/songs', songs.save);
api.get('/api/v1/songs', songs.getAll);
api.get('/api/v1/songs/:id', songs.getOne);
api.put('/api/v1/songs/:id', songs.update);
api.patch('/api/v1/songs/:id', songs.updatePartial);
api.delete('/api/v1/songs/:id', songs.remove);

// Games [get, post, getall, put, patch, delete]

api.post('/api/v1/games', games.save);
api.get('/api/v1/games', games.getAll);
api.get('/api/v1/games/:id', games.getOne);
api.put('/api/v1/games/:id', games.update);
api.patch('/api/v1/games/:id', games.updatePartial);
api.delete('/api/v1/games/:id', games.remove);

api.listen(cfg.get('server').port, err => {
    if (err) {
        return console.error('Could not start server: ', err);
    }
    console.log('Server successfully started on port: ', cfg.get('server').port);
});