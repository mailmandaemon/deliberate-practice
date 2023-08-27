/* const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills =[125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]),calcTip(bills[2])]
console.log(bills, tips)
function sumArrays(array1, array2){
    let totals = [];
    let ctr = 0;
    let x = 0;

    if(array1.length === 0)
    return "array1 is empty"
    if (array2.length === 0)
    return "array2 is empty"

    while (ctr < array1.length && ctr < array2.length)
    {
        totals.push(array1[ctr] + array2[ctr]);
        ctr++;
    }
    if (ctr === array1.length){
        for (x =ctr; x < array2.length; x++) {
            totals.push(array2[x]);
        }
    }
    else {
        for (x =ctr; X < array1.length; x++)
        {totals.push(array1[x]);
        }
    }
    return totals
}
console.log(sumArrays(bills,tips)); */

// const { loadGetInitialProps } = require('next/dist/shared/lib/utils');

// ### 47. Looping Arrays, Breaking and Continuing
// const jonasArray = [
//   'jonas',
//   'schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
//   true,
// ];

// const types = [];

// for (let i = 0; i <= jonasArray.length; i++) {
//   console.log(jonasArray[i], typeof jonasArray[i]);
//   types[i] = typeof jonasArray[i];
//   // push
//   // types.push(typeof jonas[i];)
// }
// console.log(types);

// const birthYears = [1991, 2007, 2014, 2016];
// const dateToday = new Date();
// const yearCurrent = dateToday.getFullYear();
// console.log(yearCurrent);
// const ages = [];
// for (let i = 0; i < birthYears[i]; i++) {
//   ages.push(yearCurrent - birthYears[i]);
// }
// console.log(ages);

// //continue and break
// const typesContinue = [];

// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] !== 'string') continue;
//   typesContinue[i] = typeof jonasArray[i];
//   // push
//   // typesContinue.push(typeof jonasArray[i];)
// }
// console.log(typesContinue);

// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] === 'number') break;
//   typesContinue[i] = typeof jonasArray[i];
//   // push
//   // typesContinue.push(typeof jonasArray[i];)
// }
// console.log(typesContinue);

// ### 48. Looping Backwards and Loops in Loops

// Nested loops

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`Starting exercise ${exercise}`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`lifting weight repetition ${rep}`);
//   }
// }

// ### 49. The while Loop
// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`Starting exercise ${exercise}`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`lifting weight repetition ${rep}`);
//   }
// }
// // #### User a counter
// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weight repetition ${rep} XYX`);
//   rep++;
// }
// #### No counter
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(`Result on the dice ${dice}`);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop is about to end... You rolled a ${dice}`);
}
