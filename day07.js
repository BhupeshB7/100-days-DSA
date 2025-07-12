//search in 2D matrix
function searchInRow(matrix, target, row) {
    let n = matrix[0].length;
    let st = 0, end = n - 1;
    while(st <= end){
        let mid = st + (end - st) / 2;
        if (target === matrix[row][mid]) {
            return true;
        } else if (target > matrix[row][mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
}
let searchInMatrix = function (matrix, target) {
    let m = matrix.length; let n = matrix[0].length;
    let startRow = 0; let endRow = m - 1;
    while (startRow <= endRow) {
        let midRow = startRow + (endRow - startRow) / 2;
        if (target >= matrix[midRow][0] && target <= matrix[midRow][n - 1]) {
            return searchInRow(matrix, target, midRow);
        } else if (target <= matrix[midRow][n - 1]) {
            startRow = midRow + 1;
        } else {
            endRow = midRow - 1;
        }
    }return false
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(searchInMatrix(matrix, 5));
console.log(searchInMatrix(matrix, 12));