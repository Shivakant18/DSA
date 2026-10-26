function permuteUnique(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);

    const result: number[][] = [];
    const current: number[] = [];
    const used: boolean[] = new Array(nums.length).fill(false);

    function backtrack(): void {
        if (current.length === nums.length) {
            result.push([...current]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;

            // Skip a duplicate if its previous copy
            // has not been used in the current path.
            if (
                i > 0 &&
                nums[i] === nums[i - 1] &&
                !used[i - 1]
            ) {
                continue;
            }

            used[i] = true;
            current.push(nums[i]);

            backtrack();

            current.pop();
            used[i] = false;
        }
    }

    backtrack();
    return result;
}