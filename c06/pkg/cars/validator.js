const { Validator } = require('node-input-validator');

const carSchema = {
    name: 'required|string',
    model: 'required|minLength:2',
    color: 'required|string',
    year: 'required|between:2010,2030'
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
    carSchema,
    validate
};