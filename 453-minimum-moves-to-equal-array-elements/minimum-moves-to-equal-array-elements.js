/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let minVal = nums[0];
    let sum = 0;

    for (const num of nums) {
        if (num < minVal) {
            minVal = num;
        }
        sum += num;
    }

    return sum - minVal * nums.length;
};