/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    function sortingNums (left, right){
        if (left >= right){
            return;
        }
        let i = left -1;
        let d = right + 1;
        const x = nums[(left + right) >> 1];
        while(i < d){
            while (nums[++i] < x);
            while (nums[--d] > x);
            if (i < d){
                [nums[i], nums[d]] = [nums[d], nums[i]];
            }
        }
        sortingNums(left, d);
        sortingNums(d + 1, right);
    }
    const n = nums.length;
    sortingNums(0, n - 1);
    return nums;
};