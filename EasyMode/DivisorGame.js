/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
    let alice =  false
    while(N>1){
        N--;
        alice=!alice
    }
    return alice
};