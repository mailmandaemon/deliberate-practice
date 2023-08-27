// Javascript cookbook
// Create a pimitive
const str1 = 'string'; // the quoted string is the literal
const num1 = 1.45; // the quoted value of 1.45 is the literal
const answer1 = true; // the values of true or false are boolean literals
// Create a pimitive
const str2 = String('string'); //primtive string
const num2 = Number(1.45); // primitive number
const answer2 = Boolean(true); // Boolean primitive
// Instantiate and object, not the key word 'new'
const str3 = new String('string'); //primtive string
const num3 = new Number(1.45); // primitive number
const answer3 = new Boolean(true); // Boolean primitive

// check the difference between a primitive and object instance
// compare primitive to primitive
console.log('compare primitive to primitive');
if (str1 === 'string') {
  console.log('equal');
} else {
  console.log('not equal');
}
if (num1 === 1.45) {
  console.log('equal');
} else {
  console.log('not equal');
}
if (answer1 === true) {
  console.log('equal');
} else {
  console.log('not equal');
}
// compare primitive to primitive
console.log('compare primitive to primitive');
if (str2 === 'string') {
  console.log('equal');
} else {
  console.log('not equal');
}
if (num2 === 1.45) {
  console.log('equal');
} else {
  console.log('not equal');
}
if (answer2 === true) {
  console.log('equal');
} else {
  console.log('not equal');
}
// compare object to primitive
console.log('compare object to primitive');
if (str3 === 'string') {
  console.log('equal');
} else {
  console.log('not equal');
}
if (num3 === 1.45) {
  console.log('equal');
} else {
  console.log('not equal');
}
if (answer3 === true) {
  console.log('equal');
} else {
  console.log('not equal');
}
