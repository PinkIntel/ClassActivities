unction arrayOfNumbers(end = 100) {
    const nums = [];
    for (let i = 1; i <= end; i++) {
      nums.push(i);
    }
    return nums;
  }
  
  // Problem 1 - Using Reduce, sum the number from 1 to 200
  // Hint: Use the arrayOfNumbers() function to generate an array
  
  // Solution 1: (there is more than one solution to this problem)
  const numsToSum = arrayOfNumbers(200);
  console.log(numsToSum);
  const theSum = numsToSum.reduce((acc, num) => acc += num, 0);
  console.log(theSum);