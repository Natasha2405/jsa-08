const gamesModel = require('../pkg/games');
const gamesValidator = require('../pkg/games/validator');

const save = async (req, res) => {
    try {
        await gamesValidator.validate(req.body, gamesValidator.gameSchema);
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
        let game = await gamesModel.save(data);
        return res.status(201).send(game);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error')
    }
};

const getAll = async (req, res) => {
    try {
        let data = await gamesModel.getAll(req.user.uid);
        return res.status(200).send(data);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

const getOne = async (req, res) => {
    try {
        let data = await gamesModel.getAll(req.params.id);
        if (data) {
            return res.status(200).send(data);
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

const update = async (req, res) => {
    try {
        await gamesValidator.validate(req.body, gamesValidator.gameSchema);
    } catch (err) {
        console.log(err);
        return res.status(400).send('Bad Content');
    }
    try {
        let updateGame = await gamesModel.update(req.params.id, req.user.uid, req.body);
        if (updateGame) {
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
        await gamesValidator.validate(req.body, gamesValidator.gameSchema);
    } catch (err) {
        console.log(err);
        return res.status(400).send('Bad Content');
    }
    try {
        let updateGame = await gamesModel.updatePartial(req.params.id, req.user.uid, req.body);
        if (updateGame) {
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
        let deleteGame = await gamesModel.remove(req.params.id, req.user.uid);
        if (deleteGame) {
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