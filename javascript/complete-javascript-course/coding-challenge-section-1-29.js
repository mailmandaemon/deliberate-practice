/* Coding challenge 4
Calculate the tip value

@ 15% between 50, 300
otherwise %20
*/

billValues = [275, 40, 430];
console.log(
  billValues.map((val) => {
    return val >= 50 && val <= 300
      ? `The total value was ${
          val * 1.15
        }, the bill was ${val} and the tip was ${val * 0.15}`
      : `The total value was ${
          val * 1.2
        }, the bill was ${val} and the tip was ${val * 0.2}`;
  })
);
