const mongoose = require('mongoose');

const Blog = mongoose.model(
    'blogs',
    {
        _created: Boolean,
        _deleted: Boolean,
        publish_date: Date,
        title: String,
        description: String,
        content: String,
        tags: [String],
        user: {
            id: String,
            first_name: String,
            last_name: String
        }
    },
    'blogs'
);

const save = async (blogData) => {
    let blog = new Blog(blogData);
    let data = await blog.save();
    return data;
};

const getAll = async () => {
    let data = await Blog.find({})
    return data;
};

const getLast10 = async () => {
    let data = await Blog.find({}, {title: 1}).sort({ publish_date: - 1 }).limit(10); //////////
    return data;
};

const getOne = async (id) => {
    let data = await Blog.findOne({ _id: id });
    return data;
};

const getTags = async (tags) => {
    let data = await Blog.find({ tags: tags, _deleted: false }); ////////////
    return data;
};

const update = async (id, uid, blogData) => {
    let data = await Blog.updateOne({ _id: id, 'user.id': uid }, blogData);
    return data.nModified !== 0;
};

const updatePartial = async (id, uid, blogData) => {
    let data = await Blog.updateOne({ _id: id, 'user.id': uid }, blogData);
    return data.nModified !== 0;
};

const hide = async (id) => {
    let data = await Blog.updateOne({ _id: id, 'user.id': uid }, { _deleted: true });
    return data.nModified !== 0;
};

const remove = async (id) => {
    let data = await Blog.deleteOne({ _id: id, 'user.id': uid });
    return data.deletedCount !== 0;
};

module.exports = {
    save,
    getAll,
    getLast10,
    getOne,
    getTags,
    update,
    updatePartial,
    hide,
    remove
};


