class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
        result = []
        
        while columnNumber > 0:
            columnNumber -= 1  # Shift to 0-indexed: 0 -> 'A', 25 -> 'Z'
            remainder = columnNumber % 26
            result.append(chr(ord('A') + remainder))
            columnNumber //= 26
            
        return "".join(reversed(result))