const palindromes = function (inputString) {
    let editedString = inputString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let lowerString = editedString.toLowerCase();
    let finalString = lowerString.replace(/\s/g,'');
    let wordArray = finalString.split('');
    wordArray = wordArray.reverse();
    let reversedWord = wordArray.join('');
    if (reversedWord == finalString) {
        return true;
    } else return false;
};

// Do not edit below this line
module.exports = palindromes;
