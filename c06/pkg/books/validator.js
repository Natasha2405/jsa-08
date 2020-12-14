const { Validator } = require('node-input-validator');

const bookSchema = {
    title: 'required|string',
    author: 'required|string',
    year: 'required|integer',
    genre: 'required|string',
    price: 'required|min:7'
};

const validate = async (data, schema) => {
    let v = new Validator(data, schema);
    // return await v.check();
    let e = await v.check();
    if (!e) {
        throw v.errors;
    }
};

module.exports = {
    bookSchema,
    validate
};