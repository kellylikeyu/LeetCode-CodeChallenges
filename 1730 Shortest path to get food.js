// You are starving and you want to eat food as quickly as possible. You want to find the shortest path to arrive at any food cell.

// You are given an m x n character matrix, grid, of these different types of cells:

// '*' is your location. There is exactly one '*' cell.
// '#' is a food cell. There may be multiple food cells.
// 'O' is free space, and you can travel through these cells.
// 'X' is an obstacle, and you cannot travel through these cells.
// You can travel to any adjacent cell north, east, south, or west of your current location if there is not an obstacle.

// Return the length of the shortest path for you to reach any food cell. If there is no path for you to reach food, return -1.

// Input: grid = [["X","X","X","X","X","X"],["X","*","O","O","O","X"],["X","O","O","#","O","X"],["X","X","X","X","X","X"]]
// Output: 3

var getFood = function(grid) {
    let minDistance = 0;
    let queue = [];
    let visited = grid.map(v => v.map(e => false));
    
    // Find starting position for our queue
    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[0].length; j++) {
            if (grid[i][j] === "*") {
                queue.push([i,j]);
                visited[i][j] = true;
                break;
            }
        }
    }
    while(queue.length>0) {
        const size = queue.length;  // queue length will change when adding new positions
        for (let i=0; i<size; i++) {
            const [x,y] = queue.shift();
            if (grid[x][y] === "#") {
                return minDistance;
            }
            
            if (x>0 && (grid[x-1][y] === "O" || grid[x-1][y] === "#") && visited[x-1][y] === false) {
                visited[x-1][y] = true;
                queue.push([x-1,y]);
            }
            if (x<grid.length-1 && (grid[x+1][y] === "O" || grid[x+1][y] === "#") && visited[x+1][y] === false) {
                visited[x+1][y] = true;
                queue.push([x+1,y]);
            }
            if (y>0 && (grid[x][y-1] === "O" || grid[x][y-1] === "#") && visited[x][y-1] === false) {
                visited[x][y-1] = true;
                queue.push([x,y-1]);
            }
            if (y<grid[0].length-1 && (grid[x][y+1] === "O" || grid[x][y+1] === "#") && visited[x][y+1] === false) {
                visited[x][y+1] = true;
                queue.push([x,y+1]);
            }
        } 
        minDistance ++;
    }
    return -1;
};
