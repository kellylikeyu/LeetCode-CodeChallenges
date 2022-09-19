// You are given a 0-indexed integer array nums, where nums[i] is a digit between 0 and 9 (inclusive).

// The triangular sum of nums is the value of the only element present in nums after the following process terminates:

// Let nums comprise of n elements. If n == 1, end the process. Otherwise, create a new 0-indexed integer array newNums of length n - 1.
// For each index i, where 0 <= i < n - 1, assign the value of newNums[i] as (nums[i] + nums[i+1]) % 10, where % denotes modulo operator.
// Replace the array nums with newNums.
// Repeat the entire process starting from step 1.

//input = [1,2,3,4,5]
//          3,5,7,9
//           8,2,6
//            0,8
//output =     8

var triangularSum = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    
    for (let i=0; i<nums.length-1; i++) {
        nums[i] = (nums[i]+ nums[i+1]) % 10;  
    } 
    nums.pop();
    return triangularSum(nums);              
};

