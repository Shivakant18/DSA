/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let maxLength = 0;
    const stack = [-1]; // Base boundary index

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else {
            stack.pop();
            
            if (stack.length === 0) {
                // Current ')' has no matching '(', sets new base
                stack.push(i);
            } else {
                // Valid substring from stack[stack.length - 1] to i
                maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
            }
        }
    }

    return maxLength;
};