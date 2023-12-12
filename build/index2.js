const obj1 = {
  myName: "Prayash Shrestha",
  age: 26,
};

const obj2 = {
  myName: "Ashmita Shrestha",
  age: 25,
};

const displayName = function (msg1, msg2) {
  console.log(
    `This is ${this.myName} and I am ${this.age} years old. This is my message: ${msg1} and ${msg2}`
  );
};

const anotherFunction = displayName.bind(obj1, [
  "Hello there!",
  "Hello there!!!",
]);

console.log(anotherFunction());

// const fetchData = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json();
//   console.log(data);
// };

// fetchData();

// let data = [];

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((json) => {
//     data = json;
//     console.log("Data successfully fetched");
//     console.log(data);
//   })
//   .catch((err) => console.error(er));

// const sum = (x, y, displayTotal) => {
//   let total = x + y;
//   displayTotal(total);
//   return total;
// };

// const displayTotal = (total) => {
//   console.log(`The total is ${total}`);
// };

// sum(5, 5, displayTotal);

// const data = [
//   {
//     id: 1,
//     name: "John Doe",
//     age: 25,
//     city: "New York",
//     country: "USA",
//   },
//   {
//     id: 2,
//     name: "Alice Smith",
//     age: 30,
//     city: "London",
//     country: "UK",
//   },
//   {
//     id: 3,
//     name: "Bob Johnson",
//     age: 28,
//     city: "Sydney",
//     country: "Australia",
//   },
//   {
//     id: 4,
//     name: "Eva Martinez",
//     age: 22,
//     city: "Barcelona",
//     country: "Spain",
//   },
//   {
//     id: 5,
//     name: "Ahmed Khan",
//     age: 35,
//     city: "Dubai",
//     country: "UAE",
//   },
// ];

// console.log(data.forEach((x) => console.log(x.name)));

// const filterData = data.filter((x) => {
//   return x.id <= 3;
// });
// console.log(filterData);

// const modifiedData = data.map((x) => {
//   return x.id == 2 ? { ...x, id: x.id + 5 } : x;
// });
// console.log(modifiedData);

// const reducedData = data.reduce((acc, curr) => {
//   return acc + curr.age;
// }, 0);

// console.log(reducedData);

// import playGuitar from "./index2.js";

// console.log(playGuitar);

// const obj = {
//   name: "Prayash",
//   age: 26,
// };

// localStorage.setItem("myDetails", JSON.stringify(obj));
// const newOBJ = localStorage.getItem("myDetails");
// console.log(JSON.parse(newOBJ));

// const box2 = document.querySelector(".box2");
// box2.addEventListener("click", (e) => {
//   console.log(e);
// });

// const obj = {
//   name: "Prayash",
//   age: 26,
//   hobbies: ["lazy1", "lazy2", "lazy3"],
// };

// const jsoned = JSON.stringify(obj);
// console.log(jsoned);
// const nonjsoned = JSON.parse(jsoned);
// console.log(nonjsoned);

// class Pizza {
//   constructor(size, crust) {
//     this.size = size;
//     this.crust = crust;
//   }
//   get pizzaCrust() {
//     return this.crust;
//   }
//   set pizzaCrust(crust) {
//     this.crust = crust;
//   }
//   bake() {
//     console.log(`Baking a ${this.size} ${this.crust} Pizza`);
//   }
// }

// class SpecialityPizza extends Pizza {
//   constructor(size, crust) {
//     super(size, crust);
//     this.month = "December";
//   }
//   specialPizza() {
//     console.log(
//       `This ${this.size} ${this.crust} pizza is only available in ${this.month}`
//     );
//   }
// }

// const specialPizzaObj = new SpecialityPizza("medium", "thin");
// specialPizzaObj.specialPizza();
