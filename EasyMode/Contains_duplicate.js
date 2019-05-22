/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
        if(Array.from(new Set(nums)).length==nums.length){
            return false
        }

    return true
};
console.log(containsDuplicate([1,2,2]));


let l = []