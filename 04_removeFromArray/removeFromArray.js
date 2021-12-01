const removeFromArray = function(initArray,...args) {
        for(let i=0; i<=args.length; ++i) {
            for(let j=0; j<=initArray.length; ++j) {
                if (args[i] === initArray[j]) {
                    initArray.splice(j,1);
                }
            }
        }
        return initArray;
   }
// Do not edit below this line
module.exports = removeFromArray;