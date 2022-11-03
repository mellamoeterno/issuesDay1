//syntax 
//the spread syntax enumerates the properties of an object and adds 
//the key-value pairs to the object being created.
//ex:

function sum(x, y ,z) {
    return x + y + z;
}

const numbers = [1,2,3];

console.log(sum(...numbers));
// output: 6

console.log(sum.apply(null, numbers));
// output: 6


//still don't understand this one. Understand it better with next projects

