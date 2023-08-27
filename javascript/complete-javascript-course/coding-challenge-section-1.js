const massMarkTest1 = 78;
const massJohnTest1 = 92;
const heightMarkTest1 = 1.69;
const heightJohnTest1 = 1.95;
const massMarkTest2 = 95;
const massJohnTest2 = 85;
const heightMarkTest2 = 1.95;
const heightJohnTest2 = 1.76;

const bmiMark1 = massMarkTest1 / heightMarkTest1 ** 2;
const bmiMark2 = massMarkTest2 / heightMarkTest2 ** 2;
const bmiJohn1 = massJohnTest1 / (heightJohnTest1 * heightJohnTest1);
const bmiJohn2 = massJohnTest2 / (heightJohnTest2 * heightJohnTest2);
const markHigherBmi1 = bmiMark1 > bmiJohn1;
const markHigherBmi2 = bmiMark2 > bmiJohn2;
// const result1 = if(markHigherBmi1 == true)
//   { result1 = "Mark's BMI is higher, ";}
//   else {
//     result1 = "Johns's BMI is higher, ";
//   }
// const result2 = if(markHigherBmi2 == true)
//   { result2 = "Mark's BMI is higher, ";}
//   else {
//     result2 = "Johns's BMI is higher, ";
//   }
// console.log(
//   result1,
//   'John BMI = ' + Math.round((bmiJohn1 * 100) / 100),
//   'Mark BMI = ' + Math.round((bmiMark1 * 100) / 100),
// );
if (bmiMark1 > bmiJohn1) {
  console.log(
    `Result 1: Mark's BMI (${bmiMark1}) is higher than John's (${bmiJohn1})`
  );
} else {
  console.log(
    `Result 1: John's BMI (${bmiJohn1}) is higher than Mark's (${bmiMark1})`
  );
}
if (bmiMark2 > bmiJohn2) {
  console.log(
    `Result 1: Mark's BMI (${bmiMark2}) is higher than John's (${bmiJohn2})`
  );
} else {
  console.log(
    `Result 1: John's BMI (${bmiJohn2}) is higher than Mark's (${bmiMark2})`
  );
}
console.log(
  'John BMI = ' + Math.round((bmiJohn2 * 100) / 100),
  'Mark BMI = ' + Math.round((bmiMark2 * 100) / 100)
);
/** 
const massMarkTest1 = 78;
const massJohnTest1 = 92;
const heightMarkTest1 = 1.69;
const heightJohnTest1 = 1.95;
const massMarkTest2 = 95;
const massJohnTest2 = 85;
const heightMarkTest2 = 1.95;
const heightJohnTest2 = 1.76;

const bmiCalculation = mass, height) {
  mass / height ** 2;
}

bmiCalculationMark1(massMarkTest1, heightMarkTest1);
bmiCalculationJohn1(massJohnTest1, heightJohnTest2);
console.log(bmiCalculationMark1, bmiCalculationJohn1);

function bmiresult1() {
  if (
    bmiCalculation(massMarkTest1, heightMarkTest1) >
    bmiCalculation(massJohnTest1, heightJohnTest2)
  ) {
    markHigherBmi = true;
    console.log(markHigherBmi);
  } else {
    markHigherBmi = false;
    console.log(markHigherBmi);
  }
}
*/
