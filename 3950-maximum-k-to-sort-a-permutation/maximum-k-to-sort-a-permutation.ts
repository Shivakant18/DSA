function sortPermutation(nums: number[]): number {
    let k = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) {
            k &= nums[i];
        }
    }

    return Math.max(k, 0);
}