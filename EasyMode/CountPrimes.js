var countPrimes = function (n) {
    var isPrime = [],
        result = 0;
    for (var i = 2; i < n; i++) {
        if (isPrime[i] == undefined) {  // optimization i.e. proceed for only new numbers (not multiple of prime number)
            isPrime[i] = 1;               // found prime number
            result++;
            for (var j = 2; j * i < n; j++) { // multiple of prime number need to be discard we are setting value '0' to set certain value.
                isPrime[i * j] = 0;
            }

        }
    }
    return result;
}


// /**
//  * @param {number} n
//  * @return {number}
//  */
// var countPrimes = function(n) {
//     let counter = 0;
//     for(let i = 2;i<n;i++){
//         if(i==2){
//             counter+=1
//         }
//         else if(i%2==1 && (i**0.5)%2!=1){
//             counter+=1
//         }
//     }
//     return counter;
// };


