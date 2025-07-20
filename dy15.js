//sliding window maximum
//brute force approach
const maxSlidingWindow = (nums, k) => {
    let ans = [];
    for (let i = 0; i <= nums.length - k; i++) {
        let total = 0;
        for (let j = i; j < i + k; j++) {
            total = Math.max(total, nums[j])
        }
        ans.push(total)
    }
    return ans;
}
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
// Output: [3,3,5,5,6,7]

console.log(maxSlidingWindow([9, 11], 2));
// Output: [11]

console.log(maxSlidingWindow([4, -2], 2));
// Output: [4]

//optimal approach
const optimalMaxSlidingWindow = (nums, k) => {
    let result = [];
    let deque = [];
    for (let i = 0; i < nums.length; i++) {
        //remove from front if out of window
        if (deque[0] <= i - k) deque.shift();
        //remove smaller element from back
        while (nums[deque[deque.length - 1]] < nums[i]) deque.pop();
        deque.push(i);
        if (i >= k - 1) result.push(nums[deque[0]])
    }
    return result;
}
console.log(optimalMaxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
// Output: [3,3,5,5,6,7]

console.log(optimalMaxSlidingWindow([9, 11], 2));
// Output: [11]

console.log(optimalMaxSlidingWindow([4, -2], 2));
// Output: [4]