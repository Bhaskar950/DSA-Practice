/**
 * Finds two numbers in the array that add up to the target sum.
 * @param {number[]} arr - The input array.
 * @param {number} target - The target sum.
 * @returns {number[] | null} - An array with indices of the two numbers or null if not found.
 */
function twoSum(arr, target) {
  const numIndex = {};
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (numIndex.hasOwnProperty(complement)) {
      return [numIndex[complement], i];
    }
    numIndex[arr[i]] = i;
  }
  return null;
}

// Example
const array15 = [2, 7, 11, 15];
const targetSum = 9;
console.log(twoSum(array15, targetSum)); // Output: [0, 1]
