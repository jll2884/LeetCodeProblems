var thirdMax = function(nums) {
    nums = Array.from(new Set(nums));
    var len = nums.length;
    if(len<=2){
        return Math.max(...nums);
    }
    if(len===3){
        return Math.min(...nums);
    }
    nums = nums.sort((a,b)=>{return b-a;});
    return nums[2];
};
console.log(thirdMax([2, 2, 3, 1]));