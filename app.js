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
for (let i = 0; ; i++) {
   const age = +prompt('How old are you?');
   if (age) {
      alert('Welcome to our website');
      break;
   }
   alert('Please add the numbers only');
}
alert('End');