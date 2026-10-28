
function minCost(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    const XOR_RANGE = 1024;

    let prev: Uint8Array[] = Array(n);
    let curr: Uint8Array[] = Array(n);

    for (let i = 0; i < m; i++) {
        curr = Array(n);

        for (let j = 0; j < n; j++) {
            const next = new Uint8Array(XOR_RANGE);
            const value = grid[i][j];

            if (i === 0 && j === 0) {
                next[value] = 1;
            } else {
                // Reachable XOR values from the cell above
                if (i > 0) {
                    for (let x = 0; x < XOR_RANGE; x++) {
                        if (prev[j][x]) {
                            next[x ^ value] = 1;
                        }
                    }
                }

                // Reachable XOR values from the cell on the left
                if (j > 0) {
                    for (let x = 0; x < XOR_RANGE; x++) {
                        if (curr[j - 1][x]) {
                            next[x ^ value] = 1;
                        }
                    }
                }
            }

            curr[j] = next;
        }

        prev = curr;
    }

    for (let x = 0; x < XOR_RANGE; x++) {
        if (prev[n - 1][x]) {
            return x;
        }
    }

    return -1;
}
