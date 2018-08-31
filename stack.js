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
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
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

function isClosed(s) {
  s = s.trim();

  let parens = new Stack();

  for(let i=0; i < s.length; i++){
    if(s[i] === "(" || s[i] === ")" || s[i] === "[" || s[i] === "]")
    parens.push(s[i])
  }

//String with parens is in the stack - DONE!

// Get first value - ")" DONE!
// Get last value - "(" DONE!
// Concat first and last value as a string
// Compare it to a string that looks like this "()"

const openParens = peek(parens);
const closedParens = parens.top.next.data;
const combo = closedParens + openParens;
const complete = "()";

  if(combo === complete) {
    return true;
  }
console.log(parens)

}

// console.log(JSON.stringify(parens, null, 2));
console.log(isClosed("(hello)"));

//input - () type String
//output - true

//V1 - ()
// error - ( ...
// error - ... )
