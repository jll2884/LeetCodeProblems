/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    let copy1 = [...A];
    let copy2 = [...A];
    let ascending = copy1.sort((a,b)=>{ return a-b});
    let descending = copy2.sort((a,b)=>{ return b-a});

   return JSON.stringify(A) === JSON.stringify(ascending) || JSON.stringify(A) === JSON.stringify(descending);



};

console.log(isMonotonic([1,2,3]));