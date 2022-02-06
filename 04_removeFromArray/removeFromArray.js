const removeFromArray = function(arr, ...target) {
  let filteredArr = arr;
  for(let i = 0; i < target.length; i++) {
    filteredArr = filteredArr.filter(item => item !== target[i]);
  }
  return filteredArr;
};

// Do not edit below this line
module.exports = removeFromArray;
