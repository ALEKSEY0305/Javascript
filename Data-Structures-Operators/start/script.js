'use strict';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];


// Data needed for first part of the section
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 12 + 12,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // openingHours: openingHours,   // BEFORE ES 6
  openingHours,   // After ES 6

  

  // order: function(starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },


  // orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
  //   console.log(`Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
  //   );
  // },
  orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  // orderPasta: function(ing1, ing2, ing3){
  //   console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
  // },
  orderPasta(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
  },

  // orderPizza: function(mainIngredient, ...otherIngredients) {
  //   console.log(mainIngredient);
  //   console.log(otherIngredients);
  // },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
  
};


// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

  console.log(flights.split('+'))

const getCode = str => str.slice(0, 3).toUpperCase();

  for(const flight of flights.split('+')) {
    const [type, from, to, time] = flight.split(';');
    // const output = `${type.startsWith('_Delayed') ? '????' : ''}${type.replaceAll('_', ' ')} ${from.slice(0, 3)} ${to.slice(0, 3)} (${time.replace(':', 'h')})`;
    const output = `${type.startsWith('_Delayed') ? '????' : ''}${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(44);
    console.log(output)
  }


// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));


// document.querySelector('button').addEventListener('click',function(){
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   console.log(rows)


//   for(const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');
//     const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
//     console.log(`${output.padEnd(20, ' ')}${'???'.repeat(i + 1)}`);
//   }
// })


// underscore_case
//  first_name
// Some_Variable 
//   calculate_AGE
// delayed_departure


// underscore_case ====> underscoreCase
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure


// // SPLIT and JOIN
// console.log('a+very+nice+string'.split('+'));
// console.log('Aleksey Kim'.split(' ')) // creates 1 array with 2 elements

// const [firstName, lastName] = 'Aleksey Kim'.split(' ')  // DIVIDES ARRAYS


// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ')
// console.log(newName)


// const capitalizedName = function(name) {
//   const names = name.split(' ')
//   const namesUpper = []

//   for(const n of names) {
//     namesUpper.push(n[0].toUpperCase() + n.slice(1))  // Adds the first letter with the rest of the name
//     // namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
//   }
//   console.log(namesUpper.join(' '))   // JOIN adds together the arrays
// }

// capitalizedName('jessica ann smith davis')
// capitalizedName('kim aleksey romanovich')



// // PADDING
// const message = 'Go to gate 23!'
// console.log(message.padStart(25, '+').padEnd(30, '+'))
// console.log('Alex'.padStart(25, '+'))
// console.log('Alex'.padEnd(25, '+'))

// const maskCreditCard = function(number) {
//   const str = number + '';
//   const last = str.slice(-4)
//   return last.padStart(str.length, '*');
// }
// console.log(maskCreditCard(2314233))
// console.log(maskCreditCard(231421541242133))
// console.log(maskCreditCard('76823142154124213365'))



// // REPEAT

// const message2 = 'Bad weather... All Departures Delayed... ';
// console.log(message2.repeat(5))

// const planesInLine = function(n) {
//   console.log(`There are ${n} planes in line ${'????'.repeat(n)}`)
// }

// planesInLine(3)
// planesInLine(5)
// planesInLine(12)

// WORKING WITH STRING - PART 2

// const airline = 'TAP Korean Air'

// console.log(airline.toUpperCase())
// console.log(airline.toLowerCase())


// //fixing typos
// const passenger = 'aLex'
// const passengerLower = passenger.toLowerCase()
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1)
// console.log(passengerCorrect);

// // user input email comparingg

// const email = 'hello@alex.io';
// const logInEmail = 'Hello@Alex.Io \n';

// // const lowerEmail = logInEmail.toLowerCase()
// // const trimmedEmail = lowerEmail.trim()
// // console.log(trimmedEmail)

 
// const normalizedEmail = logInEmail.toLowerCase().trim();
// console.log(normalizedEmail)
// console.log(email === normalizedEmail);



// // REPLACING 
// const priceGB = '288,97#'
// const priceUS = priceGB.replace('#', '$').replace(',', '.')
// console.log(priceUS)


// const announcement = 'All passengers come to boarding door 23. Boarding door 23';
// console.log(announcement.replace('door', 'gate'))
// console.log(announcement.replaceAll('door', 'gate'))

// console.log(announcement.replaceAll(/door/g, 'gate')) // REGULAR EXPRESSION (ALTERNATIVE TO replaceAll)

// //BOOLEANS

// const plane = 'Airbus A320neo'
// console.log(plane.includes('A320'))
// console.log(plane.includes('Boeing'))
// console.log(plane.startsWith('Air'))

// if(plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW airbus family')
// }
// if(plane.startsWith('Airbus') || plane.endsWith('neo')) {
//   console.log('Part of the NEW airbus family')
// }


// // Practice Exercise
// const checkBaggage = function(items) {
//   const baggage = items.toLowerCase();
//   if(baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are not allowed')
//   } else {
//     console.log('You are welcome')
//   }
// }
//   checkBaggage('I have a laptop, some Food, and a pocket Knife')
//   checkBaggage('Socks and camera')
//   checkBaggage('Got some snacks and a gun for protection')
 







// // Working with strings

// const airline = 'TAP Korean Air';
// const plane = 'A320'

// console.log(plane[0])
// console.log(plane[1])
// console.log(plane[2])
// console.log('B737' [0])


// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));    //starts from 0
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('korean'))
// console.log(airline.slice(4))   //extraction starts from the 4th letter
// console.log(airline.slice(4, 7))


// console.log(airline.slice(0, airline.indexOf(' ')))
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function(seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1)
//   if(s === 'B' || s === 'E') {
//     console.log('You got the Middle seat')
//   } else {
//     console.log('You got lucky')
//   }
// }
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');





//Challenge 2
// const gameEvents = new Map([
//   [17, '?????? GOAL'],
//   [36, '???? Substitution'],
//   [47, '?????? GOAL'],
//   [61, '???? Substitution'],
//   [64, '???? Yellow card'],
//   [69, '???? Red card'],
//   [70, '???? Substitution'],
//   [72, '???? Substitution'],
//   [76, '?????? GOAL'],
//   [80, '?????? GOAL'],
//   [92, '???? Yellow card'],
// ]);


// const events = [
//   '?????? GOAL',
//   '???? Substitution',
//   '???? Yellow card',
//   '???? Red card'
// ];
// gameEvents.delete(64);   // WAS UNFAIR. SO, REMOVED
// console.log(gameEvents);

// console.log(`An event happened, on average, every 9 minutes`);

// for(const [key, value] of gameEvents) {
//   if( key < 45 ) {
//     console.log(`[First half] ${key}: ${value}`)
//   } else if( key > 45 && key < 90){
//     console.log(`[Second half] ${key}: ${value}`)
//   } else {
//     console.log(`[EXTRA TIME] ${key}: ${value}`)

//   };
// };



// MAPS: ADVANCED


// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct????'],
//   [false, 'Try again!'],
// ])
// console.log(question)

// question.set(4, 'Python')
// console.log(question)



// // CONVERT OBJECTS TO MAPS
// console.log(Object.entries(openingHours))
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap)


// // Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your answer'));
// const answer = 3
// console.log(answer)

// console.log(question.get(question.get('correct') === answer))


// // Convert map to array
// console.log([...question])
// console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);



// if(3) {
//   console.log(`Correct!`)
// } else {
//   console.log('NO')
// }

// MAPS: FUNDAMENTALS


// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy')
// console.log(rest.set(2, 'Lisbon, Portugal'))

// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
// .set('open', 11)
// .set('close', 23)
// .set(true, 'We are open')
// .set(false, 'We are closed')

// console.log(rest.get('name'))
// console.log(rest.get(true))
// console.log(rest.get(1))

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')))

// console.log(rest.has('categories'))
// rest.delete(2)
// // console.log(rest.clear())
// const arr = [1, 2]
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading')
// console.log(rest)
// console.log(rest.size)

// console.log(rest.get(arr));













//SETS

// const ordersSet = new Set([
//   'Pasta', 
//   'Pizza', 
//   'Pizza', 
//   'Risotto', 
//   'Pasta', 
//   'Pizza',
// ]);

// console.log(ordersSet);

// console.log(new Set('Alex'));

// console.log(new Set());


// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));

// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// // ordersSet.delete('Risotto')
// console.log(ordersSet)

// for( const order of ordersSet) console.log(order)


// //EXAMPLE



// const staff = [
//   'waiter',
//   'chef',
//   'waiter',
//   'manager',
//   'chef',
//   'waiter',
// ]

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(['waiter', 'chef', 'waiter','manager', 'chef', 'waiter',]).size)


// console.log(new Set('kimalekseyromanovich').size)















// // Property names
// const properties = Object.keys(openingHours);   //Object.keys
// console.log(properties)

// // console.log(`We are open on ${properties.length} days`)
// let openStr = `We are open on ${properties.length} days:`
// for (const day of properties) {
//   openStr += ` ${day},`;
// }
// console.log(openStr)




// // Property VALUES
// const values = Object.values(openingHours);   //Object Values()
// console.log(values)


// // Entire object
// const entries = Object.entries(openingHours);
// console.log(entries)

// for(const [key, {open, close}] of entries) {
//   console.log(` On ${key} we open at ${open} and close at ${close}`)  // Object.entries()
// }



// if(restaurant.openingHours && restaurant.openingHours.mon) console.log    //too long
// (restaurant.openingHours.mon.open)    // undefined

// if(restaurant.openingHours.fri) console.log
// (restaurant.openingHours.fri.open)    //friday 11


// // With optional chaining operator
// console.log(restaurant.openingHours.mon?.open)
// console.log(restaurant.openingHours.fri?.open);


// // Example

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for(const day of days) {
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed' // || will make it false because sunday is 0, ?? will make it work
//   console.log(`On ${day}, we open at ${open}`)
// }


// // Methods 
// console.log(restaurant.order?.(0,1) ?? `Doesn't exist`);
// console.log(restaurant.orderRisotto?.(0,1) ?? `Doesn't exist`);


// // Arrays

// const users = [{name: 'Jonas', email: 'alexG@gmail.com'}];

// // const users = []

// console.log(users[0]?.name ?? 'User array emppty');

// if(users.length > 0) console.log(users[0].name);
// else console.log(`empty`)
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu)

