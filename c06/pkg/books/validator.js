const { Validator } = require('node-input-validator');

const bookSchema = {
    title: 'required|minLength:3',
    author: 'required|minLength:4'
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