class Solution {
    public long maxSubarraySum(int[] nums, int k) {
        int n = nums.length;
        long prefix = 0;
        long ans = Long.MIN_VALUE;

        long[] minPrefix = new long[k];
        // Initialize with +infinity
        for (int i = 0; i < k; i++) {
            minPrefix[i] = Long.MAX_VALUE;
        }
        // index 0: prefix sum = 0, remainder = 0
        minPrefix[0] = 0;

        // i = 1..n  (prefix over first i elements)
        for (int i = 1; i <= n; i++) {
            prefix += nums[i - 1];        // add nums[i-1]

            int rem = i % k;              // remainder of index, NOT sum

            if (minPrefix[rem] != Long.MAX_VALUE) {
                long candidate = prefix - minPrefix[rem];
                if (candidate > ans) {
                    ans = candidate;
                }
            }

            // update minimum prefix for this remainder
            if (prefix < minPrefix[rem]) {
                minPrefix[rem] = prefix;
            }
        }

        return ans;
    }
}
