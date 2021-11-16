// Named Parameters


// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function functionWithTwoParams(x,y) {
console.log(x);
console.log(y);
return x + y;

}

// invoke the function and pass in two numbers
functionWithTwoParams(5, 8);

// invoke the function and pass in more than two numbers
functionWithTwoParams(1, 2, 3, 4);

// invoke the function and pass in only one number
functionWithTwoParams(9);

// change the function to set default values for the parameters
function functionWithTwoParams(x = 1, y = 2) {
    console.log(x);
    console.log(y);
    return x + y;
} //it's gonna show as 3.

// again, invoke the function and pass in only one number
functionWithTwoParams(9); //it's gonna show as 11.


// Rest Operator

// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function functionWithTwoParams(x, y, ...z) {
    console.log(x);
    console.log(y);
    console.log("this is the rest operator", z);
    return x + y;

    //the answer is 3. X is 1, y is 2, z is 3.

// again, invoke the function and pass in more than two numbers
