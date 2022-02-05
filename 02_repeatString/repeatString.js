const repeatString = function(str, num) {
  if(num < 0) {
    return 'ERROR';
  }

  let repeatStr = '';
  for(let i = 0; i < num; i++) {
    repeatStr = repeatStr.concat(str);
  }
  return repeatStr;
};

// Do not edit below this line
module.exports = repeatString;
