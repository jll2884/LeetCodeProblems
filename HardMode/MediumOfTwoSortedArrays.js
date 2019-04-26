let findMedianSortedArrays=function (numbers, numbers2) {
    let newArr = [...numbers,...numbers2];
    newArr= newArr.sort(function(a, b){return a-b});
    if(newArr.length%2==1){
        const middle = (newArr.length+1)/2;
        return newArr[middle-1]
    }
    else{
        const sum = newArr.reduce((a,b)=>a+b);
        const middle = Math.floor((newArr.length+1)/2);
        return (newArr[middle-1]+newArr[middle])/2
    }

};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// var findMedianSortedArrays = function(nums1, nums2) {
//
//     const size1 = nums1.length;
//     const  size2 = nums2.length;
//     let first = 0;
//     let second = 0;
//     if(size+size2%2==1){
//
//     }
//     if(size1==0){
//         second =nums2.reduce((a,b)=>a+b);
//         return  second/size2
//     }
//     else if(size2==0){
//         first =nums1.reduce((a,b)=>a+b);
//         return  first/size1
//     }
//     first = nums1.reduce((a,b)=>a+b);
//     second = nums2.reduce((a,b)=>a+b);
//     return ((first+second)/(size1+size2))
// };

console.log(findMedianSortedArrays([3],[-2,-1]));