// File System Module - Node JS

const fs = require('fs');

let text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

// fs.writeFile('data.txt', text, err => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log('Successfull write!');
// });

// fs.readFile('data.txt', 'utf8', (err, data) => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(data);
// });

// fs.appendFile('data.txt', '\n\n🚀🚀🚀\n\n', err => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log('Successfull append!');
// });


// ****************************

// fs.writeFile('data.txt', text, err => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log('Successfull write!');

//     fs.readFile('data.txt', 'utf8', (err, data) => {
//         if (err) {
//             return console.log(err);
//         }
//         console.log(data);

//         fs.appendFile('data.txt', "\n\n🔥🔥🔥🎉\n\n", err => {
//             if (err) {
//                 return console.log(err);
//             }
//             console.log('Successfull append!');
//         });
//     });
// });

//**************************************************************************

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

// fileWrite('data.txt', 'Pero')
//     .then(() => {
//         console.log('Successfull promise write!');
//     .catch(err => {
//         console.log(err);
//     })

const fileAppend = (file, content) => {
    return new Promise((success, fail) => {
        fs.appendFile(file, content, err => {
            if (err) {
                return fail(err);
            }
            return success();
        });
    });
};

// fileAppend('data.txt', 'Hello')
//     .then(() => {
//         console.log('Append successful!')
//     })
//     .catch(err => {
//         console.log(err);
//     })

const fileRead = (file) => {
    return new Promise((success, fail) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                return fail(err);
            }
            return success(data);
        });
    });
};

// fileRead('data.txt')
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     })

// **********************Promise chaining***********************************

// fileWrite('data.txt', 'Pero')
//     .then(() => {
//         console.log('Successfull promise write!');
//         return fileAppend('data.txt', '🚀🚀🚀');
//     })
//     .then(() => {
//         console.log('Successfull append from promise!');
//         return fileRead('data.txt');
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     })

//*********************************************************************

const fileOps = async () => {
    try {
        await fileWrite('data.txt', 'JANKO');
        await fileAppend('data.txt', '🎉🎉🎉');
        let c = await fileRead('data.txt');
        console.log(c);
    } catch (err) {
        console.log(err);
    }
};

fileOps();