// for(const food of menu) console.log(food);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1} : ${el}`)     
//   // 'i' is a number and 'el' is the name of food 



// // for (const food of menu.entries()) {
// //   console.log(`${food[0] + 1} : ${food[1]}`)
// //   // console.log(food)
// }
// console.log([...menu.entries()])



// const game = {
//   team1: 'Bayern Munich', team2: 'Borrussia Dortmund', players: [
//   [
//   'Neuer',
//         'Pavard',
//         'Martinez',
//         'Alaba',
//         'Davies',
//         'Kimmich',
//         'Goretzka',
//         'Coman',
//         'Muller',
//         'Gnarby',
//         'Lewandowski',
//   ], [
//         'Burki',
//         'Schulz',
//         'Hummels',
//         'Akanji',
//         'Hakimi',
//         'Weigl',
//         'Witsel',
//         'Hazard',
//         'Brandt',
//         'Sancho',
//         'Gotze',
//   ], ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//     'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//       team1: 1.33,
//       x: 3.25,
//       team2: 6.5,
//   }, };

// const goals = game.scored
// for(const [scored] of goals) {
//   console.log(`Goal 1: ${game.scored[0]}, Goal 2: ${game.scored[1]}, Goal 3: ${game.scored[2]}, Goal 4: ${game.scored[3]}`)
//   // console.log(goals)
// } 

