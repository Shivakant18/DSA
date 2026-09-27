/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    let stack = [];

    for (let char of s) {
        if (char === ')') {
            let reversed = [];
            // Pop until the matching '('
            while (stack[stack.length - 1] !== '(') {
                reversed.push(stack.pop());
            }
            // Remove the '(' itself
            stack.pop();
            // Put the reversed characters back onto the stack
            stack.push(...reversed);
        } else {
            stack.push(char);
        }
    }

    return stack.join('');
};