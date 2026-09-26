/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function(s, knowledge) {
    const dict = new Map(knowledge);
    const result = [];
    let inside = false;
    let currentKey = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char === '(') {
            inside = true;
            currentKey = [];
        } else if (char === ')') {
            inside = false;
            const keyStr = currentKey.join('');
            result.push(dict.has(keyStr) ? dict.get(keyStr) : '?');
        } else if (inside) {
            currentKey.push(char);
        } else {
            result.push(char);
        }
    }

    return result.join('');
};