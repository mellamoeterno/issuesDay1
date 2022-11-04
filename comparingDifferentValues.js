//comparing different values in javascript is basic as 
//the compareEquality(a ,b)
//a is checking the value of b
//and theres many uses for this
//unfortunately people cant just teach it that way
//and you have to figure out for yourself :DDDDDDDDD

function compareEquality(a ,b) {
    if (a === b) { 
        return "Equal";
    }
    return "Not Equal";
}

compareEquality(10, "10");

console.log = (compareEquality("10", "10"));

//output will be "equal" or "not equal" if changed the console 
//log function elements
//"console.log = (compareEquality("10", "10"));"
//
//in this one the output will be equal
