/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    for(let i= 0;i<A.length;i++){
        A[i]= A[i]*A[i]

    }
    return A.sort((a,b)=>{return a-b;});
};

console.log(sortedSquares([-4,-1,0,3,10]));