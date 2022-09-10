let correct = 'my st(ring) [ok] {hello}';
let uncorrect = 'my st(ring) [o(k] {hello}';

syntaxChecker = (str) => {
  let stack = [];
  // For each char in the string
  [...str].forEach(c => {
    // opened char ? add to the stack
    if ('([{'.includes(c)){
      stack.push(c);
    }
    // closed char ? check if match the last opened
    else if (')]}'.includes(c)){
      let top = stack.pop();
      if (! (c === ')' && top === '('
          || c === ']' && top === '['
          || c === '}' && top === '{')){
        stack.push(c);
      }
    }
  });
  // stack empty = correct
  return stack.length === 0;
}

console.log(syntaxChecker(correct)); // true
console.log(syntaxChecker(uncorrect)); // false