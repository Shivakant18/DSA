/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let total = 0;
    
    for (let i = 0; i < s.length; i++) {
        // 'a'.charCodeAt(0) is 97
     
        const revPos = 26 - (s.charCodeAt(i) - 97);
        total += revPos * (i + 1);
    }
    return total;
};