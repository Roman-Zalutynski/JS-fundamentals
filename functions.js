// ! module 4 lesson 2
// functions - always returns something. So we can work with returned value 
//function
// function sum(a, b) {
//    return a + b;
// }
// console.log(sum(3, 5));

// procedure - just do something inside the function and doesn't return any value;
// function sum2(a, b) {
//    console.log(a + b);
// }


// ! module 4 lesson 3

// The ways to write the functions

// 1. Function declaration
// function sum(a,b) {
// return a + b;
// }

// 2. function expression - we can call this function before the initialization
// console.log(sum2(1,2)) - I cant call function here
// const sum2 = function sum2(a,b) {
//    return a + b;
// };

// 3. IIFE (Immediately-Invoked Function Expression)
// (function (a,b) {
//    console.log(a + b);
// })(5,1);

// 4. Arrow functions
// const sum = (a,b) => {
//    return a + blur;
// }
//4.1 shortened declaration of arrow's function
// const sum = (a,b) => a+b; 