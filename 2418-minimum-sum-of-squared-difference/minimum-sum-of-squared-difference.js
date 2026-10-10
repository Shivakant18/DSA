/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k1
 * @param {number} k2
 * @return {number}
 */
var minSumSquareDiff = function(nums1, nums2, k1, k2) {
    const n = nums1.length;
    let k = k1 + k2;
    
    // Find absolute differences and track max difference
    let maxDiff = 0;
    const diffs = new Int32Array(n);
    for (let i = 0; i < n; i++) {
        const d = Math.abs(nums1[i] - nums2[i]);
        diffs[i] = d;
        if (d > maxDiff) maxDiff = d;
    }
    
    if (maxDiff === 0) return 0;
    
    // Count frequencies of each difference
    const count = new Int32Array(maxDiff + 1);
    for (let i = 0; i < n; i++) {
        count[diffs[i]]++;
    }
    
    // Greedily reduce from largest difference down to 1
    for (let d = maxDiff; d > 0 && k > 0; d--) {
        if (count[d] === 0) continue;
        
        if (k >= count[d]) {
            // Can reduce all elements of value `d` to `d - 1`
            k -= count[d];
            count[d - 1] += count[d];
            count[d] = 0;
        } else {
            // Can only reduce `k` elements of value `d` to `d - 1`
            count[d - 1] += k;
            count[d] -= k;
            k = 0;
        }
    }
    
    // Calculate final sum of squares (using BigInt to prevent 64-bit float precision overflow)
    let ans = 0n;
    for (let d = 1; d <= maxDiff; d++) {
        if (count[d] > 0) {
            ans += BigInt(count[d]) * BigInt(d) * BigInt(d);
        }
    }
    
    return Number(ans);
};