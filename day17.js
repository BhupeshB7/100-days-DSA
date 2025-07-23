// container with most water

var maxArea = function(height) {
    let maxWater=0;
    let lp=0; 
    let rp=height.length-1;
    while(lp<rp){
        let w = rp - lp;
        let ht = Math.min(height[lp],height[rp]);
        let currentWater = w * ht;
        maxWater= Math.max(maxWater,currentWater);
        height[lp]<height[rp]?lp++:rp--;
    }
    return maxWater
};
let height = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(height))