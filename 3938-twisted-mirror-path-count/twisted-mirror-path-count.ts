function uniquePaths(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    const MOD = 1_000_000_007;

    // nxt0[idx]: landing cell when entering idx moving RIGHT (dir 0)
    // nxt1[idx]: landing cell when entering idx moving DOWN (dir 1)
    const nxt0 = new Int32Array(m * n).fill(-1);
    const nxt1 = new Int32Array(m * n).fill(-1);

    // Precompute landing cells from bottom-right to top-left
    for (let r = m - 1; r >= 0; r--) {
        for (let c = n - 1; c >= 0; c--) {
            const idx = r * n + c;
            if (grid[r][c] === 0) {
                nxt0[idx] = idx;
                nxt1[idx] = idx;
            } else {
                // Moving right into mirror -> deflected down to (r + 1, c) moving down
                if (r + 1 < m) {
                    nxt0[idx] = nxt1[(r + 1) * n + c];
                }
                // Moving down into mirror -> deflected right to (r, c + 1) moving right
                if (c + 1 < n) {
                    nxt1[idx] = nxt0[r * n + (c + 1)];
                }
            }
        }
    }

    const dp = new Int32Array(m * n);
    dp[0] = 1;

    // Forward push DP in row-major order
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            const idx = r * n + c;
            const ways = dp[idx];
            if (ways === 0 || grid[r][c] === 1) continue;

            // Attempt move RIGHT: enters (r, c + 1) moving right (dir 0)
            if (c + 1 < n) {
                const target = nxt0[r * n + (c + 1)];
                if (target !== -1) {
                    dp[target] = (dp[target] + ways) % MOD;
                }
            }

            // Attempt move DOWN: enters (r + 1, c) moving down (dir 1)
            if (r + 1 < m) {
                const target = nxt1[(r + 1) * n + c];
                if (target !== -1) {
                    dp[target] = (dp[target] + ways) % MOD;
                }
            }
        }
    }

    return dp[m * n - 1];
}