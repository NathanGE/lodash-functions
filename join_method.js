"use strict"

var _ = {
  //Implement join function
  // https://lodash.com/docs#join
  join: (array, separator) => {
    let result = '';
    // default argument for separator still
    // not working in all environments
    var separator = typeof separator !== 'undefined' ? separator : ', ';
    for(let value of array){
      if (value === array[array.length - 1]) {
        result += value;
      } else {
        result += value + separator;
      }
    }
    return result;
  }
}

const value = _.join(["hello", "goodbye"], ", ");
console.log(value);
