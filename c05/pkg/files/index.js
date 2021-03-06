const fs = require('fs');

const writeJSONFile = (file, data) => {
    return new Promise((success, fail) => {
        fs.writeFile(file, JSON.stringify(data), err => {
            if (err) {
                return fail(err);
            }
            return success();
        });
    });
};

const readJSONFile = (file) => {
    return new Promise((success, fail) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                return fail(err);
            }
            return success(JSON.parse(data));
        });
    });
};

module.exports = {
    writeJSONFile,
    readJSONFile
};