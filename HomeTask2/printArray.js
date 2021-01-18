/**
 * Calculates the resultant string that is joined with delimiter ','
 * @param {Array} array array that containes elements you want to join
 * @returns {string} string that is joind with delimiter ','
 * 
 * @example printArray(["J","a", "v","a","s","c","r","i","p","t"]) results "J,a,v,a,s,c,r,i,p,t"
 */
function printArray(array) {
    let joinedString = array.join(",");
    return joinedString;
}

console.log(printArray(["J", "a", "v", "a", "s", "c", "r", "i", "p", "t"])); //expected "J,a,v,a,s,c,r,i,p,t"