class Solution:

  def convert(self, s: str, numRows: int) -> str:
    if numRows == 1 or numRows >= len(s):
      return s

    rows = [[] for _ in range(numRows)]
    current_row = 0
    direction = -1  # Starts going down after the first step

    for char in s:
      rows[current_row].append(char)

      # Reverse direction at the top and bottom boundaries
      if current_row == 0 or current_row == numRows - 1:
        direction = -direction

      current_row += direction

    return "".join("".join(row) for row in rows)