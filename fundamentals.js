// ! 5. decrement & increment: --, ++;
// let x = 1;
// let y = 1;
// let c = 1;
// console.log(`x =  ${++x}`); // x = 2
// console.log(`y = ${y++}`); // y = 1 return previous value, but actually y=2 !
// console.log(c + y);

//! 6. JS Comparison and logical operators
// link to the interesting website: https://www.programiz.com/javascript/comparison-logical
// >, <, >=, <=, !=, ==, ===

// console.log('is 5 > 2', 5 > 2); //true
// console.log('is 5 < 2', 5 < 2); //false

// console.log('is equal 5 == 2', 5 == 2); //false
// console.log('is equal 5 == 5', 5 == 5); //true

// console.log("is equal 5 == '5' ", 5 == '5'); //true
// console.log("is equal 5 === '5' ", 5 === '5'); //false

// console.log("is not equal 10 != 8 ", 10 != 8); // true
// console.log("is not equal 10 != 10 ", 10 != 10); // false
// console.log("is not equal 10 !== '10' ", 10 !== '10'); //true
// console.log("is not equal 10 != '10' ", 10 != '10'); //false

//! Logical operators: 
// && - logical and (both operands return true value) high 
// console.log(1 === 1 && 2 === 2); // true
// console.log(1 === 1 && 2 === 1); // false
// console.log(1 === 1 && 2 === 2 && 3 === 3 && 4 === '4'); // false

// || - logical OR true if either of the operands value is true
// console.log(2 === '2' || 3 === 3 || 4 === '4'); // true 
// console.log(1 === '1' || 2 === '2' || 3 === '3'); // false 

//! 9 if else statements

// let age = 16;
// if (age >= 18) {
//    console.log('true');
// } else {
//    console.log('false');
// } // false

// if (age >= 16) console.log('true'); // true

//! 11 Switch operator
// let state = 'respond';
// switch (state) {
//    case 'idle':
//       console.log('nothing is happening');
//       break;

//    case 'loading':
//       console.log('Data is loading');
//       break;

//    case 'respond':
//       console.log('Data received');
//       break;

//    case 'error':
//       console.log('Error');
//       break;
// }

//! 12 Ternary operator
// const age = 15;
// age >= 18 ? console.log('Access granted') : console.log('Access denied');
// console.log('Access', age >= 18 ? 'granted' : 'denied');

//! 14 Arrays
// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(numbers);
// console.log(numbers[2]);
// console.log(numbers.length);
// console.log(numbers[numbers.length - 1]); // last element

// const strs = ['abc', 'cdf']
// strs.push('new str'); //?Method add new element to the end of the array
// console.log(strs);

// let a = strs.pop(); // ?Method delete and return the last array's element
// console.log(a);
// console.log(strs);

//! 16 While loop (basics)

// const numbers = [1, 2, 3, 4, 5, 6];

// let i = 0;
// while (i < numbers.length) {
//    console.log(numbers[i] * 2);
//    i++;
// }

//! 18 For loop (basics)
// const numbers = [1, 2, 3, 4, 5, 6];

// for (let index = 0; index < numbers.length; index++) {
//    console.log(numbers[index]);
// }


//! 20 Break operator

// while (true) {
//    const age = +prompt('How old are you?');
//    if (age > 0) {
//       alert('Welcome');
//       break;
//    }
//    alert('Enter a numbers only!');
// }
// alert('End');

// the same example with for loop 
// for (let i = 0; i < 3; i++) {
//    const age = +prompt('How old are you?');
//    if (age) {
//       alert('Welcome to our website');
//       break;
//    }
//    alert('Please add the numbers only');
// }
// alert('End');


// for (let i = 0; ; i++) {
//    if (i <= 3) {
//       const age = +prompt('How old are you?');
//       if (age) {
//          alert('Welcome to our website');
//          break;
//       }
//       alert('Please add the numbers only');
//    } else {
//       alert('Your attempts are finished');
//       break;
//    }
// }
// alert('End');

//! 21 Operator continue
// let arr = [1, 33, 50, 61, 70, 80, 100, 99];

// for (let index = 0; index < arr.length; index++) {
//    if (arr[index] % 2 !== 0) continue; // shows even numbers 
//    if (arr[index] % 2 === 0) continue; // shows od numbers
//    console.log(arr[index]);
// }

//! 23 Functions

// function sum(a, b) {
//    // console.log(a + b);
//    return a + b;
// }
// console.log(sum(4, 6));

// function getNumberData(question) {
//    while (true) {
//       const res = +prompt(question);
//       if (res === 0 || res) {
//          return res;
//       }
//    }
// }
// const age = getNumberData('How old are you?');
// console.log(age);


// function getNumberData(question) {
//    while (true) {
//       const res = +prompt(question);

//       if (res === 0 || res) {
//          return res;
//       } else {
//          alert('Please, add the numbers only!');
//       }
//       continue;
//    }
// }
// const age = getNumberData('How old are you?');
// console.log(age);

//! 25 Math methods

// console.log(Math.random()); // random number from 0 to 1
// console.log(Math.floor(1.3)); // = 1 rounds to smaller number
// console.log(Math.ceil(1.3)); // = 2 rounds to biggest number
// console.log(Math.round(3.4)); // rounds to needed number on math rules