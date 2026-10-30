function shortestPath(n: number, edges: number[][], labels: string, k: number): number {
    if (n === 1) return 0;

    // Build adjacency list: adj[u] = [[v, weight], ...]
    const adj: [number, number][][] = Array.from({ length: n }, () => []);
    for (const [u, v, w] of edges) {
        adj[u].push([v, w]);
    }

    // dist[node * (k + 1) + count]
    const stateCount = n * (k + 1);
    const dist = new Float64Array(stateCount).fill(Infinity);

    // LeetCode's built-in MinPriorityQueue
    const pq = new MinPriorityQueue<[number, number, number]>((item) => item[0]);

    // Initial state: node 0 with consecutive count 1
    const startIdx = 0 * (k + 1) + 1;
    dist[startIdx] = 0;
    pq.push([0, 0, 1]);

    while (!pq.isEmpty()) {
        const [d, u, count] = pq.pop()!;

        const uIdx = u * (k + 1) + count;
        if (d > dist[uIdx]) continue;

        if (u === n - 1) return d;

        const uChar = labels[u];

        for (const [v, w] of adj[u]) {
            const vChar = labels[v];
            const nextCount = (uChar === vChar) ? count + 1 : 1;

            if (nextCount > k) continue;

            const nextDist = d + w;
            const vIdx = v * (k + 1) + nextCount;

            if (nextDist < dist[vIdx]) {
                dist[vIdx] = nextDist;
                pq.push([nextDist, v, nextCount]);
            }
        }
    }

    return -1;
}