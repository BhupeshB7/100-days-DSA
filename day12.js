//longest substring without repeatiting char

function longestSubstring(s){
    let count=new Array(256).fill(0);
  let second=0,first=0,len=0;
  while(second<s.length){
    let charCode = s[second].charCodeAt(0);
    while(count[charCode]){
        count[s[first].charCodeAt(0)]=0;
        first++;
    }
    count[charCode]=1;
    len=Math.max(len,(second-first+1));
    second++;
  }
  return len;
}
nums=["a","b","c","a","d","c","e","f","g"]

console.log(longestSubstring(nums))