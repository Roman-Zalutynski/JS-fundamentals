//! module 3 lesson 2

const developer = {
   //key : value,
   name: 'Roman',
   age: 31,
   skills: ['HTML', 'CSS', 'JS'],
   isMarried: true
};
developer.isMarried = true;

console.log(developer.age);
console.log(developer['name']); // old notation!