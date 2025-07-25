var moveZeroes = function(nums) {
    let nonZeroIndex = 0;

    // Move non-zero values to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex++;
        }
    }

    // Fill remaining positions with zeroes
    for (let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
};
let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);  // Output: [1, 3, 12, 0, 0]
