
  
  class Car {
    maxSpeed = `Driving on the MAX speed and FLEXING`;
    speed = 'Going fasterrrrrrr'

      constructor(brand) {
        this.brand = brand;
        
      }
      ignite() {
       console.log(`The ${this.brand} is ready to rocket`)
      }
      brake() {
        console.log(`The ${this.brand} is slowing down`)
      }
      goMaxSpeed() {
        console.log(`${this.maxSpeed}`)
      }
      speeding() {
        console.log(`${this.speed}`)
      }
    }

  class Bugatti extends Car {
    constructor(brand, model, color, mileage, wisdom) {
      super(brand)
      this.model = model;
      this.color = color;
      this.mileage = mileage;
      this.wisdom = wisdom
    }
    showMileage() {
        console.log(`This ${this.model} has gone ${this.mileage} kilometers`)
    }

    changeColor() {
        console.log(`This ${this.model} is turning ${this.color}🚗`)
    }
    giveWiseTip() {
        console.log(`This ${this.model} is good, but ${this.model} says that ${this.wisdom} is the best🚙`)
    }
  }
  const bugatti = new Bugatti('Bugatti', 'Chiron', 'red', 10_000, 'Porsche')
          

 bugatti.ignite();
 bugatti.goMaxSpeed();
 bugatti.speeding();
 bugatti.brake();
 bugatti.showMileage();
 bugatti.changeColor();
 bugatti.giveWiseTip()

  
  
  
  

  // const Car = function(make, speed) {
//     this.make = make;
//     this.speed = speed
// }
// Car.prototype.accelerate = function() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`)
// }
// Car.prototype.brake = function() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`)
// }

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);
// bmw.accelerate()
// bmw.accelerate()
// bmw.brake()
// bmw.accelerate()