const { Validator } = require('node-input-validator');

const userSchema = {
    first_name: 'required|minLength:3',
    last_name: 'required|minLength:4',
    age: 'required|between:18,100',
    email: 'required|email',
    dob: 'required',
    city: 'required|string'
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
    userSchema,
    validate
};