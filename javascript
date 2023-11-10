Problem 1: Take a sentence as an input and reverse every word in that sentence.

let a = prompt("Enter the string: ");
let e = reverseword(a,"");
let f = reverseword(e," ");
console.log(f);
function reverseword(a,b){
  return a.split(b).reverse().join(b); 
}



Problem 2: Perform sorting of an array in descending order.

let a = [12, 78, 45, 56, 89];
let b = a.sort(compare);
console.log(b);
function compare(a,b){
  return b-a;
}