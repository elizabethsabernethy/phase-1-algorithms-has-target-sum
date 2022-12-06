function hasTargetSum(array, target) {
  for(let i=0; i<array.length; i++){
    for (let j = i + 1; j < array.length; j++){
        if((array[i] + array[j]) === target){
          return true;
        }
    }
  }
  return false;
}

/* 
  Nested for statements ---> O(n^2)
*/

/* 
  PSUEDOCODE
  FOR each number in an array (num1), add it to each subsequent number (num2), testing
  whether num1 + num2 = target. IF num1 + num2 = target, return true, otherwise
  keep testing. Need to have test run again if first number doesn't satisfy objective,
  and so on for each following number until two numbers equal total, or no numbers equal total.
*/

/*
  Make a function that takes an array of numbers and adds two of them together to get a total.
  Then test this total against the target number provided as an argument. 
  [2, 5, 3, 4], target -> 9 .... test 2+5 = false, 2+3 = false, 2+4 = false, 2 is not one of the numbers.
  test 5+3 (not 5+2 because 5+2 = 2+5 which we already tested)... false, 5+4 = true, no more tests!
  How to test numbers without testing same number against itself? i.e. not 2+2, or 5+5, etc..
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
 
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2,3,1], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2,4,5], 7));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([4,5,2], 7));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5, 10, 3], 9));
}

module.exports = hasTargetSum;
