var setMatrixZeroesBruteForce = function(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;

    // First pass: mark rows and columns with -1 (placeholder)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === 0) {
                makeRow(i);
                makeCol(j);
            }
        }
    }

    // Second pass: convert -1s to 0s
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === -1) {
                matrix[i][j] = 0;
            }
        }
    }

    function makeRow(row) {
        for (let j = 0; j < m; j++) {
            if (matrix[row][j] !== 0) {
                matrix[row][j] = -1;
            }
        }
    }

    function makeCol(col) {
        for (let i = 0; i < n; i++) {
            if (matrix[i][col] !== 0) {
                matrix[i][col] = -1;
            }
        }
    }
};

let matrix = [
    [1, 2, 3],
    [4, 0, 6],
    [7, 8, 9]
];

console.log("Before:");
console.table(matrix);

setMatrixZeroesBruteForce(matrix);

console.log("After:");
console.table(matrix);