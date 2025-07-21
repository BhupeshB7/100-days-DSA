var checkInclusion = function(s1, s2) {
    if(s1.length>s2.length) return false;
    let count1 = new Array(26).fill(0);
    let count2 = new Array(26).fill(0);
        for(let i=0;i<s1.length;i++){
            count1[s1.charCodeAt(i) - 97]++;
            count2[s2.charCodeAt(i) - 97]++;
        }
    let matches =0;
        for(let i =0;i<26;i++){
            if(count1[i] === count2[i]) matches++;
        }

        for(let i=s1.length;i<s2.length;i++){
            if(matches===26) return true;
            let right = s2.charCodeAt(i) - 97;
            let left = s2.charCodeAt(i - s1.length) -97;
            count2[right]++;
        if (count2[right] === count1[right]) {
            matches++;
        } else if (count2[right] - 1 === count1[right]) {
            matches--;
        }

        count2[left]--;
        if (count2[left] === count1[left]) {
            matches++;
        } else if (count2[left] + 1 === count1[left]) {
            matches--;
        }
        }
        return matches ===26;
};

console.log(checkInclusion("ab","eidbaooo"));