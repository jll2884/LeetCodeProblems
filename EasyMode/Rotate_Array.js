/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    while(k>0){
        let front = nums.pop();
        nums.unshift(front);
        k--;
    }
};