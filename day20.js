 function groupAnagrams(strs){
    if(strs.length===0){
      return [[""]];
    }
    let strMap = new Map();
    for(let i =0;i<strs.length;i++){
        let sorted = strs[i].split('').sort().join('');
        if(strMap.has(sorted)){
            strMap.get(sorted).push(strs[i]);
        }else{
            strMap.set(sorted,[strs[i]]);
        }
    }
    return Array.from(strMap.values());
 }
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
