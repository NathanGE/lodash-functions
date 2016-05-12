"use strict";

var _ = {
  // Implement map
  // https://lodash.com/docs#map
  map: (array, callback) => {
    let result = [];
    if(callback === undefined){
      return array;
    }
    array.forEach(function(item){
      result.push(callback(item));
    });
    return result;
  }
}

// Define a method that multiplies the input by 10
function multiplyBy10(value) {
  return 10 * value;
}
const value = _.map([1, 2, 3], multiplyBy10);

// value => [10, 20, 30]
console.log(value);