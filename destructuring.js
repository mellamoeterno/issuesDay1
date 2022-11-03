const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
const numbers = ['1', '2', '3', '4', '5', '6']

const [a, ,c, ...rest] = alphabet

const newArray = [...alphabet, ...numbers];

console.log(newArray);

//this have created a new array and combined the 'alphabet' and 'numbers'.//
//thats it this is destructuring, very resumed//
