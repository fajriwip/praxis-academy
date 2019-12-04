let _ = require('lodash');

let nmr = _.range(1,21);

let a = function(n){
    if(n % 3 === 0 && n % 5 === 0){
        n = 'fizzBuzz';
    } else if(n % 3 === 0){
        n = 'fizz';
    } else if(n % 5 === 0){
        n = 'buzz';
    }
    return n;
}

console.table(nmr.map(a));