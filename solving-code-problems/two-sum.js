// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// INPUTS: int[] and int
// OUTPUTS: int[]
// rules: every input will have exactly one solution

// O(n^2) solution, has two aligned loops -- > try to fix it later
function solution(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            const firstElement = nums[i];
            const secondElement = nums[j];

            if (firstElement + secondElement == target)
                return [i, j]
        }
    }
}

console.log(solution([1, 2, 3, 4, 5], 5))