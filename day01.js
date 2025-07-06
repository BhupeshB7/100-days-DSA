function twoSum(nums, target) {
    const order_map = new Map();

   for(let i =0;i<nums.length;i++){

        let first  = nums[i];
        let sec    = target-first;
        if(order_map.has(sec)){
            return [order_map.get(sec),i]
        }
        order_map.set(first,i);
   } 
};


console.log(twoSum([5,2,11,7,15],18));