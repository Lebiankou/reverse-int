module.exports = function reverse (n) {
  let strNum = (n.toString().split('').reverse().join(''));
  let strNumToInt = parseInt(strNum);
  return strNumToInt;
}
