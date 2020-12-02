const usersModel = require('../pkg/files/users')

const getAll  = async (req, res) => {
    try{
        let data = await users.getAll();
        return res.status(200).send(data);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
    
}
const getOne = async (req, res) => {
    try {
        let data =  await usersModel.getOne(req.params.id);
        if(data) {
            return res.status(200).send(data);
        }
        return res.status(404).send(data);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
}
const save = async (req, res) => {
    try {
        let u = await usersModel.save(req.body);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
}
const update = async (req, res) => {
    try {
        let c = await usersModel.update(req.body);
        if (c) {
            return res.status(204).send('No Content');
        }
        return res.status(404).send('Not Found');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
}
const updatePartial = async (req, res) => {
    try {
        let c = await usersModel.updatePartial(req.body);
        if (c) {
            return res.status(204).send('No Content');
        }
        return res.status(404).send('Not Found');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
}
const remove = async (req, res) => {
    try {
        let c = await usersModel.remove(req.params.id);
        if (c) {
            return res.status(204).send('No Content');
        }
        return res.status(404).send('Not Found');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getAll,
    getOne,
    save,
    update,
    updatePartial,
    remove
}