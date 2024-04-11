var myName = "Prayash";
let age = 26;
const phoneNumber = 123456;
let alive = true;

console.log(myName, age, phoneNumber, alive);

if (alive) {
  console.log("I am alive");
} else {
  console.log("I am dead");
}

switch (age) {
  case 25:
    console.log("I am 25");
    break;
  case 26:
    console.log("I am 26");
    break;
  case 27:
    console.log("I am 27");
    break;
  default:
    console.log("Just printed some age");
}

for (let index = 0; index <= 5; index++) {
  console.log(index);
}

// while (count <= 5) {
//     console.log("count is", count);
//     count++;
// }

// let count = 1;
// do {
//   console.log("the count is", count);
//   count++;
// } while (count <= 5);

let a = "This is global variable";

const findSum = () => {
  let b = "This is local variable";
  console.log(a);
  console.log(b);
};

findSum();

const displayName = function () {
  return "Prayash Shrestha";
};

console.log(displayName());

const outerFunction = () => {
  let count = 0;
  return (innerFunction = () => {
    return count++;
  });
};

const countWatch = outerFunction();

console.log(countWatch());
console.log(countWatch());
console.log(countWatch());

const countWatch2 = outerFunction();
console.log(countWatch2());
console.log(countWatch2());
console.log(countWatch2());

let fruits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

fruits.forEach((item) => console.log(item));
const modifiedArr = fruits.map((item) => item + 1);
const sum = fruits.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(sum);

let obj = {
  name: "Prayash",
  age: 26,
  contact: 123456789,
};

for (let key in obj) {
  console.log(`${key} : ${obj[key]}`);
}

const boxModel = document.querySelector(".boxmodel");
boxModel.innerText = "changed from JS";
boxModel.addEventListener("click", () => {
  alert("I clicked this box model");
});

const fetchData = (callback) => {
  setTimeout(() => {
    let result = "data fetched";
    callback(result);
  }, 2000);
};

const callback = (result) => {
  console.log(result);
};

fetchData(callback);

const promiseExample = new Promise((res, rej) => {
  let error = true;
  if (!error) {
    let result = "data fetched from promise";
    res(result);
  } else {
    rej("Error Occoured");
  }
});

promiseExample
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

let getData = [];

const fetchDataAsync = async () => {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!result.ok) {
      throw new Error("Data cannot be fetched");
    }
    getData = await result.json();
    console.log("getData", getData);
  } catch (error) {
    console.log("errorrrrrr", error);
  }
};

fetchDataAsync();

let names = ["a", "b", "c", "d", "e"];

const [first, second, ...rest] = names;

console.log(first);
console.log(second);
console.log(rest);

const obj1 = {
  a: 1,
  b: {
    c: 1,
  },
};

const arr1 = ["a", ["b"]];

const shallowObjCopy = { ...obj1 };
console.log(shallowObjCopy);

const deepCopyObj = JSON.parse(JSON.stringify(obj1));
console.log(deepCopyObj);

const shaCopyArr = [...arr1];
console.log(shaCopyArr);

const deepCopyArr = JSON.parse(JSON.stringify(arr1));
console.log(deepCopyArr);

const outer = document.querySelector(".outer");
const middle = document.querySelector(".middle");
const inner = document.querySelector(".inner");
const button = document.querySelector(".button");

const alertFunction = (e, tag) => {
  alert(`${tag} : ${e.target.textContent}`);
};

outer.addEventListener("click", (e) => alertFunction(e, "outer"));