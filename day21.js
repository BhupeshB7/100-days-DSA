//valid anagrams

function validAnagrams(strs1, strs2) {
    if (strs1.length !== strs2.length) return false;

    return strs1.split('').sort().join('') === strs2.split('').sort().join('');
}

console.log(validAnagrams("anagram", "nagaram"))