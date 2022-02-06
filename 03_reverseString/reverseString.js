const reverseString = function(string) {
  let strArr = string.split('');
  let reversed = strArr.reverse();
  return reversed.join('');
};

// Do not edit below this line
module.exports = reverseString;
