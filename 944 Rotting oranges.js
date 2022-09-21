// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

//  Input: grid = [[2,1,1],[1,1,0],[0,1,1]]   Output: 4
//  Input: grid = [[2,1,1],[0,1,1],[1,0,1]]   Output: -1

//BFS
var orangesRotting = function(grid) {
    let queue = [];
    let minute = 0;
    let fresh = 0;
    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[0].length; j++) { 
              if (grid[i][j] === 1) {
                fresh ++;
            }
              else if (grid[i][j] === 2) {
                queue.push([i,j]);
          } 
       }
    }
    while (queue.length >0) {
        const size = queue.length;  // queue length will change when adding new pairs
        for (let i=0; i<size; i++) {
            const [x,y] = queue.shift();
            if (x>0 && grid[x-1][y] ===1) {
                fresh --;
                grid[x-1][y] = 2;
                queue.push([x-1,y]);
            }
            if (x<grid.length-1 && grid[x+1][y] ===1) {
                fresh --;
                grid[x+1][y] = 2;
                queue.push([x+1,y]);
            }
            if (y>0 && grid[x][y-1] ===1) {
                fresh --;
                grid[x][y-1] = 2;
                queue.push([x,y-1]);
            }
            if (y<grid[0].length-1 && grid[x][y+1] ===1) {
                fresh --;
                grid[x][y+1] = 2;
                queue.push([x,y+1]);
            }
        }
        if (queue.length > 0) minute ++;
    }
    return fresh === 0? minute : -1;
};
