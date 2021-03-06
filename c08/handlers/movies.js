const moviesModel = require('../pkg/movies');
const moviesValidator = require('../pkg/movies/validator');

const save = async (req, res) => {
    try {
        await moviesValidator.validate(req.body, moviesValidator.movieSchema);
    } catch (err) {
        console.log(err);
        return res.status(400).send('Bad Content');
    }
    try {
        let data = {
            ...req.body,
            uid: req.user.uid,
            _created: new Date().toISOString(),
            _deleted: false
        }
        let movie = await moviesModel.save(data);
        return res.status(201).send(movie);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error')
    }
};

const getAll = async (req, res) => {
    try {
        let data = await moviesModel.getAll(req.user.uid);
        return res.status(200).send(data);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error')
    } 
};

const getOne = async (req, res) => {
    try {
        let data = await moviesModel.getOne(req.params.id);
        if (data) {
            return res.status(200).send(data);
        }
        return res.status(404).send('Not Found');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error')
    } 

};

const update = async (req, res) => {
    try {
        await moviesValidator.validate(req.body, moviesValidator.movieSchema);
    } catch (err) {
        console.log(err);
        return res.status(400).send('Bad Content');
    }
    try {
        let updateMovie = await moviesModel.update(req.params.id, req.user.uid, req.body);
        if (updateMovie) {
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
        await moviesValidator.validate(req.body, moviesValidator.movieSchema);
    } catch (err) {
        console.log(err);
        return res.status(400).send('Bad Content');
    }
    try {
        let updateMovie = await moviesModel.updatePartial(req.params.id, req.user.uid, req.body);
        if (updateMovie) {
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
        let deleteMovie = await moviesModel.remove(req.params.id, req.user.uid);
        if (deleteMovie) {
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
    getOne,
    update,
    updatePartial,
    remove
};