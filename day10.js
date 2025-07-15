//longest consecutive Sequence 
// arr=[100, 4, 200, 1, 3, 2]
//1st approach brute force

const longestConsecutiveBrute=(nums)=>{
    if(nums.length===0) return 0;
    let maxCount=1;
    let count=1;
    nums.sort((a,b)=>a-b);
    console.log("Sorted num:",nums)
    for(let i =0;i<nums.length;i++){
         if(nums[i]===nums[i-1]) continue;
         if(nums[i]===nums[i-1]+1){
            count++; 
         }else count=1;
         maxCount= Math.max(maxCount,count)
    }
    return maxCount;
}
console.log(longestConsecutiveBrute([100,1,200,2,3,4]))


const longestConsecutiveOptimal=(nums)=>{
    let maxCount=1;
    let numSet = new Set(nums);
    for(let num of nums){
        if(!numSet.has(num-1)){
            let currentNum =num;
            let count=1;
            while(numSet.has(currentNum+1)){
                currentNum++;
                count++;
            }
            maxCount= Math.max(maxCount,count)
        }
    }
    return maxCount;
}
console.log(longestConsecutiveOptimal([100,1,200,2,3,4]))