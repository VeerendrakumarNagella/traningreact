// find the first unique charecter position in a given string ?
const str = "racecar";

// way 1
for (const char of str) {
  const indexPosition = str.indexOf(char);
  if (indexPosition === str.lastIndexOf(char)) {
    console.log(indexPosition, char);
    break;
  }
}

// way 2
const arr = str.split("");
for (const char of str) {
  const filItems = arr.filter((item) => item === char);
  if (filItems.length === 1) {
    console.log(str.indexOf(char), char);
    break;
  }
}

const numArr = [0, 1, 0, 3, 12];

// way 1
const val = 0;
numArr.forEach((element, index) => {
  if (element === val) {
    numArr.splice(index, 1);
    numArr.push(val);
  }
});

console.log(numArr);

// way 2
const filArr = numArr.filter((val) => val);
filArr.push(...new Array(numArr.length - filArr.length).fill(0));
console.log(filArr);
