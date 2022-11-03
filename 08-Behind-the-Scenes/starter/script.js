'use strict';

function calcAge(birthYear) {
    const age = 2022 - birthYear;

    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);
        
        if(birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            // creating NEW variable with the same name as outer scope's variable
            const firstName = 'Steven';     // first name will change because JS first looks for a variable in the current block

            // Reassigning outer scope's variable
            output = 'NEW OUTPUT'
            const str = `Oh, you are a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            } console.log(add (2, 7)); // will work only in the func block

        }
        console.log(millenial)   // var can be accessed because it's a function scope variable.
        // console.log(str) cannot be accessed because it's a block scope (let too)
        // add(2 + 3); doesn't work because funcs are blocks in ES6
        console.log(output)
    }
    printAge();
    return age;
}
const firstName = 'Alex';
calcAge(1995);









// TERMINAL RESULTS Alex, you are 27, born in 1995
// script.js:18 Oh, you are a millenial, Steven            ==>  First output
// script.js:22 9
// script.js:25 true
// script.js:28 NEW OUTPUT       ==> Second output
