// You are given a 0-indexed binary string s which represents the types of buildings along a street where:

// s[i] = '0' denotes that the ith building is an office and
// s[i] = '1' denotes that the ith building is a restaurant.
// As a city official, you would like to select 3 buildings for random inspection. However, to ensure variety, no two consecutive buildings out of the selected buildings can be of the same type.

// For example, given s = "001101", we cannot select the 1st, 3rd, and 5th buildings as that would form "011" which is not allowed due to having two consecutive buildings of the same type.
// Return the number of valid ways to select 3 buildings.

// Input: s = "001101"
// Output: 6  
//         0  0  1  1  0  1
// 0       1  2
// 01            2  4
// 010                 4
// 1             1  2
// 10                  2
// 101                    2

var numberOfWays = function(s) {
    let count0 = 0;
    let count1 = 0;
    let count01 = 0;
    let count10 = 0;
    let count = 0;
    for (let num of s) {
        if (num === "0") {
            count0 ++;
            count10 += count1;
            count += count01;
        }
        else {
            count1 ++;
            count01 += count0;
            count += count10;
        }
    }
    return count;
};

