// valid palandrome II

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    // Helper function to check if a substring is a palindrome
    function isPalindrome(str, left, right) {
        // TODO: Fill logic to check if substring is a palindrome
        while (left < right) {
            if (str[left] !== str[right]) return false;
            left++;
            right--;
        }
        return true;
    }

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // TODO: Add logic to compare characters and handle mismatch
        if (s[left] === s[right]) {
            left++;
            right--;
        } else {
            return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
        }
    }

    // TODO: Return true if it's a palindrome
    return true;
};

console.log(validPalindrome("abhhca"))