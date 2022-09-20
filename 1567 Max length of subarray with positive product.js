// Given an array of integers nums, find the maximum length of a subarray where the product of all its elements is positive.
// A subarray of an array is a consecutive sequence of zero or more values taken out of that array.
// Return the maximum length of a subarray with positive product.
// Input: nums = [-1,-2,-3,0,1]
// Output: 2
// Explanation: The longest subarray with positive product is [-1,-2] or [-2,-3].

var getMaxLen = function(nums) {
    let subarrays = [];
    let start=0; 
    let end = 0;
    while(end<nums.length) {
        if (nums[end]===0) {
            let subarray = nums.slice(start,end);
            subarrays.push(subarray);
            start = end +1;
        }
        end ++;
    }
    subarrays.push(nums.slice(start,end))
    console.log(subarrays)
    let max = 0;
    for (let subarray of subarrays) {
        let product = 1;
        for (let num of subarray) {
            product *= num;            
            }
        if (product >0) {
            max = Math.max(max, subarray.length);
            }
        else {
            let i=0;
            let j=subarray.length-1;
            while (subarray[i] > 0) {
                i++;
            }
            while (subarray[j] > 0) {
                j--;
            }
            console.log(i,j)
            max = Math.max(max,j,subarray.length-1-i);
            }
        }
    return max;
    }
