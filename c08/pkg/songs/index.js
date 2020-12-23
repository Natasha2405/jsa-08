const mongoose = require('mongoose');

const Song = mongoose.model(
    'songs',
    {
        name: String,
        artist: String,
        year: Number,
        uid: String,
        _created: Date,
        _deleted: Boolean
    },
    'songs'
);

const save = async (data) => {
    let song = new Song(data);
    return await song.save();
};

const getAll = async (uid) => {
    let data = await Song.find({ uid });
    return data;
};

const getOne = async (id) => {
    let data = await Song.findOne({ _id: id });
    return data;
};

const update = async (id, uid, songData) => {
    let data = await Song.updateOne({ _id: id, uid: uid }, songData);
    return data.nModified !== 0;

};

const updatePartial = async (id, uid, songData) => {
    let data = await Song.updateOne({ _id: id, uid: uid }, songData);
    return data.nModified !== 0;
};

// const remove = async (id) => {
//     let data = await Song.deleteOne({ _id: id });
//     return data.deletedCount !== 0;
// };

const remove = async (id, uid) => {
    let data = await Song.updateOne({ _id: id, uid: uid }, { _deleted: true });
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