// //1 
// for(const [i, player] of game.scored.entries()) 
//   console.log(`Goal ${i + 1}: ${player}`)
//   // console.log(goals)


// const average = game.odds
// for(const [num] of average) {
//   console.log(`(${average[0]} + ${game.odds.x} + ${game.odds.team2}) / 3`)
// } 


// const odds = Object.values(game.odds);
// let average = 0;
// for(const odd of odds) average += odd;

// // console.log(average)
// average /= odds.length;     // = 11.08 / 3
// console.log(average);


// //3
// for(const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }
//Challenge #1
// // 1.
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);


// //3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //4. 
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
// console.log(players1Final);

// 5. 
// const team1 = game.odds.team1;
// console.log(team1);

// const draw = game.odds.x;
// console.log(draw);

// const team2 = game.odds.team2;
// console.log(team2);

// const {odds: {team1, x: draw, team2}} = game;
// console.log(team1, draw, team2)


// // 6. 
// const printGoals = function(...goals){
//   console.log(goals)
//   console.log(`${goals.length} goals were scored`)
// }
// printGoals('Davies', 'Muller', 'Lewandowski','Kimmich');
// // printGoals(...game.scored)


// // 7. 
// const winner = game.odds.team1 <= game.odds.team2 ? `${game.team1} is likely to win` : `${game.team2} is likely to win`;
// console.log(winner)


//Challenge 2 



// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,   // 0 is a FAlSY value
// };
// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// // OR assignment operator
// // rest1.numGuests = rest1.numGuests || 10;   //Assigns if the value is FALSY
// // rest2.numGuests = rest2.numGuests || 10;

// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// //Nullish assignment operator
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// //And assignment operator
// // rest1.owner = rest1.owner && '<Anonymous>'  //If true, will show the second value
// // rest2.owner = rest2.owner && '<Anonymous>'
// rest1.owner &&= '<Anonymous>'
// rest2.owner &&= '<Anonymous>'


// console.log(rest1)
// console.log(rest2)

// // The Nullish coalescing operator
// restaurant.numGuests = 0; // falsy. will show 10
// const guests = restaurant.numGuests || 10;
// console.log(guests);    //23

// //Knowledge coalesing operator 
// //uses NULL and UNDFINED instead of FALSY
// const guestCorrect = restaurant.numGuests ?? 10; //almost the samw as ||
// console.log(guestCorrect)





// Shortcuiting




