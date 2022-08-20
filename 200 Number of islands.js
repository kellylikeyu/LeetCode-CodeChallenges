// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
// You may assume all four edges of the grid are all surrounded by water.
// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1

var numIslands = function(grid) {
     let res = 0
    const run = (j, i) => {
        if (j>=0 && i>=0 && j <grid.length && i < grid[0].length && grid[j][i]==='1') {
            grid[j][i] = '0'
            run(j+1, i)
            run(j-1, i)
            run(j, i+1)
            run(j, i-1)
        } 
    }
    
    grid.forEach((col, j) => {
        col.forEach((e, i) => {
            if (e==='1') {
                res++
                run(j, i)
            }
        })
    })
    return res
}
