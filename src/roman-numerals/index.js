/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
 function romanToDecimal(roman) {
  var roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }
  var result = '';
  for (var key in roman) {
    if (num == roman[key]) {
      return result +=key;
    }
    var check = num > roman[key];
    if(check) {
      result = result + key.repeat(parseInt(num/roman[key]));
      num = num%roman[key];
    }
  }
 return result;

 }

 console.log(convertToRoman(3999));
 
 module.exports = romanToDecimal;
