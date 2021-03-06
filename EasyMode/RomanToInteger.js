var romanToInt = function(s) {
    var romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    var result = 0;

    for (var i = 0; i < s.length; i++) {
        if (romanMap[s[i]] < romanMap[s[i+1]]) {
            result += romanMap[s[i + 1]] - romanMap[s[i]];
            i++;
        } else {
            result += romanMap[s[i]];
        }
    }

    return result;
};