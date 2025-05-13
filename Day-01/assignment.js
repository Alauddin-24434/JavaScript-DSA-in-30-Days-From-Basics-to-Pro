// Write a function to calculate sum of numbers

function sum(numbers) {
  return  numbers.reduce((acc, curValue)=> acc+ curValue,0)
};

// console.log(sum([12,4,8])) ; // output 24

// Write a program to check even/odd

function isIvenOdd(num){
    if(num% 2 ===0){
        console.log("Even");
    } else{
        console.log("Odd")
    }
}

// isIvenOdd(1);

//  Write a program that prints numbers from 1 to 20 using a for loop

function printNum(){
    for(let i =1; i<=20; i++){
    console.log(i)
    }
}
// printNum()

// Write a function to check if a number is positive, negative, or zero

function chekNumbers(num) {
    if(num>0){
        console.log("Positive");
    }else if( num<0){
        console.log("Negitive")
    }else{
        console.log("Zero")
    }
}

// chekNumbers(-7)



//  Print all even numbers from 1 to 50

function allEven(numbers) {
    for(let i = 1; i<= numbers; i++){
        if(i %2 ===0){
            console.log(i)
        }
    }
}

// allEven(50)


// Print all even numbers from 1 to n differnt way

function allEven2(arr){
return arr.filter((num)=> num %2===0);
//  console.log(evenNumbers)
}



const result = (allEven2([1,2,3,4,5,6,7,8,9,10])) // [2,4,6,8,10]

// result.push(12,24);

// console.log(result) // [2,4,6,8,10,12]


//  js call back function
function callBackFunction(){
    console.log("This is a call back function")

}
function callBackFunction2(callback){
    console.log("This is a call back function 2")
    callback();
}
// callBackFunction2(callBackFunction)
// what is call back function? give simple easy word anser?
// A callback function is a function that is passed as an argument to another function and is executed after the completion of that function. It allows for asynchronous programming and helps in handling tasks that take time to complete, such as API calls or file reading.

// ----------calback function exapmle fetch api----------
function fetchData(url, callback) {
    // Simulating API delay
    setTimeout(() => {
        let data;

        if (url === "users") {
            data = [
                { id: 1, name: "Alice" },
                { id: 2, name: "Bob" },
            ];
        } else if (url === "posts") {
            data = [
                { id: 101, title: "Post One" },
                { id: 102, title: "Post Two" },
            ];
        } else {
            data = { error: "No data found for this endpoint" };
        }

        callback(data);
    }, 1500);
}

// ✅ Usage
fetchData("./fakedata.js/fakeData", function (data) {
    console.log("User Data:", data);
});

