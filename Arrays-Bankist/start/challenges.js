
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















  // let average = dogs.flat();
  // console.log(average)


//   const averageFood = function(avg) {
//     let rec = avg[0]
//     for(let i = 0; i < rec.length; i++) {
//     let food = avg[i]
//     food ** 0.75 * 28
//   } 
// } 
// const check = averageFood(dogs{weight})

// for( const x of dogs) {
//   dogs.flat()
//    recommendedFood = weight ** .75 * 28;
//   console.log(recommendedFood)}



// const new1 = []
// for( let i = 0; i < weight.length; i++ ) {
//   new1.push(`recommendedFood: ${weight[i]} ** 0.75 * 28`)
// }
// console.log(new1)

// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];

// // 1.
// dogs.forEach(dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28)));
// console.log(dogs)


// const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
// console.log(dogSarah)

// const ownersEatTooMuch = 











// Challenge 3


  const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
  ];
  
  // 1.
  dogs.forEach(dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28)));
  console.log(dogs)
  
  
  const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
  console.log(dogSarah)
  console.log(`Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recommendedFood ? 'much' : 'little'}`)

  // 3. 
  const ownersEatTooMuch = dogs.filter( dog => dog.curFood > dog.recommendedFood).map( dog => dog.owners).flat();
  console.log(ownersEatTooMuch);

  const ownersEatTooLittle = dogs.filter( dog => dog.curFood < dog.recommendedFood).flatMap(dog => dog.owners);
  console.log(ownersEatTooLittle);

  // 4
  
  console.log(`${ownersEatTooMuch.join( ' and ')}'s dogs eat too much`);

  console.log(`${ownersEatTooLittle.join( ' and ')}'s dogs eat too little`);

  
  // 5

  const exactAmount = dogs.filter(dog => dog.curFood === dog.recommendedFood);
  if(exactAmount >= 1) {
    console.log(`eating exactly the ammount of food that is recommended`)
  } else {
    console.log(`no dog is eating the exact ammount of food`)
  }

  console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

  // 6

  const eatingOkay = dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1

  console.log(dogs.some(eatingOkay))
// console.log(dogs.some(dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1));



// const okay = dogs.curFood > dogs.recommendedFood * 0.9 && dogs.curFood < dogs.recommendedFood * 1.1 ? `yes` : 'no';
// console.log(okay)        // MISTAKE


// 7. 

console.log(dogs.filter(eatingOkay))


// 8 
const dogsCopy = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood)
console.log(dogsCopy)