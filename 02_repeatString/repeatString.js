const repeatString = function(input, num) {
    string = input;
    if (num === 0) {
        return ''
    } else if (num < 0) {
        return 'ERROR'
    } 
    for (let i=1; i < num; ++i){
        string += input    
    } 
    return string; 
};
// Do not edit below this line
module.exports = repeatString;