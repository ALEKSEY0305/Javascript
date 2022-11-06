'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
  }
};



// 1) Destructurinig
//Spread, because on Right side of = 
const arr = [1, 2, ...[3, 4]];



// Rest because on the left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5]
console.log(a, b, others)


const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood)



// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays)     // {thu: {…}, fri: {…}}

// 2) Functions




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
//   console.log(`You are old, dude😂`)
// } else if( age < 35 && age > 25){
//   console.log(`You are still young, but not for long👀`)
// } else{
//   console.log(`You young and fresh. Enjoy it`)
// }

// let [option1, option2] = restaurant.starterMenu;
// console.log(option1, option2);

// [option1, option2] = [option2, option1];
// console.log(option1, option2)



