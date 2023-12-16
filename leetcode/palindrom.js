function isPalindrome(x) {
  let strX = x.toString();

  return strX == strX.split("").reverse().join("");
}

let x = 121;

console.log(isPalindrome(x));

//bruteForce approach

function isPolindrome1(x) {
  let strX = x.toString();

  let left = 0;
  let right = strX.length - 1;
  while (left < right) {
    if (strX[left] !== strX[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(isPolindrome1(123));
