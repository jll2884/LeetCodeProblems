/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let joined = [...nums1,...nums2];
    let result = [];
    for(let i = 0;i<joined.length;i++){
        if(nums1.includes(joined[i])&&nums2.includes(joined[i])){
            if(!result.includes(joined[i])){
                result.push(joined[i])
            }

        }

    }
    return result

};
intersection([1,2,2,1],[2,2]);