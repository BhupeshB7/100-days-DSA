/* 
Subarray Sum Equals K 
1st method Brute force
*/

function SubarraySumEq(nums, k) {
    let count = 0;
    for (let start = 0; start < nums.length; start++) {
        let sum = 0;
        for (let end = start; end < nums.length; end++) {
            sum += nums[end]; 
            if (sum == k) {
                count++;
            }
        }
    }
    return count;
}

console.log(SubarraySumEq([1, 1, 1], 2))

var subarraySum = function(nums, k) {
      let count = 0;
      let sum=0;
      const map = new Map();
      map.set(0,1);
      for(let num of nums){
        sum+=num;
        if(map.has(sum-k)){
            count += map.get(sum-k);
        }
        map.set(sum,(map.get(sum)||0)+1);
      }
    return count;
};
console.log(subarraySum([1,2,3], 3))