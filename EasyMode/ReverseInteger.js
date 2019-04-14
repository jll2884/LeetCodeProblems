/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let arr = x.toString().split('');
    if (arr[0] == '-') {
        arr.shift();
        let final = arr.reverse();
        final.unshift('-');
        if (final.join('') <= 2147483647 && final.join('') >= -2147483648) {
            return final.join('')
        }
        else {
            return 0
        }
    }
    else if (arr[arr.length - 1] == '0') {
        arr.pop();
        arr = arr.reverse().join('');
        if (arr <= 2147483647 && arr >= -2147483648) {
            return arr
        }
        else {
            return 0
        }
    }
    else {
        arr = arr.reverse().join('');
        if (arr<= 2147483647 && arr >= -2147483648) {
            return arr
        }
        else {
            return 0
        }

    }
};
console.log(reverse(-123));