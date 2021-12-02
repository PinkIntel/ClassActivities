// create an object literal
const dog = {
    name: "Jackson",
    age: 15, 
    hobbies: ["Sleeping", "getting belly rubs"]
}

// include a method that uses "this"
const person = {
    name: "Cameron",
    birthOrder: "baby",
    greet() {
        return `Good morning ${this.name}`;
    }
}

console.log(person.greet());

// create a function in the global scope that prints "this"

function logThis() {
    console.log("this is: ", this);
  }

  logThis() ///you gotta call the function for the function to actually work in the console log!!!