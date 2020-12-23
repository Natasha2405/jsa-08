const songsModel = require('../pkg/songs');
const songsValidator = require('../pkg/songs/validator');

const save = async (req, res) => {
    try {
        await songsValidator.validate(req.body, songsValidator.songSchema);
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
        let song = await songsModel.save(data);
        return res.status(201).send(song);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error')
    }
};

const getAll = async (req, res) => {
    try {
        let data = await songsModel.getAll(req.user.uid);
        return res.status(200).send(data);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error')
    } 
};

const getOne = async (req, res) => {
    try {
        let data = await songsModel.getOne(req.params.id);
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
        await songsValidator.validate(req.body, songsValidator.songSchema);
    } catch (err) {
        console.log(err);
        return res.status(400).send('Bad Content');
    }
    try {
        let updateSong = await songsModel.update(req.params.id, req.user.uid, req.body);
        if (updateSong) {
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
        await songsValidator.validate(req.body, songsValidator.songSchema);
    } catch (err) {
        console.log(err);
        return res.status(400).send('Bad Content');
    }
    try {
        let updateSong = await songsModel.updatePartial(req.params.id, req.user.uid, req.body);
        if (updateSong) {
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
        let deleteSong = await songsModel.remove(req.params.id, req.user.uid);
        if (deleteSong) {
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