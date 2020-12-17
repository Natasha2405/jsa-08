const usersModel = require('../pkg/users');
const usersValidator = require('../pkg/users/validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cfg = require('../pkg/config');

const create = async (req, res) => {
    // validate user data
    try {
        await usersValidator.validate(req.body, usersValidator.registrationSchema);
    } catch (err) {
        console.log(err);
        return res.status(400).send('Bad Request');
    }
    // check if user already exists in db
    try {
        let ru = await usersModel.getOneByEmail(req.body.email);
        if (ru) {
            return res.status(409).send('Conflict');
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error')
    }
    // mikimaus123 => hashing => hfuehfujeide484848dwjduwhij
    req.body.password = bcrypt.hashSync(req.body.password);
    // set defaults
    req.body.active = true;
    req.body.role = 'user';
    req.body._created = new Date();
    req.body._deleted = false;
    // save user
    try {
        let u = await usersModel.save(req.body);
        res.status(201).send(u);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

const login = async (req, res) => {
    // validate user data
    try {
        await usersValidator.validate(req.body, usersValidator.loginSchema);
    } catch (err) {
        console.log(err);
        return res.status(400).send('Bad Request');
    }
    // get user
    try {
        let ru = await usersModel.getOneByEmail(req.body.email);
        if (!ru) {
            return res.status(403).send('Forbidden');
        }
        if (bcrypt.compareSync(req.body.password, ru.password)) {
            let payload = {
                uid: ru._id,
                role: ru.role,
                email: ru.email,
                first_name: ru.first_name,
                last_name: ru.last_name,
                exp: (new Date().getTime() + (365 * 24 * 60 * 60 * 1000)) / 1000
            };
            let key = cfg.get('server').jwt_key;
            let token = jwt.sign(payload, key);
            return res.status(200).send({ jwt: token });
        }
        return res.status(401).send('Unauthorized');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

const refreshToken = async (req, res) => {

    console.log(req.user); // pristapuvame do podatocite od tokenot;

    res.status(200).send('ok');
};

const forgotPassword = async (req, res) => {
    res.status(200).send('ok');
};

const resetPassword = async (req, res) => {
    res.status(200).send('ok');
};

// homework 
const changePassword = async (req, res) => {
    // validate user data
    try {
        await usersValidator.validate(req.body, usersValidator.changePasswordSchema);
    } catch (err) {
        console.log(err);
        return res.status(400).send('Bad Request');
    }
    // update user -> change password
    try {
        let ru = await usersModel.getOneByEmail(req.body.email);
        if (!ru) {
            return res.status(403).send('Forbidden');
        }
        if (!bcrypt.compareSync(req.body.password, ru.password)) {
            return res.status(401).send('Unauthorized');
        }

        if (req.body.new_password === req.body.confirm_password) {
            req.body.password = req.body.new_password;
        } else {
            return res.status(400).send('Passwords do not match');
        }

        req.body.password = bcrypt.hashSync(req.body.password);

        let updateUser = await usersModel.update(ru._id, req.body);
        if (updateUser) {
            return res.status(204).send('Password is successfully changed');
        }
        return res.status(404).send('Not Found');
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};
// homework
const listAccounts = async (req, res) => {
    try {
        let data = await usersModel.getAll();
        return res.status(200).send(data);
    } catch (err) {
        console.log(err);
        return res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    create,
    login,
    refreshToken,
    forgotPassword,
    resetPassword,
    changePassword,
    listAccounts
};