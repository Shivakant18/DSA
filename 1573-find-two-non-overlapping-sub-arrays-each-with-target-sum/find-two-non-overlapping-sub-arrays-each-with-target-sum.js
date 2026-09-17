/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var minSumOfLengths = function(arr, target) {
    const n = arr.length;
    const minLen = new Array(n).fill(Infinity);
    let left = 0, sum = 0, ans = Infinity;

    for (let right = 0; right < n; right++) {
        sum += arr[right];

        while (sum > target) {
            sum -= arr[left++];
        }

        if (sum === target) {
            const curLen = right - left + 1;
            if (left > 0 && minLen[left - 1] !== Infinity) {
                ans = Math.min(ans, curLen + minLen[left - 1]);
            }
            minLen[right] = Math.min(right > 0 ? minLen[right - 1] : Infinity, curLen);
        } else {
            minLen[right] = right > 0 ? minLen[right - 1] : Infinity;
        }
    }

    return ans === Infinity ? -1 : ans;
};