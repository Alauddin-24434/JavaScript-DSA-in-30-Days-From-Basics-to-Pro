// Array Methods (map, filter, reduce)

const users = [
  {
    name: "ala",
    age: 25,
    gender: "male",
  },
  {
    name: "tam",
    age: 24,
    gender: "female",
  },
  {
    name: "tan",
    age: 30,
    gender: "male",
  },
    {
    name: "jumur",
    age: 20,
    gender: "female",
  },
];
//map
const map = users?.map((user, index) => {
  console.log(user, index);
});


//filter 

const femaleUsers= users.filter(user=> user?.gender === "female");

console.log(femaleUsers.sort((a,b)=>b.age -a.age))