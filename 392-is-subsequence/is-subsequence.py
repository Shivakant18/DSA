class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        if len(s) > len(t): return False
        p = 0
        count = 0
        for ch in s:
            # find the char in t
            while p < len(t) and ch != t[p]: p += 1
            if p == len(t): break
            count += 1
            p += 1
        return count == len(s)