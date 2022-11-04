//this is the same thing as before but with less than or equal to
//

console.log(5 <= 3);
// expected output: false

console.log(3 <= 3);
// expected output: true

// Compare bigint to number (note: bigint is not supported in all browsers)
console.log(3n <= 5);
// expected output: true

console.log('aa' <= 'ab');
// expected output: true

//The less than or equal operator (<=) returns true if the left 
//operand is less than or equal to the right operand, and false 
//otherwise.