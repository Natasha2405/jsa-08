const mongoose = require('mongoose');

mongoose.connect(
    "mongodb+srv://Natasha:userpass555@firstcluster.fqdoi.mongodb.net/students?retryWrites=true&w=majority",
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

const Student = mongoose.model(
    'students',
    {
        first_name: String,
        last_name: String,
        gpa: Number
    },
    'students'
);

let s = new Student({
    first_name: "Pero",
    last_name: "Perovski",
    gpa: 9.8
});

s.save(err => {
    if(err) {
        return console.log('Save error: ', err);
    }
    console.log('Successfully saved student');
});

Student.find({}, (err, data) => {
    if (err) {
        return console.log('Find error: ', err);
    }
    console.log(data);
});

Student.updateOne({_id: "5fc944ba4d1d271f208c80dc"}, {first_name: "Ivan"}, (err, data) => {
    if (err) {
        return console.log('Update error: ', err);
    }
    console.log(data);
});

Student.deleteOne({_id: "5fc9465437b3ed31548a10e4"}, (err, data) => {
    if (err) {
        return console.log('Delete error: ', err);
    }
    console.log(data);
});
