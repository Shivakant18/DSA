class Solution:
    def minimumDeletions(self, nums: List[int]) -> int:
        n = len(nums)
        if n <= 2:
            return n

        min_idx = nums.index(min(nums))
        max_idx = nums.index(max(nums))

        i = min(min_idx, max_idx)
        j = max(min_idx, max_idx)

        front_only = j + 1

        back_only = n-i

        both_ends = (i + 1) + (n - j)

        return min(front_only, back_only, both_ends)
        