// Problem 1 - filter the to-dos for incomplete tasks
// Solution 1:
const incompleteTasks = data.filter(task => task.completed === false);

// to check the new incompleteTasks, print it out
// console.log(incompleteTasks);

// Problem 2 - filter for user 6's tasks
// Solution 2:
const user6tasks = data.filter(todo => todo.userId === 6);

//to check the new user6tasks, print it out
//console.log(user6tasks);

// Problem 3 - filter for tasks with a title less than 24 characters long
// Solution 3:
const shortTitles = data.filter(task => task.title.length < 24);

//to check the new user6tasks, print it out
//console.log(shortTitles);