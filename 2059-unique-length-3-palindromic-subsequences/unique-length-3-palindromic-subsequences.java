class Solution {
    public int countPalindromicSubsequence(String s) {
        int n = s.length();
        // first and last occurrence of each character
        int[] first = new int[26];
        int[] last = new int[26];
        
        // initialize first with a large value, last with -1
        for (int i = 0; i < 26; i++) {
            first[i] = n;   // "infinity"
            last[i] = -1;
        }
        
        // fill first and last
        for (int i = 0; i < n; i++) {
            int idx = s.charAt(i) - 'a';
            first[idx] = Math.min(first[idx], i);
            last[idx] = Math.max(last[idx], i);
        }
        
        int result = 0;
        
        // for each possible outer character
        for (int c = 0; c < 26; c++) {
            int L = first[c];
            int R = last[c];
            
            // need at least two occurrences to form c ? c
            if (L < R) {
                boolean[] seenMiddle = new boolean[26];
                
                // mark all distinct middle characters between L and R
                for (int i = L + 1; i < R; i++) {
                    int mid = s.charAt(i) - 'a';
                    seenMiddle[mid] = true;
                }
                
                // count how many distinct middle chars we have for this outer char
                for (int m = 0; m < 26; m++) {
                    if (seenMiddle[m]) {
                        result++;
                    }
                }
            }
        }
        
        return result;
    }
}
