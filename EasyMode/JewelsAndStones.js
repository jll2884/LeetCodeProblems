/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let count = 0;
    for(let stones in S){
        if(J.includes(S[stones])){
            count++
        }
    }
    return count
};
numJewelsInStones("aA",'aAAbbbb');