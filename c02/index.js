// console.log('test');

// Callback functions

// setTimeout(() => {
//     console.log('timed out!');
// }, 5000);

// setInterval(() => console.log('tic toc'), 1000);

const cb = () => {
    console.log('timed out!');
}

cb();

setTimeout(cb, 5000);

console.log('***');

const rezultat = (calc, a, b) => {
    console.log('Rezultatot e: ', calc(a, b));
};

rezultat((c, d) => {
    return c * d;
}, 4, 3);

// ******************************************************************************

// const temp = (output, cTemp, c2f) => {
//     console.log('Tekovnata temperatura e ', output(cTemp, c2f), 'stepeni');
// };
// temp((cTemp, c2f) => {
//     return c2f = (cTemp * 9) / 5 + 32;
// }, 42, 107.6);

// **********zadacha:*********************
// temp(42, 'cfc', (output) => {
//     console.log('Tekovnata temperatura e ', output, 'stepeni');
// });
// Tekovnata temperatura e 107,6 stepeni
// c2f -> celsius to fahrenheit
// f2c -> fahrenheit to celsius

const printConvertedResult = (output) => {
    console.log(output);
}

const showTemperature = (degrees, conversionMethod, printConvertedResult) => {
    let output = 0;
    switch(conversionMethod) {
        case 'c2f':
            output = degrees * (9 / 5) + 32;
            printConvertedResult(output);
            break;
        case 'f2c':
            output = (degrees -32) * 5 / 9;
            printConvertedResult(output);
            break;
    }
}

showTemperature(42, 'c2f', printConvertedResult);
showTemperature(107.6, 'f2c', printConvertedResult);

// ****************************

function showResult(output1) {
    console.log(output1);
}

function res(temp, convert, cb) {
    if (convert == 'c2f') {
        let value =  temp * (9 / 5) + 32;
        cb(value);
    } else if (convert == 'f2c') {
        let value = (temp -32) * 5 / 9;
        cb(value);
    }
}

res(42, 'c2f', showResult);
res(107.6, 'f2c', showResult);


// *********************************************************************************
// Promisi

const funWithPromise = (param) => {
    return new Promise((success, fail) => {
        // ako operacijata e uspeshna
        // return success();
        // ako operacijata e neuspeshna
        // return fail();
        if (param === true) {
            return success('SUCCESS!!!!'); // success(N) -> then(N => ...)
        } else {
            return fail(':('); // fail(N) -> catch (N => ...)
        }
    });
};

funWithPromise(true)
    .then(res => {
        console.log(res); // SUCCESS!!!!
    })
    .catch(err => {
        console.log(err); // :(
    });

// *******************zadaca**************************

// sobiranje(2, 2)
//     .then(r => {
//         console.log(r); // 4
//     })
//     .catch(err => {
//         console.log(err); // ne e dozvoleno sobiranje na negativni broevi
//     });

// sobiranje(1, -27)
//     .then(r => {
//         console.log(r); // 4
//     })
//     .catch(err => {
//         console.log(err); // ne e dozvoleno sobiranje na negativni broevi
//     });

// sobiranje(-90, -2)
//     .then(r => {
//         console.log(r); // 4
//     })
//     .catch(err => {
//         console.log(err); // ne e dozvoleno sobiranje na negativni broevi
//     });

// sobiranje(81, -54)
//     .then(r => {
//         console.log(r); // 4
//     })
//     .catch(err => {
//         console.log(err); // ne e dozvoleno sobiranje na negativni broevi
//     });


const sobiranje = (arg1, arg2) => {
    return new Promise((success, fail) => {
        if (arg1 > 0 && arg2 > 0) {
            return success(arg1 + arg2);
        } else {
            return fail('ne e dozvoleno sobiranje na negativni broevi');
        }
    });
}

sobiranje(2, -2)
    .then(res => {
        console.log(res); // 4
    })
    .catch(err => {
        console.log(err); // ne e dozvoleno sobiranje na negativni broevi
    });






