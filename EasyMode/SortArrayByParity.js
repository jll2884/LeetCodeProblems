/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let lst = [];
    for(let i =0;i<A.length;i++){
        if(A[i]%2==0){
            lst.unshift(A[i])
        }else{
            lst.push(A[i])
        }
    }
    return lst

};

console.log(sortArrayByParity([1,2,4,3]))