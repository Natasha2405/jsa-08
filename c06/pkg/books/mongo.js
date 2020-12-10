const mongoose = require('mongoose');

const Book = mongoose.model(
    'books',
    {
        title: String,
        author: String
    },
    'books'
);

const getAll = async () => {
    try {
        let data = await Book.find();
        return data;
    } catch (err) {
        console.log(err);
    }
};

const getOne = async (id) => {
    try {
        let data = await Book.findOne({ _id: id });
        return data;
    } catch (err) {
        console.log(err);
    }
};

const save = async (bookData) => {
    try {
        let book = new Book(bookData);
        let data = await book.save();
        return data;
    } catch (err) {
        console.log(err);
    }
};

const update = async (id, bookData) => {
    try {
        let data = await Book.updateOne({ _id: id }, bookData);
        return data.nModified !== 0;
    } catch (err) {
        console.log(err);
    }
};

const updatePartial = async (id, bookData) => {
    try {
        let data = await Book.updateOne({ _id: id }, bookData);
        return data.nModified !== 0;
    } catch (err) {
        console.log(err);
    }
};

const remove = async (id) => {
    try {
        let data = await User.deleteOne({ _id: id });
        return data.deleteCount !== 0;
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    getAll,
    getOne,
    save,
    update,
    updatePartial,
    remove
};