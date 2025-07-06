var myPow = function(x, n) {
     if(n===0) return 1.0;
     if(x===0) return 0.0;
     if(x===1) return 1.0;
     if(x===-1 && n%2 ==0) return 1.0;
     if(x=== -1 && n%2 !=0) return -1.0;
    let binF=n;
    let ans =1;
    if(n<0){
        x=1/x;
        binF=-binF;
    }
    while(binF>0){
        if(binF%2==1){
            ans*=x;
        }
        x*=x;
          binF = Math.floor(binF / 2);
    }
    return ans;
};

console.log(myPow(2,5))