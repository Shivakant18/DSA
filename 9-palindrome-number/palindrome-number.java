class Solution {
    public boolean isPalindrome(int x) {
        if( x < 0 ){
            return false;
        }
        int n = x;
        int rev = 0;
        while( x > 0){
            rev = (rev * 10) + (x % 10);
            x = x / 10;
            // int d = n % 10;
            // rev = rev * 10 + d;
            // n = n / 10;
        }
        return rev == n;
        // if( x == rev){
        //     return true;
        // }
        // else{
        //     return false;
        // }
        
    }
}