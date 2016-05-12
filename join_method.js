"use strict"

var _ = {
  //Implement join function
  // https://lodash.com/docs#join
  join: (array, separator) => {
    var result = '';
    var separator = typeof separator !== 'undefined' ? separator : ', ';
    array.forEach(function(value){
      if (value === array[array.length - 1]){
        result += value;
      } else {
        result += value + separator;
      }
    });
    return result;
  }
}

const value = _.join(["hello", "goodbye"], ", ");
console.log(value);
