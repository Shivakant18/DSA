function containsDuplicate(nums: number[]): boolean {
     const seen = new Set();
    for (const x of nums) {
        if (seen.has(x)) {
            return true;
        }
        seen.add(x);
    }
    return false;
};