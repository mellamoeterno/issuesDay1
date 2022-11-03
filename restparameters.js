//each of these values between parentheses that we are passing in 
//is the price of an item

function checkout(...items){
    let total = 0;

    for(let i in items){
        total += items[i];
    }
    return total;
}
console.log("the total is: $"+checkout(10, 20, 30));

//The "three dots" (...) rest parameter syntax allows a function to accept an 
//indefinite number of arguments as an array, providing a way 
//to represent


//rest parameters was introduced to reduce 
//the boilerplate code that was induced by the arguments


//syntax:
//
//    function f(a, b, ...theArgs) {
//     (…)
//    }