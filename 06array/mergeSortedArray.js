//udemy solution

function mergeSortedArray([array1, array2]) {
  const mergeArray = [];
  let first_array = array1[0];
  let second_array = array2[0];
  let i = 1;
  let j = 1;
  // console.log(array1, array2);
  //check input

  if (array1.length == 0) {
    return array2;
  }
  if (array2.length == 0) {
    return array1;
  }
  while (first_array || second_array) {
    if (!second_array || first_array < second_array) {
      mergeArray.push(first_array);
      first_array = array1[i];
      i++;
    } else {
      mergeArray.push(second_array);
      second_array = array2[j];
      j++;
    }
  }
  return mergeArray;
}
// mergeSortedArray([1], [2]);
const val = mergeSortedArray([0, 1, 2, 3], [4, 5, 6]);

console.log(val);

//gpt solution

function mergeSortedArray(array1, array2) {
  const mergeArray = [];
  let i = 0; // Initialize index for array1
  let j = 0; // Initialize index for array2

  while (i < array1.length || j < array2.length) {
    // Check if array1 is exhausted
    if (i === array1.length) {
      mergeArray.push(array2[j]);
      j++;
    }
    // Check if array2 is exhausted
    else if (j === array2.length) {
      mergeArray.push(array1[i]);
      i++;
    }
    // Compare elements of both arrays
    else if (array1[i] < array2[j]) {
      mergeArray.push(array1[i]);
      i++;
    } else {
      mergeArray.push(array2[j]);
      j++;
    }
  }

  return mergeArray;
}

const vals = mergeSortedArray([0, 7, 2, 3], [4, 5, 6]);
console.log(vals);

//practice 1

function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  let i = 0; // Index for array1
  let j = 0; // Index for array2

  while (i < array1.length && j < array2.length) {
    // Compare elements of both arrays
    if (array1[i] < array2[j]) {
      mergedArray.push(array1[i]);
      i++;
    } else {
      mergedArray.push(array2[j]);
      j++;
    }
  }
  // If there are remaining elements in array1, add them to the merged array
  while (i < array1.length) {
    mergedArray.push(array1[i]);
    i++;
  }
  // If there are remaining elements in array2, add them to the merged array
  while (j < array2.length) {
    mergedArray.push(array2[j]);
    j++;
  }
  return mergedArray;
}
// Example usage:
const sortedArray1 = [1, 3, 5, 7];
const sortedArray2 = [2, 4, 6, 8];
const result = mergeSortedArrays(sortedArray1, sortedArray2);

console.log(result); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

//practice 2

function mergeSortArray(array1, array2) {
  const mergedArray = [];
  let i = 0;
  let j = 0;

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      mergedArray.push(array1[i]);
      i++;
    } else mergedArray.push(array2[j]);
    j++;
  }
  while (i < array1.length) {
    mergedArray.push(array1[i]);
    i++;
  }
  while (j < array2.length) {
    mergedArray.push(array2[j]);
    j++;
  }
  return mergedArray;
}

const arr1 = [1, 3, 4, 5, 9];
const arr2 = [2, 6, 7, 8, 9];

console.log(mergeSortedArrays(arr1, arr2));

//practice 3

console.log("this is from practice 3");

function mergeArrays(arr1, arr2) {
  const mergedArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
  }
  return mergedArr;
}
const arr3 = [1, 3, 4, 5];
const v = [2, 6, 7, 8];

console.log(mergeArrays(arr3, v));
