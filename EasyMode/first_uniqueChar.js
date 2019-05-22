/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let arr = s.split('');
    if(arr.length==1){
        return 0
    }
    for(let i=0;i<arr.length;i++){
        let ex = arr.slice(i+1);
       if(!ex.includes(arr[i])&&i!=arr.length-1){
           return i;
       }
    }
    return -1

};

console.log(firstUniqChar("aadadaad"));