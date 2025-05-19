//  for in loop

const person = {
  name: "alauddin",
  age: 25,
  address: { city: "Barisal", village: "Mongolhata" },
};

for (let key in person) {
  // console.log(key)
}

const colors = ["red", "green", "blue"];
for (let color of colors) {
  // console.log(color);
}
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
  // console.log(number);
});

//  -------19 may 2025--------------------

// for of loop

const letters = ["a", "b", "c"];

for (let letter of letters) {
  // console.log(letter);
}

const word = "aeiou";

for (let char of word) {
  // console.log(char);
}


// for in loop 


for (let key in person){
//  console.log(key);
 console.log(person[key])
}