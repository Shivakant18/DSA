class Solution:

  def myAtoi(self, s: str) -> int:
    i = 0
    n = len(s)

    # 1. Discard leading whitespace
    while i < n and s[i] == " ":
      i += 1

    if i == n:
      return 0

    # 2. Check signedness
    sign = 1
    if s[i] == "-":
      sign = -1
      i += 1
    elif s[i] == "+":
      i += 1

    # 3. Read digits and handle 32-bit signed integer overflow
    INT_MAX = 2**31 - 1
    INT_MIN = -(2**31)
    res = 0

    while i < n and s[i].isdigit():
      digit = int(s[i])

      # Check overflow before multiplying
      if res > (INT_MAX - digit) // 10:
        return INT_MAX if sign == 1 else INT_MIN

      res = res * 10 + digit
      i += 1

    return sign * res