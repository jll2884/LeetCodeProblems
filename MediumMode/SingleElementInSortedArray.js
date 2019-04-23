/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    return nums.reduce((prev, current) => prev ^= current, 0);
};
(singleNonDuplicate([1,2,2,3,3,4,4]));