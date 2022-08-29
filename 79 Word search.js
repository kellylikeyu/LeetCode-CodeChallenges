// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example 1:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true

var exist = function(board, word) {
    for (let i=0; i<board.length; i++) {
        for (let j=0; j<board[0].length; j++) {
            if (board[i][j] !== word[0]) {continue;}
            if (traverse(board,word.split(""),i,j)) 
                return true;
            }
        }
    return false;
    
};

function traverse(matrix,word,i,j,index=0) {
    if (word.length ===index) {return true;}
    if (i<0 || j<0 || i>=matrix.length || j>=matrix[0].length) {return false;}
    if (matrix[i][j] !== word[index]) {return false;} 
    if(matrix[i][j] === true) {return false;}
    let temp = matrix[i][j];    
    matrix[i][j] = true;
    let result = traverse(matrix,word,i+1,j,index+1) || 
        traverse(matrix,word,i-1,j,index+1) || 
        traverse(matrix,word,i,j+1,index+1) || 
        traverse(matrix,word,i,j-1,index+1);
    matrix[i][j] = temp;
    return result;
}
