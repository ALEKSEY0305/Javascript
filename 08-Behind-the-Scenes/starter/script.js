'use strict';

function calcAge(birthYear) {
    const age = 2022 - birthYear;

    function printAge() {
        const output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const firstName = 'Steven';     // first name will change because JS first looks for a variable in the current block
            const str = `Oh, you are a millenial, ${firstName}`;
            console.log(str);


            function add(a, b) {
                return a + b;
            } console.log(add (2, 7)); // will work only in the func block
        }
        console.log(millenial)   // var can be accessed because it's a function scope variable.
        // console.log(str) cannot be accessed because it's a block scope (let too)
        // add(2 + 3); doesn't work because funcs are blocks in ES6
    }
    printAge();
    return age;
}
const firstName = 'Alex';
calcAge(1995);