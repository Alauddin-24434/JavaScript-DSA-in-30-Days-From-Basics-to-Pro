
// Reverse an array

function reverseArry(arr){
    return arr.reverse();
}

//  reverse array differnt way loop
// JavaScript
function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
    return arr;
}

let myArray = [1, 2, 3, 4, 5];
let reversedArray = reverseArray(myArray);
console.log(reversedArray);



console.log(reverseArry([1,2,3,4,5]));

// max num
function maxNum(num) {
    return Math.max(...num)
}

console.log(maxNum([1,4,6,4,8]));
// min num
function minNum(num) {
    return Math.min(...num)
}


console.log(minNum([1,4,6,4,8]));


