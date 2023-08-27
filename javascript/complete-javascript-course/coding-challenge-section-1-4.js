/*
1 - calculate average score
2 - compare teams average score and determine the winner
3 - minimum score of 100
4 - apply minimum to draw
Notes
 1 - create array for the scores
 2 - average score
 3 - results (win, loss, draw, no result)
*/
const koalasOne = [88, 91, 116];
const dolphinsOne = [109, 95, 123];
const koalasTwo = [109, 95, 123];
const dolphinsTwo = [97, 112, 101];
const koalasThree = [109, 95, 106];
const dolphinsThree = [97, 112, 101];
/* One */
let lengthArrayKoalasOne = koalasOne.length;
let sumArrayKoalasOne = koalasOne.reduce(function (a, b) {
  return a + b;
}, 0);
let lengthArrayDolphinsOne = dolphinsOne.length;
let sumArrayDolphinsOne = dolphinsOne.reduce(function (a, b) {
  return a + b;
}, 0);
let averageResultKoalasOne = sumArrayKoalasOne / lengthArrayKoalasOne;
let averageResultDolphinsOne = sumArrayDolphinsOne / lengthArrayDolphinsOne;
console.log(
  `${sumArrayKoalasOne} / ${lengthArrayKoalasOne} = ${averageResultKoalasOne}`
);
console.log(
  `${sumArrayDolphinsOne} / ${lengthArrayDolphinsOne} = ${averageResultDolphinsOne}`
);
if (averageResultDolphinsOne < 100 || averageResultKoalasOne < 100) {
  console.log('ResponseOne: no result');
} else if (averageResultDolphinsOne > averageResultKoalasOne) {
  console.log('ResponseOne: Dolphins win!');
} else if (averageResultDolphinsOne == averageResultKoalasOne) {
  console.log("ResponseOne: It's a draw!");
} else {
  console.log('ResponseOne: Koalas win!');
}
/* Two */
let lengthArrayKoalasTwo = koalasTwo.length;
let sumArrayKoalasTwo = koalasTwo.reduce(function (a, b) {
  return a + b;
}, 0);
let lengthArrayDolphinsTwo = dolphinsTwo.length;
let sumArrayDolphinsTwo = dolphinsTwo.reduce(function (a, b) {
  return a + b;
}, 0);
let averageResultKoalasTwo = sumArrayKoalasTwo / lengthArrayKoalasTwo;
let averageResultDolphinsTwo = sumArrayDolphinsTwo / lengthArrayDolphinsTwo;
console.log(
  `${sumArrayKoalasTwo} / ${lengthArrayKoalasTwo} = ${averageResultKoalasTwo}`
);
console.log(
  `${sumArrayDolphinsTwo} / ${lengthArrayDolphinsTwo} = ${averageResultDolphinsTwo}`
);
if (averageResultDolphinsTwo < 100 || averageResultKoalasTwo < 100) {
  console.log('ResponseTwo: no result');
} else if (averageResultDolphinsTwo > averageResultKoalasTwo) {
  console.log('ResponseTwo: Dolphins win!');
} else if (averageResultDolphinsTwo == averageResultKoalasTwo) {
  console.log("ResponseTwo: It's a draw!");
} else {
  console.log('ResponseTwo: Koalas win!');
}
/* Three */
let lengthArrayKoalasThree = koalasThree.length;
let sumArrayKoalasThree = koalasThree.reduce(function (a, b) {
  return a + b;
}, 0);
let lengthArrayDolphinsThree = dolphinsThree.length;
let sumArrayDolphinsThree = dolphinsThree.reduce(function (a, b) {
  return a + b;
}, 0);
let averageResultKoalasThree = sumArrayKoalasThree / lengthArrayKoalasThree;
let averageResultDolphinsThree = sumArrayDolphinsThree / lengthArrayKoalasThree;
console.log(
  `${sumArrayKoalasThree} / ${lengthArrayKoalasThree} = ${averageResultKoalasThree}`
);
console.log(
  `${sumArrayDolphinsThree} / ${lengthArrayDolphinsThree} = ${averageResultDolphinsThree}`
);
if (averageResultDolphinsThree < 100 || averageResultKoalasThree < 100) {
  console.log('ResponseThree: no result');
} else if (averageResultDolphinsThree > averageResultKoalasThree) {
  console.log('ResponseThree: Dolphins win!');
} else if (averageResultDolphinsThree == averageResultKoalasThree) {
  console.log("ResponseThree: It's a draw!");
} else {
  console.log('ResponseThree: Koalas win!');
}
