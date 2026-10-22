function minOperations(nums: number[]): number {
    const n = nums.length;
    const zero = nums.indexOf(0);

    const check = (step: number): boolean => {
        for (let i = 1; i < n; i++) {
            const prev = (zero + (i - 1) * step + n) % n;
            const curr = (zero + i * step + n) % n;

            if (nums[prev] > nums[curr]) {
                return false;
            }
        }

        return true;
    };

    let answer = Infinity;

    // Increasing cyclic order
    if (check(1)) {
        answer = Math.min(answer, zero);
        answer = Math.min(answer, n - zero + 2);
    }

    // Increasing order when traversed in reverse direction
    if (check(-1)) {
        answer = Math.min(answer, zero + 2);
        answer = Math.min(answer, n - zero);
    }

    return answer === Infinity ? -1 : answer;
}