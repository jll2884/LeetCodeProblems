/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    console.log(s.split('').reverse().join('').toLowerCase())
    if(s.toLowerCase()===s.split('').reverse().join('').toLowerCase()){
        return true
    }
    return false
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));