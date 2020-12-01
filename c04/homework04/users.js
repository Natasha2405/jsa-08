const fs = require('fs');

const dataFile = 'users.json';

const fileRead = () => {
    return new Promise((success, fail) => {
        fs.readFile(dataFile, 'utf8', (err, data) => {
            if(err) {
                return fail(err);
            }
            return success(JSON.parse(data));
        });
    });
};

const fileWrite = (data) => {
    return new Promise((success, fail) => {
        fs.writeFile(dataFile, JSON.stringify(data), err => {
            if (err) {
                return fail(err);
            }
            return success();
        });
    });
};

module.exports = {
    fileRead,
    fileWrite
};
