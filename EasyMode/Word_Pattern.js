/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    pattern = pattern.split('');
    str = str.split(' ');
    let bool = true;
    for(word in pattern){
        console.log(pattern[word]);
        if(pattern[word]==pattern[word-1] &&word !=0&& str[word]==str[word-1]){
            return true
        }
        else{
            bool = false
        }
    }
    return bool
};

console.log(wordPattern("abba","dog cat cat dog"));