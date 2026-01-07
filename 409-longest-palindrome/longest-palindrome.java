class Solution {
    public int longestPalindrome(String s) {
        int[] count = new int[128];

        for (char ch : s.toCharArray())
            count[ch]++;

        int res = 0;
        for (int i = 0; i < 128; i++) {
            res += (count[i] / 2) * 2;
            if (res % 2 == 0 && count[i] % 2 == 1)
                res++;
        }
        return res;
    }
}
