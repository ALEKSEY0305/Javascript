// Scope va context

// scope - variable   
// let a = 7;  // Third priority
// let b = 13;

// function hisoblash(a, b)
function hisoblash(a) { // Second priority
  const c = a + b;      // First priority
  console.log(c);
}

// hisoblash(7, 13);  // console: 20 // uses function data (a + b) (7)
// console.log(c)  // can't access function variable  //console: Uncaught ReferenceError

hisoblash(12); // console: 25 // function can use external variables (Second priority)



//////////////////////////////////////////////////////////////////////////////////////

// context - object

const person1 = {
  ism: 'hamid',
  yosh: 29,
  millat: 'uzbek',
  salom_bering(){
    console.log('assalomu alaykum');
  },
  hayrlashing() {
    console.log('salomat boling');
  },
  tonishtiring() {
    // function get_ism() {    // console. undefined   // COMPARE WITH line 42
    //   const name = person1.ism; // 'this' refers to get_ism function(35)
    //   console.log(name);      // this cannot work with functions. Only with objects
    // }
    
    const action = () => {  // can work because arrow function doesn't mutate the values of 'this'
      console.log(this);  // REFERS TO the 'person' object
      const name = this.ism;  
      console.log(name);  // console: "mening ismim hamid va mening millatim uzbek"
    }
    // action()
    // get_ism();    // console: undefined
    console.log(`mening ismim ${this.ism} va mening millatim ${this.millat}`);
  } // this refers to 'person' object
};

console.log(person1.tonishtiring());  //console: "mening ismim hamid va mening millatim uzbek"


// oddiy, anonim, arrow

// !!!IMPORTANT. oddiy and anonim functions attaches(mutate) the value of 'this' to themselves(functions).

// !!!IMPORTANT. Arrow functions don't affect the original value of 'this' keyword.
