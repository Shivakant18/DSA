function countServers(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;

    const rowCount = new Array(m).fill(0);
    const colCount = new Array(n).fill(0);

    // Pass 1: Count servers in each row and column
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 1) {
                rowCount[r]++;
                colCount[c]++;
            }
        }
    }

    let communicatingServers = 0;

    // Pass 2: Count servers that share a row or column with at least one other server
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 1) {
                if (rowCount[r] > 1 || colCount[c] > 1) {
                    communicatingServers++;
                }
            }
        }
    }

    return communicatingServers;
}