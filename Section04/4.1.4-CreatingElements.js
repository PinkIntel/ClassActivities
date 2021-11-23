// // create a new unordered list (ul) element
// const newUnorderedList = document.createElement("ul");


// // remove the paragraph element in the nav-bar
// // let paragraphToRemove = document.querySelector("p").secondElementChild;
// // document.querySelector("p").removeChild(paragraphToRemove);



// // add your new ul element to the nav-bar

// document.querySelector("p").appendChild(newUnorderedList);

// // create two new list item (li) elements, and add some text to them
// document.querySelector("li").appendChild(newUnorderedList).add("lemon").add("blueberry");


// // add the li elements to the ul in the nav-bar


// create a new unordered list (ul) element
const unorderedList = document.createElement("ul");

// remove the paragraph element in the nav-bar
let childToRemove = document.querySelector(".nav-bar > p");
childToRemove.remove();

// add your new ul element to the nav-bar
document.querySelector(".nav-bar").appendChild(unorderedList);

// create two new list item (li) elements, and add some text to them
const listItem1 = document.createElement("li");
const listItem2 = document.createElement("li");

listItem1.textContent = "1st new list item";
listItem2.textContent = "2nd new list item";

// add the li elements to the ul in the nav-bar
document.querySelector(".nav-bar > ul").appendChild(listItem1);
document.querySelector(".nav-bar > ul").appendChild(listItem2);