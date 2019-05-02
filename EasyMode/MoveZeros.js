/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let count = 0;
    let counter = 0;
    while(nums.length!=counter+1){
        if(nums[counter]==0){
            nums.splice(counter,1);
            count++;
            continue;
        }
        counter++
    }

    for(let j=0;j<count;j++){
        nums.push(0)
    }
    return nums
};
console.log(moveZeroes([0,0,1]));