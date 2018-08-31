'use strict';

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    //if the top of the stack is empty, then the data will be the
    //top of the stack
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    //if the top already has something then create a new node
    //add data to the new node
    // have the pointer point to the top
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    //in order to remove the top of the stack, you have to point
    //the pointer to the next item and that next item becomes the
    //top of the stack
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

let starTrek = new Stack();

function display(stack) {
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

  return starTrek;
  console.log(JSON.stringify(starTrek, null, 2));
}

function peek(stack) {
  return stack.top.data;
  console.log(stack.top.data);
}

peek(display(starTrek));


function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  //   return s;
  //input: 1001
  //"1001"
  // your code goes here
  //make a stack
  // pop each letter and store temp string
  //compare original string or ]
  //console.log(s.pop());

  let letterStack = new Stack();
  //loop through our string add to stack
  for(let i=0; i < s.length; i++){
    letterStack.push(s[i]);
  }

  let tempString='';

  for(let i=0; i < s.length; i++){
    tempString += letterStack.pop();


  }

  if(tempString === s) {
    return true;
  } else {
    return false;
  }

}

//If " " - ' '
//then - ignore everything that within it
function isClosed(s) {
  let notMatch=true;
  s = s.trim();
  const charsToArr = s.split('');

  if(s.includes('"') || s.includes("'")) {
    //We need to find the first index to find the opener
    const openerQuote = s.indexOf("'") || s.indexOf('"');
    const closerQuote = s.lastIndexOf("'") || s.lastIndexOf('"');
    // console.log('Line 103', openerQuote, closerQuote)

    if(openerQuote === closerQuote) {
      console.log("Quote is not closed!")
    } else if (openerQuote && closerQuote){
      //Ignore what is within...
      const difference = closerQuote - openerQuote;
      const splicedChars = charsToArr.splice(openerQuote, difference + 1).join('');
      console.log('These are the spliced characters!', splicedChars);
    }
  }

  console.log('This is s!', s)
  s = charsToArr.filter(c => c === '(' || c === '[' || c === '{'  || c === ')' || c === ']' || c === '}').join('');
  // if(s.length %2)
  console.log('FILTERED STRING', s);

  if(s.length%2 !== 0){
    return notMatch=false;
  }

  // if(!s.includes( ')') || !s.includes( ']') || !s.includes( '}')){
  //   console.log('Made it to Line 126!', s)
  //   return notMatch=false;
  // }

  if(s[0] === ')' || s[0] === ']' || s[0] === '}'){
    return notMatch=false;
  }

  let parens = new Stack();

  let openParensCount = 0;
  //((
  //)
  for(let i=0; i < s.length; i++){
    if(s[i] === '(' ||  s[i] === '[' || s[i] === '{'){
      parens.push(s[i]);
      openParensCount++;
    }
    else if (s[i] === ')' ||  s[i] === ']' || s[i] === '}' )
    {
      let currentTop = parens.pop();

      //compare the top open character with the found closed character
      switch(s[i]){
      case ')':
        if(currentTop + s[i] === '()'){
          // console.log('MATCH FOUND ()');
        } else {
          notMatch = false;
        }
        break;

      case ']':
        if(currentTop + s[i] === '[]'){
          // console.log('MATCH FOUND []');
        }else {
          notMatch = false;
        }
        break;

      case '}':
        if(currentTop + s[i] === '{}'){
          // console.log('MATCH FOUND {}');
        }
        else {
          notMatch = false;
        }
        break;

      default:
        notMatch = false;
        //console.log('MATCH NOT FOUND');
      }

    }

  }

  return notMatch;

  //String with parens is in the stack - DONE!

  // Get first value - ")" DONE!
  // Get last value - "(" DONE!
  // Concat first and last value as a string
  // Compare it to a string that looks like this "()"

  // const openParens = peek(parens);
  // const closedParens = parens.top.next.data;
  // const combo = closedParens + openParens;
  // const complete = '()';

  // if(combo === complete) {
  //   return true;
  // }
  // console.log(parens);

}

// console.log(JSON.stringify(parens, null, 2));
// console.log(isClosed('(((((('));

// console.log(isClosed('(1 + 2) + 3'));   //true
// console.log(isClosed('(1 + 2) + 3)'));   //false
// console.log(isClosed(')1 + 2) + 3'));  //false
// console.log(isClosed('(1 + 2 + (3)'));  //false
// console.log(isClosed('([({})])')); //true
// console.log(isClosed('([({)}])')); //false
// console.log(isClosed("'{(\"'")); -- check this later
// console.log(isClosed("[{'('}('')]")); -- false
// console.log(isClosed("[{'(\"}('')]")); -- false

// console.log(isClosed("(({'hello'}))"));

//input - () type String
//output - true

//V1 - ()
// error - ( ...
// error - ... )
