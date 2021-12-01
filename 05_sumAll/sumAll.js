const sumAll = function(...ints) {  //make integers into array
    ints.sort();
    
    if (typeof ints[0]!== 'number' || typeof ints[1] !== 'number') {
        return 'ERROR';
    } else if (ints[0] < 0 || ints[1] <0) {
        return 'ERROR';
    } 
    const endInt = ints[1];
    for (let i = 0; i<endInt-2; ++i) {
        ints.splice(i+1,0,ints[i]+1)
    }
        //make loop to add numbers between integers to array
    let sum = ints.reduce(findSum);
        function findSum(total, value) {
           return total + value;
        }//add all numbers in array
    
    return sum //return sum
};
// Do not edit below this line
module.exports = sumAll;
