class Solution {
    public String longestPalindrome(String s) {
        int n = s.length();
        String ans = "";

        for (int i = 0; i < n; i++) {
            // odd length
            for (int l = i, r = i; l >= 0 && r < n && s.charAt(l) == s.charAt(r); l--, r++)
                if (r - l + 1 > ans.length())
                    ans = s.substring(l, r + 1);

            // even length
            for (int l = i, r = i + 1; l >= 0 && r < n && s.charAt(l) == s.charAt(r); l--, r++)
                if (r - l + 1 > ans.length())
                    ans = s.substring(l, r + 1);
        }
        return ans;
    }
}
