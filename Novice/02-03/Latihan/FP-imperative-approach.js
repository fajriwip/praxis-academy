var numbers = [0,1,2,3,4,5,6,7,8,9,10];
var evenNumbers = [];

for(var i = 1; i < numbers.length; i++){
    if(numbers[i] % 2 == 0){
        evenNumbers.push(numbers[i]);
    }
}

console.log(evenNumbers);

// -------------

const even = n => n % 2 == 0;
const listOfNumbers = [0,1,2,3,4,5,6,7,8,9];
console.log(listOfNumbers.filter(even));

// =============

var randomNum = [12,7,45,23,2,7,4,8,9,14,6];
var filterArray = function(x, coll){
    var resultArray = [];

    for(var i = 0; i < coll.length; i++){
        if(coll[i] < x){
            resultArray.push(coll[i]);
        }
    }
    return resultArray;
}

console.log(filterArray(8, randomNum));