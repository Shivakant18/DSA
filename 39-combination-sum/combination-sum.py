class Solution:
    def combinationSum(self, candidates: list[int], target: int) -> list[list[int]]:
        res = []
        candidates.sort()  # Early exit ke liye sort kar rahe hain

        def backtrack(start: int, remaining: int, path: list[int]):
            if remaining == 0:
                res.append(list(path))
                return

            for i in range(start, len(candidates)):
                # Agar number remaining target se bada hai, toh aage ke numbers bhi bade honge
                if candidates[i] > remaining:
                    break

                # Choice: number ko path mein include karein
                path.append(candidates[i])
                
                # Recurse: 'i' pass karenge taaki same element dobara use ho sake
                backtrack(i, remaining - candidates[i], path)
                
                # Undo choice (backtrack)
                path.pop()

        backtrack(0, target, [])
        return res