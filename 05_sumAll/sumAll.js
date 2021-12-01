const sumAll = function(...ints) {  //make integers into array
    ints.sort(); 
    const endInt = ints[1];   
    for (let i = 0; i<endInt-2; ++i) {
        if (ints[i] < 0) {
            return 'ERROR';
        } 
        //else if () {
        //    return 'ERROR';
        //}
         else {ints.splice(i+1,0,ints[i]+1)
        }
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
