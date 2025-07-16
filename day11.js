// Maximum Product Subarray

//1st approach brute force -> o(n^2)
const maxProd = (nums) => {
    let max = 1;
    for (let i = 0; i < nums.length; i++) {
        let prod = 1;
        for (j = i; j < nums.length; j++) {
            prod *= nums[j];
            max = Math.max(max, prod)
        }
    }
    return max;

}

let nums = [2, 3, -2, 4];
console.log(maxProd(nums))

const maxProdOptimal =(nums)=>{
  let pre=1;
  let suff=1;
  let ans=-Infinity;
    for(i=0;i<nums.length;i++){
        if(pre===0) pre=1;
        if(suff===0) suff=1;
        pre=pre*nums[i];
        suff=suff*nums[nums.length-i-1]
        ans=Math.max(ans,Math.max(pre,suff))
    }
    return ans;
}
console.log(maxProdOptimal(nums))