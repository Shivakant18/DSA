class Solution {
    public int[] searchRange(int[] nums, int target) {

        int first = findFirst(nums, target);
        int last = findLast(nums, target);

        return new int[]{ first, last };
    }

    // Find first time target appears
    private int findFirst(int[] nums, int target) {
        int low = 0, high = nums.length - 1;
        int ans = -1;

        while (low <= high) {
            int mid = (low + high) / 2;

            if (nums[mid] == target) {
                ans = mid;      // store answer
                high = mid - 1; // go left
            }
            else if (nums[mid] < target) {
                low = mid + 1;
            }
            else {
                high = mid - 1;
            }
        }
        return ans;
    }

    // Find last time target appears
    private int findLast(int[] nums, int target) {
        int low = 0, high = nums.length - 1;
        int ans = -1;

        while (low <= high) {
            int mid = (low + high) / 2;

            if (nums[mid] == target) {
                ans = mid;      // store answer
                low = mid + 1;  // go right
            }
            else if (nums[mid] < target) {
                low = mid + 1;
            }
            else {
                high = mid - 1;
            }
        }
        return ans;
    }
}