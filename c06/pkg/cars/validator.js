const { Validator } = require('node-input-validator');

const carSchema = {
    name: 'required|minLength:3',
    model: 'required|minLength:2',
    color: 'required|minLength:3',
    year: 'required|minLength:4'
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