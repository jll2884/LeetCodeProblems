/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    for(let i =0;i<A.length;i++){
        let lst =[];
        for(let j =0;j<A[i].length;j++){
            let index = A[i].length-j-1;
            if(A[i][index]===0){
                lst.push(1)
            }else{
                lst.push(0)
            }

        }
        A[i]= lst
    }
    return A

};

flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]])