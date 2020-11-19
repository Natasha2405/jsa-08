// console.log('test');

// setTimeout(() => {
//     console.log('timed out!');
// }, 5000);

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

// *****************************************

const temp = (output, cTemp, c2f) => {
    console.log('Tekovnata temperatura e ', output(cTemp, c2f), 'stepeni');
};

// Tekovnata temperatura e 107,6 stepeni

// c2f -> celsius to fahrenheit
// f2c -> fahrenheit to celsius

temp((cTemp, c2f) => {
    return c2f = (cTemp * 9) / 5 + 32;
}, 42, 107.6);

// ***********************************************

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
    .then(o => {
        console.log(o); // SUCCESS!!!!
    })
    .catch(err => {
        console.log(err); // :(
    });

// *******************************************

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
    .then(r => {
        console.log(r); // 4
    })
    .catch(err => {
        console.log(err); // ne e dozvoleno sobiranje na negativni broevi
    });





