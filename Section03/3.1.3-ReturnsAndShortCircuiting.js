// ? what does the function below return?
function myNumberFunction() {
  let num = 2 ** 2;
  num = num + 3;
  num = num % 4;
  num = num * 14;
  return console.log(num);
}

// change the function above to return a value
myNumberFunction();

// Short Circuiting
// ! the console.log will not print
function shortCircuitFunction() {

  console.log(
    "This will never print because it is after the return statement."
  );
}

// ? will the following function short circuit?
let height = 50;
function checkCircusRides() {
  if (height < 48) {
    console.log("Take a ride on the carousel!");
  }
  if (height < 60) {
    return "Zap! - Short Circuited!";
    console.log("Try the bumper cars!");
  }
  console.log("Enjoy the roller coaster!");
}

// change the function above to use short circuiting
let height = 50;
function checkCircusRides() {
  if (height < 48) {
    console.log("Take a ride on the carousel!");
  }
  if (height < 60) {
    console.log("Try the bumper cars!");
  }
  console.log("Enjoy the roller coaster!");
}

function addMore(parm1, parm2, parm3 = 5) {
  return parm1 + parm2 + parm3
};

addMore(2, 3); //2 and 3 are just random numbers Johan picked for parm1 and parm2. parm 3 was already assigned.