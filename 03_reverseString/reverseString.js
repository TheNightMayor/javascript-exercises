const reverseString = function(str) {
    const arr = [];
    for (let i=0; i<= str.length; ++i) {
        let letter = str.slice (i,(i+1));
        arr.push(letter);
    } //put slice from string length position into array 
    arr.reverse(); //reverse array
    let reverseStr = arr.join();//put elements from array into string //return string 
    reverseStr = reverseStr.replace(/,/g,''); //remove commas
    return reverseStr;
};
// Do not edit below this line
module.exports = reverseString;
