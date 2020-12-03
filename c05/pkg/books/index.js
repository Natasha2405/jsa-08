const jsonf = require('../files');

const dataFile = './json-files/books.json';

const getAll = async () => {
    let data = await jsonf.readJSONFile(dataFile);
    return data;
};

const getOne = async (id) => {
    let data = await jsonf.readJSONFile(dataFile);
    let res = data.filter(book => book.id === Number(id));
    return res[0];
};

const save = async (bookData) => {
    let data = await jsonf.readJSONFile(dataFile);
    let id = data[data.length - 1].id + 1;
    bookData = { id, ...bookData};
    data = [...data, bookData];
    await jsonf.writeJSONFile(dataFile, data);
    return bookData;
};

const update = async (id, bookData) => {
    let data = await jsonf.readJSONFile(dataFile);
    let changed = false;
    data = data.map(book => {
        if (book.id === Number(id)) {
            book = {...bookData, id: Number(id)};
            changed = true;
        }
        return book;
    });
    await jsonf.writeJSONFile(dataFile, data);
    return changed;
};

const updatePartial = async (id, bookData) => {
    let data = await jsonf.readJSONFile(dataFile);
    let changed = false;
    data = data.map(book => {
        if (book.id === Number(id)) {
            for (x in bookData) {
                book[x] = bookData[x];
            }
            changed = true;
        }
        return book;
    });
    await jsonf.writeJSONFile(dataFile, data);
    return changed;
};

const remove = async (id) => {
    let data = await jsonf.readJSONFile(dataFile);
    let changed = false;
    data = data.filter(book => {
        if (book.id !== Number(id)) {
            changed = true;
            return true;
        }
        return false;
    });
    await jsonf.writeJSONFile(dataFile, data);
    return changed;
};

module.exports = {
    getAll,
    getOne,
    save,
    update,
    updatePartial,
    remove
};

