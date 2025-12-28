class Solution {
    public int countNegatives(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;
        int count = 0;
        
        // Start at the bottom-left corner
        int row = m - 1;
        int col = 0;
        
        while (row >= 0 && col < n) {
            if (grid[row][col] < 0) {
                // If grid[row][col] is negative, all elements 
                // to its right in this row are also negative.
                count += (n - col);
                // Move up to the next row
                row--;
            } else {
                // If grid[row][col] is non-negative, 
                // move right to find the first negative in this row.
                col++;
            }
        }
        
        return count;
    }
}
