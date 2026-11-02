
function minMoves2(nums: number[]): number {
    nums.sort((a, b) => a - b);

    const median = nums[Math.floor(nums.length / 2)];

    let totalMoves = 0;

    for (let i = 0; i < nums.length; i++) {
        totalMoves += Math.abs(nums[i] - median);
    }

    return totalMoves;
}
