class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        """
         // sabse pahle hamko jo array diya hai or jo num1 m ad krna ha num2 ki value .
         // uske baad hum sort array kare gye 
         sorted array ko hum num1  store kara .
         """    
        # 1. nums2 ke elements ko nums1 ke pichhle hisse (0s ki jagah) me daal do
        nums1[m:] = nums2
        
        # 2. nums1 ko in-place sort kar do
        nums1.sort()