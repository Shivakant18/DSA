class Solution:
    def getRow(self, rowIndex: int) -> list[int]:
        res=[1]
        for i in  range(rowIndex):
            new_row = [0]*(len(res)+1)
            for j in range(len(res)):
                new_row[j] += res[j]
                new_row[j+1] += res[j]
            res = new_row
        return res
