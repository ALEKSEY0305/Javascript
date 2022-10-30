// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const temperatures = [
//     3,
//     -2,
//     -6,
//     -1,
//     'error',
//     9,
//     13,
//     17,
//     15,
//     14,
//     9,
//     5,
// ];



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




// const measureKelvin = function() {
//     const measurement = {
//         type: 'temp',
//         unit: 'celsius',
//         // value: Number(prompt('Degrees celsius:')),
//         value: 10,
//     }


//     //find bug
//     console.log(measurement.value);
//     console.table(measurement);
//     // console.warn(measurement.value);
//     // console.error(measurement.value);
//     const kelvin = measurement.value + 273;
//     return kelvin;
// }
// console.log(measureKelvin())


// // Using a debugger
// const calcTempAmplitudeBug = function (t1, t2) {

//     const temps = t1.concat(t2)
//     console.log(temps)

//     let max = temps[0];
//     let min = temps[0];
//         for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if(typeof curTemp !== 'number') continue;
//         // debugger;
//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }
//     console.log(max, min);
//     return max - min;
// }
// const amplitudeBug = calcTempAmplitudeBug(temperatures)
// console.log(amplitudeBug);

const data1 = [
    17, 
    21,
    23, 
    
];

const data2 = [
    12,
    5,
    -5,
    0,
    4,       
];
console.log(`...${data1[0]}C ... ${data1[1]}C ... ${data1[2]}C ...`);

const printForecast = function(arr) {
    let str = '';
    for(let i = 0; i < arr.length; i++){
        // str = str + `${arr[i]}C in ${i + 1} days ... `
        str += `${arr[i]}C in ${i + 1} days ... `
    }
    console.log(`...${str}`)
}
printForecast(data1)
// // console.log(maxTemp)
// const printForecast = function(){
//    if(maxTemp[0]) {
//     console.log(`...${maxTemp[0]}C in one day`)
//    } else if(maxTemp[0]) {
//     console.log(`...${maxTemp[1]}C in two days`)
//    } else if(maxTemp[2]) {
//     console.log(`...${maxTemp[2]}C in one day`)
//    } else if(maxTemp[3]) {
//     console.log(`...${maxTemp[3]}C in one day`)
//    } else if(maxTemp[4]) {
//     console.log(`...${maxTemp[4]}C in one day`)
//    } else {`No more forecast `}
// }; 
// console.log(printForecast())
