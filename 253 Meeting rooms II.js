// Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.
// Example 1:
// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: 2

// my strategy is to update the meeting ends time if a new meeting can be hold in the same room, add a new meeting ends time if a meeting cannot be hold in the same room
// return the number of combined meetings.

var minMeetingRooms = function(intervals) {
    const sorted = intervals.sort((a,b)=> a[0]-b[0]);
    let roomsEnd = [sorted[0][1]];
    for (let i=1; i<intervals.length; i++) {
        let earlyStart = Math.min(...roomsEnd);
        if(intervals[i][0] < earlyStart) {
            roomsEnd.push(intervals[i][1]);
        }
        else {
            roomsEnd[roomsEnd.indexOf(earlyStart)] = intervals[i][1]
        }
    }
    return roomsEnd.length;
};