// console.log('----- OR -----');
// // Use ANY data type, return ANY data type, short-circutting
// console.log( 3 || 'Alex');  // 3
// console.log( '' || 'Alex'); // Alex
// console.log( true || 0 );   // true
// console.log( undefined || null);  // null



// console.log(undefined || 0 || '' || 'Hello' || 23 || null) //Hello  
// restaurant.numGuests = 0; // falsy. will show 10
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1)      //23

// const guests2 = restaurant.numGuests || 10
// console.log(guests2)    //23


// console.log('----- AND -----');   //SHOWS FALSY VALUE


// console.log(0 && 'Alex'); // 0 = falsy
// console.log(7 && 'Alex'); //Alex        7 is true
// console.log(' Hello' && 23 && null && 'Alex');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// // 1) Destructurinig
// //Spread, because on Right side of = 
// const arr = [1, 2, ...[3, 4]];



// // Rest because on the left side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5]
// console.log(a, b, others)


// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood)



// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays)     // {thu: {???}, fri: {???}}

// // 2) Functions
// const add = function(...numbers) {
//   // console.log(numbers);
//   let sum = 0;
//   for(let i = 0; i < numbers.length; i++) 
//   // sum += numbers[i];
//   sum = sum + numbers[i];
//   console.log(sum)
// }
// add(2,3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);
// console.log(x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms')



// const arr = [7, 8, 9];
// const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArray);

// const newArr = [1, 2, ...arr]
// console.log(newArr)

// console.log(...newArr);
// console.log(1, 2, 7, 8, 9)

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu)

// //copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy)

// // join 2
// const joinTwo = [...restaurant.starterMenu, ...restaurant.mainMenu]
// console.log(joinTwo)


// Iterables are arrays, strings, maps, sets. NOT objects
// const str = 'Alex';
// const letters = [...str, ' ', 'S.'];
// console.log(letters)    // ['A', 'l', 'e', 'x', ' ', 'S.']
// console.log(...str);    // A l e x
 

// REal world Example
// const ingredients = [
//   prompt(`Let's make pasta! Ingredient 1?`), 
//   prompt(`Let's make pasta! Ingredient 2?`), 
//   prompt(`Let's make pasta! Ingredient 3?`),
// ];
// console.log(ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2])
// restaurant.orderPasta(...ingredients)


// Objects
// const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Jonas'};
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);


// DESTRUCTURING OBJECTS

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery ({ // Line 30
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// })

// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
// console.log(restaurantName, hours, tags)


// // Defaul values
// const { menu = [], starterMenu: starters = []} = restaurant     // [] sets defualt value
// console.log(menu, starters)





// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c: 14};

// ({a, b} = obj);   // skobki pomogayut s sintaksisom
// console.log(a, b)



// // Nested objects
// const {fri: {open: o, close: c}} = openingHours; // LINE 15/ Destructuring nested objects
// console.log(o, c)



// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// // console.log(a, b, c);
// console.log(arr);

// let [main, ,secondary] = restaurant.categories;
// console.log(main, secondary);


// Switching variables

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary)


// [main, secondary] = [secondary, main];
// console.log(main, secondary);


// // recieve 2 return values from a function
// console.log(restaurant.order(2, 0))
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse)



// Nested destructuring = array in an array

// const nested = [2, 4, [5, 6]];
// // const [i, ,j] = nested;    // we get 2, [5, 6]
// // console.log(i, j)

// const [i, , [j, k]] = nested;
// console.log(i, j, k);




// //Default values
// const [p = 1, q = 1, r = 1] = [8, 9];


// console.log(p, q, r);

// const tryArr = [1, 2, 3, 4, 5];

// const [s, t, , u, v] = tryArr;
// console.log(s, t, u, v)



// let age = prompt('Tell me your age');
// if (age > 35){
//   console.log(`You are old, dude????`)
// } else if( age < 35 && age > 25){
//   console.log(`You are still young, but not for long????`)
// } else{
//   console.log(`You young and fresh. Enjoy it`)
// }

// let [option1, option2] = restaurant.starterMenu;
// console.log(option1, option2);

// [option1, option2] = [option2, option1];
// console.log(option1, option2)



// const randomNum = [12, 21, 34, 55553, 53, 23, 47,]

// const findNum = function(arr) {
//   let max = arr[0];
//   for( let i = 0; i < arr.length; i++) {
//     let array = arr[i]
//     if(array > max) max = array
//   } console.log(max)
// }
// const check = findNum(randomNum)

// const numbers = [23,133, 5234, 553, 7756]

// const big = function(arr) {
//   let max = arr[0]
//   let min = arr[0]
//   for(let i = 0; i < arr.length; i++) {
//     const array = arr[i]
//     if(array > max) max = array
//     if( array < min) min = array
//   } console.log(min, max)
// }
// const check = big(numbers)