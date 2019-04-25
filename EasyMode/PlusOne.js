/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let result = BigInt(digits.join(''));
    result+=BigInt(1);
    result =result.toString().split('');
    for(let i= 0;i<result.length;i++){
        result[i]= result[i]*1
    }
    return result
};

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4]));