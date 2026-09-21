/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultArray = function(nums, k) {
    const result = new Array(k).fill(0);
    let dp = new Array(k).fill(0);

    for (const num of nums) {
        const nextDp = new Array(k).fill(0);
        const m = num % k;

        // Subarray starting and ending at current index
        nextDp[m] += 1;

        // Extend subarrays ending at the previous index
        for (let r = 0; r < k; r++) {
            if (dp[r] > 0) {
                const nextRem = (r * m) % k;
                nextDp[nextRem] += dp[r];
            }
        }

        dp = nextDp;

        // Accumulate counts into the final result
        for (let r = 0; r < k; r++) {
            result[r] += dp[r];
        }
    }

    return result;
};