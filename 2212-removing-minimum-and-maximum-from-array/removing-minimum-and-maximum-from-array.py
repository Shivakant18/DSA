class Solution:
    def minimumDeletions(self, nums: List[int]) -> int:
        n = len(nums)
        if n <= 2:
            return n

        min1 = nums.index(min(nums))
        max1= nums.index(max(nums))

        i = min(min1, max1)
        j = max(min1, max1)

        front = j + 1

        back = n-i

        both = (i + 1) + (n - j)

        return min(front, back, both)
        