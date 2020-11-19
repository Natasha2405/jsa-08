// The Difference between Regular Functions and Arrow Functions

// 1. Syntax

// Curly brackets are not required if only one expression is present.
let add0 = (x, y) => x + y;

// If there’s only one argument, then the parentheses are not required either:
let squareNum = x => x * x;

// If the arrow function contains one expression, and you omit the function’s curly braces, 
// then the expression is implicitely returned. These are the inline arrows function.

const increment = (num) => num + 1;

increment(41); // => 42

// This expression is implicitly returned by the arrow function 
// without the use of return keyword.


// 2. Arguments binding

// Arrow functions do not have arguments binding.

// Object with Regular function.
let getData = {
    // Regular function
    showArg: function () {
        console.log(arguments);
    }
}
getData.showArg(1, 2, 3); // output {0:1,1:2,2:3}

// Object with Arrow function.
let getData1 = {
    // Arrow function
    showArg: () => console.log(arguments)
}
getData1.showArg(1, 2, 3); // Uncaught ReferenceError: arguments is not defined


// 3. Use of this keyword

// unlike Regular functions, arrow function does not have their own "this" keyword.

// The value of this inside an arrow function remains the same throughout the lifecycle 
// of the function and is always bound to the value of this in the closest non-arrow parent function.

let name = {
    fullName: 'Vandna Kapoor',
    printInRegular: function () {
        console.log(`My Name is ${this.fullName}`);
    },
    printInArrow: () => console.log(`My Name is ${this.fullName}`)
}

name.printInRegular(); // My Name is Vandna Kapoor
name.printInArrow();   // My Name is undefined

let user = {
    name: "GFG",
    gfg1: () => {
        console.log("hello " + this.name); // no 'this' binding here 
    },
    gfg2() {
        console.log("Welcome to " + this.name); // 'this' binding works here 
    }
};
user.gfg1(); // hello undefined
user.gfg2(); // Welcome to GFG

// Inside of a regular function, this value (aka the execution context) is dynamic.
// The dynamic context means that the value of this depends on how the function is invoked.
// In JavaScript, there are 4 ways you can invoke a regular function.

// During a simple invocation the value of this equals to the global object 
// (or undefined if the function runs in strict mode):

function myFunction() {
    console.log(this);
}
// Simple invocation
myFunction(); // logs global object (window)

// During a method invocation the value of this is the object owning the method:

const myObject = {
    method() {
        console.log(this);
    }
};
// Method invocation
myObject.method(); // logs myObject

// During an indirect invocation using myFunc.call(thisVal, arg1, ..., argN) 
// or myFunc.apply(thisVal, [arg1, ..., argN]) the value of this equals to the first argument:

function myFunction() {
    console.log(this);
}

const myContext = { value: 'A' };

myFunction.call(myContext);  // logs { value: 'A' }
myFunction.apply(myContext); // logs { value: 'A' }

// During a constructor invocation using new keyword 
// this equals to the newly created instance:

function MyFunction() {
    console.log(this);
}

new MyFunction(); // logs an instance of MyFunction

// No matter how or where being executed, this value inside of an arrow function 
// always equals this value from the outer function.

// In the following example, myMethod() is an outer function of callback() arrow function:

const myObject1 = {
    myMethod(items) {
        console.log(this); // logs myObject
        const callback = () => {
            console.log(this); // logs myObject
        };
        items.forEach(callback);
    }
};

myObject1.myMethod([1, 2, 3]);


// 4. Using a new keyword

// Regular functions created through function declarations expressions are both 
// constructible and callable, they can be called using the new keyword.

let x = function () {
    console.log(arguments);
};
new x(1, 2, 3); // Arguments {0: 1, 1: 2, 2: 3, ...}

function Car(color) {
    this.color = color;
}

const redCar = new Car('red');
redCar instanceof Car; // => true

// Arrow functions (and methods) are only callable. 
// They can never be used as constructor functions. 
// They can never be invoked with the new keyword.

let y = () => {
    console.log(arguments);
};
// new y(1, 2, 3); // TypeError: x is not a constructor

const Car1 = (color) => {
    this.color = color;
};

// const redCar1 = new Car1('red'); // TypeError: Car is not a constructor 


// 5. No duplicate named parameters

// We can use duplicate named parameters for regular function in non-strict mode.
function add(x, x){}

// 'Strict Mode'
'use strict';
function add1(x, x){}
// SyntaxError: duplicate formal argument x

// Arrow functions can never have duplicate named parameters, 
// whether in strict or non-strict mode.

// (x, x) => {}
// SyntaxError: duplicate argument names not allowed in this context
