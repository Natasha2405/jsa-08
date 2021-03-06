const mongoose = require('mongoose');

const Movie = mongoose.model(
    'movies',
    {
        name: String,
        year: Number,
        director: String,
        uid: String,
        _created: Date,
        _deleted: Boolean
    },
    'movies'
);

const save = async (data) => {
    let movie = new Movie(data);
    return await movie.save();
};

const getAll = async (uid) => {
    let data = await Movie.find({ uid });
    return data;
};

const getOne = async (id) => {
    let data = await Movie.findOne({ _id: id });
    return data;
};

const update = async (id, uid, movieData) => {
    let data = await Movie.updateOne({_id: id, uid: uid}, movieData);
    return data.nModified !== 0;
    
};

const updatePartial = async (id, uid, movieData) => {
    let data = await Movie.updateOne({_id: id, uid: uid}, movieData);
    return data.nModified !== 0;
};

// const remove = async (id) => {
//     let data = await Movie.deleteOne({ _id: id });
//     return data.deletedCount !== 0;
// };

const remove = async (id, uid) => {
    let data = await Movie.updateOne({ _id: id, uid: uid }, { _deleted: true });
    return data.nModified !== 0;
};

module.exports = {
    save,
    getAll,
    getOne,
    update,
    updatePartial,
    remove
};