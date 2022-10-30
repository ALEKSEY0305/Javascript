// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const temperatures = [
    3,
    -2,
    -6,
    -1,
    'error',
    9,
    13,
    17,
    15,
    14,
    9,
    5,
];



// 1) understanding the problem
// - what is the temperatures amplitude? Answer: difference between highest and the lowest temp
// How to compute max and min temp?
// What's a sensor? What to do?


// 2) Breaking up into sub-problems
// How to ignire errors?
//Find max value in temp array
// Find min value
//Subtract min from max and return it

// const calcTempAmplitude = function (temps) {
//     let max = temps[0];
//     let min = temps[0];
//         for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if(typeof curTemp !== 'number') continue;

//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }
//     console.log(max, min);
//     return max - min;
// }
// const amplitudde = calcTempAmplitude(temperatures)
// console.log(amplitudde);

// // Problem 2
// //Function should recieve 2 arrays of temp

// // Understanding the problem
// // -With 2 arrays, should we implement functionality twice? NO! Just merge two arrays
// // Merge 2 arrays?

// const calcTempAmplitudeNew = function (t1, t2) {

//     const temps = t1.concat(t2)
//     console.log(temps)

//     let max = temps[0];
//     let min = temps[0];
//         for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if(typeof curTemp !== 'number') continue;

//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }
//     console.log(max, min);
//     return max - min;
// }
// const amplitudeNew = calcTempAmplitudeNew(temperatures)
// console.log(amplitudeNew);

// expected output: Array ["a", "b", "c", "d", "e", "f"]