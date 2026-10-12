/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSum = function(nums, k) {
    const MOD = 1000000007n;
    const bitCount = new Array(31).fill(0);

    // 1. Count occurrences of each bit across all numbers
    for (const num of nums) {
        for (let b = 0; b < 31; b++) {
            if ((num >> b) & 1) {
                bitCount[b]++;
            }
        }
    }

    let totalSum = 0n;

    // 2. Greedily construct the k largest numbers
    for (let step = 0; step < k; step++) {
        let val = 0n;
        for (let b = 0; b < 31; b++) {
            if (bitCount[b] > 0) {
                val |= (1n << BigInt(b));
                bitCount[b]--;
            }
        }
        totalSum = (totalSum + (val * val) % MOD) % MOD;
    }

    return Number(totalSum);
};