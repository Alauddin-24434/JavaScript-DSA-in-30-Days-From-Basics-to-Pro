const twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const currentSum = numbers[left] + numbers[right];

        if (currentSum === target) {
            // Return 1-indexed indices as required by the problem
            return [left + 1, right + 1];
        } else if (currentSum < target) {
            left++; // Need a larger sum, move left pointer to increase value
        } else {
            right--; // Need a smaller sum, move right pointer to decrease value
        }
    }

    // This line should technically not be reached given the problem constraints
    // that there is exactly one solution.
    return [];
};

// Test Cases
console.log(`Two Sum [2,7,11,15], target=9: ${twoSum([2,7,11,15], 9)}`);     // Expected: [1,2]
console.log(`Two Sum [2,3,4], target=6: ${twoSum([2,3,4], 6)}`);         // Expected: [1,3]
console.log(`Two Sum [-1,0], target=-1: ${twoSum([-1,0], -1)}`);        // Expected: [1,2]
console.log(`Two Sum [0,0,3,4], target=0: ${twoSum([0,0,3,4], 0)}`);      // Expected: [1,2]
console.log(`Two Sum [5,25,75], target=100: ${twoSum([5,25,75], 100)}`);  // Expected: [1,3]