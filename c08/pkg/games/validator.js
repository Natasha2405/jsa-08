const { Validator } = require('node-input-validator');

const gameSchema = {
    name: 'required|minLength:2',
    publisher: 'required|string',
    genre: 'required|string',
    year: 'required|integer'
};

const validate = async (data, schema) => {
    let v = new Validator(data, schema);
    let e = await v.check();
    if (!e) {
        throw v.errors;
    }
};

module.exports = {
    gameSchema,
    validate
};