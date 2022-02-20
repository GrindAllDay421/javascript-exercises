const palindromes = function (word) {
  const textTest = /[a-zA-Z]/g;
  const lettersOnly = word.match(textTest)
    .join('')
    .toLowerCase();
  const backwards = word.match(textTest)
    .reverse()
    .join('')
    .toLowerCase();
  return (lettersOnly === backwards ? true : false);
};

// Do not edit below this line
module.exports = palindromes;
