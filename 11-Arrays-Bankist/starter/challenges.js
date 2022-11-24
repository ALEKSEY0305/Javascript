
//CHALLENGE 1

// checkDogs()
const checkDogs = function(dogsJulia, dogsKate) {
    // const correctedDogsJulia = dogsJulia.slice(1,3);   
    //is okay, but slice is also good
    const correctedDogsJulia = dogsJulia.slice();
    correctedDogsJulia.splice(0, 1);
    // correctedDogsJulia.splice(-2);
    // console.log(correctedDogsJulia)
    const allDogs = correctedDogsJulia.concat(dogsKate)
    // const allDogs= [...correctedDogsJulia, ...dogsKate]
    // console.log(allDogs)
    allDogs.forEach(function(dog, i) {
      if (dog >= 3) {
        console.log(`Dog number ${i + 1} is an adult 🦮, and is ${dog} year(s) old`)
      } else {
        console.log(`Dog number ${i + 1} is a puppy 🐶, and is ${dog} year(s) old`)
      }
    })
  };
  
  checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])
  // checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4])
  
  
  const calcAverageHumanAge = function(ages) {
    const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
    console.log(humanAges)
    const adults = humanAges.filter(age => age >= 18)
    console.log(adults)
  
    const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
    console.log(`The average age is ${average}`)
  }
  
  const average1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
  const average2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])