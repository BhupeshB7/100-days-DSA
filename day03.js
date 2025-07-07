var maxSubArray = function(nums) {
    let currentSum=0;
    let maxSubSum=-Infinity;
    for(let i=0;i<nums.length;i++){
        currentSum+=nums[i];
        maxSubSum=Math.max(maxSubSum,currentSum);
        if(currentSum<0){
            currentSum=0;
        }
    }
    return maxSubSum;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))