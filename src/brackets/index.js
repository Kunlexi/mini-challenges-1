/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
 function isValid(str) {let tmp = 0;
  for (c of str) {
    if (c === '(') tmp++;
    else if (c === ')' && --tmp < 0) return false; // Unexpected  ')' 
  }
  return tmp === 0; // False if unbalanced
}
const valid = '[()]{}{[()()]()}';
const inValid = '[(])';

//isValid('[()]{}{[()()]()}');
//isValid('[(])');;
//console.log

console.log(isValid(valid));
console.log(isValid(inValid));
//console.log(validate(veryBadBrackets));

 module.exports = isValid;

 //const goodBrackets = '(((())))';
//const badBrackets = '(()())))';
//const veryBadBrackets = '(()())()))';