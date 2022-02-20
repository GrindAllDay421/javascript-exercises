const fibonacci = function(num) {
  let fibArr = [1, 1];
  let goalNum = num;

  if(typeof goalNum !== 'number') {
    goalNum = parseInt(num);
  }

  if(num < 0) {
    return 'OOPS';
  } else if(goalNum === 1 || goalNum === 2) {
    return 1;
  } else {
    let nextNum = 0;

    for(let sequence = 2; sequence < goalNum; sequence++) {
      nextNum = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
      fibArr.push(nextNum);
    }
    return nextNum;
  }
};

// Do not edit below this line
module.exports = fibonacci;
