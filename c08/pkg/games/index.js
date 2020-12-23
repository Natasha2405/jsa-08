const mongoose = require('mongoose');

const Game = mongoose.model(
    'games',
    {
        name: String,
        publisher: String,
        genre: String,
        year: Number,
        uid: String,
        _created: Date,
        _deleted: Boolean
    },
    'games'
);

const save = async (data) => {
    let game = new Game(data);
    return await game.save();
};

const getAll = async (uid) => {
    let data = await Game.find({ uid });
    return data;
};

const getOne = async (id) => {
    let data = await Game.find({ _id: id });
    return data;
};

const update = async (id, uid, gameData) => {
    let data = await Game.updateOne({ _id: id, uid: uid }, gameData);
    return data.nModified !== 0;
};

const updatePartial = async (id, uid, gameData) => {
    let data = await Game.updateOne({ _id: id, uid: uid }, gameData);
    return data.nModified !== 0;
};

// const remove = async (id) => {
//     let data = await Game.deleteOne({ _id: id });
//     return data.deletedCount !== 0;
// };

const remove = async (id, uid) => {
    let data = await Game.updateOne({ _id: id, uid: uid }, { _deleted: true });
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