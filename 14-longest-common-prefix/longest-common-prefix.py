class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        if not strs:
            return ""

        # Pehli string ke har index aur character par loop
        for i in range(len(strs[0])):
            char = strs[0][i]
            
            # Baaki saari strings se compare karna
            for string in strs[1:]:
                # Agar string choti pad jaye YA character match na kare
                if i == len(string) or string[i] != char:
                    return strs[0][:i]
                    
        # Agar saare characters bina kisi mismatch ke pass ho gaye
        return strs[0]