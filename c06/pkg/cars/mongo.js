const mongoose = require('mongoose');

const Car = mongoose.model(
    'cars',
    {
        name: String,
        model: String,
        color: String,
        year: Number
    },
    'cars'
);

const getAll = async () => {
        let data = await Car.find();
        return data;
};

const getOne = async (id) => {
        let data = await Car.findOne({ _id: id });
        return data;
};

const save = async (carData) => {
        let car = new Car(carData);
        let data = await car.save();
        return data;
};

const update = async (id, carData) => {
        let data = await Car.updateOne({ _id: id }, carData);
        return data.nModified !== 0;
};

const updatePartial = async (id, carData) => {
        let data = await Car.updateOne({ _id: id }, carData);
        return data.nModified !== 0;
};

const remove = async (id) => {
        let data = await Car.deleteOne({ _id: id });
        return data.deleteCount !== 0;
};

module.exports = {
    getAll,
    getOne,
    save,
    update,
    updatePartial,
    remove
};