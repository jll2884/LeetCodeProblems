/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums = nums.sort((a,b)=>a-b);
    return nums[nums.length-k-1]

};
findKthLargest([1,2,3,3,2],1);

1,2,3,4,5,6