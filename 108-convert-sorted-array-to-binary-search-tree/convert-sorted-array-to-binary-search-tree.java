class Solution {
    public TreeNode sortedArrayToBST(int[] nums) {
        // Main function helper method ko initial start (0) aur end (nums.length - 1) ke saath call karta hai
        return createBST(nums, 0, nums.length - 1);
    }

    private TreeNode createBST(int[] nums, int left, int right) {
        // 1. Base Case: Jab search space khatam ho jaye
        if (left > right) {
            return null;
        }

        // 2. Mid element calculate karo
        int mid = left + (right - left) / 2;

        // 3. Mid ko current Root Node banao
        TreeNode node = new TreeNode(nums[mid]);

        // 4. Recursive Call: Left subtree (start se mid - 1)
        node.left = createBST(nums, left, mid - 1);

        // 5. Recursive Call: Right subtree (mid + 1 se end)
        node.right = createBST(nums, mid + 1, right);

        // 6. Connected node ko parent ko return karo
        return node;
    }
}