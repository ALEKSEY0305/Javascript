

// let id = Symbol('id');
// let firstPart = 'likes';
// let userInfo = {
//     name: 'Alex',        // identificaator 
//     age: 27,            // in case of adding another key
//     // [firstPart]: true,
//     // 0: 12,
//     // [id]: 'meaning'  ,   // symbols don't appear in loops.   system symbols
//     // address: {
//     //     city: 'Busan',
//     //     street: 'Heundae',
//     // }
// };

// userInfo.hobby = 'hiking';
// console.log(userInfo)

// delete userInfo.age;
// // console.log(userInfo)

// userInfo.hobby = 'running'
// console.log(userInfo)

// // let usera = userInfo;
// // console.log(usera)
// // usera.hobby = 'you'

// console.log(userInfo)
// console.log(userInfo);
// console.log(userInfo.name);
// console.log(userInfo['name']);  
// console.log(userInfo['likes']);
// console.log(userInfo[firstPart]);
// console.log(userInfo[0])
// console.log(userInfo['0'])
// console.log(userInfo.address);
// console.log(userInfo.address.city);

// function make(name, age) {
//     return {
//         name,
//         age,
//         'js': true
//     };
// }
// let user = make('Alex, 28')
// // console.log(user)

// let usera = Object.assign({}, userInfo);
// usera.age = 22;


// console.log(userInfo)
// console.log(usera)


// // [] advantages.       can access the values of objects
// let key = 'name';
// console.log(userInfo[key]);     // Alex
// // console.log(userInfo.key);     // undefined



// // can use any word in objects(reserved words)




class Car {
    constructor(brand) {
      this.brand = brand;
      this.gasTank = 100;
      this.gasStation = [];
      this.onWay = [];
      
    }
    getGas() {
      this.gasTank += 10
      const stamp = Date.now();
      const time = new Date(stamp);
      this.gasStation.push(time.toString());
      return this.gasTank
    }
    drive() {
      this.gasTank -= 10;
      const stamp = Date.now();
      const time = new Date(stamp);
      this.onWay.push(time.toString());
      return this.gasTank
    }
    
  }
class HybridCar extends Car {
  constructor(brand, model) {
    super(brand)
    this.model = model;
  }
  autoPark() {
    console.log('Auto parking!')
  }
}
const lexus = new HybridCar('Lexus', 'RX')
const bmw = new HybridCar('BMW', 'E6')    
const nissan = new Car('Nissan')
const tesla = new Car('Tesla')
  
  
nissan.drive()
nissan.drive()
nissan.getGas()
console.log(nissan)


tesla.drive();
tesla.drive();
tesla.drive();
console.log(tesla)

console.log(tesla)

lexus.drive()
lexus.drive()
lexus.drive()
console.log(lexus.autoPark())
console.log(lexus)

bmw.drive()
bmw.drive()
bmw.drive()
bmw.drive()
console.log(bmw)





///////////////////////////////////////////////////////
// Optional Chaining
const auto = null
  // brand: 'Tesla',
  // model: 'ModelX',
  // details: {
  //   color: 'Red',
  //   year: 2021,
  //   atStock: true,
  // }
  
  //
  // drive() {
  //   console.log(('rrrrrrrr'))
  // }
// }

// const cars = [auto];

// cars.forEach(car => {
//   console.log(`${car.brand} ${car.details?.year}: color - ${car.details?.color}`)
// })

// Optional Chaining precvents app failures
// helps when there is no data in the object or method
console.log(auto?.drive?.())
// console.log(auto?.['brand'])
