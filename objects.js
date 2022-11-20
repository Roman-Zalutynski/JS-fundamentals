//! module 3 lesson 2
// const developer = {
//    //key : value,
//    name: 'Roman',
//    age: 31,
//    skills: ['HTML', 'CSS', 'JS'],
//    isMarried: true
// };
// developer.isMarried = true;

// console.log(developer.age);
// console.log(developer['name']); // old notation!

//! module 3 lesson 4 work with memory

// let x = 0; // separate variable in memory
// let y = x; // separate variable in memory
// y = 2;

// const Natalia = { age: 29 };
// const Roman = Natalia; // the same object in memory with 2 names. Any object's modifies are by different names will change the same obj.
// Roman.age = 32;
// console.log(Roman, Natalia); // age = 32
// the same situation with arrays! 

// ! module 3 lesson 5 operator in 
// const developer = {
//    name: 'Roman',
//    age: 31,
//    skills: ['HTML', 'CSS', 'JS'],
//    isMarried: true
// };

// console.log('name' in developer); // true
// console.log('fullName' in developer); // false

// ! module 3 lesson 6 
// const developer = {
//    name: 'Roman',
//    age: 31,
//    skills: ['HTML', 'CSS', 'JS'],
//    isMarried: true
// };

// loop for in  objects
// for (const key in developer) {
//    console.log(`${key} - ${developer[key]}`);
// }

// ! module 3 lesson 8 
// for of loop for arrays
// const numbers = [1, 2, 3, 4, 5];

// for (let number of numbers) {
//    console.log(number);
// }

// ! module 3 lesson 9 Object methods

// const developer = {
//    name: 'Roman',
//    age: 31,
//    skills: ['HTML', 'CSS', 'JS'],
//    isMarried: true,
//    addAge() {
//       this.age++;
//       console.log(this);
//    },
// };
// developer.addAge();

// ! module 3 lesson 11 String methods 
// const str = 'hello world you';
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.includes('oa'));
// console.log(str.toLowerCase().includes('al'));
// console.log(str.slice(1, 2)); // from start index to end index trim the string. The last index's value not included
// console.log(str.split(' ').join(' | ')); // create the array divided by ' '
// console.log(str.trim()); // The method removes the spaces before and after the string

// ! module 3 lesson 12 Numbers methods 
// const num = 12000000.5678;
// console.log(num.toFixed(1)); //around to the highest value.We can add the quantity of numbers after commas
// console.log(num.toLocaleString('pl-PL', { style: 'currency', currency: 'PLN' })); // convert number to local format for different countries + currency 

// ! module 3 lesson 14  arrays methods
// const arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.pop()); // cut the last arr's element 
// console.log(arr.push(2)); // put the element to the end of array
// console.log(arr.shift()); // cut the first arr's element and return it
// console.log(arr.unshift(0)); // add element/s to the start of arr and return the number of arr's elements 
// console.log(arr.includes(4));
// console.log(arr.indexOf(2)); // return 1 or -1 when element doesn't find 
// let newArr = arr.slice(1, 4); // method slice - returns the new array 
// console.log(newArr);
// let arr2 = arr.concat([7, 8, 9]); // concat the arrays to the one array
// console.log(arr2);
// console.log(arr);


// ! module 3 lesson 17 RegExp
// const regex1 = /\w+/; // 1 way to declare regexp
// const regex2 = new RegExp('\\w+'); // 2 way to declare regexp
// const str = 'JavaScript is a cool language. Every developer should know javascript';
// console.log(/JavaScript/.test(str)); // true
// console.log(/javascript/i.test(str)); //true  i - helps to find the needed word without comparing the case of letters
// console.log(str.replace(/javascript/i, 'php')); // change the found word to new - In this case, only the first found word will be changed 
// console.log(str.replace(/javascript/gi, 'php')); // change the found word to new. All found words will be changed.
//console.log(str.match(/javascript/gi)); // return the array with looked value. 

// ! module 3 practice => finished (see the folder 'practiceFrom3module') 