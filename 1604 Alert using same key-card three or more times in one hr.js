// LeetCode company workers use key-cards to unlock office doors. Each time a worker uses their key-card, the security system saves the worker's name and the time when it was used. The system emits an alert if any worker uses the key-card three or more times in a one-hour period.

// You are given a list of strings keyName and keyTime where [keyName[i], keyTime[i]] corresponds to a person's name and the time when their key-card was used in a single day.

// Access times are given in the 24-hour time format "HH:MM", such as "23:51" and "09:49".

// Return a list of unique worker names who received an alert for frequent keycard use. Sort the names in ascending order alphabetically.

// Notice that "10:00" - "11:00" is considered to be within a one-hour period, while "22:51" - "23:52" is not considered to be within a one-hour period.

// Example 1:

// Input: keyName = ["daniel","daniel","daniel","luis","luis","luis","luis"], keyTime = ["10:00","10:40","11:00","09:00","11:00","13:00","15:00"]
// Output: ["daniel"]
// Explanation: "daniel" used the keycard 3 times in a one-hour period ("10:00","10:40", "11:00").

var alertNames = function(keyName, keyTime) {
    let nameTime={};
    for (let i=0; i<keyName.length; i++) {
        if (nameTime[keyName[i]]) {
            nameTime[keyName[i]].push(keyTime[i]);
        }
        else {
            nameTime[keyName[i]] = [keyTime[i]];
        }
    }
    let result=[]
    for (let key of Object.keys(nameTime)) {
        let times = nameTime[key].map(value=> {
           return parseInt(value.split(":")[0]) *60 + parseInt(value.split(":")[1])
        }).sort((a,b)=> a-b); 
        for (let j=0; j<times.length-2; j++) {
        if (times[j+2]-times[j] <=60 && !result.includes(key)) {
            result.push(key)
                }
            }
        }
    return result.sort();
};
