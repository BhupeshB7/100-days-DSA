
var minWindow = function(s, t) {
    if (t.length > s.length) return "";

    let map = new Map();
    for (let i = 0; i < t.length; i++) {
        map.set(t[i], (map.get(t[i]) || 0) + 1);
    }

    let start = 0, end = 0;
    let minLen = Infinity;
    let minStart = 0;
    let counter = map.size;

    while (end < s.length) {
        let endChar = s[end];
        if (map.has(endChar)) {
            map.set(endChar, map.get(endChar) - 1);
            if (map.get(endChar) === 0) {
                counter--;
            }
        }

        while (counter === 0) {
            if (end - start + 1 < minLen) {
                minLen = end - start + 1;
                minStart = start;
            }

            let startChar = s[start];
            if (map.has(startChar)) {
                map.set(startChar, map.get(startChar) + 1);
                if (map.get(startChar) > 0) {
                    counter++;
                }
            }
            start++;
        }

        end++;
    }

    return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
};


console.log(minWindow("ADOBECODEBANC","ABC"))