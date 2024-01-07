const array = [10, 20, 30, 40, 50];

const mappedArr = array.map((item) => item + 5);

console.log(mappedArr);

const filteredArr = array.filter((item) => item <= 30);

console.log(filteredArr);

const reducedFromArr = array.reduce((acc, curr) => {
  return acc + curr;
});

console.log(reducedFromArr);
