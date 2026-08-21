class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        if not strs:
            return ""

        # 1. Array ko alphabetically sort karo
        strs.sort()

        first = strs[0]
        last = strs[-1]
        ans = []

        # 2. Sirf pehli aur aakhri string ke characters compare karo
        for i in range(min(len(first), len(last))):
            if first[i] != last[i]:
                break
            ans.append(first[i])

        return "".join(ans)