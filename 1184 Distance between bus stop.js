// A bus has n stops numbered from 0 to n - 1 that form a circle. We know the distance between all pairs of neighboring stops where distance[i] is the distance between the stops number i and (i + 1) % n.

// The bus goes along both directions i.e. clockwise and counterclockwise.

// Return the shortest distance between the given start and destination stops.

// Example 1:
// Input: distance = [1,2,3,4], start = 0, destination = 1
// Output: 1
// Explanation: Distance between 0 and 1 is 1 or 9, minimum is 1.

var distanceBetweenBusStops = function(distance, start, destination) {
    let route1 = 0;
    let route2 = 0;
    const startSite = Math.min(start, destination);
    const endSite = Math.max(start,destination);
    for (let i=startSite; i<endSite; i++) {
        route1 += distance[i];
    }
    for (let i=endSite; i<distance.length; i++) {
        console.log("2", distance[i])
        route2 += distance[i];
    }
    for (let i=0; i<startSite; i++) {
        route2 += distance[i];
    }
    return Math.min(route1, route2);
};
