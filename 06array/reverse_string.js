//string "Bhaskar is developer"
//reverse string "repoleved si raksahB"

function reverse(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "something wrong";
  }
  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  console.log(backwards);
  return backwards.join("");
}

console.log(reverse("Bhaskar"));

//reverse string by javascript inbuild method
function rever(str) {
  return str.split("").reverse().join("");
}

console.log(rever("amrutha"));

//ES6 reverse string my inbuild methods

const revers = (str) => str.split("").reverse().join("");

console.log(revers("damu"));
