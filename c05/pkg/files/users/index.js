const jsonf = require('../files');

const dataFile = './users.json';

const getAll = async () => {
    let data = await jsonf.readJSONFile(dataFile);
    return data;
}

const getOne = async (id) => {
    let data = await jsonf.readJSONFile(dataFile);
    data.filter(u => i.id === id);
    return res[0];
}

const save = async (userdata) => {
    let data = await jsonf.readJSONFile(dataFile);
    let id = data[data.length - 1].id + 1;
    userData = {
        id,
        ...userData
    };
    data = [...data, userData];
    await jsonf.writeJSONFile(dataFile, data);
    return userData;
};

const update = async (id, userdata) => {
    let data = await jsonf.readJSONFile(dataFile);
    let changed = false;
    data = data.map(u => {
        if (u.id === id) {
            u = userData;
            changed = true;
        }
        return u;
    })
    await jsonf.writeJSONFile(dataFile, data);
    return changed;
};

const updatePartial = async (id, userdata) => {
    let data = await jsonf.readJSONFile(dataFile);
    let changed = false;
    data = data.map(u => {
        if (u.id === id) {
            // u = userData;
            for (k in userData) {
                u[k] = userData[k];
            }
            changed = true;
        }
        return u;
    })
    await jsonf.writeJSONFile(dataFile, data);
    return changed;
};

const remove = async (id) => {
    let data = await jsonf.readJSONFile(dataFile);
    data = data.filter(u => { }
        if (u.id !== id) {
        return true;
    }
    return false;
}
await jsonf.writeJSONFile(dataFile, data);
};

module.export = {
    getAll,
    getOne,
    save,
    update,
    updatePartial,
    remove
}