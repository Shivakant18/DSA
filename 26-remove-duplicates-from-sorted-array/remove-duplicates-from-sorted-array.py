class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        # Edge case: agar array khali ho toh 0 return karein
        if not nums:
            return 0
        
        # k track karega aakhiri valid unique number ka index
        k = 0
        
        # Fast pointer 'i' index 1 se end tak loop chalayega
        for i in range(1, len(nums)):
            # Agar current number previous unique number se alag hai (naya unique mila)
            if nums[i] != nums[k]:
                k += 1               # Unique position ko aage badhayein
                nums[k] = nums[i]   # Nayi unique value ko store karein
                
        # Total unique elements ki ginti k + 1 hogi (0-based indexing)
        return k + 1