function hasTargetSum(array, target) {
  for (let i=0; i<array.length; i++){
    let num2 = (target - array[i])
    for (let a=i+1; a<array.length; a++){
      if (array[a] === num2){
      return true
    }
  }
}
return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  given an array of numbers, we want two of them (any two)
  to add up to target. 
  for (let j=0; j<array.length, j++){
    for (let i=0; i<array.length; i++){
    if ([i] + [j] === target){
      return true
    }
  }
    
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
