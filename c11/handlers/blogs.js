const blogsModel = require('../pkg/blogs');
const blogsValidator = require('../pkg/blogs/validator');

const save = async (req, res) => {
    try {
        await blogsValidator.validate(req.body, blogsValidator.blogSchema);
    } catch (err) {
        console.log(err);
        return res.status(400).send('Bad Content');
    }
    try {
        let data = {
            ...req.body,
            'user.id': req.user.uid,
            publish_date: new Date().toISOString(),
            _created: true,
            _deleted: false
        }
        let blog = await blogsModel.save(data);
        return res.status(201).send(blog);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error')
    }
};

const getAll = async (req, res) => {
    try {
        let data = await blogsModel.getAll();
        return res.status(200).send(data);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error')
    } 
};

const getLast10 = async (req, res) => {
    try {
        let data = await blogsModel.getLast10(); 
        return res.status(200).send(data);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error')
    } 
};

const getOne = async (req, res) => {
    try {
        let data = await blogsModel.getOne(req.params.id);
        if (data) {
            return res.status(200).send(data);
        }
        return res.status(404).send('Not Found');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error')
    } 
};

const getTags = async (req, res) => {
    try {
        let blogs = await blogsModel.getTags(req.query.tags);
        if (blogs) {
            return res.status(200).send(blogs);
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error')
    }
};

const update = async (req, res) => {
    try {
        await blogsValidator.validate(req.body, blogsValidator.blogSchema);
    } catch (err) {
        console.log(err);
        return res.status(400).send('Bad Content');
    }
    try {
        let updateBlog = await blogsModel.update(req.params.id, req.user.uid, req.body);
        if (updateBlog) {
            return res.status(204).send('No Content');
        }
        return res.status(404).send('Not Found');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

const updatePartial = async (req, res) => {
    try {
        await blogsValidator.validate(req.body, blogsValidator.blogSchema);
    } catch (err) {
        console.log(err);
        return res.status(400).send('Bad Content');
    }
    try {
        let updateBlog = await blogsModel.updatePartial(req.params.id, req.user.uid, req.body);
        if (updateBlog) {
            return res.status(204).send('No Content');
        }
        return res.status(404).send('Not Found');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

const hide = async (req, res) => {
    try {
        let hideBlog = await blogsModel.hide(req.params.id, req.user.uid);
        if (hideBlog) {
            return res.status(204).send('No Content');
        }
        return res.status(404).send('Not Found');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

const remove = async (req, res) => {
    try {
        let deleteBlog = await blogsModel.remove(req.params.id, req.user.uid);
        if (deleteBlog) {
            return res.status(204).send('No Content');
        }
        return res.status(404).send('Not Found');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
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