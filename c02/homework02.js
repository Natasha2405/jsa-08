// zadaci so callback funkcii

// 1. konverzija na km i miles

const printResult = (result) => {
    console.log(result);
}
const conversionFunction = (number, convert, printResult) => {
    if (convert == 'km') {
        let result = number / 1.6;
        printResult(result);
    } else if (convert == 'miles') {
        let result = number * 1.6;
        printResult(result)
    }
}

conversionFunction(40, 'km', printResult); // output: 25
conversionFunction(25, 'miles', printResult); // output: 40


// 2. da se najde ploshtina na pravoagolnik

const rectangleArea = (area, a, b) => {
    console.log('The result of the area is: ', area(a, b));
};

rectangleArea((m, n) => {
    return m * n;
}, 4, 9);     // output: The result of the area is:  36


// 3. da se konvertira americki dolar vo meksikanski pesos

const printConvertedValue = (result) => {
    console.log(result);
}

const convertCurrencie = (value, currencie, printConvertedValue) => {
    let result = 0;
    switch (currencie) {
        case 'usd':
            result = value * 20.16;
            printConvertedValue(result);
            break;
        case 'mexican peso':
            result = value / 20.16;
            result1 = result.toFixed(2)
            printConvertedValue(result1);
            break;
    }

}
convertCurrencie(100, 'usd', printConvertedValue); // output: 2016
convertCurrencie(1000, 'mexican peso', printConvertedValue); // output: 49.60

// ****************************************************************************************
// zadaci so promisi

// 1. proveri dali dvata broevi se parni broevi

const evenOrOddNumbers = (num1, num2) => {
    return new Promise((success, fail) => {
        if (num1 % 2 === 0 && num2 % 2 === 0) {
            return success('Numbers are EVEN');
        } else {
            return fail('There is an ODD number');
        }
    });
}

evenOrOddNumbers(16, 28)  // output: Numbers are EVEN
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })

evenOrOddNumbers(13, 40)  // output: There is an ODD number
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })


// 2. proveri go indeksot na zagaduvanje na vozduhot - Air Quality Index

const calculateIndex = (index) => {
    return new Promise((success, fail) => {
        if (index <= 50) {
            return success('Air Pollution Level: Good');
        } else if (index >= 51 && index <= 100) {
            return success('Air Pollution Level: Moderate');
        } else if (index >= 101 && index <= 150) {
            return success('Air Pollution Level: Unhealthy for Sensitive Groups');
        } else if (index >= 151 && index <= 200) {
            return success('Air Pollution Level: Unhealthy');
        } else if (index >= 201 && index <= 300) {
            return success('Air Pollution Level: Very Unhealthy');
        } else if (index >= 301 && index <= 500) {
            return success('Air Pollution Level: Hazardous');
        } else {
            return fail('Your input parameter is invalid');
        }
    })
}

calculateIndex(178)   // output: Air Pollution Level: Unhealthy
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })

calculateIndex(800)   // output: Your input parameter is invalid
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })


// 3. presmetaj ja plostinata na kvadratot - Square Area

const squareArea = (x, y) => {
    return new Promise((success, fail) => {
        if (x === y) {
            return success(x * y);
        } else {
            return fail('This is not a square!');
        }
    })
}

squareArea(7, 7)    // output: 49
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })

squareArea(10, 15)   // output: This is not a square!
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })





