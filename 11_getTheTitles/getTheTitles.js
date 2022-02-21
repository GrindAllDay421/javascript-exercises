const getTheTitles = function(bookList) {
  let titleArr = bookList.map(book => book.title);
  return titleArr;
};

// Do not edit below this line
module.exports = getTheTitles;
