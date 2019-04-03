/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    if(nums.length==1 && nums[0]==0){
        return 1
    }
    else if(nums.length==1 && nums[0]==1){
        return 0
    }
    nums = nums.sort(function(a, b){return a - b});
    let counter = nums[0];
    for(let index in nums){
        if(nums[index]-1!=counter&&nums[index]!=0 ){
            return (nums[index]-1)
        }
        counter= nums[index]
    }
    return nums[nums.length-1]+1
};


missingNumber([0])