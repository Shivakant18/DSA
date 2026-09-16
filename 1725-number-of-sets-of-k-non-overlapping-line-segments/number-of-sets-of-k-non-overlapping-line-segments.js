/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfSets = function(n, k) {
    const MOD = 1_000_000_007n;
    const total = BigInt(n + k - 1);
    const choose = BigInt(2 * k);

    // Compute C(n + k - 1, 2k) % MOD
    let num = 1n;
    let den = 1n;

    for (let i = 0n; i < choose; i++) {
        num = num * (total - i);
        den = den * (i + 1n);
    }

    return Number((num / den) % MOD);
};