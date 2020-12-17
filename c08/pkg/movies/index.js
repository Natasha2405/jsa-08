const mongoose = require('mongoose');

const Movie = mongoose.model(
    'movies',
    {
        name: String,
        year: Number,
        director: String,
        uid: String
    },
    'movies'
);

const save = async (data) => {
    let m = new Movie(data);
    return await m.save();
};

const getAll = async (uid) => {
    let data = await Movie.find({ uid });
    return data;
};

module.exports = {
    save,
    getAll
};