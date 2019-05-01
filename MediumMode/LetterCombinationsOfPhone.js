/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let keys={
        "1":null,
        "2": "abc",
        "3":'def',
        "4":"ghi",
        "5":"jkl",
        "6":"mno",
        "7":"pqrs",
        "8":"tuv",
        "9":"wxzy",
        "0":null
    };
    let arr = digits.split('');
    let result = [];
    for(let i =0;i<arr.length;i++){
        if(arr[i]=="1"||arr[i]=="0"){
            continue;
        }
        else{
            let newlist  = keys[arr[i]].split('');
            result.push(newlist)
        }
    }
    let combinations = [];
    for(let i =0;i<result.length;i++){
            let j = result[i].length;
            let num = 0;
            console.log(i+1);
            // while(j>1){
            //     combinations.push(result[i][num]+result[i+1][num]);
            //     num++;
            //     j--;
            // }

    }
  return combinations
};

console.log(letterCombinations("123"));