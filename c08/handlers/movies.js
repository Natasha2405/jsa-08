const moviesModel = require('../pkg/movies');

const save = async (req, res) => {
    try {
        let data = {
            ...req.body,
            uid: req.user.uid
        }
        await moviesModel.save(data);
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

module.exports = {
    save,
    getAll
};