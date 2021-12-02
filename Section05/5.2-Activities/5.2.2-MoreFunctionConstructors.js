/*
	5.2.2-Evr-Functionconstructors.js
	=========================
*/

// create a function constructor that works as a template for an Animal 
// include properties for name, type, weight, etc.

function Animal(name, type, color, weight, age, personality){
    this.name = name;
    this.type = type;
    this.color = color;
    this.weight = weight;
    this.age = age;
    this.personality = personality;
    
    this.bio = `This ${this.personality} ${this.color} ${this.type} is ${this.age} years old, weighs ${this.weight} pounds, and is called ${this.name}.`
  }
  
  // create a new instance of an Animal
  
  const winnyThePhoo = new Animal("Winny The Phoo", "Bear", "purple", 30, 25, "bubbly");
  
  const garfield = new Animal("Garfield", "Cat", "orange", 130, 15, "sassy");
  
  
  // add methods to the Animal prototype
  
  Animal.prototype.greet = function() {
    return `Hi, I'm a ${this.type}!`;
  };
  
  
  
  // attach a method directly to the Animal instance that "overwrites" a prototype method
  
  winnyThePhoo.greet = function() {
    return `Please excuse me, I can't talk to you now, Bye!`;
  };
  
  
  console.log(winnyThePhoo);
  
  console.log(winnyThePhoo.greet())
  
  console.log(garfield);
  
  console.log(garfield.greet())