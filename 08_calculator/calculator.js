const add = function(addOne,addTwo) {
	return (addOne + addTwo)
};

const subtract = function(subOne,subTwo) {
	return (subOne - subTwo)
};

const sum = function(sumArray) {
  if (sumArray == 0) {
    return 0
  }
  let totalSum = sumArray.reduce(findSum);
  function findSum(total, value) {
    return total + value;
  }; 
  return totalSum; 
};

const multiply = function(multArray) {
  let multFinal = multArray.reduce(getMult);
  function getMult(total, num) {
    return total * num;
  };
  return multFinal;
};

const power = function(expBase,expTo) {
	return Math.pow(expBase,expTo)
};

const factorial = function(factInput) {
    if (factInput < 0) {
    return 'error'
  } else if (factInput === 0 || factInput === 1) {
    return 1
  } else {   
    let fact = 1;
    for (i = 1; i<=factInput; i++) {
      fact *=i;
    }
    return fact;
  } 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
