function minWindow(s: string, t: string): string {
    const sLen = s.length;
    const tLen = t.length;

    if (sLen === 0 || tLen === 0 || sLen < tLen) {
        return "";
    }

    // 128 ASCII characters frequency array for O(1) lookup without hashing overhead
    const targetFreq = new Int32Array(128);
    let requiredUniqueChars = 0;

    for (let i = 0; i < tLen; i++) {
        const code = t.charCodeAt(i);
        if (targetFreq[code] === 0) {
            requiredUniqueChars++;
        }
        targetFreq[code]++;
    }

    const windowFreq = new Int32Array(128);
    let formedUniqueChars = 0;

    let left = 0;
    let minLen = Infinity;
    let minStart = 0;

    // Expand the window using the right pointer
    for (let right = 0; right < sLen; right++) {
        const rightChar = s.charCodeAt(right);
        windowFreq[rightChar]++;

        if (targetFreq[rightChar] > 0 && windowFreq[rightChar] === targetFreq[rightChar]) {
            formedUniqueChars++;
        }

        // Contract the window from the left while it satisfies the condition
        while (formedUniqueChars === requiredUniqueChars) {
            const currentWindowLen = right - left + 1;
            if (currentWindowLen < minLen) {
                minLen = currentWindowLen;
                minStart = left;
            }

            const leftChar = s.charCodeAt(left);
            windowFreq[leftChar]--;

            if (targetFreq[leftChar] > 0 && windowFreq[leftChar] < targetFreq[leftChar]) {
                formedUniqueChars--;
            }

            left++;
        }
    }

    return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
}
/***
 * Pattern: Sliding Window (Two Pointers Dynamic)
 * Time Complexity: O(|S| + |T|)
 * Space Complexity: O(1) - Fixed ASCII array of size 128
 */