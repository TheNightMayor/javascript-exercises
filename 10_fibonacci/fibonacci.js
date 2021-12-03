const fibonacci = function(num) {
   if (num < 0) {
       return 'OOPS';
   }
    let fib = [1,1];
    for (let i=0; i<=num; ++i) {
        fib[i+2]=(fib[i]+(fib[i+1]))
    }
  return fib[num-1];
}

// Do not edit below this line
module.exports = fibonacci;
