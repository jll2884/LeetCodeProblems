/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    if(A.length<=1){
        return false;
    }
    for(let i = 0;i<A.length;i++){
        let arr = A.slice(i+1);
        if(arr.includes(A[i])){
            return A[i]
        }
    }

};
console.log(repeatedNTimes([1,2,3,4,4]));