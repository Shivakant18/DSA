class Solution(object):
    def removeDuplicates(self, nums):
        # sorted(set(nums)) unique elements nikalta hai
        # nums[:] in-place array ko overwrite karta hai
        nums[:] = sorted(set(nums))
        return len(nums)