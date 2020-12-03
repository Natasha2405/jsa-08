const mongoose = require('mongoose');

let username = 'Natasha';
let password = 'userpass555';
let dbname = 'students';

let dsn = `mongodb+srv://${username}:${password}@firstcluster.fqdoi.mongodb.net/${dbname}?retryWrites=true&w=majority`

mongoose.connect(
    // "mongodb+srv://Natasha:userpass555@firstcluster.fqdoi.mongodb.net/students?retryWrites=true&w=majority",
    dsn,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    err => {
        if (err) {
            return console.log('Could not connect to database: ', err);
        }
        console.log('Successfully connected to database');
    }
);