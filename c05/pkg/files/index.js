const fs = require('fs');

// const dataFile = './data.json';

const writeJSONFile = (f, data) => {
    return new Promise((success, fail) => {
        fs.writeFile(f, JSON.stringify(data), err => {
            if(err) {
                return fail(err);
            }
            return success();
        });
    });
};

const readJSONFile = () => {
    return new Promise((success, fail) => {
        fs.readFile(dataFile, 'urf8' (err, data) => {
            if(err) {
                return fail(err);
            }
            return success(JSON.parse(data));
        });
    });
};

module.exports = {
    writeJSONFile,
    readJSONFile
}