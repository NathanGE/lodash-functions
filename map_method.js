"use strict";

var _ = {
  // Implement map
  // https://lodash.com/docs#map
  map: (array, callback) => {
    let result = [];
    if(callback === undefined){
      return array;
    }
    for(let item of array) {
      result.push(callback(item));
    }
    return result;
  }
}

function multiplyBy10(value) {
  return 10 * value;
}
const value = _.map([1, 2, 3], multiplyBy10);

console.log(value);
