/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxPalindromes = function(s, k) {
    const n = s.length;
    let count = 0;
    let i = 0;

    function isPalindrome(l, r) {
        while (l < r) {
            if (s[l] !== s[r]) return false;
            l++;
            r--;
        }
        return true;
    }

    while (i < n) {
        // Option 1: check length k
        if (i + k <= n && isPalindrome(i, i + k - 1)) {
            count++;
            i += k; // Jump directly to avoid overlap
        } 
        // Option 2: check length k + 1
        else if (i + k + 1 <= n && isPalindrome(i, i + k)) {
            count++;
            i += (k + 1); // Jump directly
        } 
        // Agar dono nahi mile to 1 step aage badho
        else {
            i++;
        }
    }

    return count;
};