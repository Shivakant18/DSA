/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    const totalSum = nums.reduce((acc, val) => acc + val, 0);
    const target = totalSum - x;

    // If target is negative, sum of nums is less than x
    if (target < 0) return -1;
    // If target is 0, we must remove all elements
    if (target === 0) return nums.length;

    let left = 0;
    let currentSum = 0;
    let maxLength = -1;

    for (let right = 0; right < nums.length; right++) {
        currentSum += nums[right];

        // Shrink window if the sum exceeds the target
        while (currentSum > target && left <= right) {
            currentSum -= nums[left];
            left++;
        }

        // Check if we hit the exact target
        if (currentSum === target) {
            maxLength = Math.max(maxLength, right - left + 1);
        }
    }

    return maxLength === -1 ? -1 : nums.length - maxLength;
};