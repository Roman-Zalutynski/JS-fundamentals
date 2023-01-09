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


// ! module 4 lesson 5
//Scope - area inside the function, where variables or another elements will available 
// only inside the function

// function isString(word) {
//    const isValid = typeof word ===  "string"; 
//    return isValid;
// }

// ! module 4 lesson 6
//Higher order functions
// Callback functions

// function squared(num) {
//    return num * num;
// }

// let arr1 = [1,2,4,5];

// function copyArrayAndSquareNum(arr) {
//    const res = [];

//    for (let i = 0; i < arr.length; i++) {
//       res.push(arr[i] ** 2);
//    }

//    return res;
// }
// console.log(copyArrayAndSquareNum(arr1));

// function copyArrayAndDivideByTwo(arr) {
//    const res = [];

//    for (let i = 0; i < arr.length; i++) {
//       res.push(arr[i] / 2);
//    }

//    return res;
// }

// ! module 4 lesson 7 Recursion - function which is calling by herself
//  Recursive funciton should have :
// 1. Basis condition 
// 2. The rule of function move 
// function factorial (n) {
// if(n === 0) return 1; // basis condition
// return n * factorial(n-1);
// }
// // factorial(5); // n=3 => 3*2*1 
// console.log(factorial(5));

// receive the char and return it 5 times bigger
// let counter = 0;
// function repeater(char) {
//    counter ++;

//    if(counter === 5) {
//       counter = 0;
//       return char;
//    }
   
//    return char + repeater(char);
// }

// console.log(repeater('y'));

// !module 4 lesson 8 Closure
// function which returns another function
// returned function remember the scope of parent's function

// function closure(name) {
//    const helloName = () => console.log('hello', name);
//    return helloName;
// }
// const helloWorld = closure('world');
// helloWorld();


function outer() {
   let counter = 0;

   function incrementCounter() {
      console.log(++counter);
   }

   return incrementCounter;
}

const myCounter1 = outer();
myCounter1();
myCounter1();
myCounter1();
myCounter1();