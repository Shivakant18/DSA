/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
    // Sort nums in ascending order by absolute value
    nums.sort((a, b) => Math.abs(a) - Math.abs(b));
    
    const n = nums.length;
    const k = Math.floor(n / 2); // Count of elements with a negative sign
    
    let total = 0;
    
    // The smallest k elements are subtracted
    for (let i = 0; i < k; i++) {
        total -= nums[i] * nums[i];
    }
    
    // The remaining (largest) elements are added
    for (let i = k; i < n; i++) {
        total += nums[i] * nums[i];
    }
    
    return total;
};