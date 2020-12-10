const jsonf = require('../files');

const dataFile = './json-files/cars.json';

const getAll = async () => {
    let data = await jsonf.readJSONFile(dataFile);
    return data;
};

const getOne = async (id) => {
    let data = await jsonf.readJSONFile(dataFile);
    let res = data.filter(car => car.id === Number(id));
    return res[0];
};

const save = async (carData) => {
    let data = await jsonf.readJSONFile(dataFile);
    // let id = data[data.length - 1].id + 1;
    let id = 1;
    if (data.length > 0) {
        id = data[data.length - 1].id + 1;
    }
    carData = { id, ...carData };
    data = [...data, carData];
    await jsonf.writeJSONFile(dataFile, data);
    return carData;
};

const update = async (id, carData) => {
    let data = await jsonf.readJSONFile(dataFile);
    let changed = false;
    data = data.map(car => {
        if (car.id === Number(id)) {
            car = { ...carData, id: Number(id) };
            changed = true;
        }
        return car;
    });
    await jsonf.writeJSONFile(dataFile, data);
    return changed;
};

const updatePartial = async (id, carData) => {
    let data = await jsonf.readJSONFile(dataFile);
    let changed = false;
    data = data.map(car => {
        if(car.id === Number(id)) {
            for (x in carData) {
                car[x] = carData[x];
            }
            changed = true;
        }
        return car;
    });
    await jsonf.writeJSONFile(dataFile, data);
    return changed;
};

const remove = async (id) => {
    let data = await jsonf.readJSONFile(dataFile);
    let changed = false;
    data = data.filter(car => {
        if(car.id !== Number(id)) {
            changed = true;
            return true;
        }
        return false;
    });
    await jsonf.writeJSONFile(dataFile, data);
    return changed;
};

module.exports = {
    getAll,
    getOne,
    save,
    update,
    updatePartial,
    remove
};