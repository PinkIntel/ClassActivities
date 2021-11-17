// comparing and passing by reference and value
// ? determine whether each log will print true or false

console.log(4 === 4);
console.log("Hello, world" === "Hello, world");

let x = false;
let y = x;
console.log(x === y);//this comes out as true, because x is assigned "false"

x = !x; //the !x means "not x"
console.log(x === y); //it's false

console.log([1, 2, "c"] === [1, 2, "c"]); //these objects are not equal to each other, because they're referencing different addresses in memory. References to the arrays, but not the values. think 2 different mailboxes.


console.log({} === {}); //this is false because we're comparing two objects, and they compare by reference but not by data.

y = { id: 1 };
x = y;
console.log(x === y);
//this is true. The values are assigned to y to x. 

y.id += 1; //we're incrementing the value here to 2. (refer to line 19).
console.log(x.id === y.id); //this is true because it's referencing the same object we have changed.

