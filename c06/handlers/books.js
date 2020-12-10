const booksModel = require('../pkg/books/mongo');

const getAll = async (req, res) => {
    try {
        let data = await booksModel.getAll();
        return res.status(200).send(data);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

const getOne = async (req, res) => {
    try {
        let data = await booksModel.getOne(req.params.id);
        if (data) {
            return res.status(200).send(data);
        }
        return res.status(404).send('Not Found');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

const save = async (req, res) => {
    try {
        let book = await booksModel.save(req.body);
        return res.status(201).send(book);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

const update = async (req, res) => {
    try {
        let updateBook = await booksModel.update(req.params.id, req.body);
        if (updateBook) {
            return res.status(204).send('No Content');
        }
        return res.status(404).send('Not Found');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

const updatePartial = async (req, res) => {
    try {
        let updateBook = await booksModel.updatePartial(req.params.id, req.body);
        if (updateBook) {
            return res.status(204).send('No Content');
        }
        return res.status(404).send('Not Found');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

const remove = async (req, res) => {
    try {
        let deleteBook = await booksModel.remove(req.params.id);
        if (deleteBook) {
            return res.status(204).send('No Content');
        }
        return res.status(404).send('Not Found');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
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