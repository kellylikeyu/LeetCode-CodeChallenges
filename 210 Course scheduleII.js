// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.
// Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
// Output: [0,2,1,3]

var findOrder = function(numCourses, prerequisites) {
    let courseLevel = new Array(numCourses).fill(0);
    let courseMap = {};
    let queue = [];
    for (let [second,first] of prerequisites) {
        
        if (courseMap[first]) {
            courseMap[first].push(second);
        }
        else {
            courseMap[first] = [second];
        }
        courseLevel[second] ++;
    }
    
    for (let i = 0; i < numCourses; i++) {
    if (courseLevel[i] === 0) queue.push(i);
  }
    let order = [];
    while(queue.length>0) {
        const pre = queue.shift();
        if (courseMap[pre]) {
            for (let v of courseMap[pre]) {
                courseLevel[v] --;
                if (courseLevel[v] === 0) {
                    queue.push(v)
                }
            }
        }
        order.push(pre);
    }
    return numCourses === order.length? order : [];
};
