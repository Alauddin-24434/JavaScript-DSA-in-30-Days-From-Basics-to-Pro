// Count vowels in a string

function countVowels(str){
    const vowels= 'aeiou';
    let count=0;

    for( let car of str.toLowerCase()){
        if(vowels.includes(car)){
            count ++;
            console.log(car)
            
        }
    }
    return count;
}

console.log(countVowels('amma'));

//  is string plaindrome

function isPalindrome(str) {
    const result= str.toLowerCase().split('').reverse().join('');
    return str=== result;
}
console.log(isPalindrome('amma'))