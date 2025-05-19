//  filter even number

const numbers = [1, 2, 3, 4, 5, 6, 7];

function evenNumbers(arr) {
  return (result = arr.filter((num) => num % 2 === 0));
}

console.log(evenNumbers(numbers));

// sum useing reduce

function sum(numbers) {
return numbers.reduce((acc, carValue) => {
   return acc + carValue;
  }, 0);

}
console.log(sum(numbers));

// Double each number using map

const doubledNumbers= numbers.map(num=> num*2);

console.log(doubledNumbers)