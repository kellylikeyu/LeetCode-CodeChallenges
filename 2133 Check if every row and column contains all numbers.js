// An n x n matrix is valid if every row and every column contains all the integers from 1 to n (inclusive).

// Given an n x n integer matrix matrix, return true if the matrix is valid. Otherwise, return false.

var checkValid = function(matrix) {
    let array = [...matrix];
    for (let i=0; i<matrix[0].length; i++) {
        let col =[];
        for (let j = 0; j<matrix.length; j++) {
            col.push(matrix[j][i]);
        }
        array.push(col);
    }
    for (let row of array) {
        if (Math.min(...row) !== 1 || Math.max(...row) !== row.length|| row.length !== new Set(row).size) {return false;}
    }
    return true;
};
