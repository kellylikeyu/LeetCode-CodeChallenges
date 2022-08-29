// Given two integer arrays nums1 and nums2, return the maximum length of a subarray that appears in both arrays.

// Example 1:
// Input: nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
// Output: 3
// Explanation: The repeated subarray with maximum length is [3,2,1].

// Dynamic programming

var findLength = function(nums1, nums2) {
    const n1 = nums1.length;
    const n2 = nums2.length;
    const matrix = new Array(n1+1).fill().map(() => new Array(n2 + 1).fill(0));

    let max = 0;
    
    for (let i=1; i<n1+1; i++) {
        for (let j=1; j<n2+1; j++) {
            if (nums1[i-1] === nums2[j-1]) {
                matrix[i][j] = 1 + matrix[i-1][j-1];
                max = Math.max(max, matrix[i][j]);
            }
        }
    }
    return max;
};
