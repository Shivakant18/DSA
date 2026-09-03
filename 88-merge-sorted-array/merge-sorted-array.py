class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        """
         // sabse pahle hamko jo array diya hai or jo num1 usme last index se num2 add krna ha value .
         // uske baad hum sort array kare gye num1 ko.
         """    
       # nums1 ke last n positions par nums2 ke elements copy karo
        for i in range(n):
            nums1[m + i] = nums2[i]
        
        # 2. nums1 ko in-place sort kar do
        nums1.sort()