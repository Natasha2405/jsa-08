const { Validator } = require('node-input-validator');

const songSchema = {
    name: 'required|minLength:2',
    artist: 'required|string',
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
    songSchema,
    validate
};