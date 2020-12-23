const { Validator } = require('node-input-validator');

const movieSchema = {
    name: 'required|minLength:3',
    year: 'required|integer',
    director: 'required|string'
};

const validate = async (data, schema) => {
    let v = new Validator(data, schema);
    let e = await v.check();
    if (!e) {
        throw v.errors;
    }
};

module.exports = {
    movieSchema,
    validate
};