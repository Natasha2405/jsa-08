const fs = require('fs');

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

// fs.writeFile('document.txt', text, (err) => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log('Succesful file write!');
// });

// fs.copyFile('document.txt', 'copy.txt', (err) => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log('Successfully copied file!');
// });

// fs.rename('document.txt', 'newdoc.txt', (err) => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log('Successfully renamed file!');
// });

// fs.unlink('copy.txt', (err) => {
//     if(err) {
//         return console.log(err);
//     }
//     console.log('Successfully deleted file!')
// });

// ***************** Promisifikacija na funkciite *************************

const fileWrite = (file, content) => {
    return new Promise((success, fail) => {
        fs.writeFile(file, content, err => {
            if (err) {
                return fail(err);
            }
            return success();
        });
    });
};

const fileCopy = (file, file2) => {
    return new Promise((succeess, fail) => {
        fs.copyFile(file, file2, err => {
            if (err) {
                return fail(err);
            }
            return succeess();
        });
    });
};

const fileRename = (file, name2) => {
    return new Promise((success, fail) => {
        fs.rename(file, name2, err => {
            if (err) {
                return fail(err);
            }
            return success();
        });
    });
};

const fileDelete = (file) => {
    return new Promise((success, fail) => {
        fs.unlink(file, err => {
            if (err) {
                return fail(err);
            }
            return success();
        });
    });
};

// ******************* izvrshuvanje so then i catch ***********************

// fileWrite('document.txt', text)
//     .then(() => {
//         console.log('Succesful file write!');
//         return fileCopy('document.txt', 'copy.txt');
//     })
//     .then(() => {
//         console.log('Successfully copied file!');
//         return fileRename('document.txt', 'newdoc.txt');
//     })
//     .then(() => {
//         console.log('Successfully renamed file!');
//         return fileDelete('copy.txt');
//     })
//     .then(() => {
//         console.log('Successfully deleted file!')
//     })
//     .catch(err => {
//         console.log(err);
//     });

// ******************* izvrshuvanje so async/await ***********************

const fileFunc = async () => {
    try {
        await fileWrite('document.txt', text);
        await fileCopy('document.txt', 'copy.txt');
        await fileRename('document.txt', 'newdoc.txt');
        await fileDelete('copy.txt');
    } catch (err) {
        console.log(err);

    }
};

fileFunc();