// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// bad solution. O(n^2) and time limit exceeded
function containsDuplicate(nums) {
    for (let i = 0; i < nums.length; i++) {
        const firstElement = nums[i];

        for (let j = i + 1; j < nums.length; j++) {
            const secondElement = nums[j];
            if (firstElement == secondElement)
                return true;
        }
    }

    return false;
};

// storing data into a object, we can always check if we have a property == the element of the array
function containsDuplicate2(nums) {
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = true   
        } else {
            return true;
        }
    }

    return false;
};

console.log(containsDuplicate2([1,2,3,4]))