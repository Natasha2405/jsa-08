const mongoose = require('mongoose');

const User = mongoose.model(
    'users',
    {
        first_name: String,
        last_name: String,
        age: Number,
        email: String,
        dob: String,
        city: String
    },
    'users'
);

const getAll = async () => {
        let data = await User.find({});
        return data;
};

const getOne = async (id) => {
        let data = await User.findOne({ _id: id });
        return data;
};

const save = async (userData) => {
        let u = new User(userData);
        let data = await u.save();
        return data;
};

const update = async (id, userData) => {
        let data = await User.updateOne({ _id: id }, userData);
        return data.nModified !== 0;
};

const updatePartial = async (id, userData) => {
        let data = await User.updateOne({ _id: id }, userData);
        return data.nModified !== 0;
};

const remove = async (id) => {
        let data = await User.deleteOne({ _id: id });
        return data.deletedCount !== 0;
};

module.exports = {
    getAll,
    getOne,
    save,
    update,
    updatePartial,
    remove
};
