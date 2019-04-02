/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let letters = {
        a: ".-",
        b: "-...",
        c: "-.-.",
        d: "-..",
        e: ".",
        f: "..-.",
        g: "--.",
        h: "....",
        i: "..",
        j: ".---",
        k: "-.-",
        l: ".-..",
        m: "--",
        n: "-.",
        o: "---",
        p: ".--.",
        q: "--.-",
        r: ".-.",
        s: "...",
        t: "-",
        u: "..-",
        v: "...-",
        w: ".--", x: "-..-", y: "-.--", z: "--.."
    };
    let newArray = [];
    for(alpha in words){
        let word = words[alpha].split('');
        let placeholder = '';
        for(key in word){
            placeholder+=(letters[word[key]]) // should print out 24 items
        }
        newArray.push(placeholder)

    }

    let filteredArr= Array.from(new Set(newArray));

    return filteredArr.length
};

uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]);