
function minOperations(nums: number[], x: number, k: number): number {
    const n = nums.length;

    // Step 1: Coordinate Compression
    const sorted = Int32Array.from(nums);
    sorted.sort();

    let m = 0;

    for (let i = 0; i < n; i++) {
        if (m === 0 || sorted[i] !== sorted[m - 1]) {
            sorted[m++] = sorted[i];
        }
    }

    const vals = sorted;
    const rank = new Int32Array(n);

    // Find the compressed rank of each number.
    for (let i = 0; i < n; i++) {
        let low = 0;
        let high = m - 1;

        while (low < high) {
            const mid = (low + high) >> 1;

            if (vals[mid] < nums[i]) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }

        rank[i] = low + 1;
    }

    // Step 2: Fenwick Tree Initialization
    const count = new Int32Array(m + 1);
    const sum = new Float64Array(m + 1);

    let top = 1;

    while (top * 2 <= m) {
        top *= 2;
    }

    const medianPosition = (x + 1) >> 1;
    const windowCount = n - x + 1;

    const cost = new Float64Array(windowCount);

    let windowSum = 0;

    // Step 3: Sliding Window + Fenwick Tree
    for (let i = 0; i < n; i++) {
        windowSum += nums[i];

        // Add current element.
        for (
            let p = rank[i];
            p <= m;
            p += p & -p
        ) {
            count[p]++;
            sum[p] += nums[i];
        }

        // Remove element outside the window.
        if (i >= x) {
            const removedIndex = i - x;

            windowSum -= nums[removedIndex];

            for (
                let p = rank[removedIndex];
                p <= m;
                p += p & -p
            ) {
                count[p]--;
                sum[p] -= nums[removedIndex];
            }
        }

        // Calculate cost for a complete window.
        if (i >= x - 1) {
            let position = 0;
            let remaining = medianPosition;
            let leftSum = 0;

            // Fenwick Tree Binary Lifting:
            // Find the median efficiently.
            for (
                let power = top;
                power > 0;
                power >>= 1
            ) {
                const next = position + power;

                if (
                    next <= m &&
                    count[next] < remaining
                ) {
                    position = next;
                    remaining -= count[next];
                    leftSum += sum[next];
                }
            }

            const median = vals[position];

            const leftCount = medianPosition - remaining;

            // Minimum operations to make
            // all elements in this window equal.
            cost[i - x + 1] =
                median * leftCount -
                leftSum +
                (windowSum - leftSum) -
                median * (x - leftCount);
        }
    }

    // Step 4: Dynamic Programming
    // prev[i] = minimum cost for previous j windows
    // cur[i]  = minimum cost for current j windows

    let prev = new Float64Array(n + 1);
    let cur = new Float64Array(n + 1);

    for (let j = 0; j < k; j++) {

        // Selecting j + 1 windows requires
        // at least (j + 1) * x elements.
        for (let i = 0; i < x; i++) {
            cur[i] = Infinity;
        }

        for (let i = x; i <= n; i++) {

            // Option 1: Skip current element.
            const skip = cur[i - 1];

            // Option 2: Select window ending at i - 1.
            const take =
                prev[i - x] + cost[i - x];

            cur[i] = Math.min(skip, take);
        }

        // Swap DP arrays.
        const temp = prev;
        prev = cur;
        cur = temp;
    }

    // Step 5: Return the minimum total operations.
    return prev[n];
}