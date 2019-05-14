/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if(nums.length==1){
        return nums[0]
    }
    nums =nums.sort((a,b)=>{return a-b;});
    const index = Math.floor(nums.length/2);
    return (nums[index])
};


console.log(majorityElement([3,2,3]));