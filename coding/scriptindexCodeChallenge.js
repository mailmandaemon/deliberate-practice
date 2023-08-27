// ## Coding Challenge S2C1
// ## Coding Challenge S2C2
// ## Coding Challenge S2C3
// ## Coding Challenge S2C4
// ## Coding Challenge S3C1
// ## Coding Challenge S3C2
// ## Coding Challenge S3C3
// ## Coding Challenge S3C4
/* Aim
1 create array named bills
2 create empty arrays for the tips and totals
3 use calcTip function we to calculate the tips and total values
*/

let bills = [];
let tips = [];
let totals = [];

const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15;
    bill * 0.2
}