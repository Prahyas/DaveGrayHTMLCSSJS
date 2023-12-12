var Animal = /** @class */ (function () {
    function Animal(name, legs) {
        this.name = name;
        this.legs = legs;
        (this.name = name), (this.legs = legs);
    }
    Animal.prototype.getLegs = function () {
        return this.legs;
    };
    return Animal;
}());
var doggy = new Animal("Super", 4);
console.log(doggy.name);
// type One = string;
// type Two = string | number;
// let a: One = "Hello";
// let b = a as Two;
// console.log(b);
// let data: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const total = (...data: number[]): number => {
//   return data.reduce((acc, curr) => acc + curr);
// };
// console.log(total(...data));
// let a: number = 2;
// let b: number = 3;
// const sum = (a: number, b: number): number => {
//   return a + b;
// };
// console.log(sum(a, b));
// type Person = {
//   name?: string;
//   age: number;
//   hobbies: (string | number)[];
// };
// let person1: Person = {
//   name: "Prayash",
//   age: 26,
//   hobbies: ["a", "b", 1, 2],
// };
// let person2: Person = {
//   name: "Ashmita",
//   age: 25,
//   hobbies: ["c", "d", 3, 4],
// };
// const displayName = (personDetail: Person) => {
//   console.log(
//     `My name is ${personDetail.name?.toUpperCase()} and I am ${
//       personDetail.age
//     } years old.`
//   );
// };
// displayName(person1);
