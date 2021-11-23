// select the root node
document.querySelector("html");



// select the last child of the root node
document.querySelector("html").lastElementChild;


// select all the children of the body element
document.querySelector("").children;


// select the next sibling of the h2 node

document.querySelector("h2").nextElementSibling;

// select the parent element of the h1 node
document.querySelector("header").parentElement;


//here's another way to approach these questions

/*
  4.1.2-NodeRelationships.js
  ===========================
*/

// // select the root node
// const root = document.querySelector("html");
// console.log("Root Node ... ", root);

// // select the last child of the root node
// const lastRootChild = root.lastElementChild;
// console.log("Last Child of root ...", lastRootChild);

// // select all the children of the body element
// const bodyChildren = document.querySelector("body").children;
// console.log("Children of Body ...", bodyChildren);

// // select the next sibling of the h2 node
// const h2NextSibling = document.querySelector("h2").nextElementSibling;
// console.log("Next Sibling of H2 ...", h2NextSibling);

// // select the parent element of the h1 node
// const h1Parent = document.querySelector("h1").parentElement;

// console.log("Parent of H1 ...", h1Parent);