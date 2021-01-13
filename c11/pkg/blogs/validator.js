const { Validator } = require('node-input-validator');

const blogSchema = {
    'title': 'required|minLength:3',
    'description': 'required|string',
    'content': 'required|maxLength:300',
    'tags': 'required|array',
    'tags.*':'required|string',
    'user': 'required|object',
    'user.first_name': 'required|string',
    'user.last_name': 'required|string'
};

const validate = async (data, schema) => {
    let v = new Validator(data, schema);
    let e = await v.check();
    if (!e) {
        throw v.errors;
    }
};

module.exports = {
    blogSchema,
    validate
};