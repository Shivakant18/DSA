class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        unique_elements = set()
        
        for x in nums:
            
            if x in unique_elements:
                return True
            
            
            unique_elements.add(x)
            
       
        return False