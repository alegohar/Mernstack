
const points = [40, 100, 1, 5, 250, -2];
const sortz = points.sort((a,b) => a - b);
const maxNum = sortz.reverse();
console.log("Min Num is " + maxNum[0]);
