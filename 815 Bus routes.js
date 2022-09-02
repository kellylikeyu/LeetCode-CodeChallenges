// You are given an array routes representing bus routes where routes[i] is a bus route that the ith bus repeats forever.

// For example, if routes[0] = [1, 5, 7], this means that the 0th bus travels in the sequence 1 -> 5 -> 7 -> 1 -> 5 -> 7 -> 1 -> ... forever.
// You will start at the bus stop source (You are not on any bus initially), and you want to go to the bus stop target. You can travel between bus stops by buses only.

// Return the least number of buses you must take to travel from source to target. Return -1 if it is not possible.

// Example 1:
// Input: routes = [[1,2,7],[3,6,7]], source = 1, target = 6
// Output: 2
// Explanation: The best strategy is take the first bus to the bus stop 7, then take the second bus to the bus stop 6.

var numBusesToDestination = function (routes, source, target) {
  let stopConnection = {};
  for (let i = 0; i < routes.length; i++) {
    for (let j = 0; j < routes[i].length; j++) {
      if (!stopConnection[routes[i][j]]) {
        stopConnection[routes[i][j]] = [i];
      } else {
        stopConnection[routes[i][j]].push(i);
      }
    }
  }
  if (source === target) {
    return 0;
  }
  let count = 0;
  let visited = new Set();
  let queue = [source];
  while (queue.length > 0) {
    const size = queue.length; // queue length will change when adding next stop
    count++;
    for (let i = 0; i < size; i++) {
      const curBusStop = queue.shift();
      const buses = stopConnection[curBusStop];
      for (let bus of buses) {
        if (visited.has(bus)) {
          continue;
        }
        visited.add(bus);
        for (let j = 0; j < routes[bus].length; j++) {
          let nextBusStop = routes[bus][j];
          if (nextBusStop === target) {
            return count;
          }
          queue.push(nextBusStop);
        }
      }
    }
  }
  return -1;
};
